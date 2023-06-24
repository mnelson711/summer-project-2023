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
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Alert from "@mui/material/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./Components/SearchBar";

export default function Threads() {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const navigate = useNavigate();
    const [Title, setTitle] = useState("");
    const [TitleTaken, setTitleTaken] = useState(false);
    const [Description, setDescription] = useState("");
    const [IndividualTag, setIndividualTag] = useState("");
    const [showAddThread, setShowAddThread] = useState(false);
    const [fade, setFade] = useState(""); //fade in/out animation for alerts
    const [threadCreated, setThreadCreated] = useState(false);
    const [tags, setTags] = useState([]);
    const cookies = document.cookie;
    const userID = document.cookie
        .split("; ")
        .find((row) => row.startsWith("UserID="))
        ?.split("=")[1];
    const [Username, setUsername] = useState("");
    const [threads, setThreads] = useState([]);
    const [fetchData, setFetchData] = useState(true);

    useEffect(() => {
        if (fetchData) {
            axios.post("http://localhost:3001/selectAllThreads").then((response) => {
                setThreads(response.data);
                setFetchData(false);
            });
        }
        console.log(threads);
    }, [fetchData, setFetchData]);

    function goToThread(ThreadID) {
        console.log("passed thread : ", ThreadID);
        document.cookie = "ThreadID= " + ThreadID;
        navigate("/individualThread");
    }

    const handleshowAddThread = () => {
        if (!showAddThread) {
            setFade("fade-in bg-glass addThreadCard");
        } else {
            setFade("fade-out-tag bg-glass addThreadCard");
        }
        setShowAddThread(!showAddThread);
        setTitle("");
        setDescription("");
        setTags([]);
        setTitleTaken(false);
    };

    const addTag = () => {
        if (!IndividualTag) return;
        if (tags.includes(IndividualTag)) return;
        if (tags.length > 5) return;
        if (IndividualTag.length > 10) return;
        if (IndividualTag.length < 3) return;
        if (IndividualTag.includes(" ")) return;
        setTags([...tags, IndividualTag]);
        setIndividualTag("");
        var clearInput = document.getElementById("tags");
        clearInput.value = "";
    };

    const deleteTag = (tag) => {
        return () => {
            setTags(tags.filter((item) => item !== tag));
        };
    };

    const Insert = async () => {
        if (!Title) return;
        if (!Description) return;
        if (tags.length < 1) return;

        axios
            .post("http://localhost:3001/selectByThreadTitle", {
                title: Title,
            })
            .then((response) => {
                if (response.data.length > 0) {
                    setTitleTaken(true);
                } else {
                    setTitleTaken(false);
                }
            });
        if (TitleTaken) return;

        if (!userID) return;
        axios
            .post("http://localhost:3001/selectByUserID", {
                userID: userID,
            })
            .then((response) => {
                setUsername(response.data[0].Username);
            });
        if (!Username) return;

        axios
            .post("http://localhost:3001/addThread", {
                title: Title,
                description: Description,
                tags: tags.toString(),
                author: Username,
                date: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
            })
            .then((response) => {
                setThreadCreated(true);
                delay(5000);
                handleshowAddThread();
                setThreadCreated(false);
                setFetchData(true);
            });
    };

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
                      <MDBIcon
                        fas
                        icon="book"
                        size="2x"
                        className="text-white"
                      />
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
          <SearchBar placeholder="Search for Threads..." data={threads} attribute={'Title'}/>

          {showAddThread ? (
            <MDBCard id="addThreadMenu" className={fade}>
              <MDBCardBody>
                <MDBInput
                  label="Title"
                  placeholder="Title"
                  id="title"
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                {TitleTaken ? (
                  <p className="mb-3 mt-4">
                    <Alert className="fade-out alert" severity="warning">
                      Thread name taken!
                    </Alert>
                  </p>
                ) : null}

                <MDBInput
                  label="Description"
                  placeholder="Description"
                  id="description"
                  type="text"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <MDBRow>
                  <div className="flex2">
                    <MDBInput
                      label="Tags"
                      placeholder="Tags"
                      id="tags"
                      type="text"
                      onChange={(e) => {
                        setIndividualTag(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex1">
                    <button className="bg-glass addTagButton" onClick={addTag}>
                      Add
                    </button>
                  </div>
                  <div className="flex2">
                    <div className="tags">
                      {tags.map((tag) => (
                        <div onClick={deleteTag(tag)} className="tag">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </MDBRow>

                <MDBRow style={{ marginTop: "1%" }}>
                  <div className="flex1">
                    <button className="createThreadButton" onClick={Insert}>
                      Create
                    </button>
                  </div>
                  <div className="flex1">
                    <button
                      className="cancelButton"
                      onClick={handleshowAddThread}
                    >
                      Cancel
                    </button>
                  </div>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          ) : null}

          <div style={{ marginTop: "10vh" }}>
            {threads.map((thread) => (
              <MDBContainer style={{ marginBottom: "3vh" }}>
                <MDBCard className="bg-glass threadCard">
                  <MDBCardBody>
                    <button
                      className="threadTitleButton"
                      onClick={() => goToThread(thread.ThreadID)}
                    >
                      {thread.Title}
                    </button>
                    <h5>{thread.Description}</h5>
                    <h6>{thread.Tags.replaceAll(",", " | ")}</h6>
                    <h6>
                      Created by{" "}
                      <a
                        href="profile"
                        onClick={() => {
                          document.cookie = "chosenUser= " + thread.Author;
                          //navigate('/profile');
                        }}
                      >
                        {thread.Author}
                      </a>{" "}
                      on {thread.CreationDate.substring(0, 10)}
                    </h6>
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="xl"
                      style={{ marginRight: ".5rem" }}
                    />
                    {thread.Likes === null ? 0 : thread.Likes}
                  </MDBCardBody>
                </MDBCard>
              </MDBContainer>
            ))}
          </div>
          {threadCreated ? (
            <p className="mb-3 mt-4">
              <Alert className="fade-out alert" severity="success">
                Thread created!
              </Alert>
            </p>
          ) : null}
          <button className="bg-glass addThread" onClick={handleshowAddThread}>
            <div>
              <FontAwesomeIcon icon={faPlus} size="2xl" />
            </div>
          </button>
        </MDBContainer>
      </body>
    );
}
