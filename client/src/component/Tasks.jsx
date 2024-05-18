import axios from "axios";
import React from "react";

const Tasks = ({ tasks, fetchTasks }) => {

  const handleClick = async (id) => {
    try {
      const res = await axios.post('http://localhost:8000/api/task/delete', {id});
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="task--list">
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <h1>{task.task}</h1>
              <button className="delete--task" onClick={() => {handleClick(task.id)}}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tasks;
