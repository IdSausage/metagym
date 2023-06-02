import React, { useState , useContext} from 'react';
import '../styles/Login.css';
import logo from '../../Images/Logo.png'
import {Typography} from '@mui/material';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import { Link } from 'react-scroll';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../../authContext';
import Axios2 from '../Axios2';

const headerStyle = {
    textAlign: 'center' , 
    fontFamily: 'Oswald' , 
    fontWeight: 600
};

const StoreLogin = () => {

  const navigate = useNavigate();

  const [inputs , setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = e => {
    setInputs(prev => ({...prev , [e.target.name]:e.target.value}));
  }
  console.log(inputs);

  const handleSubmit = async () =>{
    try{ 
         await Axios2.post("/store/login" , inputs);
    }
    catch(e)
    {
        console.log(e)
    }
  }

  return (
    <div className='login-container'>
        <div className='login-header'>
            <img className='login-logo' src={logo} alt="" />
            <Typography variant='h4' style={headerStyle}>Log in</Typography>
        </div>
        <div className='login-form'>
            <label >Email</label>
            <FormInput Onchange={handleChange} name = "email" size='inp-medium' buttonStyle='radius-box' placeholder = 'Enter email or phone number'/>
            <label>Password</label>
            <FormInput Onchange={handleChange} name = "password" size='inp-medium' buttonStyle='radius-box' placeholder = 'password'/>
        </div>
        <div onClick={() => navigate('/store')} className='login-nav'>
            <Button Onclick={handleSubmit} buttonText='Log in' mode='btn-primary' size='btn-medium' color='red-primary'/>
            <Link to='/' className='forgot-password'>forgot the password?</Link>
        </div>
    </div>
  )
}

export default StoreLogin