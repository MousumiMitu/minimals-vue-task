import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="row ">
      <div className="col-lg-4 ">
        <div className="shadow-sm d-flex justify-content-between rounded p-2 p-md-4 my-auto">
          <div className=" my-auto">
            <h3 className="fs-2 fw-semibold text-black">741k</h3>
            <span className="fw-medium">Total Booking</span>
          </div>
          <div className="  card-img d-flex justify-content-center align-content-center">
            <img src="/card1.svg" alt="" className=" " />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="shadow-sm d-flex justify-content-between rounded p-2 p-md-4 my-auto">
          <div className=" my-auto">
            <h3 className="fs-2 fw-semibold text-black">741k</h3>
            <span className="fw-medium">Total Booking</span>
          </div>
          <div className="  card-img d-flex justify-content-center align-content-center">
            <img src="/card2.svg" alt="" className=" " />
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="shadow-sm d-flex justify-content-between rounded p-2 p-md-4 my-auto">
          <div className=" my-auto">
            <h3 className="fs-2 fw-semibold text-black">741k</h3>
            <span className="fw-medium">Total Booking</span>
          </div>
          <div className="  card-img d-flex justify-content-center align-content-center">
            <img src="/card3.svg" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
