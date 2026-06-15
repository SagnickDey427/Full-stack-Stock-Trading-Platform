import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function WatchlistSearchBar({stocks}) {
  return <div className="flex items-center px-4 py-3 border-b border-gray-200">
    <div className="flex items-center flex-grow bg-gray-50 border border-gray-200 rounded-md px-3 py-1.5 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
      <SearchIcon fontSize="small" className="text-gray-400" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search eg: infy, bse, nifty fut..."
        className="bg-transparent border-none outline-none text-sm ml-2 w-full text-gray-700 placeholder-gray-400" />
    </div>
    <span className="text-xs text-gray-400 font-medium ml-4 whitespace-nowrap">
      {stocks.length} / 50
    </span>
  </div>;
}

export default WatchlistSearchBar;