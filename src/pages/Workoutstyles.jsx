import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react';
import Button from '../components/Button';
import yoga from '../Images/yoga 2.webp';
import stretching from '../Images/Stretching.jpg';
import weigthTrainning from '../Images/Weight Trainning.jpg'
import cardio from '../Images/cardio.jpg';
import './styles/Workoutstyle.css';
import { Link, useNavigate } from 'react-router-dom';
import { generalPlan } from '../generalPlan';
import Axios from '../Axios';

const option = [
    {
        id: 1,
        src: yoga,
        name: 'Yoga'
    },
    {
        id: 2,
        src: stretching,
        name: 'Stretching'
    },
    {
        id: 3,
        src: weigthTrainning,
        name: 'Weight Tranning'
    },
    {
        id: 4,
        src: cardio,
        name: 'Cardio'
    },
]

const Workoutstyles = () => {

    const [options, setOptions] = useState({

    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await Axios.post('/register/workout-style', options);
            navigate('/register/meal-plan');
        }
        catch (e) {
            console.log(e);
        }
    }

    console.log(options)
    return (
        <div className='workout-container'>
            <Typography variant='h4' className='workout-header' >
                Select your workout style
            </Typography>
            <Grid container className='workout-option'>
                {option.map((op) => (
                    <Grid item md={6} key={op.id}>
                        <div onClick={() => setOptions(generalPlan[op.id - 1])} className='workout-item'>
                            <img className='workout-img' style={{ borderRadius: '10px' }} src={op.src} alt="" />
                            <Typography variant='body1' style={{ alignSelf: 'center', marginTop: '10px' }}>{op.name}</Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <div className='workout-nav'>
                <Link to='/register/form'>
                    <Button style={{ fontSize: '16px' }} mode='btn-secondary2' color='black-secondary2' buttonText='Back' size='btn-small' />
                </Link>
                <form>
                    <Link to='/register/meal-plan'>
                        <Button Onclick={handleSubmit} mode='btn-primary' color='red-primary' size='btn-medium' buttonText='Next' />
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Workoutstyles