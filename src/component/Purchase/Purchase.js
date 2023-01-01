import './Purchase.css'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useFirebase from '../../hooks/useFirebase';
import React, { useEffect, useState } from 'react';


const Purchase = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    let { id } = useParams();
    const{user}=useFirebase()
    // console.log(id);
    const [purchase, setPurchase] = useState([])   
    

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
       
        data.email=user?.email
        data.status="pending"
        fetch('https://rafi-automobile-server-side.onrender.com/placeorder',{

            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
            })
            .then((res)=>res.json())
            .then((result)=>console.log(result))
            console.log(data);
            alert('product successfully added')
    }
    useEffect(() => {
        fetch(`https://rafi-automobile-server-side.onrender.com/addproduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setPurchase(data)
              
            //  console.log(data);
            })
    }, [])

    return (
        <>
           <div className="container">
           <h2 className="form-align">PLEASE CONFIRM YOUR ORDER</h2>
            
            <Card className="container bg-dark text-white">
                <Card.Img className="w-100" src={purchase.img} alt="Card image" />
               
                    <Card.Title>CAR NAME:{purchase.name}</Card.Title>
                    <Card.Text>
                  PRICE: ${purchase.price}
                    
                    </Card.Text>
                    <Card.Text>
                    {purchase.desc}
                    
                    </Card.Text>
                    
            </Card> 
            <form className="form-align" onSubmit={handleSubmit(onSubmit)}>
            <input className="p-2 m-4" {...register("name", { required: true })} defaultValue={purchase.name} placeholder="Name" />
            <input className="p-2 m-4"{...register("desc", { required: true })} defaultValue={purchase.desc} placeholder="Description"/>
            <input className="p-2 m-4"{...register("price", { required: true })} defaultValue={purchase.price} type="number" placeholder="Price"/>
            <input className="p-2 m-4"{...register("img", { required: true })} defaultValue={purchase.img} placeholder="ImageLink"/>
            
  
    {errors.exampleRequired && <span>This field is required</span>}
    
    <input type="submit" value="Order" />
  </form>
           </div>
           
        </>
    );
};

export default Purchase;