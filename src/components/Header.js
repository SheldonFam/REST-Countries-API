import React from "react";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <header className="flex items-center h-20 text-base md:text-2xl bg-white dark:bg-darkModeElements transition-all shadow-inner">
      <nav className="flex justify-between items-center w-screen px-6 md:px-20">
        <h1 className="font-Nunito font-bold dark:text-white">
          Where in the world?
        </h1>
        <Toggle />
      </nav>
    </header>
  );
};

export default Header;
