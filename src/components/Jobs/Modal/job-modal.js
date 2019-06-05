import React, { Component } from 'react'
import { Modal, Form, Container, Row, Col } from "react-bootstrap";
import "./job-modal.css"
import logo from "../../../assets/images/logos/DLR-LogoColor.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class JobModal extends Component {
    state = {
        name: "",
        phone: "",
        email: "",
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.handleClose();
    }

    handleChange = (name, event) => {
        this.setState({
            [name]: event.target.value
        })
    }

    render() {
        return (
            <Modal className="job-modal" show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Body>
                    <img className="logo" src={logo} alt="logo"></img>
                    <button className="btn modal-close-button" onClick={this.props.handleClose}>X</button>
                    <div className="job-info">
                        <h2>{this.props.job.title}</h2>
                        <p><FontAwesomeIcon className="icon" icon="map-marker-alt" />{" " + this.props.job.location}</p>                    </div>

                    <Form className="job-form" onSubmit={this.onSubmit}>
                        <h2>Únete a nuestro equipo</h2>
                        <Container className="mw-90">
                            <Row>
                                <Col xs={12}>
                                    <Form.Group controlId="form-name">
                                        <Form.Label>Nombre:</Form.Label>
                                        <Form.Control type="text" value={this.state.name}
                                            onChange={this.handleChange.bind(this, "name")} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="form-phone">
                                        <Form.Label>Teléfono:</Form.Label>
                                        <Form.Control type="tel" value={this.state.budget}
                                            onChange={this.handleChange.bind(this, "phone")} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="form-email">
                                        <Form.Label>Correo electrónico:</Form.Label>
                                        <Form.Control type="email" value={this.state.email}
                                            onChange={this.handleChange.bind(this, "email")} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group controlId="form-curriculum">
                                        <Form.Label>Curriculum:</Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                        <button type="submit" className="btn btn-main btn-big" >Enviar solicitud</button>
                    </Form>
                </Modal.Body>

            </Modal>
        )
    }
}

export default JobModal
