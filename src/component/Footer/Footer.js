import './Footer.css'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer-design">
    <Container>
    <Row>
    <Col>RAFI AUTOMOBILE
    <br />
    ADDRESS:55 DAVID QUEENS STREET AUS TEX US
    </Col>
    <Col>CELL:+123-445-7778
    <br />
    EMAIL:
    <a href="">abcde@gmail.com</a>
  
    </Col>
    <Col>
  <p>ALL RIGHTS RESERVED</p>
    </Col>
  </Row>
</Container>
        </div>
            
    );
};

export default Footer;