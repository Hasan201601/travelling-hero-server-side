import { map } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders)
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDeleteOrder = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingOrders = orders.filter(order => order._id !== id);
                    console.log(remainingOrders)
                    setOrders(remainingOrders);
                    alert('Deleted successfully')
                }
            })

    }


    return (
        <div>
            <Header></Header>
            <div className='pt-5'>
                <Container>
                    {
                        orders.map(order => <ManageSingleOrder key={order._id} order={order} handleDeleteOrder={handleDeleteOrder}></ManageSingleOrder>)
                    }
                </Container>
            </div>
        </div>
    );
};

export default ManageAllOrders;