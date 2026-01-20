import visaImage from "./images/visa.jpg";
import "./Visa.css";

const Visa = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="visa d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Visa Assistance Services
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              We assist our customers in the processing of their visa
              application to any country of their choice. Find a list of select
              countries we can assist with.
              <li>
                <b> Africa: </b> Kenya, South Africa, Mauritius, Zimbabwe,
                Tanzania.
              </li>
              <li>
                <b> America: </b> USA, Mexico, Brazil, Jamaica.
              </li>
              <li>
                <b> Europe: </b> UK, Schengen, Russia, Turkey.
              </li>
              <li>
                <b> Asia: </b> China, India, Malaysia, Singapore.
              </li>
              <li>
                <b> Others: </b>Dubai, UAE, Austrailia.
              </li>
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={visaImage}
              alt="Visa Assistant Services"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visa;
