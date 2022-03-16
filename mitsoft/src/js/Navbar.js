import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div className="head">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#kurslar">Kurslar</Nav.Link>
              <Nav.Link href="#onlineKurs">Onlinekurs</Nav.Link>
              <Nav.Link href="#news">Yangiliklar</Nav.Link>
              <Nav.Link href="#about">Biz haqimizda</Nav.Link>
              <Link to="/enter">Kirish</Link>
              <Link to="/singup">Ro'yxatdan o'tish</Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
