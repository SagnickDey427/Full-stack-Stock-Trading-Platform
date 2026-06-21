import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

//Port
const PORT = "http://localhost:3000/";

// Material UI Imports
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const TopBar = () => {
  const { logout } = useAuth();
  // State to manage the MUI Mobile Menu dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const navLinks = [
    { name: "Summary", path: PORT },
    { name: "Orders", path: PORT + "orders" },
    { name: "Holdings", path: PORT + "holdings" },
    { name: "Positions", path: PORT + "positions" },
    { name: "Funds", path: PORT + "funds" },
    { name: "Logout", path: "#", method: logout, isLogout: true },
  ];

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 shadow-sm w-full">

      {/* 1. Left Side: Market Indices */}
      <div className="flex items-center space-x-6 md:space-x-8">
        {/* NIFTY 50 Block */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2">
          <p className="text-sm font-bold text-gray-800">NIFTY 50</p>
          <div className="flex items-baseline space-x-1">
            <p className="text-sm font-medium text-green-600">{100.2}</p>
            <p className="text-xs text-green-500">(+0.15%)</p>
          </div>
        </div>

        {/* SENSEX Block */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2">
          <p className="text-sm font-bold text-gray-800">SENSEX</p>
          <div className="flex items-baseline space-x-1">
            <p className="text-sm font-medium text-green-600">{100.2}</p>
            <p className="text-xs text-green-500">(+0.15%)</p>
          </div>
        </div>
      </div>

      {/* 2. Right Side: Desktop Navigation (Hidden on Mobile) */}
      <nav className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => {
          if (link.isLogout) {
            return (<Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              onClick={link.method}

            >
              {link.name}
            </Link>)
          }
          return (<Link
            key={link.name}
            to={link.path}
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"

          >
            {link.name}
          </Link>)
        })}
      </nav>

      {/* 3. Right Side: Mobile Hamburger Menu (Hidden on Desktop) */}
      <div className="md:hidden">
        <IconButton
          aria-label="open mobile menu"
          aria-controls={open ? "mobile-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleMenuClick}
          edge="end"
        >
          <MenuIcon className="text-gray-800" />
        </IconButton>

        {/* MUI Menu Component */}
        <Menu
          id="mobile-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "menu-button",
          }}
          PaperProps={{
            style: { width: '200px' }, // Ensures the dropdown has a nice width
          }}
        >
          {navLinks.map((link) => (
            <MenuItem key={link.name} onClick={handleMenuClose}>
              <Link
                to={link.path}
                className="w-full text-gray-800 text-sm font-medium"
              >
                {link.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default TopBar;