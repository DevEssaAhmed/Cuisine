import React from "react";
import "./HomePage.scss";

import LandingPage from "./LandingPage";
import ProductList from "../../components/ProductList/ProductList";

const HomePage = () => {
  return (
    <div className='homepage'>
      <LandingPage />

      <ProductList />
    </div>
  );
};

export default HomePage;
