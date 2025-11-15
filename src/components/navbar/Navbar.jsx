import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import logo from "../../assets/logos/logo-1.png";
import "./navbar.css";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [token, , removeToken] = useCookies(["mytoken"]);
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
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white px-lg-5 p-2 ${
          isFixed ? "fixed-top black-shadow" : ""
        }`}
      >
        <div className="container-fluid">
          <a href="/" className="navbar-brand mb-2 mb-lg-0">
            <img src={logo} alt="brand-logo" style={{ maxHeight: 48 }} />
          </a>
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
              <i className="fas fa-bars fs-4"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse mt-2 mt-lg-0" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link hide-nav" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hide-nav" href="/about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link">Our Products</span>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item hide-nav"
                      href="/corporate-travels"
                    >
                      Corporate Travels
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item hide-nav"
                      href="/flight-reservation-ticketing"
                    >
                      Flight Reservation & Ticketing
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item hide-nav" href="/easy-pay">
                      Easy Pay
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item hide-nav"
                      href="/visa-assistant-services"
                    >
                      Visa Assistant Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item hide-nav"
                      href="/travel-insurance"
                    >
                      Travel Insurance
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item hide-nav" href="/vip-travels">
                      VIP Travels
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item hide-nav"
                      href="/pilgrimage-packages"
                    >
                      Pilgrimage Packages
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item hide-nav"
                      href="/destination-wedding-honeymoon"
                    >
                      Destination Wedding / Honeymoon
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item hide-nav"
                      href="/international-sports-events"
                    >
                      International Sports Events
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item hide-nav"
                      href="/vacation-tours&specialpackages"
                    >
                      Vacation (Tours & Special-packages)
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link">Team</span>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item hide-nav"
                      href="/board-of-directors"
                    >
                      Board of Directors
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item hide-nav" href="/management-team">
                      Management Team
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item hide-nav"
                      href="/other-team-members"
                    >
                      Other Team Members
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link hide-nav" href="/book-flight">
                  Book Now
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hide-nav" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
            {location.pathname !== "/get-started" && (
              <form className="d-flex">
                {token["mytoken"] && token["mytoken"] !== "undefined" ? (
                  <a
                    onClick={logoutBtn}
                    style={styles.button}
                    className="btn text-white"
                    href="/"
                  >
                    Logout
                  </a>
                ) : (
                  <a
                    style={styles.button}
                    className="btn text-white hide-nav"
                    href="/get-started"
                  >
                    Get Started
                  </a>
                )}
              </form>
            )}
          </div>
        </div>
      </nav>
      {/* Desk lines section under navbar */}
      <div
        className="desk-lines-bar d-flex flex-wrap justify-content-center align-items-center w-100"
        style={{
          background: "linear-gradient(90deg, #181344 0%, #3a3a60 100%)",
          color: "#fff",
          fontWeight: 500,
          fontSize: "1rem",
          letterSpacing: "0.5px",
          boxShadow: "0 2px 8px rgba(24,19,68,0.07)",
          padding: "0.6rem 0",
          borderBottom: "1px solid #e5e5e5",
          zIndex: 1000,
        }}
      >
        <span className="me-4 d-flex align-items-center">
          <i
            className="fas fa-phone-alt me-2"
            style={{ color: "#25d366", fontSize: "1.1em" }}
          ></i>
          <span>
            Desk 1:{" "}
            <a
              href="tel:+2348179883608"
              style={{
                color: "#fff",
                textDecoration: "underline dotted",
                fontWeight: 600,
              }}
            >
             +234 817 988 3608
            </a>
          </span>
        </span>
        <span className="me-4 d-flex align-items-center">
          <i
            className="fas fa-phone-alt me-2"
            style={{ color: "#25d366", fontSize: "1.1em" }}
          ></i>
          <span>
            Desk 2:{" "}
            <a
              href="tel:+2348128203360"
              style={{
                color: "#fff",
                textDecoration: "underline dotted",
                fontWeight: 600,
              }}
            >
              +234 812 820 3360
            </a>
          </span>
        </span>
      </div>
    </>
  );
};

const styles = {
  button: {
    backgroundColor: "#ed1c24",
    marginTop: 2,
  },
};

export default Navbar;
