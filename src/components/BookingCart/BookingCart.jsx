import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsCalendarDateFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";

const BookingCart = () => {
  const card = [
    { id: 1, img: "bg1.jpg", img2: "man.png", price: "52.12" },
    { id: 1, img: "bg2.jpg", img2: "man.png", price: "45" },
    { id: 1, img: "bg1.jpg", img2: "man.png", price: "14.5" },
    { id: 1, img: "bg2.jpg", img2: "man.png", price: "100" },
  ];
  return (
    <div className="rounded p-md-4">
      <div className="d-flex justify-content-between pb-4">
        <div>
          <h3 className="fs-5 text-black">Newest Booking</h3>
          <small>12 Bookings </small>
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

      <div className="row g-3">
        {card.map((card) => (
          <div className="col-lg-4 col-xl-3 col-md-6" key={card.id}>
            <div className=" py-3 bg-body-secondary p-3 rounded">
              <div className="d-md-flex ">
                <div className="user-img">
                  <img src={card.img2} alt="" className="w-100" />
                </div>
                <div className="d-flex flex-column my-auto ps-md-2 pt-2 pt-sm-0">
                  <small className="text-dark">Jayway sfom</small>
                  <small className="sml-desc">3aug 2030 2.35pm</small>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center pt-3">
                <div className="d-flex align-items-center">
                  <BsCalendarDateFill />
                  <h6 className="sml-desc ps-1 my-auto">3 days 2 nights</h6>
                </div>
                <div className="d-flex align-items-center">
                  <ImUsers />
                  <h6 className="sml-desc ps-1 my-auto">3 days 2 nights</h6>
                </div>
              </div>

              <div className=" pt-3">
                <img
                  src={card.img}
                  alt=""
                  className="img-fluid book-img w-100 rounded"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCart;
