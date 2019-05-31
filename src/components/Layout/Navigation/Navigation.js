import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import whiteLogo from "../../../assets/images/logos/DLR-LogoBlanco.png";
import blueLogo from "../../../assets/images/logos/DLR-LogoAzul.png";

import "./SecNavigation.css";
import "./MainNavigation.css";
import "./Navigation.css";

const mainNavigation = props => {
  let headerClasses = ["navigation"]
  if (props.secondary) {
    headerClasses.push("sec-navigation")
  }
  else {
    headerClasses.push("main-navigation")
  }

  return (
    <header className={headerClasses.join(" ")}>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="md"
        variant={props.secondary ? "light" : "dark"}
        style={{ backgroundColor: props.backgroundColor }}
      >
        <Navbar.Brand as={NavLink} to="/inicio">
          {props.secondary ?
            <img src={blueLogo} className="logo" alt="logo" /> :
            <img src={whiteLogo} className="logo" alt="logo" />
          }
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/inicio">
              inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/bolsa-trabajo">
              Bolsa de trabajo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cotiza">
              Cotiza
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default mainNavigation;
