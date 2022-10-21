import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";

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

  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <main className="mx-20 my-12">
        <button
          className="w-[136px] p-2 bg-white shadow-shadow mb-20"
          onClick={goBack}
        >
          Back
        </button>
        {countries.map((country, index) => (
          <section key={index} className="flex flex-row justify-between">
            <div className="w-[600px] h-[400px]">
              <img
                className="w-full h-full object-cover"
                src={country.flags.svg}
                alt=""
              />
            </div>
            <div className="flex flex-col font-Nunito w-[600px]">
              <h2 className="font-bold">{country.name.common}</h2>
              <div className="flex flex-row">
                <ul className="">
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
                  <li>Capital:{country.capital}</li>
                </ul>
                <ul className="">
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
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default CountryDetails;
