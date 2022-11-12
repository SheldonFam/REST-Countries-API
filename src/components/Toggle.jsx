import React from "react";
import { ThemeContext } from "./themeContext";
import { HiMoon } from "react-icons/hi";
import { FaRegSun } from "react-icons/fa";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <button
          className="flex flex-row items-center"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <FaRegSun className="text-white" />
          <p className="pl-1 md:pl-2.5 font-normal text-base text-white">
            Light Mode
          </p>
        </button>
      ) : (
        <button
          className="flex flex-row items-center"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiMoon />
          <p className="pl-1 md:pl-2.5 font-normal text-base">Dark Mode</p>
        </button>
      )}
    </div>
  );
};

export default Toggle;
