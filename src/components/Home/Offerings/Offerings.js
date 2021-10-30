import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Offering from '../Offering/Offering';

const Offerings = () => {
    const [offerings, setOfferings] = useState([]);
    console.log(offerings)
    useEffect(() => {
        fetch('http://localhost:5000/offerings')
            .then(res => res.json())
            .then(data => setOfferings(data))
    }, [])
    return (
        <div className="my-5 text-center">
            <h1 className="my-4">Our Tour Plans</h1>
            <Container>
                <Row className="g-4">
                    {
                        offerings.map(offering =>
                            <Offering
                                key={offering._id}
                                offering={offering}
                            ></Offering>
                        )
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Offerings;