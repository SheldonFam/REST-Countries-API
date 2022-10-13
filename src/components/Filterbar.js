import React from "react";

const Filterbar = ({ handleFilter }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div>
      <select name="Filter By Region" id="" onChange={handleFilter}>
        <option value="none" hidden={true}>
          Filter by Region
        </option>
        <option value="all">All</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filterbar;
