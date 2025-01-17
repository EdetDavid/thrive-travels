import React from "react";
import visaImage from "./images/visa.jpg";
import "./Visa.css";

const Visa = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <div className="visa d-flex flex-column justify-content-end align-items-center">
        <h1 className="fw-bold display-1 red-text black-text-shadow">
          Visa Assistance Services
        </h1>
      </div>

      <div className="row">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-5">
            <p className="lead text-white">
              Let us simplify your visa application process. Our experienced
              team provides comprehensive visa assistance services, ensuring all
              your documentation is complete and accurate. From application
              guidance to submission support, we're here to make your
              international travel preparations smooth and hassle-free.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              id="img"
              className="img-fluid"
              src={visaImage}
              alt="Visa Assistance"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;
