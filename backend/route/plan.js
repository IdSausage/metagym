import db from '../db.js';

export const workoutPlan = (req,res) => {
    const q = `SELECT * FROM workout_plan WHERE user_id = ${req.params.id}`;

    db.query(q , (err,data)=>{
        if(err) return res.status(401).json(err);

        return res.status(200).json(data);
    })
}

export const createplan = (req,res) =>{
    const q = "INSERT INTO workout_plan(`id` ,`workoutplan_name`,`description` , `user_id`) VALUES(? , ? , ? , ?)";
    const values = [req.body.id ,req.body.header , req.body.description , req.body.userId];

    db.query(q , values , (err,data)=>{
        if(err) return res.status(401).json(err);

        return res.status(200).json(data);
    })
}