import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
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
// doorbrother-garbosystem


function Signup() {
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
                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='First name' id='form1' type='text' />
                  </MDBCol>

                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' placeholder='Last name' id='form2' type='text' />
                  </MDBCol>
                </MDBRow>
                <MDBInput wrapperClass='mb-4' placeholder='Username' id='form3' type='text' />
                <MDBInput wrapperClass='mb-4' placeholder='Date of Birth' id='form4' type='date' />
                <MDBInput wrapperClass='mb-4' placeholder='Email' id='form5' type='email' />
                <div className="form-outline mb-4 pronouns">
                  <select name="dog-names" id="Pronouns">
                    <option value="None">Select</option>
                    <option value="They/Them">They/Them</option>
                    <option value="He/Him">He/Him</option>
                    <option value="She/Her">She/Her</option>
                    <option value="Xe/Xur">Xe/Xur</option>
                  </select>
                </div>


                <MDBInput wrapperClass='mb-4' placeholder='Password' id='form6' type='password' />
                <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' id='form7' type='password' />
                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' required label='Agree to&nbsp;' /> <a href="#"> Terms and Conditions</a>
                </div>
                <button className="ripple ripple-surface ripple-surface-light btn btn-primary btn-md w-100 mb-4" size='md'>sign up</button>
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


export default Signup;