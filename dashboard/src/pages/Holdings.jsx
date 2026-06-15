import React from "react";
import { holdings , getCalculatedHoldings } from "../data/HoldingsData.js";

const Holdings = () => {
  const calculatedHoldings = getCalculatedHoldings();

  // Calculate overall portfolio totals
  const totalInvestment = calculatedHoldings.reduce((acc, curr) => acc + curr.totalInvested, 0);
  const currentTotalValue = calculatedHoldings.reduce((acc, curr) => acc + curr.curVal, 0);
  const totalPnL = currentTotalValue - totalInvestment;
  const totalPnLPercent = (totalPnL / totalInvestment) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
      
      {/* 1. Header */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Holdings ({holdings.length})
      </h3>

      {/* 2. Holdings Table */}
      <div className="overflow-x-auto mb-8 border border-gray-200 rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Instrument</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Qty.</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Avg. cost</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">LTP</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Cur. val</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">P&L</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Net chg.</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Day chg.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {calculatedHoldings.map((stock) => {
              const isProfit = stock.pnl >= 0;
              const isDayUp = stock.dayChg >= 0;

              return (
                <tr key={stock.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-bold text-gray-800">{stock.instrument}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 text-right">{stock.qty}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 text-right">₹{stock.avgCost.toFixed(2)}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 text-right">₹{stock.ltp.toFixed(2)}</td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-right">₹{stock.curVal.toFixed(2)}</td>
                  
                  {/* P&L Column - Colored */}
                  <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium text-right ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
                    {isProfit ? '+' : ''}{stock.pnl.toFixed(2)}
                  </td>
                  
                  {/* Net Change Column - Colored */}
                  <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium text-right ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
                    {isProfit ? '+' : ''}{stock.netChgPercent.toFixed(2)}%
                  </td>
                  
                  {/* Day Change Column - Colored */}
                  <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium text-right ${isDayUp ? 'text-green-600' : 'text-red-600'}`}>
                    {isDayUp ? '+' : ''}{stock.dayChg.toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 3. Portfolio Summary Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
        
        {/* Total Investment */}
        <div className="flex flex-col">
          <h5 className="text-xl font-bold text-gray-800">
            ₹{totalInvestment.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </h5>
          <p className="text-sm text-gray-500 font-medium">Total investment</p>
        </div>

        {/* Current Value */}
        <div className="flex flex-col">
          <h5 className="text-xl font-bold text-gray-800">
            ₹{currentTotalValue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </h5>
          <p className="text-sm text-gray-500 font-medium">Current value</p>
        </div>

        {/* Overall P&L */}
        <div className="flex flex-col">
          <h5 className={`text-xl font-bold ${totalPnL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {totalPnL >= 0 ? '+' : ''}₹{totalPnL.toLocaleString('en-IN', { minimumFractionDigits: 2 })} 
            <span className="text-sm ml-2 opacity-80">
              ({totalPnL >= 0 ? '+' : ''}{totalPnLPercent.toFixed(2)}%)
            </span>
          </h5>
          <p className="text-sm text-gray-500 font-medium">Total P&L</p>
        </div>

      </div>
    </div>
  );
};

export default Holdings;