import destinationImage from "./images/image4.jpg";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="destination d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Destination Wedding / Honeymoon
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              At Thrive Travels & Tours, we transform your fantasies into
              reality, treating you and life partner to awesome memories that
              last foreve when you say i do. We help you unwind and appretiate
              time out with families and companions.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={destinationImage}
              alt="Corporate Travel"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
