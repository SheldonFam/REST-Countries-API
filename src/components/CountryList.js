import { useState, useEffect } from "react";
import Country from "./Country";
import Loading from "./Loading";
import Searchbar from "./Searchbar";
import Filterbar from "./Filterbar";

const CountryList = () => {
  const URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectInput, setSelectInput] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setIsLoading(false);
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountry();
  }, []);

  const searchCountry = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredCountryByRegion = (e) => {
    setSelectInput(e.target.value);
  };

  useEffect(() => {
    const result = countries.filter(
      (country) =>
        (!searchInput ||
          country.name.common
            .toLowerCase()
            .includes(searchInput.toLowerCase())) &&
        (!selectInput || country.region === selectInput)
    );
    setFilteredResults(result);
  }, [searchInput, countries, selectInput]);

  return (
    <>
      <main className="mx-20 my-12">
        <div className="flex justify-between mb-12">
          <Searchbar searchCountry={searchCountry} value={searchInput} />
          <Filterbar
            filterRegion={filteredCountryByRegion}
            value={selectInput}
          />
        </div>
        <section className="grid grid-cols-4 gap-x-20 gap-y-16">
          {isLoading ? (
            <Loading />
          ) : filteredResults.length > 0 ? (
            filteredResults.map((country, index) => (
              <Country countries={country} key={index} />
            ))
          ) : (
            <p>No country...</p>
          )}
        </section>
      </main>
    </>
  );
};

export default CountryList;
