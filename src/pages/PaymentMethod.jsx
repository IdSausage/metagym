import React from 'react';
import './styles/Paymentmethod.css';
import visa from '../Images/Visa.png';
import truemMoney from '../Images/truemoney.jpg';
import { Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom'

const paymentList = [
    {
        id: 1,
        paymentOption: [
            {
                id:1,
                payment: visa,
            },
            {
                id:2,
                payment: truemMoney,
            },
        ],
        paymentType: 'Credit card',
    }
];

const PaymentMethod = () => {

    const navigate = useNavigate();

    return (
        <div className='payment-container'>
            <Typography variant='h4'>Select your payment Method</Typography>
            <div className='payment-method'>
                {paymentList.map((p) => (
                    <div key={p.id} className='payment-option'>
                        <div className='payment_option-list'>
                            {p.paymentOption.map((o)=>(
                                <img onClick={() => navigate('/shopping/payment-details')} key={o.id} className='payment-logo' src={o.payment} alt="" />
                            ))}
                        </div>
                        <Typography variant='body1'>{p.paymentType}</Typography>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PaymentMethod