import './HomeReview.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeReview = () => {

    const [review,setReview]=useState([])
    
    useEffect(() => {
        fetch('https://secret-castle-09652.herokuapp.com/getReview')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <>
        <h1 className="header-align">OUR CUSTOMER REVIEW</h1>
        <div className="card-details">

            <div className="row">

                {review?.map((reviews) => <div key={reviews?._id} className='col-md-3'>
                        <div className="carding5 mt-5">
                           
                            <h1 className='mt-5'>{reviews?.name}</h1>
                                <h1>{reviews?.price}</h1>
                             <p>{reviews?.desc}</p> 
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ut vel labore at, voluptates unde enim sit sapiente beatae nisi.</p> 
                            
                        </div>
                    </div>)
                }


            </div>


        </div>
    </>

// <div>

//         <div className="card-details">

//             <div className="row">

//     {review?.map((review) => <div key={review?._id} className='col-md-4'>
//              { <div className="card-styling">
                
//                 <h1>NAME:</h1>
      
//                 <h1>RATING:{review?.number}</h1>
//                 <p></p>
//                 <p>EMAIL:{review?.email}</p>

//             </div> 
            
//             <div className="carding-review">
//              <div className="image">
//                 <img className='w-50' src={review?.name} alt="" />
//             </div> 
//              <h1>{review?.name}</h1>
//             <h1>{review?.comments}</h1>
//                 <h1>{review?.comments}</h1>
//             <p>{review?.email}</p>
            
//          </div>

// <div class="cards">
// <div class="card card-1">
//   <div class="card__icon"><i class="fas fa-bolt"></i></div>
//   <p class="card__exit"><i class="fas fa-times"></i></p>
//    <h2 class="card__title">{review?.name}</h2>
//   <h2 class="mt-4 card__title">{review?.comments}</h2>

//   <p class="mt-4 pad card__title">{review?.email}</p>

 
// </div>
// </div>
//             }

            
          
//         </div>)
        
//     }

// </div>

// </div>
//         </div>
 





    );
};

export default HomeReview;