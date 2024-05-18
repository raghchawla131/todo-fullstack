import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Tasks from "../component/Tasks";
import axios from "axios";

const Home = () => {
  const [newTask, setNewTask] = useState({
    task: "",
    userId: "",
  });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString);
    setNewTask((prevState) => ({
      ...prevState,
      userId: userData ? userData.id : "",
    }));
  }, []);

  useEffect(() => {
    if (newTask.userId) {
      fetchTasks(newTask.userId);
    }
  }, [newTask.userId]);

  const fetchTasks = async () => {
    try {
      const res = await axios.post(`http://localhost:8000/api/task/get`, {
        userId: newTask.userId,
      });
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNewTask((prevState) => ({
      ...prevState,
      task: e.target.value,
    }));
  };

  const handleAddTask = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/task/new",
        newTask
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="home">
        <Navbar />
        <div className="tasks">
          <div className="add-task">
            <input
              type="text"
              onChange={handleChange}
              placeholder="Enter task"
            />
            <button
              onClick={() => {
                handleAddTask();
                fetchTasks();
              }}
            >
              Add
            </button>
          </div>
          <Tasks tasks={tasks} fetchTasks={fetchTasks} />
        </div>
      </div>
    </>
  );
};

export default Home;
