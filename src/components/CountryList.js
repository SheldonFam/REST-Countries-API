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
    <main className="px-6 py-12 md:px-20 md:py-12 bg-veryLightGray dark:bg-darkBlue ">
      <div className="flex-col flex gap-y-12 md:gap-x-10 md:flex-row md:justify-between mb-12">
        <Searchbar searchCountry={searchCountry} value={searchInput} />
        <Filterbar filterRegion={filteredCountryByRegion} value={selectInput} />
      </div>
      {isLoading && <Loading />}
      <section className="grid grid-cols-1 gap-x-20 gap-y-16 px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
        {filteredResults.length > 0 ? (
          filteredResults.map((country, index) => {
            return <Country countries={country} key={index} />;
          })
        ) : (
          <p>No country...</p>
        )}
      </section>
    </main>
  );
};

export default CountryList;
