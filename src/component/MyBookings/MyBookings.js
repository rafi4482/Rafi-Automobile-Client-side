import './MyBookings.css'
import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';

const MyBookings = () => {
    const{user}=useFirebase()
    const email=user?.email
    const[order,setOrder]=useState([])
    const [control,setControl]=useState(false)
  
    useEffect(() => {
        fetch(`https://rafi-automobile-server-side.onrender.com/myOrder/${email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [email])

    const handleDelete=(id)=>{
        fetch(`https://rafi-automobile-server-side.onrender.com/deleteOrder/${id}`,{
               method:"DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.deletedCount){
                alert('are you sure to delete?')
                const remaining=order.filter(orders=>orders._id===id)
                setOrder(remaining)
                //setControl(!control);
            }
        })
    }
    return (
        <>
        <h1 className="header-align">My Order</h1>
        <div className="card-details">

            <div className="row">

                {order?.map((ordering) => <div key={ordering?._id} className='col-md-4'>
                        <div className="carding">
                            <div className="image">
                                <img className='w-50' src={ordering?.img} alt="" />
                            </div>
                            <h1>{ordering?.name}</h1>
                                <h1>{ordering?.price}</h1>
                            <p>{ordering?.desc}</p>
                            <button
                             onClick={()=>handleDelete(ordering?._id)}
                             className="btn btn-danger">DELETE</button> 
                        </div>
                    </div>)
                }


            </div>


        </div>
    </>
    );
};

export default MyBookings;