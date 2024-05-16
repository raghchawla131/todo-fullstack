import React, { useEffect, useState, useContext } from "react";
import { useCookies } from "react-cookie";
import Navbar from "../component/Navbar";
import Tasks from "../component/Tasks";
import axios from "axios";

const Home = () => {
  const [newTask, setNewTask] = useState({
    task: "",
    userId: "",
  });

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    const userData = JSON.parse(userDataString);
    setNewTask((prevState) => ({
      ...prevState,
      userId: userData ? userData.id : "", 
    }));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setNewTask((prevState) => ({
      ...prevState,
      task: e.target.value,
    })
    );
    console.log(newTask);
  };

  const handleAddTask = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/task/new", newTask);
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
            <button onClick={handleAddTask}>Add</button>
          </div>
          <div className="task-list">
            <Tasks userId = {newTask.userId}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
