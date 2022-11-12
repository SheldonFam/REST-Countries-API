import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = (props) => {
  return (
    <div className="flex items-center rounded-xl relative md:w-[480px] border-lightModeInput shadow-md text-lightModeText dark:text-white">
      <AiOutlineSearch className="absolute pl-4 w-10 h-10 text-lightModeInput dark:text-white" />
      <input
        className="pl-16 text-sm w-full h-full p-4 rounded-xl bg-white dark:bg-darkModeElements transition-all"
        id="name"
        placeholder="Search for a country..."
        onChange={props.searchCountry}
        value={props.value}
      />
    </div>
  );
};

export default Searchbar;
