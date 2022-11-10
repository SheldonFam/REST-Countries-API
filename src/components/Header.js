import React from "react";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <header
      className={`flex items-center h-20 shadow-shadow text-base md:text-2xl bg-white dark:bg-darkBlue 
      }`}
    >
      <nav className="flex justify-between items-center w-screen px-6 md:px-20">
        <h1 className="font-Nunito font-bold">Where in the world?</h1>
        <Toggle />
      </nav>
    </header>
  );
};

export default Header;
