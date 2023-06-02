import React , {useContext} from 'react';
import './styles/Profile.css';
import profile from '../Images/Profile.png';
import logo from '../Images/Logo.png'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsIcon from '@mui/icons-material/Collections';
import LockIcon from '@mui/icons-material/Lock';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../authContext';

const settingList = [
  {
    id: 1,
    icon: <SettingsIcon />,
    settingText: 'Account setting',
  },
  {
    id: 2,
    icon: <CollectionsIcon />,
    settingText: 'Album',
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
  {
    id: 5,
    icon: <img src={logo} className='profile-icon' alt="" />,
    settingText: 'Account setting',
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

const Profile = () => {

  const navigate = useNavigate();

  const {logout} = useContext(AuthContext);
  
  const handleClick = () => {
    logout();
    navigate("/login");
  }

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
        <div className='profile-logout' onClick={handleClick}>
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

export default Profile