import React from "react";

const Filterbar = (props) => {
  const regionList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <select
      name="filterbar"
      onChange={props.filterRegion}
      className="border-lightModeBackground shadow-md text-lightModeText dark:text-white text-sm rounded-lg w-52 p-4 md:p-2 bg-white dark:bg-darkModeElements transition-all"
    >
      <option value="none" hidden={true}>
        Filter by Region
      </option>
      <option value="">All</option>
      {regionList.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default Filterbar;
