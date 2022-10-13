import React from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Filterbar from "../components/Filterbar";
import CountryList from "../components/CountryList";

const Home = () => {
  return (
    <div>
      <Header />
      <Searchbar />
      <Filterbar />
      <CountryList />
    </div>
  );
};

export default Home;
