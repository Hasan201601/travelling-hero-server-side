import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Home/Header/Header';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth()
    const [offering, setOffering] = useState([]);
    const history = useHistory()
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        const url = `http://localhost:5000/offerings/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOffering(data))
    }, [])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.orderItem = offering._id;
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added new offering successfully')
                    reset()
                    history.push('/home')
                }

            })
    }
    return (

        <div>
            <Header></Header>
            <Container className="mt-5">
                <Row md={2} className="">
                    <Col>
                        <img src={offering.imgUrl} className="img-fluid img-thumbnail" alt="" />
                        <div className="my-4">
                            <h2 className="my-2">{offering.title}</h2>
                            <h4>Tour Cost : ${offering.price}</h4>
                            <p className="desc">{offering.description}</p>
                        </div>
                    </Col>
                    <Col className="px-3">
                        <h3 className="mb-4 text-left">Add Shipping Address</h3>
                        <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center form-book">

                            <Form.Control className="mb-4" type="text" {...register("title", { required: true, maxLength: 50 })} defaultValue={user.displayName} placeholder="Tour Title" />
                            <Form.Control className="mb-4" type="text" {...register("description")} placeholder="email" defaultValue={user.email} />
                            <Form.Control className="mb-4" type="text" {...register("address1")} placeholder="Address1" />
                            <Form.Control className="mb-4" type="number" {...register("phone")} placeholder="Phone Number" />
                            <Form.Control className="mb-4" type="text" {...register("city")} placeholder="City" />
                            <Form.Control className="mb-4" type="text" {...register("postalCode")} placeholder="Postal Code" />
                            <Form.Control className="mb-4" type="text" {...register("zipCode")} placeholder="Zip Code" />
                            <Form.Control className="mb-4" type="date" {...register("date")} />
                            <input className="btn-regular btn-regular-md-full" type="submit" value="Confirm Booking" />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;