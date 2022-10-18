import { useState, useEffect } from "react";
import Country from "./Country";
import Loading from "./Loading";
import Searchbar from "./Searchbar";

const CountryList = () => {
  const URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

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

  const searchCountry = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const fileteredCountry = countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(fileteredCountry);
    } else {
      setFilteredResults(countries);
    }
  };

  return (
    <>
      <main>
        {isLoading && <Loading />}
        <Searchbar searchCountry={searchCountry} />
        <section className="container-block">
          {searchInput.length > 1
            ? filteredResults.map((country, index) => {
                return <Country countries={country} key={index} />;
              })
            : countries.map((country, index) => {
                return <Country countries={country} key={index} />;
              })}
        </section>
      </main>
    </>
  );
};

export default CountryList;
