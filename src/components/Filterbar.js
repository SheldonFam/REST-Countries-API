import React from "react";

const Filterbar = (props) => {
  const regionList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div>
      <select name="Filter By Region" id="" onChange={props.filterRegion}>
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
    </div>
  );
};

export default Filterbar;
