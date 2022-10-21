import React from "react";
import { Link } from "react-router-dom";

const Country = ({ countries }) => {
  const { name, capital, population, flags, region } = countries;

  return (
    <div className="flex flex-col bg-white min-h-30 shadow-shadow">
      <Link to={`/${name.common.toLowerCase()}`}>
        <div className="w-full h-[160px]">
          <img
            className="w-full h-full object-cover"
            src={flags.svg}
            alt={name.common}
          />
        </div>
      </Link>
      <div className="font-Nunito pt-7 pb-7 px-6">
        <h3 className="font-bold mb-7 text-lg">{name.common}</h3>
        <ul className="text-base">
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
