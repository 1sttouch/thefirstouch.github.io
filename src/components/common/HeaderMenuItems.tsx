import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { useAuth } from '../../hook/authContext';

const HeaderMenuItems = () => {
    const {authUser, setAuthUser, setIsLoggedIn, isLoggedIn} = useAuth() ;
     
    const [isSearchVisible, setIsSearchVisible] = useState(true);
    const toggleIcon = () => {
        setIsSearchVisible(!isSearchVisible);
    }

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <div className="menu">
                <nav id="main-menu" className="main-menu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/course#">Courses</Link>
                        </li>
                        <li>
                            <Link to="/events#">Events</Link>
                        </li>
                        <li><Link to="/about#">About Us</Link></li>
                        <li><Link to="/contact#">Contact Us</Link></li>
                        {/* {
                        !isLoggedIn ?
                            <>
                                <li><Link to="/signup#">Sign Up</Link></li>
                                <li><Link to="/signin#">Sign In</Link></li>
                            </>
                         : <></>
                        } */}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default HeaderMenuItems;