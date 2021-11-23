import './Progress.css'
import React from 'react';
import {  Badge, ListGroup } from 'react-bootstrap';

const Progress = () => {
  return (
    <>

      <div className="heade-align"><h1>UPCOMING HOT SUMMER DEALS</h1></div>

      <div className="container">
      <ListGroup as="ol" numbered>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">BUDAPEST TOUR</div>
      FULL CAPITAL CITY TOUR ALONG WITH 2 NIGHTS AND 3 DAYS ACCOMMODATION
    </div>
    <Badge variant="primary" pill>
      400$
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">VIENNA TOUR</div>
      FULL CAPITAL CITY TOUR ALONG WITH 2 NIGHTS AND 3 DAYS ACCOMMODATION
    </div>
    <Badge variant="primary" pill>
      410$
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">POZNAN TOUR</div>
      FULL CAPITAL CITY TOUR ALONG WITH 2 NIGHTS AND 3 DAYS ACCOMMODATION
    </div>
    <Badge variant="primary" pill>
      420$
    </Badge>
  </ListGroup.Item>
</ListGroup>
        <div>
 
</div>
      </div>

    </>
  );
};

export default Progress;