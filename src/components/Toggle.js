import React from "react";
import { ThemeContext } from "./themeContext";
import { HiOutlineMoon } from "react-icons/hi";
import { FaRegSun } from "react-icons/fa";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <div className="flex flex-row items-center">
            <FaRegSun />
            <p className="pl-1 md:pl-2.5 font-normal text-base">Light Mode</p>
          </div>
        </button>
      ) : (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <div className="flex flex-row items-center">
            <HiOutlineMoon />
            <p className="pl-1 md:pl-2.5 font-normal text-base">Dark Mode</p>
          </div>
        </button>
      )}
    </div>
  );
};

export default Toggle;
