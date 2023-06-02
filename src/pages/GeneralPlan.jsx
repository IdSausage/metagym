import React from 'react';
import './styles/Myworkoutplan.css';
import jogging from '../Images/jogging.jpg';
import forwardFold from '../Images/Forward fold.png';
import plank from '../Images/Plank.jpg';
import walking from '../Images/Walking.jpg';
import { Typography } from '@mui/material';
import Button from '../components/Button';

const headerStyle = {
    fontFamily: 'Oswald',
    fontWeight: 400,
    fontSize: '36px',
    marginBottom: '20px',
};

const subHeaderStyle = {
    marginBottom:'auto'
}

const workoutItem = [
    {
      id: 1,
      src: forwardFold,
      workoutName: 'Forward fold',
      duration: '1 min',
    },
    {
      id: 2,
      src: plank,
      workoutName: 'Plank',
      duration: '30 seconds',
    },
    {
      id: 3,
      src: walking,
      workoutName: 'Walking',
      duration: '1000 meters',
    },
  ];

const GeneralPlan = () => {
  return (
    <div className='myplan-container'>
      <div className='myplan_top-nav'></div>

      <div className='myplan-header'>
        <div className='myplan_header-text-btn'>
          <Typography style={headerStyle} variant='h6'>Jogging Intermediate</Typography>
          <Typography style={subHeaderStyle} variant='body2'>this workout is for intermediate runner</Typography>
          <div className='myplan_header-btn'>
            <Button buttonText='Start' mode='btn-primary' color='red-primary' size='btn-small' />
            <Button buttonText='Edit' mode='btn-additional' color='black-secondary2' size='small' />
          </div>
        </div>

        <div>
          <img className='myplan_header-img' src={jogging} alt="" />
        </div>
      </div>

      <div className='myplan-main'>
        <div className='myplan-todo'>
          {workoutItem.map((w) => (
            <div key={w.id} className='myplan_todo-item'>
              <img className='myplan_todo-img' src={w.src} alt="" />
              <div>
                <Typography variant='h6'>{w.workoutName}</Typography>
                <Typography variant='body1'>{w.duration}</Typography>
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

export default GeneralPlan