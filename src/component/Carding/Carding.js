import './Carding.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Carding = () => {


    const [card, setCard] = useState([])


    useEffect(() => {
        fetch('https://ghastly-warlock-50283.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setCard(data))
       .catch(error => console.log(error))

        

    }, [])
    return (
        <div className='heade-align'>
            <h1>OUR SERVICES</h1>
            <div className="card-details">

                <div className="row">

                    {

                        card.map(cards => <div key={cards._id} className='col-md-4'>
                            <div className="carding">
                                <div className="image">
                                    <img className='w-50' src={cards.img} alt="" />
                                </div>
                                <h1>{cards.name}</h1>
                                <p>{cards.desc}</p>
                                <Link to={`/details/${cards._id}`}>
                                    <button className="btn btn-warning">Book Now</button>
                                </Link> 
                            </div>
                        </div>)
                    }


                </div>


            </div>
        </div>
    );
};

export default Carding;