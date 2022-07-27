import './Footer.css'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
     
      <div className="footer-design">

<div className="footer-content">
            <h3>RAFI AUTOMOBILE</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo iste corrupti doloribus odio sed!</p>
            <ul className="socials">
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy;2020 </p>
        </div>
      </div>  
//         <div className="footer-design">
//     <Container>
//     <Row>
//     <Col>RAFI AUTOMOBILE
//     <br />
//     ADDRESS:55 DAVID QUEENS STREET AUS TEX US
//     </Col>
//     <Col>CELL:+123-445-7778
//     <br />
//     EMAIL:
//     <a href="">abcde@gmail.com</a>
  
//     </Col>
//     <Col>
//   <p>ALL RIGHTS RESERVED</p>
//     </Col>
//   </Row>
// </Container>
//         </div>
            
    );
};

export default Footer;