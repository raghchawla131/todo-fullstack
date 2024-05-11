import React, { useContext } from "react";
import { authContext } from "../context/authContext.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {

  const {currentUser, logout} = useContext(authContext);

  return (
    <>
      <div className="nav">
        <div className="nav__logo">
          <h1>To-do-app</h1>
        </div>
        <div className="nav__right">
          <h1>{currentUser?.username}</h1>
          {currentUser ? <h1 onClick={logout}>logout</h1> : <h1><Link to="/login">login</Link></h1>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
