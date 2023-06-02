import db from "../db.js";
import bcrypt from "bcrypt";

const id = Math.floor(Math.random() * 100000) + 1;

export const register = (req, res) => {
  const query =
    "SELECT * FROM user_account WHERE user_name = ? AND email_address = ?";

  const value = [req.body.username, req.body.email];

  db.query("SELECT * FROM user_account WHERE id = ?" , id , (err,data)=>{
    if(data.id) {
        id = Math.floor(Math.random() * 100000) + 1
    }
  })

  db.query(query, value, (err, data) => {
    if (err) return res.sendStatus(401);
    if (data.length) return res.json("This user is already exist.");

    const password = req.body.password;

    const q =
      "INSERT INTO user_account( id, user_name, email_address, password , term_of_use) VALUES(? , ? , ? , ?, ?)";

    const salt = bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(password, parseInt(salt));

    const value = [id, req.body.username, req.body.email, hash , req.body.termOfUse];
    db.query(q, value, (err, data) => {
      if (err) return res.json(err);
      return res.json("register user succesfully");
    });
  });
};

export const registerForm = (req,res) => {

  const q = "UPDATE user_account SET `age` = ? , `height` = ? , `weight` = ?  WHERE id = ?";
  const values = [req.body.age , req.body.height , req.body.weight , id];

  db.query(q ,values , (err,data)=>{
      if(err) return res.status(401).json(err);

      return res.status(200).json(data);
  })
}

export const workoutStyle = (req,res) => {
  const q = "INSERT INTO workout_plan(`id`,`workoutplan_name` , `description`) VALUES(? ,? , ?)"
  const values = [req.body.id ,req.body.name , req.body.desc];

  db.query(q ,values , (err,data)=>{
    if(err) return res.status(401).json(err);

    return res.status(200).json(data);
  })
}
