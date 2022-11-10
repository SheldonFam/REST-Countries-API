import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = (props) => {
  return (
    <div className="flex items-center border border-gray-300 bg-white rounded-xl relative md:w-[480px] dark:bg-darkBlue">
      <AiOutlineSearch className="absolute pl-4 w-10 h-10" />
      <input
        className="pl-16 text-sm w-full h-full p-4 rounded-xl bg-white dark:bg-darkBlue"
        id="name"
        placeholder="Search for a country..."
        onChange={props.searchCountry}
        value={props.value}
      />
    </div>
  );
};

export default Searchbar;
