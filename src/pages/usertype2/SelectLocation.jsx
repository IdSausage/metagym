import React from 'react';
import './style/Selectlocation.css';
import location from '../../Images/Location pc screen.png';
import Button from '../../components/Button';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SelectLocation = () => {
    return (
        <div className='select-container'>
            <Typography variant='h4'>Select your location</Typography>
            <img className='select-img' src={location} alt="" />
            <Link to='/store/register'>
                <Button mode='btn-primary' color='red-primary' size='btn-medium' buttonText='Back' />
            </Link>
        </div>
    )
}

export default SelectLocation