import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <p class="navbar-brand">
            <img
              src="https://i.ibb.co/8P7PyCm/Group-1329.png"
              alt="logo"
              width="200px"
            />
          </p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <button type="button" class="btn btn-primary">
              Register
            </button>
            <button type="button" class="btn btn-dark ms-2">
              Login
            </button>
          </div>
        </div>
      </nav>
      <div className="my-4 text-center">
        <h1>I grow by helping people in need.</h1>
        <input
          type="text"
          className="form-control w-50 mx-auto mt-4 d-inline border-end-0 rounded-0 rounded-start"
          placeholder="Search"
        />
         <input className="btn btn-primary mb-1 rounded-0 rounded-end" type="button" value="Search" />
      </div>
    </Container>
  );
};

export default Header;
