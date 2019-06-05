import React, { Component } from "react";

import Layout from "../../components/Layout/Layout";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import "./Quotation.css";

export class QuotationPage extends Component {
    state = {
        name: "",
        email: "",
        budget: "",
        service: "",
        route: "",
        project: ""
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    handleChange = (name, event) => {
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        return (
            <Layout secondaryNavbar>
                <div className="quotation">
                    <Form className="quotation-form" onSubmit={this.onSubmit}>
                        <h1 className="quotation-title">Cotiza ahora</h1>
                        <Container className="mw-70">
                            <Row>
                                <Col xs={12}>
                                    <Form.Group controlId="form-name">
                                        {this.state.name && <Form.Label>Nombre completo</Form.Label>}
                                        <Form.Control type="text" placeholder="Nombre completo"
                                            value={this.state.name} onChange={this.handleChange.bind(this, "name")} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="form-email">
                                        {this.state.email && <Form.Label>Correo electrónico</Form.Label>}
                                        <Form.Control type="email" placeholder="Correo electrónico"
                                            value={this.state.email} onChange={this.handleChange.bind(this, "email")} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="form-budget">
                                        {this.state.budget && <Form.Label>Tope presupuestal</Form.Label>}
                                        <Form.Control type="text" placeholder="Tope presupuestal"
                                            value={this.state.budget} onChange={this.handleChange.bind(this, "budget")} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="form-service">
                                        {this.state.service && <Form.Label>Servicio requerido</Form.Label>}
                                        <Form.Control type="text" placeholder="Servicio requerido"
                                            value={this.state.service} onChange={this.handleChange.bind(this, "service")} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="form-route">
                                        {this.state.route && <Form.Label>Elige una ruta</Form.Label>}
                                        <Form.Control type="text" placeholder="Elige una ruta"
                                            value={this.state.route} onChange={this.handleChange.bind(this, "route")} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group controlId="form-project">
                                        {this.state.project && <Form.Label>Explica tu proyecto</Form.Label>}
                                        <Form.Control as="textarea" rows="5" placeholder="Explica tu proyecto"
                                            value={this.state.project} onChange={this.handleChange.bind(this, "project")} />
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
