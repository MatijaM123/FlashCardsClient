import React, { useState } from "react";
import "./LogInSignUp.css";
import {Navigate} from "react-router-dom";
import {checkCookie} from "../util/cookieUtil";
import {registerUser,Login} from"../util/fetchUtil"

const LogInSignUp = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

  const SignUp = () => {
    registerUser();
    Login();
  };
  
  if(checkCookie("access-token")){
    return <Navigate to='main' replace/>
  }
  return (
    <div className="container">
      <div className="headerText">Flash Kartice Dragani</div>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Name"
          />
        </div>
        <div className="input">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={SignUp}>
          Sign Up
        </div>
        <div className="submit" onClick={Login}>
          Log In
        </div>
      </div>
    </div>
  );
};

export default LogInSignUp;
