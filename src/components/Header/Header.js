import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link to="/">
              <p className="navbar-brand">
                <img
                  src="https://i.ibb.co/8P7PyCm/Group-1329.png"
                  alt="logo"
                  width="200px"
                />
              </p>
            </Link>
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
                  <Link style={{ textDecoration: 'none' }} to="/home">
                    <p className="text-dark">Home</p>
                  </Link>
                </li>
                <Link style={{ textDecoration: 'none' }} to="/events">
                  <li className="nav-item ms-2">
                    <p className="text-dark">Events</p>
                  </li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/addEvents">
                  <li className="nav-item ms-2">
                    <p className="text-dark">Add Events</p>
                  </li>
                </Link>
              </ul>
              <Link style={{ textDecoration: 'none' }} to="/register">
                <button type="button" className="btn btn-primary">
                  Signup
                </button>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/login">
                <button type="button" className="btn btn-dark ms-2">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
