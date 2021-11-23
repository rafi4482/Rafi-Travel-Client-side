import React from 'react';
import './Carousel.css'
import { Carousel } from 'react-bootstrap';
import image1 from '../../../images/1.jpg'
import image2 from '../../../images/2.jpg'
import image3 from '../../../images/3.jpg'
const Caraousel = () => {
  return (
    <>
      <Carousel className="margin">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Budapest</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Helsinki</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Frankfurt</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Caraousel;