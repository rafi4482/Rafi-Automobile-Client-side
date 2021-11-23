import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ManageProduct = () => {
    const [order,setOrder]=useState([])
    
    useEffect(() => {
        fetch('https://secret-castle-09652.herokuapp.com/addproduct')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const handleDelete=(id)=>{
        fetch(`https://secret-castle-09652.herokuapp.com/deleteOrderAdmin/${id}`,{
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
            {/* <Navigation></Navigation> */}
            <h1 className="align">DELETE PRODUCT</h1>
        <div className='heade-align'>
        
        <div className="card-details">

            <div className="row">

                {

                    order.map(brands => <div key={brands._id} className='col-md-4'>
                        <div className="carding">
                            <div className="image">
                                <img className='w-50' src={brands.img} alt="" />
                            </div>
                            <h1>{brands.name}</h1>
                                <h1>{brands.price}</h1>
                            <p>{brands.desc}</p>
                            <Button onClick={()=>handleDelete(brands?._id)} className="btn btn-danger">DELETE</Button>
                        </div>
                    </div>)
                }


            </div>


        </div>
    </div>
        </>
    );
};

export default ManageProduct;