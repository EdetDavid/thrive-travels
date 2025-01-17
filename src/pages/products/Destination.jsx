import React, { useState, useEffect } from "react";
import destinationImage from "./images/image4.jpg";
import "./Destination.css";

const Destination = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = destinationImage;
  }, []);

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="destination d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow text-center mb-4">
          Destination Wedding / Honeymoon
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0 animate-fade-up">
              Celebrate your love story in the most breathtaking destinations
              around the world. From intimate beach ceremonies to dreamy
              mountain escapes, we turn your special day into an unforgettable
              adventure. Let us make your happily-ever-after begin in paradise.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className={`img-fluid ${imageLoaded ? "fade-in" : "invisible"}`}
              src={imageError ? "fallback-image.jpg" : destinationImage}
              alt="Destination Wedding and Honeymoon"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
