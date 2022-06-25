import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { Switch,Route, Link,useRouteMatch } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyBookings from '../MyBookings/MyBookings';
import Review from '../Review/Review';
import ManageOrder from '../ManageOrder/ManageOrder';
import ManageProduct from '../ManageProduct/ManageProduct';

const Dashboard = () => {
    let{path,url}=useRouteMatch()
    const {user}=useFirebase()

    const[isAdmin,setIsAdmin]=useState(false)

    useEffect(() => {
         fetch(`https://secret-castle-09652.herokuapp.com/checkAdmin/${user.email}`)
            .then(res => res.json())
            .then((data) => {
                if(data[0]?.role==="admin"){
                    setIsAdmin(true)
                }
                else{
                    setIsAdmin(false)
                }
            })
        

        

    }, [user?.email])

       console.log(isAdmin);



    return (
        <>
           
            <div className="dashboard-container container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="align dashboard">
                            <h4>DASHBOARD</h4>
                            <Link to={`${url}`} >
                               <li className="dashboard-menu">Pay </li>
                            </Link>
                            <Link to={`${url}/BookingList`} >
                               <li className="dashboard-menu">My Order </li>
                            </Link>
                            <Link to={`${url}/review`} >
                               <li className="dashboard-menu">Review </li>
                            </Link>
                            
                            <div className="admin-dashboard mt-4">    

                            {isAdmin&&<Link to={`${url}/addProduct`} >
                            <li className="dashboard-menu">Add A Product</li>
                            </Link>}

                        {isAdmin&&<Link to={`${url}/manageAllOrders`} >
                        <li className="dashboard-menu">Manage All Orders</li>
                        </Link>}

                            {isAdmin&&<Link to={`${url}/manageProducts`} >
                            <li className="dashboard-menu">Manage Products</li>
                            </Link>}
                            
                               {isAdmin&&<Link to={`${url}/makeAdmin`} >
                            <li className="dashboard-menu">Make Admin</li>
                            </Link>}
                           
                            </div>
                        </div>
                    </div>
                    <div className="container col-md-8">
                       <Switch>
                           <Route exact path={path}>
                               <h2 className='align'>Payment system coming soon</h2>
                           </Route>
                           <Route  path={`${path}/BookingList`}>
                                <MyBookings></MyBookings>
                           </Route>
                           <Route  path={`${path}/makeAdmin`}>
                               <MakeAdmin></MakeAdmin>
                           </Route>
                         
                           <Route  path={`${path}/addProduct`}>
                              <AddProduct></AddProduct>
                           </Route>
                           <Route  path={`${path}/manageProducts`}>
                             <ManageProduct></ManageProduct>
                           </Route>
                           <Route  path={`${path}/manageAllOrders`}>
                              <ManageOrder></ManageOrder>
                           </Route>

                           <Route  path={`${path}/review`}>
                               <Review></Review>
                           </Route>
                       </Switch>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Dashboard;