import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

const MenuItems = () => {

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
                        <li><Link to="/">Home</Link>
                            {/* <ul>
                                <li><Link to="/#">Home Version 1</Link></li>
                                <li><Link to="/home-2#">Home Version 2</Link></li>
                                <li><Link to="/home-3#">Home Version 3</Link></li>
                                <li><Link to="/home-4#">Home Version 4</Link></li>
                                <li><Link to="/home-5#">Home Version 5</Link></li>
                                <li><Link to="/home-6#">Home Version 6</Link></li>
                            </ul> */}
                        </li>
                        {/* <li><Link to="/research#">Research</Link>
                            <ul>
                                <li><Link to="/research#">Research Page</Link></li>
                                <li><Link to="/research-details#">Research Details</Link></li>
                            </ul>
                        </li> */}
                        <li><Link to="/course#">Course</Link>
                            {/* <ul>
                                <li><Link to="/course#">Course Page</Link></li>
                                <li><Link to="/course-isotop#">Course isotop</Link></li>
                                <li><Link to="/course-slider#">Course Slider</Link></li>
                                <li><Link to="/course-details#">Course Details</Link></li>
                            </ul> */}
                        </li>
                        <li><Link to="/events#">event</Link>
                            {/* <ul>
                                <li><Link to="/events#">Event Page</Link></li>
                                <li><Link to="/event-with-sidebar#">Event With Sidebar</Link></li>
                                <li><Link to="/event-3-column#">Event 3 Column</Link></li>
                            </ul> */}
                        </li>
                        {/* <li><Link to="/about#">Page</Link>
                            <ul>
                                <li><Link to="/about#">about us</Link></li>
                                <li><Link to="/gallery#">gallery Page</Link></li>
                                <li><Link to="/instructors#">instuctor Page</Link></li>
                                <li><Link to="/faq#">faq Page</Link></li>
                                <li><Link to="/error#">404 Page</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/blog#">blog</Link>
                            <ul>
                                <li><Link to="/blog#">blog</Link></li>
                                <li><Link to="/blog-2-column#">blog 2 Column</Link></li>
                                <li><Link to="/blog-3-column#">blog 3 Column</Link></li>
                                <li><Link to="/blog-left-sidebar#">blog Left Sidebar</Link></li>
                                <li><Link to="/blog-list#">blog List</Link></li>
                                <li><Link to="/blog-details#">blog Details</Link></li>
                            </ul>
                        </li> */}
                        <li><Link to="/contact#">Contact</Link></li>
                    </ul>
                </nav>

                {/* <div className="search-bar-icon">
                    <div className="site-search">
                        <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={toggleIcon}>
                            <span>
                                {isSearchVisible ? (<i className="fa fa-search"></i>) : (<i className="fa-solid fa-xmark"></i>)}
                            </span>
                        </button>

                        <div className="collapse" id="collapseExample">
                            <div className="card ">
                                <div className="search-forum">
                                    <form onSubmit={handleSearch}>
                                        <input placeholder="Search For Site" id='search' type="text" />
                                        <input type="submit" name='submit' value="Go" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default MenuItems;