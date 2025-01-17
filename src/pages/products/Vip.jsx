import React from "react";
import vipImage from "./images/vip-lady.jpg";
import "./Vip.css";

const Vip = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <div className="vip d-flex flex-column justify-content-end align-items-center">
        <h1 className="fw-bold display-1 red-text black-text-shadow">
          VIP Travels
        </h1>
      </div>

      <div className="row">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-5">
            <p className="lead text-white">
              Experience luxury travel at its finest with our exclusive VIP
              services. We cater to discerning travelers who demand the highest
              levels of comfort, privacy, and personalization. From private jet
              arrangements to luxury accommodations and exclusive experiences,
              we ensure every aspect of your journey exceeds expectations.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              id="img"
              className="img-fluid"
              src={vipImage}
              alt="VIP Travel Services"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vip;
