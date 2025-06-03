import React from 'react';
import SocialShare from '../SocialShare';
import logo from '/img/comment/logo_long.png';

const HeaderTop = (props) => {
    let { headerBgGray } = props;

    return (
        <>
            <div className={`${headerBgGray} header-top`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 d-none d-md-block">
                            <div className="header-left">
                                <ul>
                                       <li><img style={{height:"24px"}} src={logo} alt="Logo" /></li>
                                    <li><a href="tel:+00 0123456789"><i className="fa-solid fa-phone"></i>+00 0123456789</a></li>
                                    <li><a href="mailto:1sttouch.in@gmail.com"><i className="fa-regular fa-envelope"></i>1sttouch.in@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 d-none d-md-block">
                            <div className="header-right-div">
                                <div className="social-profile">
                                    <span className="social-title pe-2">Follow Us</span>
                                    <SocialShare />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTop;