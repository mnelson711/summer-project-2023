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
    const [userInfo, setUserInfo] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [bday, setBday] = useState("");
    const Navigate = useNavigate();

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const getInfo = () => {
        axios.get("http://localhost:3001/profile").then((response) => {
            setUserInfo(response.data);
            console.log(response.data);
        });
    };

    const fetchUserInfo = async () => {
        // try {
        //     const response = await fetch('/profile');
        //     if (response.ok) {
        //         const data = await response.json();
        //         setUserInfo(data);
        //         setName(data.name);
        //         setEmail(data.email);
        //     } else {
        //         console.log('Failed to fetch user info');
        //     }
        // } catch (error) {
        //     console.error('Error occurred while fetching user info:', error);
        // }
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = async () => {
        //     try {
        //         const response = await fetch('/user', {
        //             method: 'PUT',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({ name, email }),
        //         });
        //         if (response.ok) {
        //             setEditMode(false);
        //             fetchUserInfo();
        //         } else {
        //             console.log('Failed to update user info');
        //         }
        //     } catch (error) {
        //         console.error('Error occurred while updating user info:', error);
        //     }
    };

    return (
        <body>
            <MDBContainer
                fluid
                className="p-4 background-radial-gradient overflow-hidden"
            >
                ProfileView
                <div>
                    <h2>User Info</h2>
                    {editMode ? (
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button onClick={handleSave}>Save</button>
                        </div>
                    ) : (
                        <div>
                            {/* <p>Name: {userInfo.name}</p>
                            <p>Email: {userInfo.email}</p>
                            <p>BDAY: {userInfo.DOB}</p> */}
                            {userInfo.map((val,key) => {
                                return(
                                    <div>
                                    <p>{val.firstName}</p>
                                    <p>{val.Email}</p>
                                    <p>{val.DOB}</p>
                                    </div> 
                                )
                            })}
                            <button onClick={getInfo}>Edit</button>
                        </div>
                    )}
                </div>
                <footer style={{ margin: "100rem" }}></footer>
            </MDBContainer>
        </body>
    );
}
