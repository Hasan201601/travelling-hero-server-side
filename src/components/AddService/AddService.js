import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../Home/Header/Header';
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/offerings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added new offering successfully')
                    reset()
                }
            })
    }
    return (
        <div>
            <Header></Header>
            <div className="pt-5">

                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center add-service-form">
                    <h1>Add New Offering</h1>
                    <input type="text" {...register("title", { required: true, maxLength: 50 })} placeholder="Tour Title" />
                    <textarea type="text" {...register("description")} placeholder="Tour Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input type="text" {...register("imgUrl")} placeholder="image url" id="" />
                    <input className="btn-regular" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;

/*
https://i.ibb.co/xjyn0h7/p1.jpg
https://i.ibb.co/pw8K8FT/p2.jpg
https://i.ibb.co/Zdp7VcC/p3.jpg
https://i.ibb.co/j8Qpkd3/p4.jpg
https://i.ibb.co/W6bZmjv/p5.jpg
https://i.ibb.co/yNzf2L0/p6.jpg
 */