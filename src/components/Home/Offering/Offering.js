import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Offering.css'

const Offering = ({ offering }) => {
    const { title, description, price, imgUrl, _id } = offering;
    const history = useHistory();
    const goPlaceOrder = id => {
        history.push(`/placeorder/${id}`)
    }
    return (
        <Col xs={12} md={4}>
            <div className="shadow-lg">
                <img src={imgUrl} style={{ minHeight: '300px', objectFit: 'cover' }} className="img-fluid" alt="" />
                <div className="my-3 p-3">
                    <h4>{title}</h4>
                    <p>{description.slice(0, 100)}</p>
                    <h6>Price : ${price}</h6>
                    <button onClick={() => goPlaceOrder(_id)} className="btn-regular">Book Now</button>
                </div>
            </div>

        </Col>
    );
};

export default Offering;