import React from "react";
//import bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import netflixLogo from "../../assets/Images/Netflix-logo.png";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdAccountBox } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={netflixLogo} alt="netflix-logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Netflix</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">TVShows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#lstest">Latest</Nav.Link>
            <Nav.Link href="#mylist">Mylist</Nav.Link>
            <Nav.Link href="#browse">Browse By Languages</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FaSearch />
            </Nav.Link>
            <Nav.Link href="#deets">
              <IoNotifications />
            </Nav.Link>
            <Nav.Link href="#deets">
              <MdAccountBox />
            </Nav.Link>
            <Nav.Link href="#deets">
              <IoMdArrowDropdown />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
