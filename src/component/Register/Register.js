import React, { useState } from 'react';
import './Register.css'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';


initializeAuthentication()

const Register = () => {
  const auth = getAuth()
  const [email, setEmail] = useState("")
  const [passwpord, setPasswpord] = useState("")
  const[error,setError]=useState('')
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }


  const handlePasswordChange = (e) => {
    setPasswpord(e.target.value)
  }

  const handreg=(e)=>{
    e.preventDefault()
    console.log(email,passwpord)
   if(passwpord.length<6){
     setError('password must be atleast 6 characters')
     return
   }

    createUserWithEmailAndPassword(auth,email,passwpord)
    .then((result) => {    
      
      console.log(result.user)   
      setError('')
    })
    .catch((error) => {
      
      setError(error.message)    
    });
  
   
  
  }

 
  return (
    <>

      <div className='b-align'>
        <h1>Register</h1>
      </div>


      <div className="reg-align">
        <Form onSubmit={handreg}>
          <Form.Group   onChange={handleEmailChange} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />

          </Form.Group>

          <Form.Group onChange={handlePasswordChange} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Emter Your Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
            <div className='text-danger'>{error}</div>
          <div className="b-align">
        <Button variant="primary" type="submit">
          Register
        </Button>
      </div>

        </Form>
      </div>
      
      <div className="b-align">
        <p>Already registered?<Link to='/login'>sign in</Link></p>
      </div>

    </>
  );
};

export default Register;