import React, { useState, useEffect, useMemo } from "react";
import { getCalculatedHoldings } from "../utils/calculateHoldings.js";
import axios from 'axios';

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Declare the async function INSIDE the useEffect
    const fetchHoldings = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/portfolio/holdings',{
          withCredentials:true
        });
        // 2. Only store the raw data in state
        setHoldings(response.data);
      } catch (err) {
        // Don't leave catch blocks empty! At least log it so you can debug.
        console.error("Error fetching holdings:", err);
      } finally {
        // Stop the loading spinner whether it succeeded or failed
        setIsLoading(false);
      }
    };

    // 3. Call the function
    fetchHoldings();
  }, []);

  // 4. Derive the calculated holdings dynamically. 
  // useMemo ensures this math only runs when 'holdings' actually changes.
  const calculatedHoldings = useMemo(() => {
    return getCalculatedHoldings(holdings);
  }, [holdings]);

  // Calculate overall portfolio totals
  const totalInvestment = calculatedHoldings.reduce((acc, curr) => acc + (curr.totalInvested || 0), 0);
  const currentTotalValue = calculatedHoldings.reduce((acc, curr) => acc + (curr.curVal || 0), 0);
  const totalPnL = currentTotalValue - totalInvestment;
  
  // Protect against NaN (0/0) before the data loads
  const totalPnLPercent = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  // 5. Show a loading state while fetching from Yahoo/MongoDB
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 bg-white rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-500 font-medium">Loading portfolio data...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
      
      {/* 1. Header */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Holdings ({calculatedHoldings.length})
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
                    {isProfit ? '+' : ''}{(stock.netChgPercent || 0).toFixed(2)}%
                  </td>
                  
                  {/* Day Change Column - Colored */}
                  <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium text-right ${isDayUp ? 'text-green-600' : 'text-red-600'}`}>
                    {isDayUp ? '+' : ''}{(stock.dayChg || 0).toFixed(2)}%
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