import React from 'react';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';


const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch('https://ghastly-warlock-50283.herokuapp.com/addServices', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((result) => console.log(result))
        console.log(data);
    }
    return (
        <div>
            <h2 className="header-align">Add A New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="p-2 m-2" {...register("name", { required: true })} placeholder="Name" />
                <input className="p-2 m-2" {...register("desc", { required: true })} placeholder="Description" />
                <input className="p-2 m-2" {...register("price", { required: true })} type="number" placeholder="Price" />
                <input className="p-2 m-2" {...register("img", { required: true })} placeholder="ImageLink" />


                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;