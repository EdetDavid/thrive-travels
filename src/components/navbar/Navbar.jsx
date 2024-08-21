import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo from "../../assets/logos/logo-1.png";
import "./navbar.css";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  const location = useLocation();

  useEffect(() => {
    const links = document.querySelectorAll(".hide-nav");

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        const navbarCollapse = document.querySelector(".navbar-collapse");

        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    }

    const handleScroll = () => {
      setIsFixed(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoutBtn = () => {
    removeToken(["mytoken"]);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-white px-lg-5 p-2 ${
        isFixed ? "fixed-top black-shadow" : ""
      }`}
    >
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="brand-logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            {" "}
            <i className="fas fa-bars fs-4"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link hide-nav" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hide-nav" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link ">Our Products</span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item  hide-nav" to="/corporate-travels">
                    Corporate Travels
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item hide-nav"
                    to="/flight-reservation-ticketing"
                  >
                    Flight Reservation & Ticketing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item hide-nav"
                    to="/visa-assistant-services"
                  >
                    Visa Assistant Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item hide-nav" to="/travel-insurance">
                    Travel Insurance
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item hide-nav" to="/vip-travels">
                    VIP Travels
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className="nav-link ">Team</span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item hide-nav" to="/board-of-directors">
                    Board of Directors
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item hide-nav" to="/management-team">
                    Management Team
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item hide-nav" to="/other-team-members">
                    Other Team Members
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hide-nav" to="/book-flight">
                Book Now
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link hide-nav" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
          {location.pathname !== "/get-started" && (
            <form className="d-flex">
              {token["mytoken"] && token["mytoken"] !== "undefined" ? (
                <NavLink
                  onClick={logoutBtn}
                  style={styles.button}
                  className="btn text-white "
                  to="/"
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  style={styles.button}
                  className="btn text-white hide-nav"
                  to="/get-started"
                >
                  Get Started
                </NavLink>
              )}
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  button: {
    backgroundColor: "#ed1c24",
    marginTop: 2,
  },
};

export default Navbar;
