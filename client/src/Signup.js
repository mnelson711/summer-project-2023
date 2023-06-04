import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./index.css";
// doorbrother-garbosystem
export default function Signup() {
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

  const handleLoginButtonOnClick = (event) => {
    navigate('/login');
  };

  // event handler for submit button pressed
  const handleSubmitButtonOnClick = (event) => {
    Axios
      .post("/api/signup", {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.success) {
          navigate("/login");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // react to change to userid or password state
  useEffect(() => {
    console.log("username: " + username, "password: ", password);
  }, [username, password]);

  return (
    <>
      <h1>Sign Up Page</h1>
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
          type="text"
          placeholder="Enter Password Here"
          name="password"
          value={password}
          onChange={handlePasswordInputChange}
        />
      </p>
      <button id="submit-button" onClick={handleSubmitButtonOnClick}>
        submit
      </button>
      <button id="submit-button" onClick={handleLoginButtonOnClick}>
        Back to Login
      </button>
    </>
  );
}
