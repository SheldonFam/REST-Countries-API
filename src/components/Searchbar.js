import React from "react";

const Searchbar = (props) => {
  return (
    <div>
      <img src="" alt="" />
      <input
        type="text"
        id="name"
        placeholder="Search for a country..."
        onChange={(e) => props.searchCountry(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
