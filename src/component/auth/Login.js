import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import "../assets/css/global.css";

function Login() {
  const [user, setUser] = useState(false);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitData = () => {
    history.push("/signup");
  };

  const onSubmitData = () => {
    if (validateUsername(username) && validatePassword(password)) {
      setUser(true);
    } else {
      alert("Invalid username or password.");
    }
  };

  const validateUsername = (username) => {
    return /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(username);
  };

  const validatePassword = (password) => {
    return /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,12}$/.test(
      password
    );
  };

  if (user) {
    history.push("/navbar/clientdashboard");
  }

  return (
    <div className="auth-box">
      <div className="login">
        <div className="form">
          <div className="top-sec">
            <img
              src={require(`../assets/icons/eikomp_logo.png`)}
              className="eikomp_logo"
              width={230}
              height={150}
              alt="logo"
            />
            <p>Don't have an account?</p>
            <button1 onClick={submitData} style={{ cursor: "pointer" }}>
              Sign up
            </button1>
            <h3 style={{ padding: 0 }}>WELCOME</h3>
          </div>
          <div className="input-box">
            <FaUserAlt />
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-box">
            <FaLock />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button1 onClick={onSubmitData}>Login</button1>
          <Link to="#">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
