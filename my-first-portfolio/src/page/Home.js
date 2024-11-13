import React from 'react';
import { Banner } from "../components/banner/Banner";
import { CardView } from "../components/CardView";
import transition from "../transition";

const Home = () => {
  return (
    <div>
      <Banner />
      <CardView />
    </div>
  );
};

export default Home;