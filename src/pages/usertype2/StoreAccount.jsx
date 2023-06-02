import React from 'react';
import '../styles/Profile.css';
import profile from '../../Images/Profile.png';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const settingList = [
    {
      id: 1,
      icon: <SettingsIcon />,
      settingText: 'Account setting',
    },
    {
      id: 2,
      icon: <CreditCardIcon />,
      settingText: 'Payment Method',
    },
    {
      id: 3,
      icon: <LockIcon />,
      settingText: 'Account security',
    },
    {
      id: 4,
      icon: <FormatListBulletedIcon />,
      settingText: 'Other setting',
    },
  ];
  
  const logoutStyle = {
    fontFamily: 'Oswald',
    fontWeight: 600,
    color: '#FE6D73',
    cursor: 'pointer',
  }
  const logoutStylemobile = {
    fontFamily: 'Oswald',
    fontWeight: 600,
    color: 'white',
    cursor: 'pointer',
  }

const StoreAccount = () => {

  const navigate = useNavigate();

  return (
    <div className='profile-container'>
      <div className='profile-nav'>
        <div onClick={()=>navigate('/')}>
          <ArrowBackIcon />
        </div>
        <div className='profile-logout-mobile' onClick={()=>navigate('/login')}>
          <Typography variant='h5' style={logoutStylemobile}>Log out</Typography>
        </div>
      </div>
      <div className='profile-header'>
        <img className='profile-img' src={profile} alt="" />
        <div className='profile-logout' onClick={()=>navigate('/store')}>
          <Typography variant='h5' style={logoutStyle}>Log out</Typography>
        </div>
      </div>
      <div className='profile-setting'>
        {settingList.map((s) => (
          <div key={s.id} className='profile_setting-item'>
            {s.icon}
            <Typography variant='body2'>{s.settingText}</Typography>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StoreAccount