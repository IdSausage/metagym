import db from '../db.js';
import bcrypt from 'bcrypt';

const id = Math.floor(Math.random() * 100000) + 1;

export const storeRegister = (req,res) =>{
    const q = "SELECT * FROM store_account WHERE email_address = ? AND phone_number = ?";
    const value = [req.body.email , req.body.phoneNumber];

    db.query(q ,value ,(err,data)=>{
        if(err) return res.status(401).json(err);
        if(data.length) return res.status(403).json("This user already exists");

        const q = "INSERT INTO store_account( `id`, `country` , `phone_number` , `owner_name` , `email_address` , `password`) VALUES(? ,? ,? ,? ,? , ?)";
        
        const password = req.body.password;

        const salt = bcrypt.genSalt(10);
        const hash = bcrypt.hashSync(password, parseInt(salt));
        
        const value = [id,req.body.country , req.body.phoneNumber , `${req.body.firstName} ${req.body.middleName} ${req.body.lastName}` , req.body.email , hash];

        db.query(q ,value , (err,data)=>{
            if(err) return res.status(401).json(err);

            return res.status(200).json(data);
        })
    })
}

export const createAccount = (req,res) =>{
    const q = "UPDATE store_account SET `store_name` = ? , `about_store` = ? , `category` = ? WHERE id = ?";
    const values = [req.body.storeName , req.body.aboutStore , req.body.category , id];

    db.query(q , values ,(err,data)=>{
        if(err) return res.status(403).json(err);

        return res.status(200).json(data);
    })
}