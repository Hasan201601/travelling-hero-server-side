import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Header from '../Home/Header/Header';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css'

const MyOrders = () => {
    const { user } = useAuth()
    const { email } = user;
    console.log(email)
    const [orders, setOrders] = useState([]);
    console.log(orders)
    useEffect(() => {
        const url = `https://creepy-crypt-29207.herokuapp.com/orders/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className='pt-5'>
                <Container>
                    <h4 className="text-center">My Orders</h4>

                    <div >
                        {
                            orders.map(order => <MyOrder key={order._id} order={order}></MyOrder>)
                        }

                    </div>
                </Container>
            </div>
        </div >
    );
};

export default MyOrders;