import React from "react";
import Coursel from "../../components/couresel/Coursel";
import Topbar from "../../components/topbar/Topbar";
import Card from "../../components/card/Card";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="navbartop">
        <Topbar />
      </div>
      <div className="carouseltop">
        <Coursel />
        <div className="heading__top">All movies</div>
        <Card />
      </div>
    </div>
  );
};

export default Home;
