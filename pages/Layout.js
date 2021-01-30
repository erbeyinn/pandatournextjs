import React from "react";
import Navigation from "../components/Navigation";


const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <footer>design by eyüp</footer>
    </div>
  );
};

export default Layout;
