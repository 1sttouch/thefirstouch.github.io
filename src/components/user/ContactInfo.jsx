import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ContactInfo = () => {
    return (
        <>
            <div className="event-details-info">
                <h2>User Info</h2>
                <ul>
                    <li>First Name:<span>Karthik</span></li>
                    <li>Last Name:<span>Narayan</span></li>
                    <li>Age:<span>25</span></li>
                    <li>Email Address:<span>testuser@gmail.com</span></li>
                    <li>Phone number:<span>5656347545</span></li>
                </ul>
                <div className="get-course-btn">
                    <Link to="#">Edit</Link>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;