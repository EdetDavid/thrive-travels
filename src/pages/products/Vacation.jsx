import React from "react";
import corporateImage from "./images/vacation.jpg";
import "./Vacation.css";

const Vacation = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="vacation d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Vacation (Tours & Special packages)
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Escape the ordinary and explore the extraordinary with our
              tailored vacation packages. Whether it's a serene getaway, a
              family adventure, or a romantic retreat, our tours and special
              offers promise unforgettable moments and cherished memories. Your
              dream vacation starts here!
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

export default Vacation;