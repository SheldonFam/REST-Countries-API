import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  return (
    <header className="bg-white flex items-center h-20">
      <nav className="flex justify-between items-center w-screen px-20">
        <h1 className="font-Nunito font-bold text-2xl">Where in the world?</h1>
        <button className="flex justify-between">
          <DarkModeIcon />
          <p className="pl-2.5 font-normal text-base">Dark Mode</p>
        </button>
      </nav>
    </header>
  );
};

export default Header;
