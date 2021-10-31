import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div className="pt-5 text-center">
                <h2>Have Some Questions</h2>
                <Container>
                    <Row className="align-items-center justify-content-center contact p-3 contact mx-auto">
                        <Col xs={12}>
                            <p className="text-secondary"><i className="fas fa-envelope-open-text fa-9x "></i></p>
                        </Col>
                        <Col xs={12}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control className="rounded-pill" type="email" placeholder="First Name" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Control className="rounded-pill" type="password" placeholder="Last Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control className="rounded-pill" type="password" placeholder="What's your Email?" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control className="rounded-pill" type="password" placeholder="Your Questions" />
                                </Form.Group>
                                <button className="btn-regular btn-regular-md-full d-block w-100 text-white fw-bolder rounded-pill" variant="info" type="submit">
                                    Send Message
                                </button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Contact;