import  axios  from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  const navigate = useNavigate();

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", userData);
      if(res.status == 200) navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="login">
        <div className="form">
          <input type="text" onChange={handleChange} placeholder="E-mail" name="email" />
          <input type="text" onChange={handleChange} placeholder="Password" name="password" />
          <button onClick={handleLogin}>Login</button>
        </div>
        <p>Not registered? <Link to="/register">Register</Link> </p>
      </div>
    </>
  );
};

export default Login;
