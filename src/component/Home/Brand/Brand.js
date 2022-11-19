import './Brand.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Brand = () => {

    const [brand,setBrand]=useState([])
    
    useEffect(() => {
        fetch('https://rafi-automobile-server-side.onrender.com/addproduct')
            .then(res => res.json())
            .then(data => setBrand(data))
       .catch(error => console.log(error))
    }, [])
    return (
        <>
        <h1 className="header-align">OUR COLLECTIONS</h1>
        <div className="card-details">

            <div className="row">

                {brand?.slice(0,6).map((brands) => <div key={brands?._id} className='col-md-4'>
                        <div className="carding">
                            <div className="image">
                                <img className='w-50' src={brands?.img} alt="" />
                            </div>
                            <h1>{brands?.name}</h1>
                                <h1>{brands?.price}</h1>
                             <p>{brands?.desc}</p> 
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut vel labore at, voluptates unde enim sit sapiente beatae nisi.</p> */}
                             <Link to={`/purchase/${brands?._id}`}>
                                <button className="btn btn-warning">Purchase</button>
                            </Link>  
                        </div>
                    </div>)
                }


            </div>


        </div>
    </>
    );
};

export default Brand;