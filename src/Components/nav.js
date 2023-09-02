import React from "react";
import Search from "./search-bar";

const Nav = () => {
  return (
    <div className="flex flex-row bg-gray-950">
      <ul className="text-xl h-20 text-white font-mono flex-row flex items-center">
        <li className="ml-16 hover:opacity-75 hover:scale-105 cursor-pointer">
          HOME
        </li>
        <li className="ml-28 hover:opacity-75 hover:scale-105 cursor-pointer">
          TOP 10
        </li>
        <li className="ml-28 hover:opacity-75 hover:scale-105 cursor-pointer">
          WATCHLIST
        </li>
      </ul>
      <Search />
    </div>
  );
};

export default Nav;
