import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbar1() {
  return (
    <header>
      {/* start header */}

      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand className="title" href="/">
            <h1> Corsi </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav links">
            <Nav className="me-auto block text-p">
              <Nav.Link href="/">
                <p>Home</p>
              </Nav.Link>
              <Nav.Link href="/Free">
                <p>Free courses</p>
              </Nav.Link>
              <Nav.Link href="/Paid">
                <p> Paid courses </p>
              </Nav.Link>
              <Nav.Link href="/Contact">
                <p>Contact</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* end header */}
    </header>
  );
}

export default Navbar1;
