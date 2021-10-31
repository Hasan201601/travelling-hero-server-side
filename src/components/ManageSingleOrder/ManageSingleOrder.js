import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';

const ManageSingleOrder = ({ order, handleDeleteOrder }) => {
    const { title, price } = order.orderItem
    const { status, email, _id } = order

    const handleUpdateStatus = id => {
        const updatedOrder = { ...order }
        const url = `http://localhost:5000/orders/${id}`;

        updatedOrder.status = 'approved';
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order has been Approved')
                    window.location.reload()
                }
            })

    }
    return (
        <Container className='card mb-3 p-2 shadow w-75 mx-auto'>
            <Row className='d-flex align-items-center justify-content-evenly'>
                <Col lg={6} sm={12} className='text-lg-start text-center'>
                    <h5>{title}</h5>
                    <h6>Cost: ${price}</h6>
                    <h6>Name: ${title}</h6>
                    <h6>Email: ${email}</h6>
                    <h5 className='badge text-dark fs-6 bg-warning'>Status: {status}</h5>
                    <small className='d-block'>Order ID: {_id}</small>
                </Col>
                <Col lg={6} sm={12} className='text-end'>
                    <Button onClick={() => handleUpdateStatus(_id)} className='btn-success my-3 d-block w-50 mx-auto me-lg-0 mb-2 mb-lg-0'>Approve</Button>
                    <Button onClick={() => handleDeleteOrder(_id)} className='btn-danger my-3 d-block w-50 mx-auto me-lg-0 mb-2 mb-lg-0 '>Delete Order</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ManageSingleOrder;