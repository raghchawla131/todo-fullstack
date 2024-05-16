import express from "express";
import { addNewTask, getTasks } from "../controllers/task.js";

const router = express.Router();

router.get('/new', (req, res) => {
  res.json("New task");
})

router.post('/new', addNewTask);
router.post('/get', getTasks);

export default router;