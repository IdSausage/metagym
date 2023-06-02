import React, { useEffect, useState } from 'react';
import './styles/Shoppingzone.css';
import profile from '../Images/Profile.png';
import dumbell from '../Images/dumbell.jpg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import GrassIcon from '@mui/icons-material/Grass';
import { Grid, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Axios from '../Axios';

const filterList = [
    {
        id: 1,
        icon: <FitnessCenterOutlinedIcon />,
        filterName: 'fitness tools',
    },
    {
        id: 2,
        icon: <LocalPharmacyIcon />,
        filterName: 'supplementart',
    },
    {
        id: 3,
        icon: <GrassIcon />,
        filterName: 'grain',
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

const ShoppingZone = () => {

    const navigate = useNavigate();

    const [products , setProducts] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await Axios.get("/get-all-product");
                setProducts(res.data);
            }
            catch(e)
            {
                console.log(e)
            }
        }
        fetchData();
    },[])

    return (
        <div className='shop-container'>
            <div className='shop-nav'>
                <div className='shop_main-nav'>
                    <div style={{ cursor: 'pointer' }} onClick={()=>navigate('cart')}>
                        <ShoppingCartOutlinedIcon />
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
                    <Typography variant='h6'>Filter</Typography>
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
                        {products.map((p) => (
                            <Grid key={p.id} item md={4}>
                                <div className='shop_product-item' onClick={() => navigate(`product-details/${p.id}`)}>
                                    <img className='shop_product-img' src={dumbell} alt="" />
                                    <Typography variant='h6'>{p.product_name}</Typography>
                                    <Typography variant='body1'>Price: ${p.price}</Typography>
                                    <div>
                                        <Typography variant='body2'>{p.rating} rating</Typography>
                                    </div>
                                    <Typography variant='body2'>sold:{p.in_stock}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default ShoppingZone