import React from "react";
import corporateImage from "./images/vacation.jpg";
import "./Vacation.css";

const Vacation = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <div className="vacation d-flex flex-column justify-content-end align-items-center ">
        <h1 className="fw-bold display-4 red-text black-text-shadow mb-5">
          Vacation (Tours & Special packages)
        </h1>
      </div>

      <div className="row">
        <div className="d-flex justify-content-center align-items-center p-5">
          <div className="col-md-6 bg-black me-4 rounded white-shadow p-5">
            <p className="lead text-white">
              Escape the ordinary and explore the extraordinary with our
              tailored vacation packages. Whether it’s a serene getaway, a
              family adventure, or a romantic retreat, our tours and special
              offers promise unforgettable moments and cherished memories. Your
              dream vacation starts here!
            </p>
          </div>
          <div className="col-md-6 img-thumbnail gray-shadow">
            <img
              id="img"
              className="img-fluid"
              src={corporateImage}
              alt="Corporate Travel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacation;
