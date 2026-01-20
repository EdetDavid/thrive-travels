import vipImage from "./images/vip-lady.jpg";
import "./Vip.css";

const Vip = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="vip d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Vacation (Tours & Special packages)
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Our VIP Travel package is designed for those who like to travel in
              style. We can arrange premium flight, hotels and logistics
              reservations specially tailored for you..... The VIP.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={vipImage}
              alt="VIP Travel Services"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vip;
