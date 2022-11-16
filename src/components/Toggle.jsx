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
          className="flex flex-row items-center font-normal text-base text-white"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <FaRegSun className="mr-1" />
          Light Mode
        </button>
      ) : (
        <button
          className="flex flex-row items-center font-normal text-base"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiOutlineMoon className="mr-1" />
          Dark Mode
        </button>
      )}
    </div>
  );
};

export default Toggle;
