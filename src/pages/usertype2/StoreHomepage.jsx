import React from 'react';
import './style/Storehomepage.css';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import profile from '../../Images/Profile.png';
import {useNavigate} from 'react-router-dom';

const StoreHomepage = () => {

  const navigate = useNavigate();

  return (
    <div className='s_home-container'>
        <div className='s_home-top-nav' onClick={() => navigate('login')}>
            <img className='s_home-profile' src={profile} alt="" />
        </div>
        <div className='s_home-main'>
            <div className='s_home-option'>
                <div className='s_home-item' onClick={() => navigate('product-list')}>
                    <h4>Your product</h4>
                </div>
                <div className='s_home-item'>
                    <h4>Confirm Log</h4>
                </div>
            </div>
            <div className='s_home-order-list'>
                <div className='s_home-order-item'>
                    <FormInput type='checkbox'/>
                    <label>20Kg Dumbbell set</label>
                </div>
            </div>
        </div>
        <div className='s_home-bottom-nav'>
            <Button buttonText='Confirm order' mode='btn-primary' size='btn-medium' color='red-primary'/>
        </div>
    </div>
  )
}

export default StoreHomepage