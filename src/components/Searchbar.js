import React from "react";

const Searchbar = (props) => {
  return (
    <>
      <input
        className="p-4 pl-10 w-full md:w-[480px] text-sm text-gray-900 bg-white rounded-lg border border-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        type="text"
        id="name"
        placeholder="Search for a country..."
        onChange={props.searchCountry}
        value={props.value}
      />
    </>
  );
};

export default Searchbar;
