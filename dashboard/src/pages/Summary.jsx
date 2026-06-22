import React from "react";
import { useAuth } from "../context/AuthContext";

const Summary = () => {
  const {user} = useAuth();
  // In a real application, you would pull this from your Authentication context/state
  const userName = user.username || "Sagnick";

  return (
    <div className="max-w-6xl mx-auto pb-8">
      
      {/* 1. Greeting Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Hi, {userName}!</h2>
        <div className="h-1 w-16 bg-blue-600 rounded mt-2"></div>
      </div>

      {/* 2. Summary Cards Grid */}
      {/* Uses a responsive grid: 1 column on mobile, 2 columns side-by-side on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* --- EQUITY CARD --- */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">Equity</h3>
            <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2.5 py-1 rounded-full">
              Margin
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-grow gap-6">
            {/* Primary Metric (Left) */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-800">₹{user.funds}</h3>
              <p className="text-sm text-gray-500 font-medium mt-1">Margin available</p>
            </div>

            {/* Vertical/Horizontal Divider */}
            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
            <div className="block sm:hidden w-full h-px bg-gray-200"></div>

            {/* Secondary Metrics (Right) */}
            <div className="flex-1 w-full space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Margins used</p>
                <span className="text-sm font-bold text-gray-800">0</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Opening balance</p>
                <span className="text-sm font-bold text-gray-800">₹3.74k</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- HOLDINGS CARD --- */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">Holdings <span className="text-gray-400 font-normal text-sm ml-1">(13)</span></h3>
            <span className="bg-purple-50 text-purple-600 text-xs font-bold px-2.5 py-1 rounded-full">
              Portfolio
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between flex-grow gap-6">
            {/* Primary Metric (Left) - Styled for Profit */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-green-600 flex items-baseline gap-2">
                ₹1.55k
                <small className="text-sm font-medium text-green-500 bg-green-50 px-2 py-0.5 rounded">
                  +5.20%
                </small>
              </h3>
              <p className="text-sm text-gray-500 font-medium mt-1">Total P&L</p>
            </div>

            {/* Vertical/Horizontal Divider */}
            <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
            <div className="block sm:hidden w-full h-px bg-gray-200"></div>

            {/* Secondary Metrics (Right) */}
            <div className="flex-1 w-full space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Current Value</p>
                <span className="text-sm font-bold text-gray-800">₹31.43k</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Investment</p>
                <span className="text-sm font-bold text-gray-800">₹29.88k</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Summary;