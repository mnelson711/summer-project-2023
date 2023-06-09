import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    MDBNavbarToggler,
    MDBNavbarLink,
    MDBCollapse,
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarBrand,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBNavbarNav,
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
import { response } from "express";

export default function Profile() {
    const [editMode, setEditMode] = useState(false);
    const userID = 2;
    const [userData, setUserData] = useState([]);
    const [username, setUsername] = useState("");
    const [fname, setfName] = useState("");
    const [lname, setlName] = useState("");
    const [pronoun, setPronoun] = useState("");
    const userIDCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("UserID="))
        ?.split("=")[1];
    const chosenUserCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("chosenUser="))
        ?.split("=")[1];
    const [loading, setLoading] = useState(true);
    const Navigate = useNavigate();
    const { id } = useParams();
    const [friends, setFriends] = useState([]);
    const [friendsID, setFriendsID] = useState([]);
    const navigate = useNavigate();

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function addFriend(newFriendID) {
        axios
            .post("http://localhost:3001/addFriend", {
                userOne: userIDCookie,
                userTwo: newFriendID,
            })
            .then((response) => {
                console.log("new friendship created");
            });
    }

    function getFriends(userID) {
        axios
            .post("http://localhost:3001/getFriends", {
                userID: userID,
            })
            .then((response) => {
                console.log("got list of friends");
                setFriendsID(response.data);
            });
        friends.map(friend => {
        axios
            .post("http://localhost:3001/selectByUserID", {
                userID: friend,
            })
            .then((response) => {
                console.log("got list of friends");
                setFriends(friends + response.data);
            });
        })
    }

    useEffect(() => {
        console.log(id);
        axios
            .post("http://localhost:3001/selectByUserName", {
                username: id,
            })
            .then((response) => {
                setUserData(response.data);
                console.log(response.data);
                //console.log("chosen user is: " + chosenUserCookie);
                //console.log("first name is: ", userData[0].FirstName);
                setLoading(false);
                //document.cookie = "chosenUser= " + userIDCookie;
            });
        getFriends(id);
    }, []);

    function ownsAccount(userIDCook, chosenUserCook) {
        return userIDCook === chosenUserCook;
    }

    function update() {
        axios
            .post("http://localhost:3001/profileUpdate", {
                username: username,
                fname: fname,
                lname: lname,
                pronoun: pronoun,
                userID: userID,
            })
            .then((response) => {
                //console.log(response.data);
            });
    }
    function toggleEditMode() {
        setEditMode(!editMode);
    }

    //console.log(userData);

    if (loading) {
        return <body>Loading</body>;
    }

    return (
        <body>
            <MDBContainer
                fluid
                className="p-4 background-radial-gradient overflow-hidden position-fixed"
            >
                <MDBNavbar expand="lg" className="bg-glass top">
                    <MDBContainer fluid>
                        <img
                            src="Spectrum-Logo-NavBar1.svg"
                            alt=""
                            width="24"
                            height="24"
                            class="d-inline-block"
                        />
                        <MDBNavbarBrand className="text-white margin" href="/home">
                            Spectrum
                        </MDBNavbarBrand>
                        <MDBCollapse navbar>
                            <MDBNavbarNav className="me-auto mb-2 mb-lg-0"></MDBNavbarNav>

                            <MDBNavbarNav className="d-flex w-auto">
                                <MDBNavbarItem className="margin">
                                    <MDBNavbarLink aria-current="page" href="/threads">
                                        <MDBIcon
                                            fas
                                            icon="comments"
                                            size="2x"
                                            className="text-white"
                                        />
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="margin">
                                    <MDBNavbarLink aria-current="page" href="/guidelines">
                                        <MDBIcon fas icon="book" size="2x" className="text-white" />
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="margin">
                                    <MDBNavbarLink aria-current="page" href="/profile">
                                        <MDBIcon
                                            fas
                                            icon="user-circle"
                                            size="2x"
                                            className="text-black"
                                        />
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
                ProfileView
                <div>
                    <h2>User Info</h2>
                    {editMode ? (
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                placeholder={"Username"}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label>First Name:</label>
                            <input
                                type="text"
                                placeholder={"First Name"}
                                onChange={(e) => setfName(e.target.value)}
                            />
                            <label>Last Name:</label>
                            <input
                                type="text"
                                placeholder={"Last Name"}
                                onChange={(e) => setlName(e.target.value)}
                            />
                            <label>Pronouns:</label>
                            <input
                                type="text"
                                placeholder={"Pronouns"}
                                onChange={(e) => setPronoun(e.target.value)}
                            />
                            <button onClick={update}>Save</button>
                            <button onClick={toggleEditMode}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <div>
                                {/* {userData.map(item => (
                                    <li key={item.userID}>{item.FirstName}</li>
                                ))}
                                <p>{userData[0]}</p> */}
                                <p>{userData[0].FirstName}</p>
                                <p>{lname}</p>
                                <p>{userData[0].Pronoun}</p>
                                <p>{userData[0].Username}</p>
                                <p>{userData[0].Email}</p>
                                <p>{userData[0].DOB}</p>
                            </div>
                            {/* <button onClick={userInfo}>START</button> */}
                            <button onClick={toggleEditMode}>Edit</button>
                            <p>message board for profile</p>
                            <button>Add Friend: </button>
                            {friends.map(friend => {
                                <a href="" onClick={() =>
                                    navigate(`/profile/${friend.Username}/`)}
                                >{friend.Username}</a>
                            })}
                        </div>
                    )}
                </div>
                <footer style={{ margin: "100rem" }}></footer>
            </MDBContainer>
        </body>
    );
}
