import express from 'express';
import db from './db.js';
import cors from 'cors';
import {register , registerForm , workoutStyle} from './route/register.js';
import {login , logout} from './route/auth.js';
import {workoutPlan , createplan} from './route/plan.js';
import {getAllProduct , getProduct} from './route/product.js';

const app = express();

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));
app.use(express.json());


app.post("/register",register);
app.post("/login" , login);
app.post("/logout",logout);
app.post("/register/form" , registerForm);
app.post("/register/workout-style" , workoutStyle);
app.get("/get-all-plan/:id" , workoutPlan);
app.post("/createplan" , createplan);

//shopping zone
app.get("/get-all-product" , getAllProduct);
app.get("/getproduct/:id" , getProduct)


app.listen(8000 , () => {
    console.log("connected to the database.");
})