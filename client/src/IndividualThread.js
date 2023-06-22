import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";
import "./bootstrap.min.css";
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
    MDBTextArea,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Alert from "@mui/material/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function IndividualThread() {
    const ThreadID = document.cookie
        .split("; ")
        .find((row) => row.startsWith("ThreadID="))
        ?.split("=")[1];
    const userID = document.cookie
        .split("; ")
        .find((row) => row.startsWith("UserID="))
        ?.split("=")[1];
    const [comments, setComments] = useState([]);
    const [username, setUsername] = useState('');
    const [commentCreated, setCommentCreated] = useState(false);
    const [showAddComment, setShowAddComment] = useState(false);
    const [commentsExist, setCommentsExist] = useState(false);
    const [content, setContent] = useState('');
    const [creatorID, setCreatorID] = useState('');
    const [fade, setFade] = useState(""); //fade in/out animation for alerts 
    const [loading, setLoading] = useState(true);
    const [fetchData, setFetchData] = useState(true);
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    //console.log(ThreadID);

    useEffect(() => {
        if (fetchData) {
            axios
                .post("http://localhost:3001/selectCommentsByThreadID", {
                    ThreadID: ThreadID,
                })
                .then((response) => {
                    setComments(response.data);
                    setLoading(!loading);
                    console.log("comments: ", response.data);
                });
            //setCommentsExist(comments.length === 0);
            console.log(commentsExist);
            setFetchData(false);
        }
    }, [fetchData, setFetchData]);

    const Insert = () => {
        if (!content) return;
        if (!userID) return;
        axios
            .post("http://localhost:3001/selectByUserID", {
                userID: userID,
            })
            .then((response) => {
                setUsername(response.data[0].Username);
                console.log(username);
            });
        if (!username) return;

        axios
            .post("http://localhost:3001/addComment", {
                ThreadID: ThreadID,
                content: content,
                creatorID: userID,
                date: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
            })
            .then((response) => {
                console.log(response.data);
                setCommentCreated(true);
                delay(5000);
                handleshowAddComment();
                setCommentCreated(false);
                setFetchData(true);
            });
    };

    const handleshowAddComment = () => {
        if (!showAddComment) {
            setFade("fade-in bg-glass addThreadCard");
        } else {
            setFade("fade-out-tag bg-glass addThreadCard");
        }
        setShowAddComment(!showAddComment);
        setContent("");
    };

    // if (loading) {
    //     return (<p>Loading</p>)
    // }
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

                {showAddComment ? (
                    <MDBCard id="addCommentMenu" className={fade}>
                        <MDBCardBody>
                            <MDBTextArea
                                label="enter comment"
                                placeholder="enter ya content here bitch"
                                id="comment-content"
                                type="text-area"
                                onChange={(e) => {
                                    setContent(e.target.value);
                                    //console.log(content);
                                }}
                            />

                            <MDBRow style={{ marginTop: "1%" }}>
                                <div className="flex1">
                                    <button className="createThreadButton" onClick={
                                        Insert}>
                                        Create
                                    </button>
                                </div>
                                <div className="flex1">
                                    <button
                                        className="cancelButton"
                                        onClick={handleshowAddComment}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                ) : null}

                {true ? (
                    <div style={{ marginTop: "10vh" }}>
                        {comments.map((comment) => (
                            <MDBContainer style={{ marginBottom: "3vh" }}>
                                <MDBCard className="bg-glass threadCard">
                                    <MDBCardBody>
                                        <h5>User: {comment.creatorID} On {comment.timestamp.substring(0, 10)}</h5>
                                        <h6>
                                            {comment.content}
                                        </h6>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBContainer>
                        ))}
                    </div>
                ) : (
                    <div>
                        <br></br>
                        <p>No comments here yet!</p>
                        <p>Be the first to comment!</p>
                    </div>)}

                {commentCreated ? (
                    <p className="mb-3 mt-4">
                        <Alert className="fade-out alert" severity="success">
                            Comment created!
                        </Alert>
                    </p>
                ) : null}
                <button className="bg-glass addThread" onClick={handleshowAddComment}>
                    <div>
                        <FontAwesomeIcon icon={faPlus} size="2xl" />
                    </div>
                </button>
            </MDBContainer>
        </body>
    );
}
