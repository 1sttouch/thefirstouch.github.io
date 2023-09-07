import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logoMini from '/img/logo/logo-mini.png'

const OffCanvasMenu = () => {

    const [iconToggle1, setIconToggle1] = useState(true)
    const [iconToggle2, setIconToggle2] = useState(true)
    const [iconToggle3, setIconToggle3] = useState(true)
    const [iconToggle4, setIconToggle4] = useState(true)
    const [iconToggle5, setIconToggle5] = useState(true)
    const [iconToggle6, setIconToggle6] = useState(true)

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
                                    <li className="nav-item">
                                        <Link className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} to="/#">Home</Link>
                                    </li>
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle"  to="/home" data-bs-toggle="dropdown" aria-expanded="false" >
                                            Home
                                            {iconToggle1 ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className={location.pathname === '/' ? 'dropdown-item active' : 'dropdown-item'} to="/#">Home Version 1</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/home-2' ? 'dropdown-item active' : 'dropdown-item'} to="/home-2#">Home Version 2</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/home-3' ? 'dropdown-item active' : 'dropdown-item'} to="/home-3#">Home Version 3</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/home-4' ? 'dropdown-item active' : 'dropdown-item'} to="/home-4#">Home Version 4</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/home-5' ? 'dropdown-item active' : 'dropdown-item'} to="/home-5#">Home Version 5</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/home-6' ? 'dropdown-item active' : 'dropdown-item'} to="/home-6#">Home Version 6</Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/research#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle2(!iconToggle2)}>
                                            Research
                                            {iconToggle2 ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"> </i>}
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className={location.pathname === '/research' ? 'dropdown-item active' : 'dropdown-item'} to="/research#">Research</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/research-details' ? 'dropdown-item active' : 'dropdown-item'} to="/research-details#">Research Details</Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/course#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle3(!iconToggle3)}>
                                            Course
                                            {iconToggle3 ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className={location.pathname === '/course' ? 'dropdown-item active' : 'dropdown-item'} to="/course#">Course</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/course-isotop' ? 'dropdown-item active' : 'dropdown-item'} to="/course-isotop#">Course Isotop</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/course-slider' ? 'dropdown-item active' : 'dropdown-item'} to="/course-slider#">Course Slider</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/course-details' ? 'dropdown-item active' : 'dropdown-item'} to="/course-details#">Course Details</Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/events#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle4(!iconToggle4)}>
                                            Events
                                            {iconToggle4 ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className={location.pathname === '/events' ? 'dropdown-item active' : 'dropdown-item'} to="/events#">Events</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/event-with-sidebar' ? 'dropdown-item active' : 'dropdown-item'} to="/event-with-sidebar#">Event With Sidebar</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/event-3-column' ? 'dropdown-item active' : 'dropdown-item'} to="/event-3-column#">Event 3 Column</Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/pages#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle5(!iconToggle5)}>
                                            Pages
                                            {iconToggle5 ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className={location.pathname === '/about' ? 'dropdown-item active' : 'dropdown-item'} to="/about#">About</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/gallery' ? 'dropdown-item active' : 'dropdown-item'} to="/gallery#">Gallery</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/instructors' ? 'dropdown-item active' : 'dropdown-item'} to="/instructors#">Instructors</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/faq' ? 'dropdown-item active' : 'dropdown-item'} to="/faq#">Faq</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/error' ? 'dropdown-item active' : 'dropdown-item'} to="/error#">Error</Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="/blog#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setIconToggle6(!iconToggle6)}>
                                            Blog
                                            {iconToggle6 ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className={location.pathname === '/blog' ? 'dropdown-item active' : 'dropdown-item'} to="/blog#">Blog</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/blog-2-column' ? 'dropdown-item active' : 'dropdown-item'} to="/blog-2-column#">Blog 2 Column</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/blog-3-column' ? 'dropdown-item active' : 'dropdown-item'} to="/blog-3-column#">Blog 3 Column</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/blog-left-sidebar' ? 'dropdown-item active' : 'dropdown-item'} to="/blog-left-sidebar#">Blog Left Sidebar</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/blog-list' ? 'dropdown-item active' : 'dropdown-item'} to="/blog-list#">Blog List</Link>
                                            </li>
                                            <li>
                                                <Link className={location.pathname === '/blog-details' ? 'dropdown-item active' : 'dropdown-item'} to="/blog-details#">Blog Details</Link>
                                            </li>
                                        </ul>
                                    </li> */}
                                    <li>
                                        <Link className={location.pathname === '/course' ? 'nav-link active' : 'nav-link'} to="/course#">Courses</Link>
                                    </li>
                                    <li>
                                        <Link className={location.pathname === '/events' ? 'nav-link active' : 'nav-link'} to="/events#">Events</Link>
                                    </li>
                                    <li>
                                        <Link className={location.pathname === '/faq' ? 'nav-link active' : 'nav-link'} to="/faq#">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'} to="/about#">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} to="/contact#">Contact Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={location.pathname === '/signup' ? 'nav-link active' : 'nav-link'} to="/signup#">Sign Up</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={location.pathname === '/signin' ? 'nav-link active' : 'nav-link'} to="/signin#">Sign In</Link>
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

export default OffCanvasMenu;