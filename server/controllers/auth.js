import db from "../db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"

export const register = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?"
  db.query(q, [req.body.email], (err, data) => {
    //checking if the user already exists
    if(err) return res.json(err);
    if(data.length) return res.status(409).json("User already exists");
    
    //hashing the password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    //inserting data into database if the user not exist
    const insertQuery = "INSERT INTO users (`email`, `password`) VALUES (?)"
    const values = [
      req.body.email,
      hash,
    ]
    db.query(insertQuery, [values], (err, data) => {
      if(err) return res.json(err);
      return res.status(200).json("User has been created");
    })
  })
}

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE email = ?"
  db.query(q, [req.body.email], (err, data) => {
    if(err) return res.json(err);
    if(data.length == 0) return res.status(404).json("User does not exists")

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
    if(!isPasswordCorrect) res.status(401).json("wrong id or password");

    //jwt authentication and storing access token in cookie using npm cookie-parser
    //stackoverflow: express doesn't set a cookie

    const token = jwt.sign({ id: data[0].id }, "secretKey");
    const {password, ...other} = data[0];
    res.cookie("accessToken", token, {
      httpOnly: true
    }).status(200).json(other)
  })
}

export const logout = (req, res) => {

}