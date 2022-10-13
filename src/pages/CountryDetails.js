import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CountryDetails = ({ countries }) => {
  const params = useParams();
  const navigate = useNavigate();

  let name;
  let image;
  let nativeName;
  let population;
  let region;
  let subRegion;
  let capital;

  countries.forEach((country) => {
    if (country.name === params.countryCode) {
      name = country.name.common;
      image = country.flags.svg;
      nativeName = country.nativeName;
      population = country.population;
      region = country.region;
      subRegion = country.subRegion;
      capital = country.capital;
    }
  });

  const goBack = () => {
    navigate("/");
  };

  return (
    <main>
      <button onClick={goBack}>Back</button>
      <div>
        <img src={image} alt="" />
      </div>
      <section>
        <h2>Name:{name}</h2>
        <div className="details">
          <ul className="left">
            <li>Native Name: {nativeName}</li>
            <li>Population:{population}</li>
            <li>Region:{region}</li>
            <li>SubRegion:{subRegion}</li>
          </ul>
          <ul className="right">
            <li>Capital:{capital}</li>
            <li>Top Level Domain</li>
            <li>Currencies</li>
            <li>Language</li>
          </ul>
        </div>
        <div>
          <p>Border Countries:</p>
        </div>
      </section>
    </main>
  );
};

export default CountryDetails;
