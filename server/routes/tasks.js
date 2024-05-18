import express from "express";
import { addNewTask, getTasks, deleteTask } from "../controllers/task.js";

const router = express.Router();

router.get('/new', (req, res) => {
  res.json("New task");
})

router.post('/new', addNewTask);
router.post('/get', getTasks);
router.post('/delete', deleteTask);

export default router;