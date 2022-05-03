import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="transparent" expand="lg">
        <Container>
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
              className="ms-auto my-2 my-lg-0 fs-5"
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
                Methodology
              </Nav.Link>
              <Nav.Link href="/mobile-app" className="ms-3">
                Mobile App
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
    </>
  );
};

export default Header;
