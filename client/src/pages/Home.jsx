import React from "react";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="tasks">
          <div className="add-task">
            <input type="text" placeholder="Enter task" />
            <button>Add</button>
          </div>
          <div className="task-list">

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
