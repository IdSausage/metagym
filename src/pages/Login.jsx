import React, { useContext, useState } from 'react';
import './styles/Login.css';
import logo from '../Images/Logo.png'
import {Typography} from '@mui/material';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { Link } from 'react-scroll';
import {useNavigate} from 'react-router-dom';
import { AuthContext } from '../authContext';

const headerStyle = {
    textAlign: 'center' , 
    fontFamily: 'Oswald' , 
    fontWeight: 600
};

const Login = () => {

  const navigate = useNavigate();

  const [inputs,setInputs] = useState({
    username:"",
    password:"",
  })

  const [err , setError] = useState(null); 

  const {login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await login(inputs);
      navigate("/");
    }
    catch(e)
    {
      setError(e.response.data);
    }
  }

  console.log(inputs);

  return (
    <div className='login-container'>
        <div className='login-header'>
            <img className='login-logo' src={logo} alt="" />
            <Typography variant='h4' style={headerStyle}>Log in</Typography>
        </div>
        <div className='login-form'>
            <label >Username or Email</label>
            <FormInput name="username" Onchange={handleChange} size='inp-medium' buttonStyle='radius-box' placeholder = 'username or email'/>
            <label>Password</label>
            <FormInput name="password" Onchange={handleChange} size='inp-medium' buttonStyle='radius-box' placeholder = 'password'/>
        </div>
        <div className='login-nav'>
            <Button Onclick={handleSubmit} buttonText='Log in' mode='btn-primary' size='btn-medium' color='red-primary'/>
            <Link to='/' className='forgot-password'>forgot the password?</Link>
        </div>
    </div>
  )
}

export default Login