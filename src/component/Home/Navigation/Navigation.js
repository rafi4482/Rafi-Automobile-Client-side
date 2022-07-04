import React from 'react';
import { Container,  Navbar, Nav  } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

import './Navigation.css';

const Navigation = () => {
  const{user,logOut}=useAuth()

    return (
        <>
                     
            <Navbar className="alignnavbar" bg="light" expand="lg">
  <Container className="alignnavbar">
    <Navbar.Brand href="#home">RAFI AUTOMOBILE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/explore">Explore</Nav.Link>
        <Nav.Link href="/puchase/:id">Purchase</Nav.Link>
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>     
        {user.email &&  <span className='style' style={{color:'black'}}>{user.displayName}</span>
}      {       
        user.email?
       
        <button style={{margin:"5px",borderRadius:'5px',backgroundColor:'blue',color:'white'}} onClick={logOut}>Logout</button>:
        <Nav.Link href="/login">Login</Nav.Link>}
        
        
    
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Navigation;