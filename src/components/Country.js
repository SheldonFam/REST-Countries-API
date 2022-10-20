import React from "react";
import { Link } from "react-router-dom";

const Country = ({ countries }) => {
  const { name, capital, population, flags, region } = countries;
  return (
    <div className="country-card">
      <Link key={name} to={`/${name.common.toLowerCase()}`}>
        <div className="country-image">
          <img src={flags.svg} alt="" />
        </div>
      </Link>
      <div className="country-info">
        <h3 className="country-info-heading">{name.common}</h3>
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
