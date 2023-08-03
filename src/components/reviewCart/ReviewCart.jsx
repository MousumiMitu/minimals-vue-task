import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const ReviewCart = () => {
  return (
    <div className="shadow-sm rounded p-4">
      <div className="d-flex justify-content-between">
        <div>
          <h3 className="fs-5 text-black">Customer Reviews</h3>
          <p>5 reviews</p>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
