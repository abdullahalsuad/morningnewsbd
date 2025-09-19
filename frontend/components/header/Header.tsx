import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import NavBar from "./Navbar";
import { NewsHeading } from "./NewsHeading";

const Header = () => {
  return (
    <>
      {/* thin strip */}
      <HeaderTop city="ঢাকা" />

      {/*  logo + banner */}
      <HeaderMain />

      {/*  main navigation */}
      <NavBar />

      <NewsHeading />
    </>
  );
};

export default Header;
