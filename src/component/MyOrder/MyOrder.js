import React, { useEffect, useState } from 'react';
import './MyOrder.css'
import { Button, Card } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth()
    const [services, setServices] = useState([])
const[isDeleted,SetIsDeleted]=useState(null)
    console.log(user)
    
    useEffect(() => {
        fetch(`https://rafi-travel-server-side.onrender.com/myOrder/${user?.email}`)
            .then(res => res.json())
            .then((data) => setServices(data))
    }, [isDeleted])


    const handleDelete = (id) => {
        fetch(`https://rafi-travel-server-side.onrender.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers:{"content-type": "application/json"},
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                     alert("Are you sure to cancel booking?")
                    // const remaining = services.filter(orders => orders._id === id)
                    // setServices(remaining)
                    // setControl(!control);
                    SetIsDeleted(true)
                    alert("Booking cancelled successfully")
                }
                else{
                    SetIsDeleted(false)
                    
                }
            })
    }
    console.log(services)
    return (
        <>
        
            <h2 className="header-align">My Order</h2>
            <div className="row cards-align">
           

                {

                    services.map(serv => <div key={serv._id} className='col-md-4'>
                       
                        <div className="carding">
                            <div className="image">
                                 <img className='w-50' src={serv?.img} alt="" /> 
                            </div>
                           
                            <h1>{serv?.name}</h1>
                            <p>{serv.price}</p>
                            <p>{serv.desc}</p>
                            <button
                                onClick={() => handleDelete(serv?._id)}
                                className="btn btn-danger">Cancel booking</button>
                        </div>
                        
                    </div>)

                }


            </div>
        </>
    );
};

export default MyOrder;