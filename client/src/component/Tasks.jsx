import axios from "axios";
import React, { useEffect, useState } from "react";

const Tasks = ({ userId }) => {
  const [ tasks, setTasks ] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.post(`http://localhost:8000/api/task/get`, {userId});
        setTasks(res.data)
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTasks();
  }, [userId]);

  return (
    <>
      <div className="tasks">
        {tasks.map(task => (
          <div className="task" key={task.id}>
            <h1>{task.task}</h1>
            <div className="task__edit--btns">
              <button>edit</button>
              <button>delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tasks;
