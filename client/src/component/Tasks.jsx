import axios from "axios";
import React, { useEffect, useState } from "react";

const Tasks = ({ tasks, fetchTasks }) => {
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <>
      <div className="task--list">
        {tasks.map((task) => (
          <div className="task" key={task.id}>
            <h1>{task.task}</h1>
            <div className="task__edit--btns">
              <button>edit</button>
              <button onClick={handleDelete}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tasks;
