import React from "react";
import pilgrimageImage from "./images/mecca.jpg";
import "./Pilgrimage.css";

const Pilgrimage = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <div className="pilgrimage d-flex flex-column justify-content-end align-items-center">
        <h1 className="fw-bold display-1 red-text black-text-shadow">
          Pilgrimage packages
        </h1>
      </div>

      <div className="row">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-5">
            <p className="lead text-white">
              Embark on a spiritual journey to sacred destinations that inspire
              the soul and renew the spirit. Our pilgrimage packages are
              thoughtfully designed to provide comfort, guidance, and a profound
              connection to your faith. Let us guide you on a path of peace and
              devotion.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              id="img"
              className="img-fluid"
              src={pilgrimageImage}
              alt="pilgrimage package"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pilgrimage;
