import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function PriceAndPercentage({isActive, stock}) {
  return <div className={`flex items-center space-x-3 md:group-hover:hidden ${isActive ? 'hidden md:flex' : ''}`}>
    <span className={`flex items-center text-xs font-medium ${stock.isUp ? "text-green-500" : "text-red-500"}`}>
      {stock.isUp ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
      {Math.abs(stock.percent)}%
    </span>
    <span className="text-sm font-medium text-gray-600">
      {stock.price.toFixed(2)}
    </span>
  </div>;
}


export default PriceAndPercentage;