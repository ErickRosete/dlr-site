import React from "react";
import "./Footer.css";
import logoAstra from "../../../assets/images/logos/logo-astra-rojo.png";
import logoDLR from "../../../assets/images/logos/DLR-LogoBlanco.png";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={4} xs={12} className="right-line">
            <div className="mw-90">
              <div className="location">
                <h3>Matriz</h3>
                <p>Carretera a San Luis Rio Colorado, Km 8.5, Col. Ex-Ejido Coahuila</p>
                <div className="list-tile">
                  <FontAwesomeIcon className="icon" icon="phone" />
                  <span>Tel. +52 (686) 561-63-53</span>
                </div>
                <div className="list-tile">
                  <FontAwesomeIcon className="icon" icon="envelope" />
                  <span>ventas@dlr.com.mx</span>
                </div>
              </div>
              <div>
                <h3>Tijuana</h3>
                <p>Carretera Aeropuerto #11-1</p>
                <div className="list-tile">
                  <FontAwesomeIcon className="icon" icon="phone" />
                  <span>Tel. +52 (664) 647-87-95</span>
                </div>
                <div className="list-tile">
                  <FontAwesomeIcon className="icon" icon="envelope" />
                  <span>ventas@dlr.com.mx</span>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12} className="right-line">
            <div className="mw-90">
              <h3>Ensenada</h3>
              <p>Carretera Ensenada - Tecate Km 104, El Sauzal de Rodríguez</p>
              <div className="list-tile">
                <FontAwesomeIcon className="icon" icon="phone" />
                <span>Tel. +52 (646) 178-10-20</span>
              </div>
              <div className="list-tile">
                <FontAwesomeIcon className="icon" icon="envelope" />
                <span>ventas@dlr.com.mx</span>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="mw-90 center-all">
              <img className="logo" src={logoDLR} alt="logo-astradev"></img>
              <p>@2019 DLR. Derechos Reservados</p>

              <div>
                <span>Desarrollado por:</span>
                <a className="astra-logo" href="http://astradev.co/" target="_blank" rel="noopener noreferrer" >
                  <img height={22} src={logoAstra} alt="logo AstraDev" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
