import React from 'react';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch('https://rafi-automobile-server-side.onrender.com/makeAdmin',{

            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
            })
            .then((res)=>res.json())
            .then((result)=>console.log(result))
        console.log(data);
    }
    return (
        <>
            <h2>make admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
    
      
      
    
      <input name="email" type="email" placeholder="Email"  {...register("email", { required: true })} />
      
     
      <input value="Make Admin" type="submit" />
    </form>
        </>
    );
};

export default MakeAdmin;