import React from "react";
// import { Navbar, Container, Nav, Image } from "react-bootstrap";
import "./Header.css"
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {


  return (
    <>
      <div className="container-fluid header-class ">
      <img src="/Pictures/logo.png" alt="logo" className="img-fluid pointer company-header-logo" />
        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar"><GiHamburgerMenu /></label>
        <nav className="navbar-pt">
          <ul>
            <li><Link to="/" className="text-dec-none">Company</Link></li>
            <li><Link to="/" className="text-dec-none">Expertise</Link>
              <ul className="px-0">
                <div className="container w-md-100">
                  <div className="row bg-light">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 my-2 bg-light">
                      <li>
                        <Link to="/methodology" className="text-dec-none development-border">Development</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none">Enterprise Software Development</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none">Web Application Development</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none">Mobile Application Development</Link>
                      </li>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 my-2 bg-light">
                      <li>
                        <Link to="/methodology" className="text-dec-none testing-border">Testing</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none">Application Integration</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none">Q & A Testing</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none">Dedicated Development Teams</Link>
                      </li>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 my-2 bg-light">
                      <li>
                        <Link to="/methodology" className="text-dec-none Data-border">Data Analysis</Link>
                      </li>
                      <li>
                        <Link to="/" className="text-dec-none">Machine Learning</Link>
                      </li>
                      <li>
                        <Link to="/Artificial-Intelligence" className="text-dec-none">Artificial Intelligence</Link>
                      </li>
                    </div>
                  </div>
                </div>

              </ul>
            </li>
            <li><Link to="/" className="text-dec-none">Services</Link></li>
            <li><Link to="/clients" className="text-dec-none">Clients</Link></li>
            <li><Link to="/" className="text-dec-none">Portfolio</Link></li>
            <li><Link to="/" className="text-dec-none">Career</Link></li>
            <li><Link to="/blogs" className="text-dec-none">Blog</Link></li>
            <li><Link to="/contact-us" className="text-dec-none">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;