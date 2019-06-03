import React, { Component } from "react";

import Layout from "../../components/Layout/Layout";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import "./Quotation.css";

export class QuotationPage extends Component {
    render() {
        return (
            <Layout secondaryNavbar>
                <div className="quotation">
                    <Form className="quotation-form">
                        <h1 className="quotation-title">Cotiza ahora</h1>
                        <Container className="mw-70">
                            <Row>
                                <Col xs={12}>
                                    <Form.Group controlId="form-name">
                                        {/* <Form.Label>Nombre completo</Form.Label> */}
                                        <Form.Control type="text" placeholder="Nombre completo" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="form-email">
                                        {/* <Form.Label>Correo electrónico</Form.Label> */}
                                        <Form.Control type="email" placeholder="Correo electrónico" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="form-budget">
                                        {/* <Form.Label>Tope presupuestal</Form.Label> */}
                                        <Form.Control type="text" placeholder="Tope presupuestal" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="form-service">
                                        {/* <Form.Label>Servicio requerido</Form.Label> */}
                                        <Form.Control type="text" placeholder="Servicio requerido" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="formBasicPassword">
                                        {/* <Form.Label>Elige una ruta</Form.Label> */}
                                        <Form.Control type="text" placeholder="Elige una ruta" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        {/* <Form.Label>Explica tu proyecto</Form.Label> */}
                                        <Form.Control as="textarea" rows="5" placeholder="Explica tu proyecto" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        <button type="submit" className="btn btn-sec btn-big">Solicitar cotización</button>
                    </Form>
                </div>
            </Layout>
        );
    }
}

export default QuotationPage;
