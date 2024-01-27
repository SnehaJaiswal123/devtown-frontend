import { Backdrop, Button, CircularProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import React from "react";

import axios from "axios";

function Login() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [name, setName] = useState(" ");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const [loginStatus, setLoginStatus] = useState({ msg: " ", key: " " });
  const [signupStatus, setSignupStatus] = useState({ msg: " ", key: " " });

  const navigate = useNavigate();


  async function loginhandler(e) {
    e.preventDefault()
    setLoading(true);
    try {
      const response = await axios.post("https://devtown-et7o.onrender.com/login", {
        password,
        email,
      });

      console.log(response.status);
      localStorage.setItem("userdata", JSON.stringify(response));
      setLoginStatus({ msg: response.data.message, key: Math.random() });
      navigate("/app");
      setLoading(false);
    } catch (err) {
      // setLoginStatus({msg:err.response.message,key:Math.random()})
      if (err.response.status === 400) {
        console.log("All fields are required");
      } else if (err.response.status === 404) {
        console.log("user doesn't exist");
      } else if (err.response.status === 401) {
        console.log("Invalid Credentials");
      }
      alert(err.response.data.message);
      console.log("Error in login:", err);
      setLoading(false);
    }
  }

  async function signuphandler(e) {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "https://devtown-et7o.onrender.com/register",
        {
          email,
          password,
          name,
        },
        config
      );
      localStorage.setItem("userdata", JSON.stringify(response));
      setSignupStatus({ msg: "Success", key: Math.random() });
      navigate("/app");
      setLoading(false);
    } catch (err) {
      setSignupStatus({ msg: "Invalid Data", key: Math.random() });
      if (err.response.status === 400) {
        console.log("All fields are required");
      } else if (err.response.status === 409) {
        console.log("User with this email already exist");
      }
      alert(err.response.data.message);
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => handleTabChange('login')}
        >
          Login
        </button>
        <button
          className={`tab ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => handleTabChange('signup')}
        >
          Signup
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'login' && (
          <form>
            <div className="input-group">
              <label htmlFor="loginUsername">Email:</label>
              <input type="text" id="loginUsername" onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <label htmlFor="loginPassword">Password:</label>
              <input type="password" id="loginPassword" onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <button onClick={loginhandler} className="login-btn">
              Login
            </button>
          </form>
        )}

        {activeTab === 'signup' && (
          <form>
            <div className="input-group">
              <label htmlFor="signupUsername">Name:</label>
              <input type="text" id="signupUsername" onChange={(e)=>setName(e.target.value)} required />
            </div>
            <div className="input-group">
              <label htmlFor="signupUsername">Email:</label>
              <input type="text" id="signupUsername" onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <label htmlFor="signupPassword">Password:</label>
              <input type="password" id="signupPassword" onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <button onClick={signuphandler} className="login-btn">
              Signup
            </button>
          </form>
        )}
      </div>
    </div>
    </>
  );
}
export default Login;
