import express from "express";
import { login, logout, register } from "../controllers/auth.js";

const router = express.Router();
router.get('/register', (req,res) => {
  res.json("working")
})
router.get('/login', (req,res) => {
  res.json("login working")
})
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;