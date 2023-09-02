import React from "react";
import Searchimg from "./images/search.png";
import { useGlobalContext } from "./cont";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();

  return (
    <div className=" flex items-center mx-28">
      <form action="#" onSubmit={(e) => e.preventDefault}>
        <label className="relative">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img src={Searchimg} className="h-5 ml-0.5 mr-0.5 opacity-50 " />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white border w-80 h-11 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm text-gray-900"
            placeholder="Search for anything..."
            type="text"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </form>
      <div className="text-center text-base text-red-500 ml-16 font-bold">
        <p>{isError.show && isError.msg}</p>
      </div>
    </div>
  );
};

export default Search;
