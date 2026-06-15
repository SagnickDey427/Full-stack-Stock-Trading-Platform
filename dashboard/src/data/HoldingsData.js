const holdings = [
    { id: 1, instrument: "INFY", qty: 50, avgCost: 1400.00, ltp: 1455.50, dayChg: 1.20 },
    { id: 2, instrument: "RELIANCE", qty: 20, avgCost: 2900.00, ltp: 2845.00, dayChg: -0.53 },
    { id: 3, instrument: "TCS", qty: 15, avgCost: 3800.00, ltp: 3912.25, dayChg: 0.85 },
    { id: 4, instrument: "HDFCBANK", qty: 100, avgCost: 1450.00, ltp: 1432.10, dayChg: -0.40 },
];

const getCalculatedHoldings = () => {
    return holdings.map(stock => {
        const curVal = stock.qty * stock.ltp;
        const totalInvested = stock.qty * stock.avgCost;
        const pnl = curVal - totalInvested;
        const netChgPercent = (pnl / totalInvested) * 100;
        return { ...stock, curVal, totalInvested, pnl, netChgPercent };
    });
};

export {holdings, getCalculatedHoldings};