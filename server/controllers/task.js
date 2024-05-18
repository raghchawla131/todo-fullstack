import db from "../db.js";

export const addNewTask = (req, res) => {
  const date = new Date();
  const q = "INSERT INTO tasks (task, date, uid) VALUES (?)";
  const values = [req.body.task, date, req.body.userId];
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json("Task added");
  });
};

export const getTasks = (req, res) => {
  const userId = req.body.userId;
  const q = "SELECT * FROM tasks WHERE uid = ?";

  db.query(q, [userId], (err, data) => {
    if (err) {
      console.error("Error fetching tasks:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json(data);
  });
};

export const deleteTask = (req, res) => {
  const q = "DELETE FROM tasks WHERE id = ?";
  console.log(req.body.id);
  db.query(q, [req.body.id], (err, data) => {
    if (err) {
      console.error("Error deleting task:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json("Task deleted");
  });
};