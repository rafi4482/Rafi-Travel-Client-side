import React from 'react';
import './Foot.css'
import { Col, Container, Row } from 'react-bootstrap';

const Foot = () => {
    return (
        <>
        
      <div className="footer-design">

<div className="footer-content">
            <h3>RAFI TRAVEL</h3>
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
            
        </>
 );
};

export default Foot;