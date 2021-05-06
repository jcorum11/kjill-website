import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-css"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand className="title" as={Link} to="/">
        <img
          alt="Art by K. Jill logo"
          src="/chilogo.png"
          width="20%"
          height="20%"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Link eventKey="1" className="nav" as={Link} to="/">
            Gallery
          </Nav.Link>
          <Nav.Link eventKey="2" className="nav" as={Link} to="/inspiration">
            Inspiration
          </Nav.Link>
          <Nav.Link eventKey="3" className="nav" as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link eventKey="4" className="nav" as={Link} to="/shop">
            Shop
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
