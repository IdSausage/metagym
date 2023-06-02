import { Typography } from '@mui/material';
import React, { useState } from 'react';
import './styles/Home.css';
import logo from '../Images/Logo.png';
import profile from '../Images/Profile.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom'

const days = [
  { id: 1, day: 'Monday' },
  { id: 2, day: 'Tuesday' },
  { id: 3, day: 'Wednesday' },
  { id: 4, day: 'Thursday' },
  { id: 5, day: 'Friday' },
  { id: 6, day: 'Saturday' },
  { id: 7, day: 'Sunday' }
];

const Home = () => {

  const [length , setLength] = useState(['Day','week','Month']);

  const navigate = useNavigate();



  // const handleLengthChange = () => {
  //   length === 'Month' ? setLength('Day') : setLength(length.length++);
  // }

  return (
    <div className='home-container'>
      <div className='home-nav'>
        <img className='home-img' src={logo} alt="" />
        <img className='home-img' src={profile} alt="" onClick={() => navigate('/login')} />
      </div>

      <div className='home-main'>
        <Typography variant='h4'>Main</Typography>
        <div className='home_main-nav'>
          <div className='home_nav-item' onClick={() => navigate('/shopping')}>
            <Typography variant='h6'>Shopping</Typography>
            <ArrowForwardIcon />
          </div>
          <div className='home_nav-item' onClick={() => navigate('/myplan-list')}>
            <Typography variant='h6'>My plan</Typography>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>

      <div className='home-footer'>
        <div className='home-stat'>
          <Typography variant='h4'>Statistic</Typography>
          <div className='home_stat-visual'>
            <div className='home_stat-bar'>
              <p className='stat_bar-text'>Calories: 2500 kcal lost</p>
              <p className='stat_bar-text'>Hours: spend 10 hours</p>
              <p className='stat_bar-text'>Workout: do 99 workouts</p>
            </div>
            <div className='home_stat-graph'></div>
          </div>
        </div>
        <div className='home_stat-details'>
          <button>{length}</button>
          <div className='home_select-day'>
            {days.map((d)=>(
              <button key={d.id} className='select_day-button'>{d.day}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home