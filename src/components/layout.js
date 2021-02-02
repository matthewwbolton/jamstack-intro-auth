import React from "react";
import { Link } from "gatsby";
import { identityContextProvider } from "react-netlify-identity-widget";
import "./layout.css";
import { IdentityContextProvider } from "react-netlify-identity";

const Layout = ({ children }) => (
  <IdentityContextProvider url="http://matthew-jamstack-intro-auth.netlify.com">
    <header>
      <Link to="/">JAMstack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;
