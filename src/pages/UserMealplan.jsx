import React from 'react';
import './styles/Myworkoutplan.css';
import './styles/Usernewplan.css';
import mealplan from '../Images/meal plan.jpg';
import { Typography } from '@mui/material';
import Button from '../components/Button';


const headerStyle = {
    fontFamily: 'Oswald',
    fontWeight: 400,
    fontSize: '36px',
    marginBottom: '20px',
};

const subHeaderStyle = {
    marginBottom: 'auto'
}

const days = [
    {
        id: 1,
        day: 'Monday',
    },
    {
        id: 1,
        day: 'Tuesday',
    },
    {
        id: 2,
        day: 'Wednesday',
    },
    {
        id: 3,
        day: 'Thrusday',
    },
    {
        id: 4,
        day: 'Friday',
    },
    {
        id: 5,
        day: 'Saturday',
    },
    {
        id: 6,
        day: 'Sunday',
    },
];

const UserMealplan = () => {
    return (
        <div className='userplan-container'>
            <div className='myplan_top-nav'></div>

            <div className='myplan-header'>
                <div className='myplan_header-text-btn'>
                    <Typography style={headerStyle} variant='h6'>Veggies plan</Typography>
                    <Typography style={subHeaderStyle} variant='body2'>this plan is for vegetarian who want to lost their weight within 3-12 month </Typography>
                    <div className='myplan_header-btn'>
                        <Button buttonText='Start' mode='btn-primary' color='red-primary' size='btn-small' />
                        <Button buttonText='Edit' mode='btn-additional' color='black-secondary2' size='small' />
                    </div>
                </div>

                <div>
                    <img className='myplan_header-img' src={mealplan} alt="" />
                </div>
            </div>

            <div className='myplan-main'>
                <div className='myplan-todo'>
                    {days.map((d) => (
                        <div key={d.id} className='userplan_todo-item'>
                            <div>
                                <Typography variant='h6'>{d.day}</Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='myplan_botton-nav'>
                <Button />
            </div>
        </div>
    )
}

export default UserMealplan