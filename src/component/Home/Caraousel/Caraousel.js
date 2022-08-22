import React from 'react';
import './Carousel.css'
import { Carousel } from 'react-bootstrap';

import image4 from '../../../images/4.jpg'
import image6 from '../../../images/6.jpg'
import image7 from '../../../images/7.jpg'
const Caraousel = () => {
  return (
    <>
      <Carousel className="margin">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Budapest</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image7}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Berlin</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image6}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Amsterdam</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Caraousel;