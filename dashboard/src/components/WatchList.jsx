import React, { useState } from "react";

//Import helper components
import WatchlistSearchBar from "./WatchList-searchbar.jsx";
import StockItem from "./WatchList-stockListItem.jsx";
import OrderModal from "./OrderWindow.jsx";

//Dummy data
import { stocks } from "../data/WatchListData.js";

const WatchList = () => {
  const [activeStockId, setActiveStockId] = useState(null);
  const [activeOrder, setActiveOrder] = useState(null);
  const handleRowClick = (id) => {
    // If tapping the same row, close it. Otherwise, open the tapped row.
    setActiveStockId(activeStockId === id ? null : id);
  };
  return (
    // Outer container: Full height of its parent, flex column
    <div className="flex flex-col h-[calc(100vh-60px)] bg-white">

      {/* 1. Fixed Search Bar Area */}
      <WatchlistSearchBar stocks={stocks} />

      {activeOrder && (
        <OrderModal
          stockName={activeOrder.name}
          currentLtp={activeOrder.ltp}
          type={activeOrder.type}
          onClose={() => setActiveOrder(null)}
          onOrderPlaced={() => {
            console.log("Order placed! You can fetch fresh watchlist data here.");
          }}
        />
      )}

      {/* 2. Scrollable Stock List Area */}
      {/* overflow-y-auto ensures the list scrolls inside the container if it gets too long */}
      <ul className="flex-grow overflow-y-auto">
        {stocks.map((stock) => {
          const isActive = activeStockId === stock.id;
          return (
            <StockItem handleRowClick={handleRowClick} stock={stock} isActive={isActive} onOpenModal={setActiveOrder} />
          )
        })}
      </ul>
    </div>
  );
};
export default WatchList;







