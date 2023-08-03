import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewCart = () => {
  return (
    <div className="shadow-sm rounded p-4">
      <div className="d-flex justify-content-between">
        <div>
          <h3 className="fs-5 text-black">Customer Reviews</h3>
          <p>5 reviews</p>
        </div>
        <div className="d-flex">
          <div className="arrow-btn rounded-circle d-flex justify-content-center align-items-center">
            <IoIosArrowBack />
          </div>
          <div className="arrow-btn rounded-circle d-flex justify-content-center align-items-center">
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      <div className="d-flex py-3">
        <div className="user-img">
          <img src="man.png" alt="" className="w-100" />
        </div>
        <div className="my-auto ps-4">
          <h5 className="fs-6">Jayway sfom</h5>
          <small>Posted 3aug 2030 2.35pm</small>
        </div>
      </div>
      <div>
        <AiFillStar className="text-warning fs-5 me-1" />
        <AiFillStar className="text-warning fs-5 me-1" />
        <AiFillStar className="text-warning  fs-5 me-1" />
        <AiFillStar className="text-warning fs-5 me-1" />
        <AiOutlineStar className="fs-5 me-1" />
      </div>
      <p style={{ fontSize: "13px" }} className="py-2 text-justify text-dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi
        ab velit doloribus quasi voluptas. Aliquam, eveniet culpa beatae
        consequuntur amet est ullam necessitatibus perspiciatis, eius sint
      </p>

      <div className="d-flex">
        <small
          className="bg-body-secondary px-2 py-1 rounded me-2"
          style={{ fontSize: "10px" }}
        >
          Great service
        </small>
        <small
          className="bg-body-secondary px-2 py-1 rounded me-2"
          style={{ fontSize: "10px" }}
        >
          recommended
        </small>
        <small
          className="bg-body-secondary px-2 py-1 rounded me-2"
          style={{ fontSize: "10px" }}
        >
          Best price
        </small>
      </div>

      <hr />
      <div className="row py-2 gx-2 ">
        <div className="col-md-6 ">
          <button className="bg-danger-subtle w-100 border-0 text-danger py-1 rounded">
            Reject
          </button>
        </div>
        <div className="col-md-6">
          <button className="bg-dark w-100 border-0 text-white py-1 rounded">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
