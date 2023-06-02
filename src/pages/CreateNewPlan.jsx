import React, { useState , useContext } from 'react';
import './styles/Createnewplan.css';
import Button from '../components/Button';
import profile from '../Images/Profile.png';
import jogging from '../Images/jogging.jpg';
import aerobic from '../Images/aerobic.jpg';
import weigthTrainning from '../Images/Weight Trainning.jpg';
import stretching from '../Images/Stretching.jpg';
import yoga from '../Images/yoga 2.webp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import Axios from '../Axios';
import {AuthContext} from '../authContext';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const generalPlan = [
    {
        id: 1,
        src: jogging,
        header: 'Jogging Intermidiate',
        description: 'this workout is for intermidiate runner.',
    },
    {
        id: 2,
        src: weigthTrainning,
        header: 'Weight training beginner',
        description: 'this workout is for user who want to try or start weight training... ',
    },
    {
        id: 3,
        src: aerobic,
        header: 'Aerobic Advance',
        description: 'this workout is for the user who have experience in aerobic for...',
    },
    {
        id: 4,
        src: jogging,
        header: 'Jogging beginner',
        description: 'beginner friendly and not too hard for who have never  jogging...',
    },
    {
        id: 5,
        src: stretching,
        header: 'Stretching',
        description: 'Stretch daily to ease tension and improve flexibility.',
    },
    {
        id: 6,
        src: yoga,
        header: 'Yoga beginner',
        description: 'Transform your mind and body with our yoga beginner plan ,designed...',
    },
];

const CreateNewPlan = () => {

    const [workout , setWorkout] = useState({});

    console.log(workout)

    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const data = {
                id: workout.id,
                header: workout.header,
                description: workout.description,
                userId: currentUser.id,
            }
            await Axios.post("/createplan" , data);
        }
        catch(e)
        {
            console.log(e)
        }
    }

    return (
        <div className='create-container'>
            <div className='create_top-nav'>
                <div className='create_top-nav-mobile'>
                    <ArrowBackIcon />
                    <Typography></Typography>
                </div>
                <img className='create-profile' src={profile} alt="" />
            </div>
            <div className='create_main'>
                <div className='create_by-user'>
                    <div className='create_by-user-item'>
                        <AddIcon />
                    </div>
                    <Typography variant='body1' style={{ display: 'flex', columnGap: '10px', color: '#FE6D73' }}>
                        or select
                    </Typography>
                </div>
                <div className='create_by-provider'>
                    <Grid container columnSpacing={'30px'} rowSpacing={'30px'}>
                        {generalPlan.map((g) => (
                            <Grid key={g.id} item md={6}>
                                <div onClick={() => setWorkout(generalPlan[g.id])} className='create_by-provider-item'>
                                    <img className='create_by-provider-img' src={g.src} alt="" />
                                    <div className='create_by-provider-text'>
                                        <Typography variant='h6'>{g.header}</Typography>
                                        <Typography variant='body1'>{g.description}</Typography>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    <Typography variant='body1' style={{color:'#38B4CF' ,cursor: 'pointer'}}>more</Typography>
                </div>
            </div>
            <div onClick={() => navigate("/")} className='create_bottom-nav'>
                <Button Onclick={handleSubmit} buttonText='Create' mode='btn-primary' size='btn-medium' color='red-primary' />
            </div>
        </div>
    )
}

export default CreateNewPlan