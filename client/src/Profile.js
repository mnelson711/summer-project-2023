import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";
import "./bootstrap.min.css";
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
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
import { useCookies } from "react-cookie";

export default function Profile() {
    const [editMode, setEditMode] = useState(false);
    const userID = useCookies("userID")[0];
    const [username, setUsername] = useState("");
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [pronoun, setPronoun] = useState("");
    const Navigate = useNavigate();

    const userInfo = () => {
        axios.post("http://localhost:3001/selectByUserID", {
            userID: userID
        }).then((response) => {
            console.log(response.data);
        });
    };

    function update() {
        axios.post("http://localhost:3001/profile", {
            username: username,
            fname: fname,
            lname: lname,
            pronoun: pronoun,
        }).then((response) => {
            console.log(response.data);
        });
    }

    function toggleEditMode() {
        setEditMode(!editMode);
    };

    return (
        <body>
            <MDBContainer
                fluid
                className="p-4 background-radial-gradient overflow-hidden">
                ProfileView
                <div>
                    <h2>User Info</h2>
                    {editMode ? (
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                placeholder={'Username'}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label>First Name:</label>
                            <input
                                type="text"
                                placeholder={'First Name'}
                                onChange={(e) => setfName(e.target.value)}
                            />
                            <label>Last Name:</label>
                            <input
                                type="text"
                                placeholder={'Last Name'}
                                onChange={(e) => setlName(e.target.value)}
                            />
                            <label>Pronouns:</label>
                            <input
                                type="text"
                                placeholder={'Pronouns'}
                                onChange={(e) => setPronoun(e.target.value)}
                            />
                            <button onClick={update}>Save</button>
                        </div>
                    ) : (
                        <div>
                            <div>
                                <p>{userInfo.firstName}</p>
                                <p>{userInfo.lastName}</p>
                                <p>{userInfo.Pronoun}</p>
                                <p>{userInfo.Username}</p>
                                <p>{userInfo.Email}</p>
                                <p>{userInfo.DOB}</p>
                            </div>
                            <button onClick={toggleEditMode}>Edit</button>
                        </div>
                    )}
                </div>
                <footer style={{ margin: "100rem" }}></footer>
            </MDBContainer>
        </body>
    );
}
