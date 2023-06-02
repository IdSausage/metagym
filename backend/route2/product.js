import db from '../db.js';

export const getAllProduct = (req,res) =>{
    const q = "SELECT * FROM product WHERE store_id";
    
}