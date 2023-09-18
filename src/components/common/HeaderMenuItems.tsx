import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { useAuth } from '../../hook/authContext';
import { useNavigate } from 'react-router-dom';
import { removeAuthToken } from '../../common/Utils';

const HeaderMenuItems = () => {
    const { isLoggedIn} = useAuth() ;


    return (
        <>
            <div className="menu">
                <nav id="main-menu" className="main-menu">
                    <ul>
                        <li>
                            {
                            !isLoggedIn ?
                            <Link to="/">Home</Link>
                            :
                            <Link to="/user-home">My View</Link>
                            }
                        </li>
                        <li>
                            <Link to="/course#">Courses</Link>
                        </li>
                        <li>
                            <Link to="/events#">Events</Link>
                        </li>
                        <li><Link to="/about#">About Us</Link></li>
                        <li><Link to="/contact#">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default HeaderMenuItems;