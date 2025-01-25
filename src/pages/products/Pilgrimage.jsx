import React from "react";
import pilgrimageImage from "./images/mecca.jpg";
import "./Pilgrimage.css";

const Pilgrimage = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="pilgrimage d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Pilgrimage packages
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Strengthen your faith with our pilgrimage travel packages that
              makes your destination not only a spiritual experience but a fun
              filled one as well. We provide smooth sail for pilgrims of all
              faiths, fast and efficient packages to suit your needs.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={pilgrimageImage}
              alt="Pilgrimage Paclkages"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pilgrimage;
