import React from 'react';
import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#0b2c5e' }}>
            <div className='footer-bg footer'>
                <Container>
                    <Row className='text-md-start text-center py-5 text-white'>
                        <Col lg={4} sm={12}>
                            <div >
                                <h3><span className='text-white'>About Us</span></h3>
                                <p className='detail py-3'>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. <br /> We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <div className="mb-5">
                                <h3 className="mb-5">Keep Updated</h3>
                                <i className="fab fa-facebook fa-2x me-4"></i><i className="fab fa-twitter fa-2x me-4"></i><i className="fab fa-linkedin-in fa-2x"></i>
                            </div>

                        </Col>
                        <Col lg={4} sm={12}>
                            <h3 className='pb-2'>Get In Touch</h3>
                            <div>
                                <div className="d-md-flex">
                                    <div>
                                        <i className="fas fa-map-marker-alt my-2 mx-md-3 mx-0"></i>
                                    </div>
                                    <div>
                                        <p className="m-0">34 Taltola Road</p>
                                        <p className="m-0">Sadar, Tottenham 1234 BD</p>
                                    </div>
                                </div>
                                <div className="d-md-flex" >
                                    <div>
                                        <i className="fas fa-envelope my-2 mx-md-3 mx-0"></i>
                                    </div>
                                    <div>
                                        <small>Do you have a Question?</small>
                                        <p className="m-0">info@gmail.com</p>
                                    </div>
                                </div>
                                <div className="d-md-flex" >
                                    <div>
                                        <i className="fas fa-phone my-2 mx-md-3 mx-0"></i>
                                    </div>
                                    <div>
                                        <small>Coll Us Now!</small>
                                        <p className="m-0">+898 68679 575</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="text-center text-white py-2" style={{ backgroundColor: 'rgb(3 16 36)' }}>
                    <small>Copyright &copy; 2021 by Travelling Hero </small>
                </div>
            </div>
        </div >
    );
};


export default Footer;