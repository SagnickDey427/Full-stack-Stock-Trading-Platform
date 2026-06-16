const getCalculatedHoldings = (holdings) => {
    return holdings.map(stock => {
        const curVal = stock.qty * stock.ltp;
        const totalInvested = stock.qty * stock.avgCost;
        const pnl = curVal - totalInvested;
        const netChgPercent = (pnl / totalInvested) * 100;
        return { ...stock, curVal, totalInvested, pnl, netChgPercent };
    });
};

export {getCalculatedHoldings};