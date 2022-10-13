import React from "react";

const Country = ({ name, capital, population, image, region }) => {
  return (
    <div className="country-card">
      <div className="country-image">
        <img src={image} alt="" />
      </div>
      <div className="country-info">
        <h3 className="country-info-heading">{name}</h3>
        <ul>
          <li>Population: {population}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </div>
    </div>
  );
};

export default Country;