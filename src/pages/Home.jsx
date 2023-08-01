import React from "react";
import Card from "../components/card/card";
import LineChartData from "../components/lineChart/LineChart";
import BarChartData from "../components/barChart/BarChart";

const Home = () => {
  return (
    <div className="w-100  min-h-screen m-4 ">
      <Card />
      <div className="row py-3">
        <div className="col-md-4">
          <LineChartData />
        </div>
        <div className="col-md-4">
          <div>progress bar</div>
        </div>
        <div className="col-md-4">
          <div>progress bar</div>
        </div>
      </div>

      <div className="row py-3">
        <div className="col-md-8">
          <BarChartData />
        </div>

        <div className="col-md-4">
          <div>progress bar</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
