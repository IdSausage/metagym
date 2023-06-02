import React from 'react';
import '../styles/Shoppingzone.css';
import './style/Productlist.css';
import profile from '../../Images/Profile.png';
import dumbell from '../../Images/dumbell.jpg';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Grid, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const filterList = [
    {
        id: 1,
        icon: <AttachMoneyIcon />,
        filterName: 'sold the most',
    },
    {
        id: 2,
        icon: <WhatshotIcon />,
        filterName: 'popular',
    },
    {
        id: 3,
        icon: <AutoAwesomeIcon />,
        filterName: 'new',
    },
];

const productList = [
    {
        id: 1,
        src: dumbell,
        header: '20kg dumbbell set',
        price: '20.99',
        rating: '4.5',
        sold: '3219',
    },
    {
        id: 2,
        src: dumbell,
        header: '20kg dumbbell set',
        price: '20.99',
        rating: '4.5',
        sold: '3219',
    },
    {
        id: 3,
        src: dumbell,
        header: '20kg dumbbell set',
        price: '20.99',
        rating: '4.5',
        sold: '3219',
    },
    {
        id: 4,
        src: dumbell,
        header: '20kg dumbbell set',
        price: '20.99',
        rating: '4.5',
        sold: '3219',
    },
    {
        id: 5,
        src: dumbell,
        header: '20kg dumbbell set',
        price: '20.99',
        rating: '4.5',
        sold: '3219',
    },
    {
        id: 6,
        src: dumbell,
        header: '20kg dumbbell set',
        price: '20.99',
        rating: '4.5',
        sold: '3219',
    },
];

const ProductList = () => {

  const navigate = useNavigate();  

  return (
    <div className='product_list-container'>
            <div className='shop-nav'>
                <div className='shop_main-nav'>
                    <div style={{ cursor: 'pointer' }} onClick={()=>navigate('/store/add-product')}>
                        <Typography variant='h5'>ADD</Typography>
                    </div>
                    <div className='shop_search-bar'>
                        <SearchOutlinedIcon />
                        <Typography variant='body1'>Search something here...</Typography>
                    </div>
                    <img className='shop_nav-profile' src={profile} alt="" />
                </div>
                <div className='shop_mobile-filter'></div>
                <div className='shop_mobile-nav'></div>
            </div>
            <div className='shop-main'>
                <div>
                    <div className='shop_pc-filter'>
                        {filterList.map((f) => (
                            <div key={f.id} className='shop_pc-filter-item'>
                                {f.icon}
                                <Typography variant='body2'>{f.filterName}</Typography>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='shop_product-list'>
                    <Grid container rowSpacing={'20px'}>
                        {productList.map((p) => (
                            <Grid key={p.id} item md={4}>
                                <div className='shop_product-item' onClick={() => navigate('/store/edit-product')}>
                                    <img className='shop_product-img' src={p.src} alt="" />
                                    <Typography variant='h6'>{p.header}</Typography>
                                    <Typography variant='body1'>Price: ${p.price}</Typography>
                                    <div>
                                        <Typography variant='body2'>{p.rating} rating</Typography>
                                    </div>
                                    <Typography variant='body2'>sold:{p.sold}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
  )
}

export default ProductList