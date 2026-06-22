import React, { useEffect, useState } from "react";

//Import helper components
import WatchlistSearchBar from "./WatchList-searchbar.jsx";
import StockItem from "./WatchList-stockListItem.jsx";
import OrderModal from "./OrderWindow.jsx";

//Dummy data
import { stocks } from "../data/WatchListData.js";
import { DoughnutGraph } from "../graphs/DoughnutGraph.jsx";

const WatchList = () => {
  const [activeStockId, setActiveStockId] = useState(null);
  const [activeOrder, setActiveOrder] = useState(null);


  const handleRowClick = (id) => {
    // If tapping the same row, close it. Otherwise, open the tapped row.
    setActiveStockId(activeStockId === id ? null : id);
  };

  const labels = stocks.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: 'Price of stocks',
        data: stocks.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
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
      <div className="w-[100%] max-h-[50vh] flex justify-center">
        <DoughnutGraph data={data} />
      </div>


    </div>
  );
};
export default WatchList;







