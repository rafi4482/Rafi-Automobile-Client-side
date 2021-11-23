import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        fetch('https://secret-castle-09652.herokuapp.com/addproduct',{

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
            {/* <Navigation></Navigation> */}
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} placeholder="Name" />
            <input {...register("desc", { required: true })} placeholder="Description"/>
            <input {...register("price", { required: true })} type="number" placeholder="Price"/>
            <input {...register("img", { required: true })} placeholder="ImageLink"/>
            
  
    {errors.exampleRequired && <span>This field is required</span>}
    
    <input type="submit" />
  </form>
        </>
    );
};

export default AddProduct;