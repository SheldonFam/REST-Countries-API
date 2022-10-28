import React from "react";
import { Link } from "react-router-dom";

const Country = ({ countries }) => {
  const { name, capital, population, flags, region, cca3 } = countries;
  return (
    <div className="flex-col bg-white shadow min-h-30 rounded-lg">
      <Link to={`/${cca3}`}>
        <div className="w-full h-[160px] rounded-lg">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={flags.svg}
            alt={name.common}
          />
        </div>
      </Link>
      <div className="font-Nunito text-left">
        <h3 className="font-bold px-7 py-6 text-lg">{name.common}</h3>
        <ul className="text-base px-7">
          <li>
            <strong className="font-bold">Population:</strong> {population}
          </li>
          <li>
            <strong>Region: </strong>
            {region}
          </li>
          <li>
            <strong>Capital: </strong>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
