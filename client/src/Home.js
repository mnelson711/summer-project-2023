import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './index.css';
import './bootstrap.min.css';
import {
    MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBCheckbox, MDBIcon, MDBNavbarToggler, MDBNavbarLink, MDBCollapse, MDBNavbar, MDBNavbarItem, MDBNavbarBrand, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBNavbarNav
} from 'mdb-react-ui-kit';


export default function Home() {

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
                                        <MDBIcon fas icon='book' size='2x' className='text-white' />
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
                <footer style={{ margin: '100rem' }}></footer>
            </MDBContainer >
        </body >
    );
}