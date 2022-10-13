import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h1>Where in the world?</h1>
        <a href="#" className="theme">
          <DarkModeIcon />
          <p>Dark Mode</p>
        </a>
      </nav>
    </header>
  );
};

export default Header;
