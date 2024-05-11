import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="tasks">
          <div className="add-task">
            <input type="text" placeholder="Enter task" />
            <button>Add</button>
          </div>
          <div className="task-list"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
