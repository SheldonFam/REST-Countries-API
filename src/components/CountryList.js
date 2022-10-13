import { useState, useEffect } from "react";
import Country from "./Country";
import Loading from "./Loading";

//name,name.common
//population
//region
//capital
const CountryList = () => {
  const URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setCountries(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchCountry();
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="container-block">
          {countries.map((country, index) => {
            return (
              <Country
                key={index}
                name={country.name.common}
                capital={country.capital}
                population={country.population}
                image={country.flags.svg}
                region={country.region}
              />
            );
          })}
        </section>
      )}
    </main>
  );
};

export default CountryList;
