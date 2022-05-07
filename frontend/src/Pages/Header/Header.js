import React from "react";
// import { Navbar, Container, Nav, Image } from "react-bootstrap";
import "./Header.css"
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {


  return (
    <>
      {/* <Navbar bg="transparent" expand="lg">
        <Container className="container-fluid ">
          <Navbar.Brand href="/">
            <Image
              src="/Pictures/logo.png"
              fluid
              width="220"
              className="d-inline-block align-top"
            ></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
            12className="ms-auto my-2 bg-light my-lg-0 fs-6"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="ms-3">
                Company
              </Nav.Link>
              <Nav.Link href="/expertise" className="ms-3">
                Expertise
              </Nav.Link>
              <Nav.Link href="/methodology" className="ms-3">
                Services
              </Nav.Link>
              <Nav.Link href="/mobile-app" className="ms-3">
                Clients
              </Nav.Link>
              <Nav.Link href="/" className="ms-3">
                Portfolio
              </Nav.Link>
              <Nav.Link href="/" className="ms-3">
                Career
              </Nav.Link>
              <Nav.Link href="/" className="ms-3">
                Blog
              </Nav.Link>
              <Nav.Link href="/" className="ms-3">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> */}

      <div className="container-fluid header-class ">
        <img src="/Pictures/logo.png" alt="logo" className="img-fluid pointer" width="200px" />
        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar"><GiHamburgerMenu /></label>
        <nav className="navbar-pt">
          <ul>
            <li><Link to="/" className="text-dec-none">Company</Link></li>
            <li><Link to="/" className="text-dec-none">Expertise</Link>
              <ul>
                <div className="container-fluid">
                  <div className="row">
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
                        <Link to="/" className="text-dec-none">Artificial Intelligence</Link>
                      </li>
                    </div>
                  </div>
                </div>

              </ul>
            </li>
            <li><Link to="/" className="text-dec-none">Services</Link></li>
            <li><Link to="/" className="text-dec-none">Clients</Link></li>
            <li><Link to="/" className="text-dec-none">Portfolio</Link></li>
            <li><Link to="/" className="text-dec-none">Career</Link></li>
            <li><Link to="/" className="text-dec-none">Blog</Link></li>
            <li><Link to="/" className="text-dec-none">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;


<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="/">Action</a></li>
    <li><a class="dropdown-item" href="/">Another action</a></li>
    <li><a class="dropdown-item" href="/">Something else here</a></li>
  </ul>
</div>