import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

const UserMenuItems = () => {

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
                        <li><Link to="/user-home#">Home</Link></li>
                        <li><Link to="/user-profile#">Profile</Link></li>
                        <li><Link to="/user-touchpoints#">Touch Points</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default UserMenuItems;