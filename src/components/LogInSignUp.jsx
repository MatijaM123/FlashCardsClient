import React, { useState } from "react";
import "./LogInSignUp.css";
import {Navigate} from "react-router-dom";

const LogInSignUp = () => {
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookie(cName) {
    let token = getCookie(cName);
    if (token !== "") {
      return true;
    } else {
      return false;
    }
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function registerUser() {
    const response = await fetch("http//:localhost:3030/auth/register", {
      method: "POST", // HTTP method
      body: JSON.stringify({ username: username, password: password }),
    });
    return response.json();
  }

  const SignUp = () => {
    registerUser();
    Login();
  };
  const Login = async () => {
    const response = await fetch("http//:localhost:3030/auth/register", {
      method: "POST", // HTTP method
      body: JSON.stringify({ username: username, password: password }),
    });
    if (response.ok && response.json() != null) {
      setCookie("refresh-token", response.json().refreshToken, 5);
      setCookie("access-token", response.json().accessToken, 5);
    }
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
