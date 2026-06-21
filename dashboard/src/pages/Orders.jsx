import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// Material UI Icons for a polished empty state
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const resp = await axios.get('http://localhost:3002/api/portfolio/orders',{withCredentials:true});
        setOrders(resp.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsloading(false);
      }
    }

    fetchOrders();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 bg-white rounded-lg shadow-sm border border-gray-200">
        <p className="text-gray-500 font-medium">Loading Orders history...</p>
      </div>
    )
  }

  // 1. EMPTY STATE: What renders if there are no orders
  if (orders?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[60vh] bg-white rounded-lg shadow-sm border border-gray-200">
        <ReceiptLongIcon className="text-gray-300 mb-4" style={{ fontSize: "64px" }} />
        <h2 className="text-xl font-bold text-gray-700 mb-2">No Orders Yet</h2>
        <p className="text-gray-500 mb-6 text-sm">You haven't placed any orders today.</p>
        <Link
          to={"/"}
          className="bg-blue-600 text-white font-medium px-6 py-2.5 rounded hover:bg-blue-700 transition-colors shadow-sm"
        >
          Get started
        </Link>
      </div>
    );
  }

  // 2. POPULATED STATE: The Transaction History Table
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

      {/* Header Section */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-800">Order History</h2>
        <p className="text-sm text-gray-500">View your past transactions and their status.</p>
      </div>

      {/* Table Section (Responsive wrapper) */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Table Head */}
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Instrument</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Qty.</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Avg. Price</th>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {orders?.map((order) => {
              const rawDate = order.createdAt;
              const timeOnly = new Date(rawDate).toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true // Sets it to AM/PM format
              });
              return (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">

                  {/* Date/Time */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {timeOnly}
                  </td>

                  {/* Stock Name */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-bold text-gray-800">{order.stock}</span>
                  </td>

                  {/* Buy/Sell Badge */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${order.type === "BUY"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                        }`}
                    >
                      {order.type}
                    </span>
                  </td>

                  {/* Quantity */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right">
                    {order.qty}
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-right">
                    ₹{order.price.toFixed(2)}
                  </td>

                  {/* Status Pill */}
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status === "COMPLETED"
                        ? "bg-green-100 text-green-800"
                        : order.status === "PENDING" ? "bg-yellow-400 text-orange-700" : "bg-red-100 text-red-800"
                        }`}
                    >
                      {order.status}
                    </span>
                  </td>

                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;