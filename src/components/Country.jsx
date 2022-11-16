import React from "react";
import { Link } from "react-router-dom";

const Country = ({ countries }) => {
  const { name, capital, population, flags, region, cca3 } = countries;
  return (
    <div className="flex-col min-h-30 rounded-lg bg-white dark:bg-darkModeElements transition-all shadow  trasition ease-in-out dekay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <Link to={`/${cca3}`}>
        <div className="w-full h-[160px] rounded-lg">
          <img
            className="w-full h-full object-cover rounded-t-lg"
            src={flags.svg}
            alt={name.common}
          />
        </div>
        <div className="font-Nunito text-left dark:text-white">
          <h1 className="font-bold px-7 py-6 text-lg">{name.common}</h1>
          <ul className="text-base pl-7">
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
      </Link>
    </div>
  );
};

export default Country;
