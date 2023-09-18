import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logoMini from '/img/comment/commenter_1.jpg'
import { useAuth } from '../../hook/authContext';
import { removeAuthToken } from '../../common/Utils';

const OffCanvasMenu = () => {
    const {authUser, setAuthUser, setIsLoggedIn, isLoggedIn} = useAuth() ;
	const navigate = useNavigate();
    
    const onClickLogOut = () => {
        removeAuthToken()
        setIsLoggedIn(false)
		setAuthUser(null)
        navigate('/signin');
    }
    
    const [accountToggle, setAccountToggle] = useState(true)

    const location = useLocation();

    return (
        <>
            <Link className="offcanvas-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars"></i></Link>

            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
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
                                    {
                                        isLoggedIn 
                                        ?
                                        <li>
                                            <Link className={location.pathname === '/user-home' ? 'nav-link active' : 'nav-link'} to="/user-home#">My View</Link>
                                        </li>
                                        : 
                                        <></>
                                    }

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
                                    {
                                    !isLoggedIn?
                                    <>
                                        <li className="nav-item">
                                            <Link className={location.pathname === '/signup' ? 'nav-link active' : 'nav-link'} to="/signup#">Sign Up</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className={location.pathname === '/signin' ? 'nav-link active' : 'nav-link'} to="/signin#">Sign In</Link>
                                        </li>
                                    </> : <>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle"  to="/user-profile" data-bs-toggle="dropdown" aria-expanded="false" >
                                            My Account
                                            {accountToggle ? <i className="fa-solid fa-plus"></i> : <i className="fa-solid fa-minus"></i>}
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className={location.pathname === '/user-profile' ? 'dropdown-item active' : 'dropdown-item'} to="/user-profile#">Profile</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link onClick={onClickLogOut} className={location.pathname === '/logout' ? 'nav-link active' : 'nav-link'}  to="/signin#">Logout</Link>
                                    </li>
                                    </>
                                    }
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