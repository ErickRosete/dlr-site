import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logos/logo.png";

import "./MainNavigation.css";

const mainNavigation = props => {
  return (
    <header className="main-navigation">
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="md"
        variant="dark"
        style={{ backgroundColor: props.navbarColor }}
      >
        <Navbar.Brand as={NavLink} to="/inicio">
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/inicio">
              inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/bolsa-trabajo">
              vacantes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default mainNavigation;
