import React from "react";
import travel from "./images/travel.jpg";
import "./Travel.css";

const Travel = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="travel d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Travel Insurance
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Our Travel Insurance Policy Covers all travelers for holiday and
              business purposes in the event of accidents, sickness or loss of
              property. We provide covers on medical, financial and other losses
              incurred while traveling outside the country of residence.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={travel}
              alt="Corporate Travel"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travel;
