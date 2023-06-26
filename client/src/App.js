import "./index.css";
import "./bootstrap.min.css";
import React from "react";
// import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useCookies } from 'react-cookie';
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Threads from "./Threads";
import IndividualThread from "./IndividualThread";
import Guidelines from "./Guidelines";
import Profile from "./Profile";
import Users from "./Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/threads" element={<Threads />} />
        <Route path="/individualthread/:id" element={<IndividualThread />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
