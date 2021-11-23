import React from 'react';
import './Offer.css'
import { Table } from 'react-bootstrap';

const Offer = () => {
    return (
        <>
    <div className="container list-alig">
                <h1>WE MANAGE TRAVEL FOR</h1>
            <Table striped bordered hover variant="dark">
 
 <tbody>
   <tr>
     <td>Hungary</td>
     <td>Finland</td>
     <td>Norway</td>
     <td>Denmark</td>
   </tr>
   <tr>
     <td>England</td>
     <td>Scotland</td>
     <td>Ireland</td>
     <td>Switzerland</td>
   </tr>
   <tr>
     <td>Iceland</td>
     <td>Croatia</td>
     <td>Austria</td>
     <td>Netherlands</td>
   </tr>
 </tbody>
</Table>
            </div>
        </>
    );
};

export default Offer;