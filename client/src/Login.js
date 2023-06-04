import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./index.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // event handler for changes to userid text field
  const handleUseridInputChange = (event) => {
    setUsername(event.target.value);
  };

  // event handler for changes to password text field
  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  // event handler for submit button pressed
  const handleSubmitButtonOnClick = (event) => {
    Axios
      .post("/api/login", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.success) {
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSignupButtonOnClick = (event) => {
    navigate('/signup');
  };

  // react to change to userid or password state
  useEffect(() => {
    console.log("username: " + username, "password: ", password);
  }, [username, password]);

  return (
    <>
      <h1>Login Page</h1>
      <p>
        userid:
        <input
          id="username-field"
          type="text"
          placeholder="Enter Username Here"
          name="username"
          value={username}
          onChange={handleUseridInputChange}
        />
      </p>
      <p>
        password:
        <input
          id="password-field"
          type="password"
          placeholder="Enter Password Here"
          name="password"
          value={password}
          onChange={handlePasswordInputChange}
        />
      </p>
      <button id="submit-button" onClick={handleSubmitButtonOnClick}>
        Login
      </button>
      <button id="signup"
        onClick={handleSignupButtonOnClick}
      >
        Signup
      </button>
    </>
  );
}
