import './HomeReview.css'
import React, { useEffect, useState } from 'react';

const HomeReview = () => {

    const [review,setReview]=useState([])
    
    useEffect(() => {
        fetch('https://secret-castle-09652.herokuapp.com/getReview')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div>
            <h2 className="review-align">OUR CUSTOMER REVIEWS</h2>
            <div className="card-review">

            <div className="row">

    {review?.map((reviews) => <div key={reviews?._id} className='col-md-4'>
            <div className="card-styling">
                
                <h1>NAME:{reviews?.name}</h1>
                <h1>EMAIL:{reviews?.email}</h1>
                <h1>RATING:{reviews?.number}</h1>
                <p>{reviews?.comments}</p>
                  
            </div>
        </div>)
    }


</div>


</div>
        </div>
    );
};

export default HomeReview;