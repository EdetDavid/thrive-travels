import React from "react";
import flight from "./images/flight.jpg";
import "./Flight.css";

const Flight = () => {
  return (
    <div className="container-fluid bg-dark px-0">
      <div className="flight d-flex flex-column justify-content-end align-items-center p-5">
        <h1 className="fw-bold display-1 red-text white-text-shadow mt-5 pt-5">
          Flight Reservation & Ticketing
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
              src={flight}
              alt="Corporate Travel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
