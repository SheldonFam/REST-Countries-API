import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CountryDetails = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  let { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryData();
  }, [name]);

  // const goBack = () => {
  //   navigate("/");
  // };

  return (
    <main>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      {countries.map((country, index) => {
        return (
          <>
            <div key={index}>
              <img src={country.flags.svg} alt="" />
            </div>
            <section>
              <h2>Name:{country.name.common}</h2>
              <div className="details">
                <ul className="left">
                  <li>
                    Native Name:
                    {
                      country.name.nativeName[
                        Object.keys(country.name.nativeName)[0]
                      ].official
                    }
                  </li>
                  <li>Population:{country.population}</li>
                  <li>Region:{country.region}</li>
                  <li>SubRegion:{country.subregion}</li>
                </ul>
                <ul className="right">
                  <li>Capital:{country.capital}</li>
                  <li>Top Level Domain:{country.tld}</li>
                  <li>
                    Currencies:
                    {
                      country.currencies[Object.keys(country.currencies)[0]]
                        .name
                    }
                  </li>
                  <li>
                    Language:
                    {country.languages[Object.keys(country.languages)[0]]}
                  </li>
                </ul>
              </div>
              <div>
                <p>Border Countries:</p>
                {country.borders
                  ? country.borders.map((country, index) => (
                      <Link to={`/${country.toLowerCase()}`}>
                        <div className="badge" key={index}>
                          {country}
                        </div>
                      </Link>
                    ))
                  : "-"}
              </div>
            </section>
          </>
        );
      })}
    </main>
  );
};

export default CountryDetails;
