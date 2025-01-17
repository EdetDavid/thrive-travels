import React from "react";
import easypayImage from "./images/easypay.jpg";
import "./EasyPay.css";

const EasyPay = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <div className="easypay d-flex flex-column justify-content-end align-items-center">
        <h1 className="fw-bold display-1 red-text black-text-shadow">
          Thrive Travels EasyPay
        </h1>
      </div>

      <div className="row">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-5">
            <p className="lead text-white">
              Streamline your business travel with our comprehensive solutions.
              We handle everything from booking flights and accommodations to
              managing itineraries and expense reports. Contact us today to
              learn more about our tailored corporate travel packages.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              id="img"
              className="img-fluid"
              src={easypayImage}
              alt="Corporate Travel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyPay;
