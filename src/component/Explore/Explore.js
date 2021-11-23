import './Explore.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
    const [brand,setBrand]=useState([])
    
    useEffect(() => {
        fetch('https://secret-castle-09652.herokuapp.com/addproduct')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [])
    return (
        <>
            {/* <Navigation></Navigation> */}
            <h1 className="align">EXPLORE OUR BRAND NEW COLLECTIONS</h1>
        <div className='heade-align'>
        
        <div className="card-details">

            <div className="row">

                {

                    brand.map(brands => <div key={brands._id} className='col-md-4'>
                        <div className="carding">
                            <div className="image">
                                <img className='w-50' src={brands.img} alt="" />
                            </div>
                            <h1>{brands.name}</h1>
                                <h1>{brands.price}</h1>
                            <p>{brands.desc}</p>
                             <Link to={`/purchase/${brands._id}`}>
                                <button className="btn btn-warning">Purchase</button>
                            </Link>  
                        </div>
                    </div>)
                }


            </div>


        </div>
    </div>
        </>
    );
};

export default Explore;