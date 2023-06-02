import React from 'react';
import './style/Addproduct.css';
import profile from '../../Images/Profile.png';
import FormInput from '../../components/FormInput';
import bar from '../../Images/Pull up bar.jpg';
import Button from '../../components/Button';

const StoreEditProduct = () => {
  return (
    <div className='s_add-container'>
      <div className='s_add-top-nav'>
        <img className='s_add-profile' src={profile} alt="" />
      </div>
      <div className='s_add-main'>
        <img className='s_add-img' src={bar} alt="" />
        <div className='s_add-details'>
          <label>Price:</label>
          <FormInput size='inp-medium' buttonStyle='box' placeholder='Enter your product price'/>
          <label>Details(Optional):</label>
          <FormInput size='inp-medium' 
            buttonStyle='box' 
            addition='inp-description desc-high'/>
          <label>Category:</label>
          <FormInput size='inp-medium' 
            buttonStyle='box' 
            addition='inp-description desc-medium'/>
        </div>
      </div>
      <div className='s_add-bottom-nav'>
        <Button size='btn-medium' mode='btn-primary' color='red-primary' buttonText='Edit'/>
      </div>
    </div>
  )
}

export default StoreEditProduct