import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./index.css";
import "./index.css";
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

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState("");

  // event handler for changes to userid text field
  const handleUseridInputChange = (event) => {
    setUsername(event.target.value);
  };

  // event handler for changes to password text field
  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    axios.post("http://localhost:3001/login", {
      username: username,
      password: password
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      }
      else {
        setLoginStatus(response.data[0].username);
      }
      console.log(response.data);
    });
  };

  // react to change to userid or password state
  useEffect(() => {
    console.log('username: ' + username, 'password: ', password)
  }, [username, password]);

  return (
    <body>
      <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
        <MDBRow style={{ marginTop: '5%' }}>
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
                <MDBInput wrapperClass='mb-4' placeholder='Email' id='form3' type='email' onChange={(e) => { setUsername(e.target.value); }} />
                <MDBInput wrapperClass='mb-4' placeholder='Password' id='form4' type='password' onChange={(e) => { setPassword(e.target.value); }} />
                <button className="ripple ripple-surface ripple-surface-light btn btn-primary btn-md w-100 mb-4" size='md' onClick={login}>sign in</button>
                <p>{loginStatus}</p>
                <div className="text-center">
                  <p>or login with</p>
                  <MDBBtn tag='a' color='none' className='margin' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='facebook-f' size="lg" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='margin' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='twitter' size="lg" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='margin' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='google' size="lg" />
                  </MDBBtn>

                  <MDBBtn tag='a' color='none' className='margin' style={{ color: '#1266f1' }}>
                    <MDBIcon fab icon='github' size="lg" />
                  </MDBBtn>

                  <p className="mb-3 mt-4">don't have an account?</p>
                  <MDBRow>
                    <MDBCol col='6'>
                      <a href='/home'>
                        <button className="ripple ripple-surface ripple-surface-light btn btn-primary btn-md w-100 mb-4" size='md'>Home</button>
                      </a>
                    </MDBCol>
                    <MDBCol col='6'>
                      <a href='/signup'>
                        <button className="ripple ripple-surface ripple-surface-light btn btn-primary btn-md w-100 mb-4" size='md'>sign up</button>
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
