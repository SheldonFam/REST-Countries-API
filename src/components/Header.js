import React from "react";
import { useState } from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { FaRegSun } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("click");
  };

  return (
    <header
      className={`flex items-center h-20 shadow-shadow text-base md:text-2xl bg-white dark:bg-darkBlue ${
        darkMode && "dark"
      }`}
    >
      <nav className="flex justify-between items-center w-screen px-6 md:px-20">
        <h1 className="font-Nunito font-bold">Where in the world?</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? (
            <div className="flex flex-row items-center">
              <FaRegSun />
              <p className="pl-1 md:pl-2.5 font-normal text-base">Light Mode</p>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <HiOutlineMoon />
              <p className="pl-1 md:pl-2.5 font-normal text-base">Dark Mode</p>
            </div>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
