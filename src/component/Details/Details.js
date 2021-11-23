import React, { useEffect, useState } from 'react';
import './Details.css'
import { Card } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import { useForm } from "react-hook-form";

import { useParams } from 'react-router';

import useAuth from '../../hooks/useAuth';

const Details = () => {
    // const allContexts=useFirebase()
    let { id } = useParams();
    const [detail, setDetail] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://ghastly-warlock-50283.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetail(data)
                // console.log(data);
            })
            .catch((error) => console.log(error))
    }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.email = user.email
        console.log(data);
        fetch('https://ghastly-warlock-50283.herokuapp.com/confirmOrder', {

            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((result) => console.log(result))
        // console.log(data);
    }










    return (
        <>

            <h2 className="header-align">Order Details</h2>
            <div className="row">
                <div className="col-md-7">
                    <Card className="container bg-dark text-white">
                        <Card.Img className="w-100" src={detail.img} alt="Card image" />

                        <Card.Title>{detail.name}</Card.Title>
                        <Card.Text>
                            {detail.desc}
                        </Card.Text>
                        <Card.Text>
                            price: {detail.price}
                        </Card.Text>

                    </Card>
                </div>
                <div className="col-md-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="p-2 m-2" {...register("name", { required: true })} defaultValue={detail?.name} />
                        <input className="p-2 m-2" {...register("desc", { required: true })} defaultValue={detail?.desc} />
                        <input className="p-2 m-2" {...register("price", { required: true })} defaultValue={detail?.price} type="number" />
                        <input className="p-2 m-2" {...register("img", { required: true })} defaultValue={detail?.img} />


                        {errors.exampleRequired && <span>This field is required</span>}

                        <input type="submit" />
                    </form>

                </div>
            </div>





        </>
    );
};

export default Details;