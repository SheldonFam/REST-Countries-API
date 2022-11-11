import React from "react";
import { ThemeContext } from "./themeContext";
import { HiOutlineMoon } from "react-icons/hi";
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
          <HiOutlineMoon className="text-white" />
          <p className="pl-1 md:pl-2.5 font-normal text-base text-white">
            Dark Mode
          </p>
        </button>
      ) : (
        <button
          className="flex flex-row items-center"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <FaRegSun />
          <p className="pl-1 md:pl-2.5 font-normal text-base">Light Mode</p>
        </button>
      )}
    </div>
  );
};

export default Toggle;
