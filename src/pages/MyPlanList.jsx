import React, { useContext, useEffect, useState } from 'react';
import './styles/Myplanlist.css';
import logo from '../Images/Logo.png';
import profile from '../Images/Profile.png';
import jogging from '../Images/jogging.jpg';
import protien from '../Images/Protein plan.jpg';
import mealplan from '../Images/meal plan.jpg';
import { Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';
import Button from '../components/Button';
import Axios from '../Axios';
import {AuthContext} from '../authContext';

const contentStyle = {
    display: 'flex',
    columnGap: '15px',
    marginRight: 'auto',
}

const headerStyle = {
    fontFamily: 'Oswald',
    fontWeight: 400,
}

const buttonStyle = {
    alignSelf: 'center',
}

// const workoutItems = [
//     {
//         id: 1,
//         planName: 'Jogging by Kim',
//         src: jogging,
//         route: '/my-workout-plan',
//     },
//     {
//         id: 2,
//         planName: 'Jogging Intermediate',
//         src: jogging,
//         route: '/general-plan',
//     },
// ]



const mealItem = [
    {
        id: 1,
        planName: 'Veggies plan',
        src: mealplan,
        route: '/user-meal-plan',
    },
    {
        id: 2,
        planName: 'Protein plan',
        src: protien,
        route: '',
    },
];

const MyPlanList = () => {

    const [workoutItem , setWorkoutItem] = useState([]);

    const {currentUser} = useContext(AuthContext);

    console.log(currentUser.id);

useEffect(()=>{
    const fetchData = async (e) => {
        try{
            const res = await Axios.get(`/get-all-plan/${currentUser.id}`);
            setWorkoutItem(res.data);
            console.log(res.data);
        }
        catch(e)
        {
            console.log(e)
        }
    }
    fetchData();
},[]);

    const navigate = useNavigate();

    return (
        <div className='planlist-container'>
            <div className='planlist-nav'>
                <img className='planlist-img' src={logo} alt="" onClick={() => navigate('/')}/>
                <Button Onclick={() => navigate('/create-new-plan')} style={buttonStyle} buttonText='Add' mode='btn-primary' size='btn-small' color='red-primary'/>
                <img className='planlist-img' src={profile} alt=""  onClick={() => navigate('/profile')}/>
            </div>
            <div className='workout-planlist'>
                <Typography variant='h4' style={headerStyle}>Workout plan</Typography>
                <div className='list-nav'>
                    {workoutItem.map((w) => (
                        <div key={w.id} className='list-item' onClick={() => navigate('/my-workout-plan')}>
                            <div style={contentStyle}>
                                <img className='list-img' src={jogging} alt="" />
                                <Typography variant='h6' style={headerStyle}>{w.workoutplan_name}</Typography>
                            </div>
                            <ArrowForwardIcon />
                        </div>
                    ))}
                </div>
            </div>
            <div className='meal-planlist'>
                <Typography variant='h4' style={headerStyle}>Meal plan</Typography>
                <div className='list-nav'>
                    {mealItem.map((m) => (
                        <div key={m.id} className='list-item' onClick={() => navigate(m.route)}>
                            <div style={contentStyle}>
                                <img className='list-img' src={m.src} alt="" />
                                <Typography variant='h6' style={headerStyle}>{m.planName}</Typography>
                            </div>
                            <ArrowForwardIcon />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyPlanList