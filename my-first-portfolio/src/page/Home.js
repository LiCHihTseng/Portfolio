import React from 'react';
import { Banner } from "../components/banner/Banner";
import { CardView } from "../components/CardView";
import transition from "../transition";

const Home = () => {
  return (
    <div>
      <Banner />
      <CardView />
      <div className="" style={{ height: "60vh" }}></div>
    </div>
  );
};

export default Home;