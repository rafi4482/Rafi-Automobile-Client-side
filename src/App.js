import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Explore from './component/Explore/Explore';
import NotFound from './component/NotFound/NotFound';
import Purchase from './component/Purchase/Purchase';
import AddProduct from './component/AddProduct/AddProduct';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import AuthProvider from './context/AuthProvider';
import Navigation from './component/Home/Navigation/Navigation';
import PrivateRoute from './Private/PrivateRoute';
import MyBookings from './component/MyBookings/MyBookings';
import Dashboard from './component/Dashboard/Dashboard';
import MakeAdmin from './component/MakeAdmin/MakeAdmin';
import Footer from './component/Footer/Footer';

import ManageOrder from './component/ManageOrder/ManageOrder';
import ManageProduct from './component/ManageProduct/ManageProduct';

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <Navigation/>
    <Switch>
          <Route exact path="/explore">
          <Explore></Explore>
          </Route>
          <Route exact path="/add">
          <AddProduct></AddProduct>
          </Route>
          {/* <Route exact path="/puchase">
          <Purchase></Purchase>
          </Route>  */}
          <PrivateRoute exact path="/purchase/:id">
          <Purchase></Purchase>
          </PrivateRoute>
          <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <Route exact path="/myOrder">
           <MyBookings></MyBookings>
          </Route>
         
          <Route exact path="/home">
           <Home></Home>
          </Route>
        
          <Route path="/dashboard">
          <Dashboard></Dashboard>
          </Route>
          <Route exact path="/makeAdmin">
           <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path="/manageOrder">
           <ManageOrder></ManageOrder>
          </Route>
          <Route exact path="/manageProduct">
           <ManageProduct></ManageProduct>
          </Route>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route exact path="*">
           <NotFound></NotFound>
          </Route>
        </Switch>
        </Router>
        <Footer></Footer>
    </AuthProvider>
    
     
    </>
  );
}

export default App;
