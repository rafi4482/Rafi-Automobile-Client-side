import React from 'react';
import { Carousel } from 'react-bootstrap';
import './TopBanner.css'
import i1 from '../../../images/4.jpg'
import i2 from '../../../images/5.jpg'
import i3 from '../../../images/6.jpg'


const TopBanner = () => {
    return (
        <Carousel className="margin">
        <Carousel.Item>
          <img
            className="w-100"
            src={i1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>MCLAREN</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={i2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>FERRARI</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={i3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>BMW</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default TopBanner;