import React, { useContext } from "react";
import { AppContext, GlobalContext } from "./cont";
import Nav from "./nav";
import Search from "./search-bar";
import Movies from "./movies";

const Main = () => {
  return (
    <>
      <Nav />
      <Movies />
    </>
  );
};

export default Main;
