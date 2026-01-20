import React from "react";
import flight from "./images/flight.jpg";
import "./Flight.css";

const Flight = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="flight d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Flight Reservation & Ticketing
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Choose Thrive Travels & Tours for the best deals on local and
              international flghts to your destination. Enjoy the most
              affordable flight fares and access special promo fares on all
              airlines all year-round.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={flight}
              alt="Corporate Travel"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flight;
