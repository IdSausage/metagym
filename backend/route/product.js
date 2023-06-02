import db from '../db.js';

export const getAllProduct = (req,res) => {
    const q = "SELECT * FROM product";

    db.query(q , (err,data)=>{
        if(err) return res.status(401).json(err);

        return res.status(200).json(data);
    })
}

export const getProduct = (req,res) => {
    const q = "SELECT * FROM product WHERE id = ?";
    const value = req.params.id;

    db.query(q ,value , (err,data)=>{
        if(err) return res.status(401).json(err);

        return res.status(200).json(data);
    })
}