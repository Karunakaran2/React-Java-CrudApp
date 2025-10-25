import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React CRUD</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/studentData"
              className={({ isActive }) =>
                isActive ? "active nav-link mx-2 fw-bold" : "nav-link mx-2"
              }
            >
              Student Details
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/department"
              className={({ isActive }) =>
                isActive ? "active nav-link mx-2 fw-bold" : "nav-link mx-2"
              }
            >
              Department
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
