import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState({ 
    email: "", 
    password: "",
    username: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/auth/register", userData);
      navigate("/login");
    } catch (error) {
      setErr(error.response.data);
    }
  }

  return (
    <>
      <div className="register">
        <div className="form">
          <input type="text" onChange={handleChange} placeholder="E-mail" name="email" />
          <input type="text" onChange={handleChange} placeholder="Password" name="password" />
          <input type="text" onChange={handleChange} placeholder="Username" name="username" />
          {err && <p className="auth-err">{err}</p>}
          <button onClick={handleRegister}>Register</button>
        </div>
        <p>Registered? <Link to="/login">Login</Link> </p>
      </div>
    </>
  );
};

export default Login;
