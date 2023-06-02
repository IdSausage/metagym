import React from 'react';
import './styles/Mealplan.css';
import Button from '../components/Button';
import FormInput from '../components/FormInput';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const vegetables = [
    { id: 1, name: 'Carrot' },
    { id: 2, name: 'Tomato' },
    { id: 3, name: 'Broccoli' },
    { id: 4, name: 'Spinach' },
    { id: 5, name: 'Cabbage' },
    { id: 6, name: 'Pepper' },
    { id: 7, name: 'Cucumber' },
    { id: 8, name: 'Eggplant' },
    { id: 9, name: 'Radish' },
    { id: 10, name: 'Lettuce' },
    { id: 11, name: 'Onion' },
    { id: 12, name: 'Garlic' },
];

const meats = [
    { id: 1, name: 'Chicken' },
    { id: 2, name: 'Beef' },
    { id: 3, name: 'Pork' },
    { id: 4, name: 'Lamb' },
    { id: 5, name: 'Turkey' },
    { id: 6, name: 'Duck' },
    { id: 7, name: 'Veal' },
    { id: 8, name: 'Salmon' },
    { id: 9, name: 'Tuna' },
    { id: 10, name: 'Shrimp' },
    { id: 11, name: 'Crab' },
    { id: 12, name: 'Lobster' },
  ];
  

const category = [
    { id: 1, categoryName: 'Veggies', categoryDetails: vegetables },
    { id: 2, categoryName: 'Meat', categoryDetails: meats },
];


const Mealplan = () => {
    return (
        <div className='meal-container'>
            <Typography variant='h4' style={{ fontFamily: 'Oswald', fontWeight: 600, color: 'white', marginTop: '20px' }}>
                Meal plan
            </Typography>
            {category.map((c) => (
                <div className='meal-Form' key={c.id}>
                    <div className='meal-item'>
                        <Typography variant='h5' style={{ fontFamily: 'Oswald', fontWeight: 600, marginBottom: '20px' }}>
                            {c.categoryName}
                        </Typography>
                        <Grid container columns={12}>
                            {c.categoryDetails.map((d) => (
                                <Grid item md={2} key={d.id} className='meal-checkbox'>
                                    <FormInput  type='checkbox' />
                                    <label>{d.name}</label>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            ))}
            <div className='meal-nav'>
                <Link to='/register/workout-styles'>
                    <Button style={{ fontSize: '16px' }} mode='btn-secondary2' color='black-secondary2' buttonText='Back' size='btn-small' />
                </Link>
                <Link to='/'>
                    <Button mode='btn-primary' color='red-primary' size='btn-medium' buttonText='Next' />
                </Link>
            </div>
        </div>
    )
}

export default Mealplan