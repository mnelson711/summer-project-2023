import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";
import "./bootstrap.min.css";
import { Provider, LikeButton } from "@lyket/react";
import {
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
import Alert from "@mui/material/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./Components/SearchBar";

export default function Users() {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const navigate = useNavigate();
    const [fade, setFade] = useState(""); //fade in/out animation for alerts
    const cookies = document.cookie;
    const userID = document.cookie
        .split("; ")
        .find((row) => row.startsWith("UserID="))
        ?.split("=")[1];
    const [Username, setUsername] = useState("");
    const [fetchData, setFetchData] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (fetchData) {
            axios.post("http://localhost:3001/selectAllUsers").then((response) => {
                setUsers(response.data);
                setFetchData(false);
            });
        }
        console.log(users);
    }, [fetchData, setFetchData]);



    return (
        <body>
            <MDBContainer fluid className="p-4 background-radial-gradient">
                <MDBNavbar expand="lg" className="bg-glass top position-fixed">
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
                                            className="text-black"
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
                                            className="text-white"
                                        />
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
                <SearchBar
                    placeholder="Search for Users..."
                    data={users}
                    attribute={"Username"}
                />
                {users.map((user) => (
                    <MDBContainer style={{ marginBottom: "3vh" }}>
                        <MDBCard className="bg-glass threadCard">
                            <MDBCardBody>
                                <button
                                    className="threadTitleButton"
                                    onClick={() => {
                                        document.cookie = "chosenUser= " + user.Username;
                                        navigate(`/profile/${user.Username}`)}}
                                >
                                    {user.Username}
                                </button>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBContainer>
            ))}
            </MDBContainer>
        </body>

    )
};
