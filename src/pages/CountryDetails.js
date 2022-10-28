import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CountryDetails = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  let { name } = useParams();
  console.log(name);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${name}`
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
      <main className="px-20 py-12 bg-veryLightGray">
        <button
          className="w-[136px] p-2 bg-white shadow-shadow mb-20"
          onClick={goBack}
        >
          Back
        </button>
        <section>
          {countries.map((country, index) => (
            <div key={index} className="flex flex-row justify-between gap-x-32">
              <div className="w-full max-w-560 max-h-400">
                <img
                  className="w-full h-full object-cover"
                  src={country.flags.svg}
                  alt={country.name.common}
                />
              </div>
              <div className="flex flex-col font-Nunito w-full">
                <h2 className="font-bold mt-12 mb-11 text-3xl">
                  {country.name.common}
                </h2>
                <div className="flex flex-row gap-x-10 mb-10">
                  <ul>
                    <li className="text-base pb-2">
                      <span className="font-bold">Native Name:</span>
                      {
                        country.name.nativeName[
                          Object.keys(country.name.nativeName)[0]
                        ].official
                      }
                    </li>
                    <li className="text-base pb-2">
                      <span className="font-bold">Population:</span>
                      {country.population}
                    </li>
                    <li className="text-base pb-2">
                      <span className="font-bold">Region:</span>
                      {country.region}
                    </li>
                    <li className="text-base pb-2">
                      <span className="font-bold">SubRegion:</span>
                      {country.subregion}
                    </li>
                    <li className="text-base pb-2">
                      <span className="font-bold">Capital:</span>
                      {country.capital}
                    </li>
                  </ul>
                  <ul className="">
                    <li className="text-base pb-2">
                      <span className="font-bold">Top Level Domain:</span>
                      {country.tld}
                    </li>
                    <li className="text-base pb-2">
                      <span className="font-bold"> Currencies:</span>
                      {
                        country.currencies[Object.keys(country.currencies)[0]]
                          .name
                      }
                    </li>
                    <li className="text-base pb-2">
                      <span className="font-bold">Language:</span>
                      {country.languages[Object.keys(country.languages)[0]]}
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  <p>
                    <span className="font-bold">Border Countries:</span>
                  </p>
                  <div className="flex flex-row gap-x-2">
                    {country.borders
                      ? country.borders.map((border, index) => (
                          <Link to={`/${border}`} key={index}>
                            <div className="py-2 px-8 border-solid shadow-shadow">
                              {border}
                            </div>
                          </Link>
                        ))
                      : "-"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default CountryDetails;
