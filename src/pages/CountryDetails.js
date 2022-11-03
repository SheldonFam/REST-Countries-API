import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const CountryDetails = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  let { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${name}`
        );
        const data = await response.json();
        setCountries(data);
        setIsLoading(false);
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
      {isLoading ? (
        <Loading />
      ) : (
        <main className="px-7 py-12 lg:px-20 lg:py-12 bg-veryLightGray h-screen">
          <button
            className="w-[136px] p-2 bg-white shadow-shadow mb-20"
            onClick={goBack}
          >
            Back
          </button>
          <section>
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-32"
              >
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
                  <div className="flex flex-col gap-y-10 lg:flex-row gap-x-10 mb-10">
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
                        {country.tld[0]}
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
                        {Object.values(country.languages)
                          .map((val) => val)
                          .join(",")}
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col lg:flex-row  gap-x-2">
                    <p>
                      <span className="font-bold">Border Countries:</span>
                    </p>
                    <div className="grid grid-cols-3 gap-4">
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
      )}
    </>
  );
};

export default CountryDetails;
