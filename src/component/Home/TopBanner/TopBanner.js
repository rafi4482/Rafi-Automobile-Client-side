import React from 'react';
import { Carousel } from 'react-bootstrap';
import './TopBanner.css'
import i1 from '../../../images/1.jpg'
import i2 from '../../../images/2.jpg'
import i3 from '../../../images/3.jpg'


const TopBanner = () => {
    return (
        <Carousel className="margin">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={i1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>AUDI</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={i2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>BUGATTI</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={i3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>MCLAREN</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default TopBanner;