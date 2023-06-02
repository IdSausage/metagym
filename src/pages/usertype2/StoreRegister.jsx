import React, { useState } from 'react';
import './style/Storeregister.css';
import profile from '../../Images/Profile.png';
import logo from '../../Images/Logo.png';
import country from '../../Images/Country.png';
import location from '../../Images/Ping_location.png';
import Button from '../../components/Button';
import { Typography } from '@mui/material';
import FormInput from '../../components/FormInput';
import {useNavigate} from 'react-router-dom';
import Axios2 from '../Axios2';

const StoreRegister = () => {

    const navigate = useNavigate();

    const [inputs,setInputs] = useState({
        country:"",
        phoneNumber:"",
        firstName:"",
        middleName:"",
        lastName:"",
        email:"",
        password:"",
    });

    const handleChange = e => {
        setInputs(prev => ({...prev , [e.target.name]:e.target.value}));
    }

    const handleSubmit = async () => {
        try{
            await Axios2.post("/store/register" , inputs);
            navigate("create-account");
        }
        catch(e)
        {
            console.log("this is not work")
        }
    }

    console.log(inputs);

    return (
        <div className='s_reg-container'>
            <img className="s_reg-profile" src={profile} alt="" />
            <div className='s_reg-main'>
                <div className='s_reg-header'>
                    <img className='s_reg-logo' src={logo} alt="" />
                    <Typography variant='h4'>Sign up</Typography>
                </div>
                <div className='s_reg-form'>
                    <label>Country:</label>
                    <div className='s_reg-spe-inp'>
                        <img className='s_reg-icon' src={country} alt="" />
                        <FormInput name="country" Onchange={handleChange} placeholder='Enter your country' size='inp-medium' buttonStyle='box' />
                    </div>
                    <label>Phone number:</label>
                    <FormInput name="phoneNumber" Onchange={handleChange} placeholder='Enter your phone number' size='inp-medium' buttonStyle='box' />
                    <div style={{ display: 'flex', columnGap: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>First name:</label>
                            <FormInput name="firstName" Onchange={handleChange} size='inp-extra-small' buttonStyle='box' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Middle name:</label>
                            <FormInput name="middleName" Onchange={handleChange} size='inp-extra-small' buttonStyle='box' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Last name:</label>
                            <FormInput name="lastName" Onchange={handleChange} size='inp-extra-small' buttonStyle='box' />
                        </div>
                    </div>
                    <label>Email:</label>
                    <FormInput name="email" Onchange={handleChange} placeholder='Enter your Email' size='inp-medium' buttonStyle='box' />
                    <label>Password:</label>
                    <FormInput name="password" Onchange={handleChange} placeholder='Enter password' size='inp-medium' buttonStyle='box' />
                    <div onClick={() => navigate('select-location')} style={{display:'flex' , columnGap: '10px' ,alignItems:'center' ,cursor: 'pointer'}}>
                        <img className='s_reg-icon' src={location} alt="" />
                        <Typography variant='body2'>select your location</Typography>
                    </div>
                </div>
                <div className='s_reg-nav'>
                    <Button Onclick={handleSubmit} mode='btn-inactive' size='btn-medium' color='grey-inactive' buttonText='Next'/>
                </div>
            </div>
        </div>
    )
}

export default StoreRegister