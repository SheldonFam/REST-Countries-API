import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  return (
    <header className="bg-white flex items-center h-20 shadow-shadow">
      <nav className="flex justify-between items-center w-screen px-7 md:px-20">
        <h1 className="font-Nunito font-bold text-xl md:text-2xl">
          Where in the world?
        </h1>
        <button className="flex justify-between">
          <DarkModeIcon />
          <p className="pl-1 md:pl-2.5 font-normal text-base">Dark Mode</p>
        </button>
      </nav>
    </header>
  );
};

export default Header;
