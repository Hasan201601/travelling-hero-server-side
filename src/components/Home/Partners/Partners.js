import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Partners = () => {
    return (
        <div style={{ backgroundColor: 'aliceblue', margin: '20px 0 0', padding: "20px 0" }}>
            <h3 className="text-center my-3">Our Partners</h3>
            <Container>
                <Row className="g-3">
                    <Col className="shadow-lg m-2 my-2">
                        <img className="d-block m-auto p-2" src="https://i.ibb.co/8mt37gz/294695-amazon-icon.png" alt="" />
                    </Col>
                    <Col className="shadow-lg m-2 my-2">
                        <img className="d-block m-auto p-2" src="https://i.ibb.co/qJYkcZN/317725-linkedin-social-icon.png" alt="" />
                    </Col>
                    <Col className="shadow-lg m-2 my-2">
                        <img className="d-block m-auto p-2" src="https://i.ibb.co/7yF9K0p/2993685-brand-brands-google-logo-logos-icon.png" alt="" />
                    </Col>
                    <Col className="shadow-lg m-2 my-2">
                        <img className="d-block m-auto p-2" src="https://i.ibb.co/BCgCMBL/5296499-fb-facebook-facebook-logo-icon.png" alt="" />
                    </Col>
                    <Col className="shadow-lg m-2 my-2">
                        <img className="d-block m-auto p-2" src="https://i.ibb.co/5GBhgRz/5869378-alibaba-ecommerce-shopping-icon.png" alt="" />
                    </Col>
                    <Col className="shadow-lg m-2 my-2">
                        <img className="d-block m-auto p-2" src="https://i.ibb.co/2jqFLLd/7422457-kfc-burger-hamburger-fast-food-cheeseburger-icon.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Partners;





