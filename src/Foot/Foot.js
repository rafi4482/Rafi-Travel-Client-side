import React from 'react';
import './Foot.css'
import { Col, Container, Row } from 'react-bootstrap';

const Foot = () => {
    return (
        <>
        <div className="footer-design">
        <Container>
  <Row>
    <Col>Rafi Travel
    <br />
    Address:58 Murray King Road,Budapest,Hungary
    </Col>
    <Col>CELL:+123-445-7778
    <br />
    EMAIL:
    <a href="">abcde@gmail.com</a>
  
    </Col>
  </Row>
</Container>
        </div>
            
        </>
 );
};

export default Foot;