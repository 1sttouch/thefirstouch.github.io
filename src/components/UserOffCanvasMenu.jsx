import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logoMini from '/img/logo/logo-mini.png'

const UserOffCanvasMenu = () => {

    const location = useLocation();

    return (
        <>
            <Link className="offcanvas-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars"></i></Link>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <Link to="/#"><img src={logoMini} alt="logo" /></Link>
                    <button type="button" className='offcanvasClose' data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="offcanvas-body">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li>
                                        <Link className={location.pathname === '/user-home' ? 'nav-link active' : 'nav-link'} to="/user-home#">Home</Link>
                                    </li>
                                    <li>
                                        <Link className={location.pathname === '/user-profile' ? 'nav-link active' : 'nav-link'} to="/user-profile#">Profile</Link>
                                    </li>
                                    <li>
                                        <Link className={location.pathname === '/user-touchpoints' ? 'nav-link active' : 'nav-link'} to="/user-touchpoints#">Touch Points</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default UserOffCanvasMenu;