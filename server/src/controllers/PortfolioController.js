const PositionModel = require('../models/PositionModel.js');
const HoldingsModel = require('../models/HoldingModel.js');

// 1. Import and instantiate Yahoo Finance exactly ONCE at the top
const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance();

const getPositions = async (req, res) => {
    try {
        const dbPositions = await PositionModel.find({owner:req.user});

        const hydratedPositions = await Promise.all(dbPositions.map(async (pos) => {
            try {
                // Optional: Add the '.NS' appender logic here for Indian stocks
                let querySymbol = pos.instrument;
                if (!querySymbol.includes(' ') && !querySymbol.includes('.')) {
                    querySymbol = `${querySymbol}.NS`;
                }

                const quote = await yahooFinance.quote(querySymbol);
                const liveLtp = quote.regularMarketPrice;
                const liveChg = quote.regularMarketChangePercent;
                const calculatedPnl = (liveLtp - pos.avg) * pos.qty;
                
                return {
                    id: pos._id,
                    instrument: pos.instrument,
                    product: pos.product,
                    qty: pos.qty,
                    avg: pos.avg,
                    ltp: liveLtp,
                    chg: liveChg,
                    pnl: calculatedPnl
                };
            } catch (err) {
                console.error(`Failed to fetch live position data for ${pos.instrument}`);
                return { ...pos.toObject(), ltp: 0, chg: 0, pnl: 0, error: "Live data unavailable" };
            }
        }));
        
        return res.json(hydratedPositions);
    } catch (err) {
        // Fixed: changed 'error.message' to 'err.message'
        return res.status(500).json({ message: "Failed to load positions", error: err.message });
    }
}

const getHoldings = async (req, res) => {
    try {
        const dbHoldings = await HoldingsModel.find({owner:req.user});

        const hydratedHoldings = await Promise.all(dbHoldings.map(async (hld) => {
            try {
                // Optional: Add the '.NS' appender logic here for Indian stocks
                let querySymbol = hld.instrument;
                if (!querySymbol.includes(' ') && !querySymbol.includes('.')) {
                    querySymbol = `${querySymbol}.NS`;
                }

                const quote = await yahooFinance.quote(querySymbol);
                const liveLtp = quote.regularMarketPrice;
                
                // Fixed: use 'hld.qty' instead of 'pos.qty'
                const calculatedCurVal = liveLtp * hld.qty; 
                
                return {
                    id: hld._id,             // Fixed: use hld._id
                    instrument: hld.instrument, // Fixed: use hld.instrument
                    qty: hld.qty,            // Fixed: use hld.qty
                    avgCost: hld.avgCost,    // Fixed: matches Holdings schema
                    ltp: liveLtp,
                    curVal: calculatedCurVal, // Fixed: properly mapped to curVal
                    dayChg: quote.regularMarketChangePercent // Fetches actual day change %
                };
            } catch (err) {
                console.error(`Failed to fetch live holding data for ${hld.instrument}`);
                return { ...hld.toObject(), ltp: 0, curVal: 0, dayChg: 0, error: "Live data unavailable" };
            }
        }));
        
        return res.json(hydratedHoldings);
    } catch (err) {
        // Fixed: changed 'error.message' to 'err.message'
        return res.status(500).json({ message: "Failed to load holdings", error: err.message });
    }
}

module.exports = { getPositions, getHoldings };