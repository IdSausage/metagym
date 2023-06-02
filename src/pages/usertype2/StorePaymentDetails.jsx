import React from 'react';
import '../styles/Paymentdetails.css';
import truemoney from '../../Images/truemoney.jpg';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import { Typography } from '@mui/material';

const allForm = [
    {
        id: 1,
        label: 'Card number:',
        placeholder: 'Enter card number',
    },
    {
        id: 2,
        label: 'CCV:',
        placeholder: 'Enter CCV',
    },
];

const StoreProductDetails = () => {
  return (
    <div className='payments_details-container'>
            <div className='details_top-nav'></div>
            <div className='details-header'>
                <img src={truemoney} alt="" />
                <Typography variant='h4'>Mastercard</Typography>
            </div>
            <div className='details-form'>
                {allForm.map((f) => (
                    <div key={f.id} className='details-inp'>
                        <label>{f.label}</label>
                        <FormInput buttonStyle='box' size='inp-medium' placeholder={f.placeholder} />
                    </div>
                ))}
            </div>
            <div className='details_bottom-nav'>
                <Button size='btn-medium' mode='btn-primary' color='red-primary' buttonText='Confirm'/>
            </div>
        </div>
  )
}

export default StoreProductDetails