import './Review.css'
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';

const Review = () => {
   
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user}=useFirebase()
    const onSubmit = (data) => {
        fetch('https://rafi-automobile-server-side.onrender.com/addReview',{

            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
            })
            .then((res)=>res.json())
            .then((result)=>console.log(result))
        console.log(data);
    }

   

    return (
        <>
            <h2 className="aligining">PLEASE ADD A REVIEW TO US</h2>
       
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="container p-2 m-2" name="name" placeholder="Name" {...register("name", { required: true })} />
      <br />
      <input className="container p-2 m-2" name="email" value={user?.email} type="email"  {...register("email", { required: true })} />
      <br />
      <input className="container p-2 m-2" name="comments" placeholder="Comments" {...register("comments", { required: true })} />
      <br />
      <input className="container p-2 m-2" name="rating" type="number" placeholder="Enter Rating(Out of 5)" {...register("number", { min: 0, max: 5 })} />
     <br />
      <input className="container p-2 m-2" type="submit" />
    </form>

  




          
        </>
    );
};

export default Review;