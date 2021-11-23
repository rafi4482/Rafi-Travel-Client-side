import React from 'react';
import { Card } from 'react-bootstrap';
import Foot from '../../Foot/Foot';
import Carding from '../Carding/Carding';
import Caraousel from './Caraousel/Caraousel';
import Offer from './Offer/Offer';
import Progress from './Progress/Progress';


const Home = () => {
    return (
        <div>
            <Caraousel />
            <Carding></Carding>
            <Offer />
            <Progress></Progress>
        </div>
    );
};

export default Home; 