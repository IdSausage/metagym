import React from 'react';
import './styles/Cart.css';
import dumbell from '../Images/dumbell.jpg';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Typography } from '@mui/material';
import Button from '../components/Button';
import {useNavigate} from 'react-router-dom';

const cartItemList = [
  {
    id: 1,
    productImage: dumbell,
    productname: '20Kg Dumbbell set',
    price: 20.99,
    rating: 4.5,
    sold: 3219,
  },
  {
    id: 1,
    productImage: dumbell,
    productname: '20Kg Dumbbell set',
    price: 20.99,
    rating: 4.5,
    sold: 3219,
  },
];

const Cart = () => {

  const navigate = useNavigate();

  return (
    <div className='cart-container'>
      <div className='cart_top-nav'>
        <div className='cart-search'>
          <SearchOutlinedIcon />
          <Typography variant='body1'>Search something here...</Typography>
        </div>
      </div>
      <div className='cart-main'>
        {cartItemList.map((c) => (
          <div key={c.id} className='cart-item'>
            <img className='cart-img' src={c.productImage} alt="" />
            <div className='cart_item-text' style={{ marginRight: 'auto' }}>
              <div>
                <Typography variant='h5'>{c.productname}</Typography>
                <Typography variant='body1'>Price: ${c.price}</Typography>
              </div>
              <div>
                <Typography variant='body2'>{c.rating} rating</Typography>
                <Typography variant='body2'>sold:{c.sold}</Typography>
              </div>
            </div>
            <Typography variant='h6'>Edit</Typography>
          </div>
        ))}
      </div>
      <div className='cart_side-nav'>
        <div>
          <Typography variant='body2'>Total: $20.99</Typography>
          <Typography variant='body2'>Amout: 1</Typography>
        </div>
        <Button Onclick={() => navigate('/shopping/payment-method')} mode='btn-primary' size='btn-small' color='red-primary' buttonText='Purchase' />
      </div>
      <div className='cart_bottom-nav'></div>
    </div>
  )
}

export default Cart