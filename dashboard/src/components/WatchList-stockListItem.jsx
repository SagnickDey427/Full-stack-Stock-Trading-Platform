import React from "react";
import PriceAndPercentage from "./WatchList-pricePercentage.jsx";
import BuySellOptions from "./WatchList-buySellOptions.jsx";

function StockItem({handleRowClick, stock, isActive, onOpenModal}) {
  return <li
    onClick={() => handleRowClick(stock.id)}
    key={stock.id}
    // 'group' class is crucial here. It allows child elements to react when the parent li is hovered
    className="group relative flex items-center justify-between px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
  >
    {/* Left Side: Stock Name */}
    <span className={`text-sm font-bold ${stock.isUp ? "text-green-500" : "text-red-500"}`}>{stock.name}</span>

    {/* Right Side (Default State): Price and Percentage */}
    {/* group-hover:hidden makes this disappear when the user hovers over the row */}
    <PriceAndPercentage isActive={isActive} stock={stock}/>

    {/* Right Side (Hover State): Action Buttons */}
    {/* hidden group-hover:flex makes this appear ONLY when the row is hovered */}
    <BuySellOptions isActive={isActive} stockName={stock.name} currentltp={stock.price} onOpenModal={onOpenModal}/>
  </li>;
}

export default StockItem;