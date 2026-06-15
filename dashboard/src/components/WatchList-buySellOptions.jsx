import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function BuySellOptions({isActive}) {
  return <div className={`items-center space-x-2 md:hidden md:group-hover:flex ${isActive ? 'flex' : 'hidden'}`}>
    <button className="bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-blue-600 transition">
      B
    </button>
    <button className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-red-600 transition">
      S
    </button>
    <button className="text-gray-400 hover:text-gray-800 transition">
      <BarChartIcon fontSize="small" />
    </button>
    <button className="text-gray-400 hover:text-red-500 transition">
      <DeleteForeverIcon />
    </button>
    <button className="text-gray-400 hover:text-gray-800 transition">
      <MoreHorizIcon fontSize="small" />
    </button>
  </div>;
}

export default BuySellOptions;