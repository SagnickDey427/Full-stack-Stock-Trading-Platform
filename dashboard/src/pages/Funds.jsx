import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useAuth} from '../context/AuthContext.jsx';
import AddFunds from "../components/AddFunds.jsx";

// A small helper component to keep the data rows clean and consistent
const DataRow = ({ label, value, highlighted = false, large = false }) => (
  <div className={`flex justify-between items-center py-3 border-b border-gray-100 last:border-none ${large ? 'mb-2' : ''}`}>
    <span className={`${large ? 'text-gray-700 font-medium text-base' : 'text-gray-500 text-sm'}`}>
      {label}
    </span>
    <span className={`${large ? 'text-xl font-bold' : 'text-sm font-medium'} ${highlighted ? 'text-blue-600' : 'text-gray-800'}`}>
      {value}
    </span>
  </div>
);

const Funds = () => {
  const {user} = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-6xl mx-auto pb-8">
      
      {/* 1. Top Action Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6 gap-4">
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-gray-800">Funds</h2>
          <p className="text-gray-500 text-sm mt-1">Instant, zero-cost fund transfers with UPI</p>
        </div>
        <div className="flex space-x-3 w-full sm:w-auto">
          <Link
            to="#"
            className="flex-1 sm:flex-none text-center bg-green-500 text-white px-6 py-2.5 rounded font-bold hover:bg-green-600 transition-colors shadow-sm" onClick={()=> setIsOpen(true)}
          >
            Add funds
          </Link>
          <Link
            to="#"
            className="flex-1 sm:flex-none text-center bg-blue-600 text-white px-6 py-2.5 rounded font-bold hover:bg-blue-700 transition-colors shadow-sm"
          >
            Withdraw
          </Link>
        </div>
      </div>
      {isOpen ? <AddFunds onClose={()=> setIsOpen(false)}/>: null}

      {/* 2. Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Column: Equity Account Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-800">Equity</h3>
          </div>

          {/* Primary Metrics */}
          <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
            <DataRow label="Available margin" value={`₹${user.funds}`} highlighted={true} large={true} />
            <DataRow label="Used margin" value="₹3,757.30" large={true} />
            <DataRow label="Available cash" value={`₹${user.funds}`} large={true} />
          </div>

          {/* Secondary Metrics */}
          <div className="px-2">
            <DataRow label="Opening Balance" value={`${user.funds}`} />
            <DataRow label="Payin" value="4064.00" />
            <DataRow label="SPAN" value="0.00" />
            <DataRow label="Delivery margin" value="0.00" />
            <DataRow label="Exposure" value="0.00" />
            <DataRow label="Options premium" value="0.00" />
            
            <div className="my-4 border-t border-gray-200"></div>
            
            <DataRow label="Collateral (Liquid funds)" value="0.00" />
            <DataRow label="Collateral (Equity)" value="0.00" />
            <DataRow label="Total Collateral" value="0.00" />
          </div>
        </div>

        {/* Right Column: Commodity Account Upsell / Empty State */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 flex flex-col items-center justify-center text-center min-h-[300px] md:min-h-full">
          <div className="bg-white p-4 rounded-full shadow-sm mb-4">
            {/* A simple SVG icon representing commodities/charts */}
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">Commodity Account</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-xs">
            You don't have a commodity account. Open one to start trading in MCX.
          </p>
          <Link
            to="#"
            className="bg-blue-600 text-white font-medium px-8 py-2.5 rounded hover:bg-blue-700 transition-colors shadow-sm"
          >
            Open Account
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Funds;