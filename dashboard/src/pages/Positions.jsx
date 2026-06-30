import { useState, useEffect} from "react";
import apiClient from "../utils/apiClient.js";

const Positions = () => {

  const [positions, setPositions] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const resp = await apiClient.get('/portfolio/positions');
        setPositions(resp.data);
      } catch (err) {
        console.log(`Error in fetching positions data : ${err}`);
      } finally {
        setIsloading(false);
      }
    }

    fetchPositions();
  }, []);

  // Calculate overall Total P&L (Mark-to-Market)
  const totalPnL = positions.reduce((acc, curr) => acc + curr.pnl, 0);
  const isTotalProfit = totalPnL >= 0;
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 bg-white rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-500 font-medium">Loading portfolio data...</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">

      {/* 1. Header */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Positions ({positions.length})
      </h3>

      {/* 2. Positions Table */}
      <div className="overflow-x-auto mb-6 border border-gray-200 rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Instrument</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Qty.</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Avg.</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">LTP</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">P&L</th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Chg.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {positions.map((pos) => {
              const isProfit = pos.pnl >= 0;
              const isChgUp = pos.chg >= 0;

              return (
                <tr key={pos.id} className="hover:bg-gray-50 transition-colors">

                  {/* Product Badge */}
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${pos.product === 'MIS' ? 'bg-orange-50 text-orange-600' : 'bg-purple-50 text-purple-600'
                      }`}>
                      {pos.product}
                    </span>
                  </td>

                  {/* Instrument */}
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-bold text-gray-800">
                    {pos.instrument}
                  </td>

                  {/* Quantity */}
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 text-right">
                    {pos.qty}
                  </td>

                  {/* Average Price */}
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 text-right">
                    ₹{pos.avg.toFixed(2)}
                  </td>

                  {/* Last Traded Price (LTP) */}
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 text-right">
                    ₹{pos.ltp.toFixed(2)}
                  </td>

                  {/* P&L (Dynamic Color) */}
                  <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium text-right ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
                    {isProfit ? '+' : ''}{pos.pnl.toFixed(2)}
                  </td>

                  {/* Change % (Dynamic Color) */}
                  <td className={`px-4 py-4 whitespace-nowrap text-sm font-medium text-right ${isChgUp ? 'text-green-600' : 'text-red-600'}`}>
                    {isChgUp ? '+' : ''}{pos.chg.toFixed(2)}%
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 3. Total MTM Summary */}
      <div className="flex justify-end items-center pt-4 border-t border-gray-200">
        <div className="text-right">
          <p className="text-sm text-gray-500 font-medium mb-1">Total P&L (MTM)</p>
          <h4 className={`text-2xl font-bold ${isTotalProfit ? 'text-green-600' : 'text-red-600'}`}>
            {isTotalProfit ? '+' : ''}₹{totalPnL.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </h4>
        </div>
      </div>

    </div>
  );
};

export default Positions; 