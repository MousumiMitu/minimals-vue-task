import React from "react";
import Card from "../components/card/card";
import LineChartData from "../components/lineChart/LineChart";
import BarChartData from "../components/barChart/BarChart";
import CircularProgressBar from "../components/circularProgressBar/CircularProgressBar";
import ProgressBar from "../components/progressBar/ProgressBar";
import ReviewCart from "../components/reviewCart/ReviewCart";
import Navbar from "../components/navbar/Navbar";
import BookingCart from "../components/BookingCart/BookingCart";

const Home = () => {
  return (
    <div className="w-100  min-h-screen  ">
      <Navbar />
      <div className="m-4">
        <Card />
        <div className="row py-3">
          <div className="col-lg-8 ">
            <div className="row">
              <div className="col-md-6 ">
                <LineChartData />
              </div>
              <div className="col-md-6 ">
                <div className="shadow-sm p-2 p-md-4 rounded">
                  <h3 className="fs-5 text-black">Booked</h3>
                  <div className="py-2">
                    <div className="d-flex justify-content-between">
                      <small className="">Pending</small>
                      <small className="fs-6 text-black">10.10</small>
                    </div>
                    <ProgressBar color="#ffab00" bar="15%" />
                  </div>
                  <div className="py-2">
                    <div className="d-flex justify-content-between">
                      <small className="">Canceled</small>
                      <small className="fs-6 text-black">10.10</small>
                    </div>
                    <ProgressBar color="#FF5630" bar="25%" />
                  </div>
                  <div className="py-2">
                    <div className="d-flex justify-content-between">
                      <small className="">Sold</small>
                      <small className="fs-6 text-black">10.10</small>
                    </div>
                    <ProgressBar color="#22C55E" bar="45%" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row py-3 mx-1">
              <div className="col-md-6 shadow-sm ">
                <div className="row py-5 px-1 px-md-3 ">
                  <div className=" col-5 my-auto ">
                    <CircularProgressBar />
                  </div>
                  <div className="my-auto col-7">
                    <h3>38,566</h3>
                    <small>Pending for payment</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 shadow-sm">
                <div className="row py-5 px-1 px-md-3">
                  <div className=" col-5">
                    <CircularProgressBar />
                  </div>
                  <div className="my-auto col-7">
                    <h3 className="">38,566</h3>
                    <small>Pending for payment</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 ">
            <div className="shadow-sm rounded p-4">
              <h3 className="fs-5 text-black">Tours Available</h3>
              <div className="d-flex justify-content-center overflow-x-hidden my-5">
                <CircularProgressBar />
              </div>
              <div className="d-flex justify-content-between align-items-center pb-2 pt-4">
                <div className="d-flex">
                  <div className="small-box rounded my-auto me-2"></div>
                  <h4 className="fs-6 my-auto"> Sold </h4>
                </div>
                <h6 className="text-black my-auto">120 Tours</h6>
              </div>

              <div className="d-flex justify-content-between align-items-center pb-3">
                <div className="d-flex">
                  <div className="small-box rounded my-auto me-2"></div>
                  <h4 className="fs-6 my-auto"> Available</h4>
                </div>
                <h6 className="text-black my-auto">12 Tours</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-3">
          <div className="col-lg-8">
            <BarChartData />
          </div>

          <div className="col-lg-4">
            <ReviewCart />
          </div>
        </div>

        <div>
          <BookingCart />
        </div>
      </div>
    </div>
  );
};

export default Home;
