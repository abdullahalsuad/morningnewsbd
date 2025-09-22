import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";
import NavBar from "./Navbar";

const Header = () => {
  return (
    <section>
      {/* thin strip */}
      <HeaderTop />

      {/*  logo + banner */}
      <HeaderMain />

      {/*  main navigation */}
      <NavBar />
    </section>
  );
};

export default Header;
