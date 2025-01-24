import sportseventsImage from "./images/sports.jpg";
import "./SportsEvents.css";

const SportsEvents = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="sportsevents d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          International SportsEvents
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Show true sportmanship. Miss no part of the live action of your
              favourite sports premier league, UEFA champions league, Olympics,
              World Cup, Formula 1 Grand Prix, Tennis Grand Slam and many more
              with our international sports Events Travel Packages perfectly
              suited for your pleasure.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={sportseventsImage}
              alt="Corporate Travel"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsEvents;
