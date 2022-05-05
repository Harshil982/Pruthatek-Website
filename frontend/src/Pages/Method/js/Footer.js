import React from "react";
import { ImLocation } from "react-icons/im";
import { BiPhoneCall } from "react-icons/bi";
import {
  FaFacebook,
  FaTwitterSquare,
  FaInstagram,
  FaLinkedin,
  FaGreaterThan,
} from "react-icons/fa";
import "../css/Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer_bg">
        <div className="container mt-5">
          <footer className="pt-5">
            <div className="row justify-content-evenly">
              <div className="col-12 col-sm-6 col-md-4 col-lg-1 col-xl-1 my-3 text-center text-sm-start text-md-start text-lg-start text-xl-start">
                <h5>About</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Price
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Services
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Career
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-2 col-xl-2 my-3 text-center text-sm-start text-md-start text-lg-start text-xl-start">
                <h5>Expertise</h5>
                <ul className="nav flex-column fs-6">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Web Application Developments
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Mobile Application Developments
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Enterprise Software Developments
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Application Integration
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      QA And Testing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Dedicated Development Centers
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Artificial Intelligence
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Machine Learning
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-4 col-md-4 col-lg-2 col-xl-2 my-3 text-center text-sm-start text-md-start text-lg-start text-xl-start">
                <h5>Head Office</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted fs-6 ms-4">
                      Visit Us Daily
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      <address>
                        <ImLocation className="me-2 fs-5" />
                        G-10 Parasmant Flat, Nr. Karmachari Nagar, Rannapark,
                        Ahmedabad - 380061
                      </address>
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      <BiPhoneCall className="me-2 fs-5" />
                      Have Any Questions?
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted ms-3">
                      +91 9909 918 930
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4 my-3 text-center text-sm-start text-md-start text-lg-start text-xl-start">
                <h5>Our Locations</h5>
                <img
                  src="/images/world map.png"
                  alt=""
                  width="300"
                  className="image-fluid"
                />
                <div className="row">
                  <div className="col-4">
                    Canada
                    <span className="text-muted font-size-smaller"> Ontario,Canada</span>
                  </div>
                  <div className="col-4">
                    Singapore
                    <span className="text-muted font-size-smaller"> Ontario,Canada</span>
                  </div>
                  <div className="col-4">
                    Australia
                    <span className="text-muted font-size-smaller"> Ontario,Canada</span>
                  </div>
                </div>
              </div>

              <div className="col-112 col-sm-6 col-md-6 col-lg-3 col-xl-3 my-3 text-start text-sm-start text-md-start text-lg-start text-xl-start">
                <h5>Follow Us</h5>
                <ul className="list-unstyled d-flex">
                  <li className="fs-3">
                    <a className="link-dark" href="/">
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="ms-3 fs-3">
                    <a className="link-dark" href="/">
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="ms-3 fs-3">
                    <a className="link-dark" href="/">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="ms-3 fs-3">
                    <a className="link-dark" href="/">
                      <FaTwitterSquare />
                    </a>
                  </li>
                </ul>
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                    <button className="btn" type="button">
                      <FaGreaterThan className="align-middle text-dark fs-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="pt-4 mt-4 border-top text-center">
              <p>
                <span className="text-secondary">All rights reserved</span>
                &nbsp;&nbsp;
                <span>&copy; Your Company 2021</span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
