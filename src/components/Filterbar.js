import React from "react";

const Filterbar = (props) => {
  const regionList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <>
      <select
        name="Filter By Region"
        id=""
        onChange={props.filterRegion}
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-52 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
    </>
  );
};

export default Filterbar;
