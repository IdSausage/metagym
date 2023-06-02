import React, { useState } from 'react';
import './style/Storeregister.css';
import './style/Createaccount.css';
import profile from '../../Images/Profile.png';
import Button from '../../components/Button';
import { Typography } from '@mui/material';
import FormInput from '../../components/FormInput';
import {useNavigate} from 'react-router-dom';
import Axios2 from '../Axios2';

const CreateAccount = () => {

  const navigate = useNavigate();

  const [inputs , setInputs] = useState({
    storeName: "",
    aboutStore: "",
    category: "",
  });

  const handleChange = e => {
    setInputs(prev => ({...prev , [e.target.name]:e.target.value}));
  }

  const handleSubmit = async () => {
    try{
        await Axios2.post("/store/create-account" , inputs);
        navigate("/store");
    }
    catch(e)
    {
        console.log(e);
    }
  }

  console.log(inputs)
    
  return (
    <div className='s_create-container'>
            <img className="s_reg-profile" src={profile} alt="" />
            <div className='s_reg-main'>
                <div className='s_reg-header'>
                    <Typography variant='h4' style={{margin: '50px 0'}}>Create account</Typography>
                </div>
                <div className='s_reg-form'>
                    <label>your store name:</label>
                        <FormInput name="storeName"  Onchange={handleChange} placeholder='Enter your store name' size='inp-medium' buttonStyle='box' />
                    <label>about your store:</label>
                    <FormInput name="aboutStore" Onchange={handleChange} addition='inp-description' size='inp-medium' buttonStyle='box' />
                    <label>Category:</label>
                    <FormInput name="category" Onchange={handleChange} size='inp-medium' buttonStyle='box' />
                </div>
                <div className='s_reg-nav'>
                    <Button Onclick={handleSubmit} mode='btn-inactive' size='btn-medium' color='grey-inactive' buttonText='Next'/>
                </div>
            </div>
        </div>
  )
}

export default CreateAccount