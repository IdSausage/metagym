import express from 'express';
import cors from 'cors';
import {storeRegister , createAccount} from './route2/register.js';
import {loginStore} from './route2/auth.js';

const app = express();

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}));
app.use(express.json());

app.post("/store/register",storeRegister);
app.post("/store/create-account" , createAccount);
app.post("/store/login",loginStore);

app.listen(5000 , ()=>{
    console.log("connected to database at port : 5000")
})