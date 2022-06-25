import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import './Login.css'

initializeAuthentication()

const Login = () => {

  const auth = getAuth()
  const [email, setEmail] = useState("")
  const [passwpord, setPasswpord] = useState("")
  const[error,setError]=useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPasswpord(e.target.value)
  }

  const handlogin=(e)=>{
    e.preventDefault()
    console.log(email,passwpord)
   
   if(passwpord.length<6){
     setError('password must be atleast 6 characters')
     return
   }

   signInWithEmailAndPassword(auth,email,passwpord)
   .then((result) => {    
     
     console.log(result.user)   

     result.email=email
    
     setError('')
   })
   .catch((error) => {
     
     setError(error.message)    
   });
 
  
 
 }






  return (
    <>
      <h1 className="align2">Login</h1>
      <div className="align2">
        <Form onSubmit={handlogin}>
          <Form.Group onChange={handleEmailChange} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group onChange={handlePasswordChange} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Your Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className='text-danger'>{error}</div>
          <div className="btn-align">
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </div>

        </Form>

      </div>
      <div className="btn-align">
        <h4>New member?<Link to='/register'> Create an account</Link></h4>

      </div>
   

    </>
  );
};

export default Login;