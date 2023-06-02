import React, { useEffect, useState } from 'react';
import './styles/Productdetails.css';
import dumbbell from '../Images/dumbell.jpg';
import basketball from '../Images/Basketball.jpg';
import star from '../Images/Star.jpg';
import profile from '../Images/comment_profile.jpg';
import userProfile from '../Images/Profile.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '../components/Button';
import { Typography } from '@mui/material';
import { useNavigate , useLocation } from 'react-router-dom';
import Axios from '../Axios';

const commentRatingStyle = {
    display: 'flex' ,
    alignItems:'center',
    columnGap:'5px'
}

const userCommentList = [
    {
        id: 1,
        profilePic: profile,
        userName: 'TonNamZa007',
        userComment: 'I bought this dumbbell for about years now and it still useable... more',
        userRating: 5,
    },
    {
        id: 2,
        profilePic: profile,
        userName: 'Johny',
        userComment: 'I order it since 13 July and still haven’t receive the product yet I also ... more',
        userRating: 2,
    },
];

const ProductDetails = () => {

    const navigate = useNavigate();
    const [product , setProduct] = useState([{}]);

    const location = useLocation().pathname;
    const productId = location.split('/')[3];

    console.log(productId)

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await Axios.get(`/getproduct/${productId}`);
                setProduct(res.data);
            } 
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[])

    console.log(product[0].product_name);

    return (
        <div className='product-container'>
            <div className='product-nav'>
                <div style={{ cursor: 'pointer' }} onClick={() => navigate('/shopping/cart')}>
                    <ShoppingCartOutlinedIcon />
                </div>
                <img className='product_nav-profile' src={userProfile} alt="" />
            </div>

            <div className='product-details'>
                <div style={{ padding: '5px' }}>
                    <img className='product_details-profile' src={dumbbell} alt="" />
                </div>
                <div className='product_details-text'>
                    <Typography variant='h4'>{product[0].product_name}</Typography>
                    <Typography variant='body2'>{product[0].product_details}</Typography>
                    <Typography variant='body1' style={{ marginTop: 'auto' }}>Price: ${product[0].price}</Typography>
                </div>
            </div>

            <div className='product-store'>
                <div >
                    <img className='product_store-profile' src={basketball} alt="" />
                </div>
                <div className='product_store-text'>
                    <Typography variant='h6'>Pronos</Typography>
                    <Typography variant='body2'>Location : California</Typography>
                    <Typography variant='body2'>Active : 2 minutes ago</Typography>
                </div>
            </div>

            <div className='product-rating'>
                <div className='product_rating-details'>
                    <img className='product_rating-img' src={star} alt="" />
                    <div className='product_rating-text'>
                        <Typography variant='h5' style={{ marginBottom: '20px' }}>4.5 Star</Typography>
                        <Typography variant='body1'>5 star               9000 rating</Typography>
                        <Typography variant='body1'>4 star               500 rating</Typography>
                        <Typography variant='body1'>3 star               200 rating</Typography>
                        <Typography variant='body1'>2 star               200 rating</Typography>
                        <Typography variant='body1'>1 star               100 rating</Typography>
                    </div>
                </div>
                <div className='product_comment-section'>
                    {userCommentList.map((u) => (
                        <div key={u.id} className='product_comment-item'>
                            <img className='product_comment-profile' src={u.profilePic} alt="" />
                            <div className='product_comment-text'>
                                <Typography variant='h6'>{u.userName}</Typography>
                                <Typography variant='body1' style={{ wordBreak: 'break-word' }}>{u.userComment}</Typography>
                                <div style={commentRatingStyle}>
                                    <img className='comment_rating-icon' src={star} alt="" />
                                    <Typography variant='body2'>{u.userRating} star</Typography>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='product_side-nav'>
                <Button Onclick={() => navigate('/shopping/cart')} mode='btn-primary' size='btn-medium' color='black-secondary' buttonText='Add to cart' />
                <Button Onclick={() => navigate('/shopping/payment-method')} mode='btn-primary' size='btn-medium' color='red-primary' buttonText='Buy now' />
            </div>
        </div>
    )
}

export default ProductDetails