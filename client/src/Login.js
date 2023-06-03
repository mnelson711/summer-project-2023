import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

export default function Login() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // event handler for changes to userid text field
  const handleUseridInputChange = (event) => {
    setUserid(event.target.value);
  };

  // event handler for changes to password text field
  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  // event handler for submit button pressed
  const handleSubmitButtonOnClick = (event) => {
    axios
      .post("/api/login", {
        userid: userid,
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

  // react to change to userid or password state
  useEffect(() => {
    console.log("userid: " + userid, "password: ", password);
  }, [userid, password]);

  return (
    <>
      <h1>Login Page</h1>
      <p>
        userid:
        <input
          id="userid-field"
          type="text"
          placeholder="Enter Userid Here"
          name="userid"
          value={userid}
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
        submit
      </button>
    </>
  );
}
