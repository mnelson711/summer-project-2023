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
import Alert from '@mui/material/Alert';
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";

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

  const [tooShort, setTooShort] = useState(false);
  const [noLower, setNoLower] = useState(false);
  const [noUpper, setNoUpper] = useState(false);
  const [noNumber, setNoNumber] = useState(false);
  const [noMatch, setNoMatch] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [emailTaken, setEmailTaken] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [allSet, setAllSet] = useState(false);

  const Insert = () => {
    if (allSet) {
      const avatar = createAvatar(lorelei, {
        // ... options
      });
      axios.post("http://localhost:3001/signup", {
        fname: fname,
        lname: lname,
        username: username,
        dob: dob,
        email: email,
        pronouns: pronouns,
        password: password,
        picture: avatar.toString(),
      }).then((response) => {
        console.log(response.data.message);
        setAccountCreated(true);
        navigate('/login');
      })
    };
  }

  const handleChangeTerms = () => {
    setTermsAgreed(!termsAgreed);
  };

  function alert() {
    var strUsername = String(username);
    var strEmail = String(email);
    var strPassword = String(password);
    var strConfirmPassword = String(confirmpassword);
    if (strPassword.length < 8) {
      setTooShort(true);
    } else {
      setTooShort(false);
    }
    if (strPassword.search(/[a-z]/) < 0) {
      setNoLower(true);
    } else {
      setNoLower(false);
    }
    if (strPassword.search(/[A-Z]/) < 0) {
      setNoUpper(true);
    } else {
      setNoUpper(false);
    }
    if (strPassword.search(/[0-9]/) < 0) {
      setNoNumber(true);
    } else {
      setNoNumber(false);
    }
    if (strPassword !== strConfirmPassword) {
      setNoMatch(true);
    } else {
      setNoMatch(false);
    }
    axios.post("http://localhost:3001/selectByUserName", {
      username: strUsername,
    }).then((response) => {
      if (response.data.length > 0) {
        setUsernameTaken(true);
      } else {
        setUsernameTaken(false);
      }
    });
    axios.post("http://localhost:3001/selectByEmail", {
      email: strEmail,
    }).then((response) => {
      if (response.data.length > 0) {
        setEmailTaken(true);
      } else {
        setEmailTaken(false);
      }
    });
    if (fname !== null && lname !== null && username !== null && dob !== null && pronouns !== null && email !== null && tooShort === false && noLower === false && noUpper === false && noNumber === false && noMatch === false && usernameTaken === false && emailTaken === false && termsAgreed === true) {
      setAllSet(true);
    } else {
      setAllSet(false);
    }
  }

  useEffect(() => {
    alert();
  });

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
                    <MDBInput wrapperClass='mb-4' placeholder='First name' id='form1' type='text' required onChange={(e) => { setfname(e.target.value); }} />
                  </MDBCol>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='Last name' id='form2' type='text' required onChange={(e) => { setlname(e.target.value); }} />
                  </MDBCol>
                </MDBRow>
                {/* Username */}
                <MDBInput wrapperClass='mb-4' placeholder='Username' id='form3' type='text' required onChange={(e) => { setUsername(e.target.value); }} />
                {/* Date of Birth */}
                <MDBInput wrapperClass='mb-4' placeholder='Date of Birth' id='form4' type='date' required onChange={(e) => { setdob(e.target.value); }} />
                {/* Email */}
                <MDBInput wrapperClass='mb-4' placeholder='Email' id='form5' type='email' required onChange={(e) => { setEmail(e.target.value); }} />
                {/* Pronouns */}
                <Box className="mb-4">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pronouns</InputLabel>
                    <Select required onChange={handleChange} >
                      <MenuItem value={"They/Them"}>They/Them</MenuItem>
                      <MenuItem value={"He/Him"}>He/Him</MenuItem>
                      <MenuItem value={"She/Her"}>She/Her</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                {/* Password */}
                <MDBInput wrapperClass='mb-4' placeholder='Password' id='form6' type='password' required onChange={(e) => { setPassword(e.target.value); }} />
                <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' id='form7' type='password' required onChange={(e) => { setConfirmPassword(e.target.value); }} />

                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' required onChange={handleChangeTerms} label='Agree to&nbsp;' /> <a href="#"> Terms and Conditions</a>
                </div>
                <div className="text-center">
                  <p className="mb-3 mt-4">
                    {tooShort ? <p className="mb-3 mt-4"><Alert severity="warning">Password must be at least 8 characters long!</Alert></p> : null}
                    {noLower ? <p className="mb-3 mt-4"><Alert severity="warning">Password must contain at least one lowercase letter!</Alert></p> : null}
                    {noUpper ? <p className="mb-3 mt-4"><Alert severity="warning">Password must contain at least one uppercase letter!</Alert></p> : null}
                    {noNumber ? <p className="mb-3 mt-4"><Alert severity="warning">Password must contain at least one number!</Alert></p> : null}
                    {noMatch ? <p className="mb-3 mt-4"><Alert severity="warning">Passwords do not match!</Alert></p> : null}
                    {usernameTaken ? <p classNam e="mb-3 mt-4"><Alert severity="warning">Username is already taken!</Alert></p> : null}
                    {emailTaken ? <p className="mb-3 mt-4"><Alert severity="warning">Email is already taken!</Alert></p> : null}
                    {termsAgreed ? null : <p className="mb-3 mt-4"><Alert severity="warning">You must agree to the terms and conditions!</Alert></p>}
                    {accountCreated ? <p className="mb-3 mt-4"><Alert severity="success">Account created!</Alert></p> : null}
                  </p>
                </div>
                <button className="ripple ripple-surface ripple-surface-light btn btn-primary btn-md w-100 mb-4" size='md' onClick={Insert}>sign up</button>
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
      </MDBContainer>
    </body>
  );
}