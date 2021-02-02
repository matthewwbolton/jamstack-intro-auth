import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const Index = () => {
  return (
    <Layout>
      <h1>This App Rules!</h1>
      <p>Log in to find out why.</p>
      <Link to="/dashboard">Go To The Dashboard</Link>
    </Layout>
  );
};

export default Index;
