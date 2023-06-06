import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './index.css';
import './bootstrap.min.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
}
  from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useCookies } from 'react-cookie';

export default function Signup() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [username, setUsername] = useState("");
  const [dob, setdob] = useState("");
  const [email, setEmail] = useState("");
  const [pronouns, setPronouns] = useState("");
  const handleChange = (event) => {
    setPronouns(event.target.value);
  };
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['username']);

  const handle = () => {
    setCookie('username', username, { path: '/' });
  };

  const Signup = () => {
    axios.post("http://localhost:3001/signup", {
      fname: fname,
      lname: lname,
      username: username,
      dob: dob,
      email: email,
      pronouns: pronouns,
      password: password,
      confirmpassword: confirmpassword
    }).then((response) => {
      navigate('/login');
      console.log(response.data);
    });
  }

  return (
    <body>
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
        <MDBRow style={{ marginTop: '1%' }}>
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center' >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
              Spectrum <br />
              <span className="subheader">Empowering Conversations</span>
            </h1>
          </MDBCol>
          <MDBCol md='6' className='position-relative'>
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
            <MDBCard className='my-5 bg-glass'>
              <MDBCardBody className='p-5'>
                {/* First & Last Name */}
                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='First name' id='form1' type='text' onChange={(e) => { setfname(e.target.value); }} />
                  </MDBCol>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='Last name' id='form2' type='text' onChange={(e) => { setlname(e.target.value); }} />
                  </MDBCol>
                </MDBRow>
                {/* Username */}
                <MDBInput wrapperClass='mb-4' placeholder='Username' id='form3' type='text' onChange={(e) => { setUsername(e.target.value); }} />
                {/* Date of Birth */}
                <MDBInput wrapperClass='mb-4' placeholder='Date of Birth' id='form4' type='date' onChange={(e) => { setdob(e.target.value); }} />
                {/* Email */}
                <MDBInput wrapperClass='mb-4' placeholder='Email' id='form5' type='email' onChange={(e) => { setEmail(e.target.value); }} />
                {/* Pronouns */}
                <Box className="mb-4">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pronouns</InputLabel>
                    <Select onChange={handleChange} >
                      <MenuItem value={"They/Them"}>They/Them</MenuItem>
                      <MenuItem value={"He/Him"}>He/Him</MenuItem>
                      <MenuItem value={"She/Her"}>She/Her</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                {/* Password */}
                <MDBInput wrapperClass='mb-4' placeholder='Password' id='form6' type='password' onChange={(e) => { setPassword(e.target.value); }} />
                <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' id='form7' type='password' onChange={(e) => { setConfirmPassword(e.target.value); }} />

                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' required label='Agree to&nbsp;' /> <a href="#"> Terms and Conditions</a>
                </div>
                <button className="ripple ripple-surface ripple-surface-light btn btn-primary btn-md w-100 mb-4" size='md' onClick={Signup}>sign up</button>
                <div className="text-center">
                  <p className="mb-3 mt-4">have an account?</p>
                  <MDBRow>
                    <MDBCol col='6'>
                      <a href='/home'>
                        <button className="ripple ripple-surface ripple-surface-light btn btn-primary btn-md w-100 mb-4" size='md'>Home</button>
                      </a>
                    </MDBCol>
                    <MDBCol col='6'>
                      <a href='/login'>
                        <button className="ripple ripple-surface ripple-surface-light btn btn-primary btn-md w-100 mb-4" size='md'>sign in</button>
                      </a>
                    </MDBCol>
                  </MDBRow>
                </div>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <footer style={{ margin: '100rem' }}></footer>
      </MDBContainer>
    </body>
  );
}