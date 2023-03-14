import React from "react";
import Customer from "../../Customer/Customer";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Customer></Customer>
    </div>
  );
};

export default Home;
