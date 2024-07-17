import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbar1() {
  return (
    <header>
     <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Brand className="title" href="#home">
              <h1> Crafteria </h1> <br />
              <h5> Craft Your Dreams</h5>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav links">
              <Nav className="me-auto block">
                <Nav.Link href="/">
                  <p>Home</p>
                </Nav.Link>
                <Nav.Link href="#link">
                  <p>About</p>
                </Nav.Link>
                <Nav.Link href="/Special">
                  <p>Special Deals</p>
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
