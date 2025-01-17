import React from "react";
import sportseventsImage from "./images/sports.jpg";
import "./SportsEvents.css";

const SportsEvents = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="sportsevents d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          International SportsEvents
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Streamline your business travel with our comprehensive solutions.
              We handle everything from booking flights and accommodations to
              managing itineraries and expense reports. Contact us today to
              learn more about our tailored corporate travel packages.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={sportseventsImage}
              alt="international-sports-events"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsEvents;
