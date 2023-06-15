import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './index.css';
import './bootstrap.min.css';
import {
    MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBCheckbox, MDBIcon, MDBNavbarToggler, MDBNavbarLink, MDBCollapse, MDBNavbar, MDBNavbarItem, MDBNavbarBrand, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBNavbarNav
} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import { useCookies } from 'react-cookie';

export default function Guidelines() {
    return (
        <body>
            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
                <MDBNavbar expand='lg' className="bg-glass top" >
                    <MDBContainer fluid>
                        <img src="Spectrum-Logo-NavBar1.svg" alt="" width="24" height="24" class="d-inline-block" />
                        <MDBNavbarBrand className="text-white margin" href='/home'>Spectrum</MDBNavbarBrand>
                        <MDBCollapse navbar >
                            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            </MDBNavbarNav>

                            <MDBNavbarNav className='d-flex w-auto'>
                                <MDBNavbarItem className="margin">
                                    <MDBNavbarLink aria-current='page' href='/threads'>
                                        <MDBIcon fas icon='comments' size='2x' className='text-white' />
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="margin">
                                    <MDBNavbarLink aria-current='page' href='/guidelines'>
                                        <MDBIcon fas icon='book' size='2x' className='text-black' />
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem className="margin">
                                    <MDBNavbarLink aria-current='page' href='/profile'>
                                        <MDBIcon fas icon='user-circle' size='2x' className='text-white' />
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>

                <MDBCard className='my-5 bg-glass'>
                    <MDBCardBody>
                        <h1>Welcome to Spectrum Forum Board!</h1> <h2>This platform has been created to foster connection, support, and understanding among individuals on the autism spectrum and their allies. To ensure a positive and inclusive experience for everyone, we have established the following guidelines:</h2>
                    </MDBCardBody>
                </MDBCard>
                <MDBRow>
                    <MDBCol>
                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody>

                                <h3>Respect and Empathy:</h3>

                                Treat every member with respect and kindness. Be empathetic and understanding of their unique experiences and perspectives.
                                Avoid offensive, derogatory, or discriminatory language. Be mindful of how your words may impact others.
                                Be patient and supportive when interacting with others. Remember that people may communicate differently or require additional time to process information.
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody>
                                <h3>Inclusive Language:</h3>

                                Use person-first language when referring to individuals on the autism spectrum (e.g., "person with autism" rather than "autistic person"). Respect individuals' preferences regarding how they identify themselves.
                                Avoid generalizations or stereotypes about individuals on the spectrum. Recognize that each person has their own strengths, challenges, and experiences.
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody>
                                <h3>Privacy and Confidentiality:</h3>

                                Respect the privacy of forum members. Do not share personal information, such as full names, addresses, or contact details, without explicit permission.
                                Maintain confidentiality regarding any personal stories or sensitive information shared by forum members.
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol>
                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody>
                                <h3>Constructive Communication:</h3>

                                Engage in constructive and meaningful discussions. Focus on sharing knowledge, experiences, and resources related to autism spectrum conditions.
                                Be open to different perspectives and opinions. Respectfully challenge ideas, but avoid personal attacks or aggressive behavior.
                                Stay on topic within each forum thread to maintain clarity and facilitate focused conversations.
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody>
                                <h3>Reliable Information:</h3>

                                Share information from credible sources when discussing autism-related topics. Cite your sources if possible and provide accurate information.
                                Be cautious about sharing personal experiences as universal truths. Recognize that individual experiences can vary widely.
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody>
                                <h3>Support and Encouragement:</h3>

                                Offer support, encouragement, and validation to forum members who may be seeking advice or sharing their challenges.
                                Avoid giving unsolicited or unqualified advice. Instead, focus on sharing personal experiences and suggesting resources that may be helpful.
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol>
                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody>
                                <h3>Reporting Issues:</h3>

                                Report any violations of the forum guidelines to the moderators or administrators.
                                Do not engage in public arguments or confrontations. Address any concerns privately and respectfully with the forum staff.
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='my-5 bg-glass'>
                            <MDBCardBody>
                                <h3>Moderation:</h3>

                                Follow the instructions and guidance of forum moderators or administrators.
                                Understand that moderation is necessary to maintain a safe and respectful environment. Respect decisions made by the moderators regarding content removal or member sanctions.
                                Remember, the purpose of this forum is to create a supportive community for individuals on the autism spectrum and their allies. By following these guidelines, we can ensure that everyone feels valued, heard, and respected. Enjoy your time on the forum and make meaningful connections!
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <footer style={{ margin: '100rem' }}></footer>
            </MDBContainer >
        </body >
    );
}