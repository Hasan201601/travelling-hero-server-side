import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import './About.css';

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className='pt-1'>
                <div className='text-white text-center about-bg py-5'>
                    <div className='py-5'>
                        <h3 className='fw-bold pt-5 text-shadow'>EVERYTHING ABOUT US</h3>
                        <p className='fs-5 fw-bold pb-5 text-shadow'>Travel with us and go beyond your imagination!</p>
                    </div>
                </div>
                <Container className='py-5 my-5'>
                    <Row className='text-start'>
                        <Col lg={6} sm={12} >
                            <h3 className='fw-bold'>About Us</h3>
                            <hr />
                            <p>he World Travel Guide (WTG) is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back 30 years, with the online portal reaching its 19-year anniversary in 2018. Available in English, German, French and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes. Updated every day by a dedicated global editorial team, the portal logs 1 million+ unique users monthly.</p>
                        </Col>
                        <Col lg={6} sm={12}>
                            <h3 className='fw-bold'>Our Mission</h3>
                            <hr />
                            <p>Columbus Travel Media (CTM) is one of the most respected and successful names in the global travel industry, with a long and rich company heritage spanning 30 years. The definitive resource for global travel content, its reputation has been built on journalistic credibility. CTM is dedicated to the provision of objective, accurate, informative and reliable travel content in various formats, including the World Travel Guide for consumers, Columbus Travel Professional for travel industry professionals and extensive licensed and bespoke content for commercial partners through its specialist division, Columbus Content Solutions. A fast-growing, pioneering and diverse global travel content business, contact us to find out more about us.</p>
                        </Col>
                    </Row>
                </Container>
                <div className="shadow-lg">
                    <Container>
                        <Row className='py-3 text-center'>
                            <Col lg={3} md={6} sm={12}>
                                <i className="fas fa-bus-alt fa-4x text-secondary"></i>
                                <h5 className='py-3 fw-bold'>PRIVATE TRANSPORTS</h5>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <i className="fas fa-road fa-4x text-secondary"></i>
                                <h5 className='py-3 fw-bold'>DIVERSE DESTINATIONS</h5>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <i className="fas fa-wine-glass-alt fa-4x text-secondary"></i>
                                <h5 className='py-3 fw-bold'>DRINKS INCLUDED</h5>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <i className="fas fa-house-user fa-4x text-secondary"></i>
                                <h5 className='py-3 fw-bold'>FAST BOOKING</h5>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;