import easypayImage from "./images/easypay.jpg";
import "./EasyPay.css";

const EasyPay = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="easypay d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Thrive Travels EasyPay
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              With Thrive Travels Easy Pay, customers have access to a
              convinient payment plan which gives access to brilliant travels
              deals. Under this option, customers make a small initial down
              payment of the travel deals.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={easypayImage}
              alt="Corporate Travel"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EasyPay;
