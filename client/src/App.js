import "./App.css";
import "./bootstrap.min.css";
import React from "react";
// import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
// import Threads from "./Threads";
// import IndividualThread from "./individualthread";
// import Guidelines from "./Guidelines";
// import ProfileView from "./ProfileView";
// import ProfileEdit from "./ProfileEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/threads" element={<Threads data={threads} />} />
          <Route path="/individualthread" element={<IndividualThread data={messages} />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/profileview" element={<ProfileView />} />
          <Route path="/profileedit" element={<ProfileEdit />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
