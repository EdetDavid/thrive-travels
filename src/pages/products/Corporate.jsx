import React from "react";
import corporateImage from "./images/coporate-man.jpg";
import "./Corporate.css";

const Corporate = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="corporate d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Corporate Travels
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Thrive Travels & Tours offers the best in corporate travels with
              packages that help make business trips safer, efficient,
              productive and cost effective. Our Services here include Flights
              Booking, Hotel Reservations and Car Rentals at destination.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={corporateImage}
              alt="Corporate Travel"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Corporate;
