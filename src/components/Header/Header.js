import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <p className="navbar-brand">
              <img
                src="https://i.ibb.co/8P7PyCm/Group-1329.png"
                alt="logo"
                width="200px"
              />
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/home">
                    <p>Home</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <p>Events</p>
                </li>
              </ul>
              <button type="button" className="btn btn-primary">
                Register
              </button>
              <button type="button" className="btn btn-dark ms-2">
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
