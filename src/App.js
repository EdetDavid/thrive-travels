import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import About from "./pages/about/About";
import BoardOfDirectors from "./pages/team/BoardofDirectors";
import Team from "./pages/team/Team";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./components/login/Login";
import {
  Corporate,
  Flight,
  Travel,
  Vip,
  Visa,
  Destination,
  Pilgrimage,
  SportsEvents,
  Vacation,
  EasyPay,
} from "./pages/products/index";
import Contact from "./components/contact/Contact";
import BackgroundMusic from "./components/music/BackgroundMusic";
import musicFile from "./assets/music/wonderful-world.mp3";
import NotFound from "./pages/notfound/NotFound";
import BookingResults from "./components/booking-form/bookingResults";
import OtherTeamMembers from "./pages/team/otherTeam";
import BookingForm from "./components/booking-form/BookingForm";

const App = () => {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in",
      once: false,
    });
  }, []);

  // useEffect(() => {
  //   const preloader = document.getElementById("preloader");

  //   setTimeout(() => {
  //     preloader.style.display = "none";
  //     setLoading(false);
  //   }, 2500);
  // }, []);

  return (
    <div className="App bg-light">
      {/* {loading ? (
        <div id="preloader" className="rotating-image"></div>
      ) : (
        <> */}
      <Navbar />
      <BackgroundMusic src={musicFile} />
      <div className="fade">
        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route index exact path="/book-flight" element={<BookingForm />} />
          <Route
            index
            exact
            path="/booking-summary"
            element={<BookingResults />}
          />
          <Route index exact path="/get-started" element={<Login />} />
          <Route exact path="/about-us" element={<About />} />
          <Route
            exact
            path="/board-of-directors"
            element={<BoardOfDirectors />}
          />
          <Route exact path="/management-team" element={<Team />} />
          <Route
            exact
            path="/other-team-members"
            element={<OtherTeamMembers />}
          />

          <Route exact path="/corporate-travels" element={<Corporate />} />
          <Route
            exact
            path="/destination-wedding-honeymoon"
            element={<Destination />}
          />
          <Route exact path="/pilgrimage-packages" element={<Pilgrimage />} />
          <Route exact path="/easy-pay" element={<EasyPay />} />
          <Route exact path="/corporate-travels" element={<Corporate />} />
          <Route
            exact
            path="/international-sports-events"
            element={<SportsEvents />}
          />
          <Route
            exact
            path="/vacation-tours&specialpackages"
            element={<Vacation />}
          />
          <Route
            exact
            path="/flight-reservation-ticketing"
            element={<Flight />}
          />
          <Route exact path="/visa-assistant-services" element={<Visa />} />
          <Route exact path="/travel-insurance" element={<Travel />} />
          <Route exact path="/vip-travels" element={<Vip />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          {/* Catch-all route for 404 */}
        </Routes>
      </div>
      <Footer />
      {/* </>
      )} */}
    </div>
  );
};

export default App;
