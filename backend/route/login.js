import db from '../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export const login = (req,res)=>{

    //CHECK USER

    const q = "SELECT * FROM user_account WHERE username = ?";

    db.query(q,[req.body.username] ,(err,data)=>{
        if(err) return res.json(err);
        if(data.length === 0) return res.status(404).json("User are not existing.");
    
        //check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password , data[0].password);

        if(!isPasswordCorrect) return res.status(400).json("wrong username or password");

        const token = jwt.sign({id:data[0].id , username: req.body.username}, process.env.ACCESS_TOKEN);
        const {password , ...other} = data[0];
        
        // res.cookie("access_token",token , {
        //     httpOnly:true,
        // }).status(200).json(other);
        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).json(other);
    })

}

export const logout = (req,res) => {
    res.clearCookie("access_token", {
        sameSite:"none",
        secure:true,
    }).status(200).json("User has been logged out.")
}