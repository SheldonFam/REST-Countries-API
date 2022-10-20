import React from "react";

const Searchbar = (props) => {
  return (
    <div>
      <img src="" alt="" />
      <input
        type="text"
        id="name"
        placeholder="Search for a country..."
        onChange={props.searchCountry}
        value={props.value}
      />
    </div>
  );
};

export default Searchbar;
