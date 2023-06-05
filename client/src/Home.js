import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import "./index.css";

export default function Home() {

    return (
        <>
            <header>
                <div className="px-3 py-2 bg-dark text-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="./Home" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                {/* <FontAwesomeIcon icon="fa-solid fa-wavefrom-lines fa-2xl" style={{ color: 'white' }} /> */}
                                <h2 style="position:absolute; margin: 3.5rem;">Spectrum</h2>
                            </a>
                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <a href="./home" className="nav-link text-secondary">
                                        {/* <FontAwesomeIcon icon="fa-solid fa-house fa-2xl" style={{ color: 'white' }} /> */}
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="./guidelines" className="nav-link text-white">
                                        {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-book fa-2xl" style={{ color: 'white' }} /> */}
                                        Guidelines
                                    </a>
                                </li>
                                <li>
                                    <a href="./threads" className="nav-link text-white">
                                        {/* <FontAwesomeIcon icon="fa-solid fa-reel fa-2xl" style={{ color: 'white' }} /> */}
                                        Threads
                                    </a>
                                </li>
                                <li>
                                    <a href="./profile" className="nav-link text-white">
                                        {/* <FontAwesomeIcon icon="fa-solid fa-user fa-2xl" style={{ color: 'white' }} /> */}
                                        Profile
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}