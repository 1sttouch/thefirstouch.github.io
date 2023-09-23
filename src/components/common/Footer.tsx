import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import footerLogo from '/img/comment/commenter_1.jpg'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget-one">
                                    <h2>About Us</h2>
                                    <p>Lorem ipsum dolor sit amet, luctus posuere semper felis consectetuer hendrerit, enim varius proi Lorem ipsum dolor sit amet</p>
                                    <Link to="/#"><img src={footerLogo} alt="footerLogo" /></Link>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 col-md-6">
                                <div className="footer-widget-menu">
                                    <h2>our Course</h2>
                                    <ul>
                                        <li><Link to="#">Graphics Design</Link></li>
                                        <li><Link to="#">Web Development</Link></li>
                                        <li><Link to="#">Article Wiriting</Link></li>
                                        <li><Link to="#">Virtual Assistance</Link></li>
                                        <li><Link to="/contact#">Support Center</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget-menu">
                                    <h2>Quick Links</h2>
                                    <ul>
                                        <li><Link to="/contact#">Support Center</Link></li>
                                        <li><Link to="/faq#">FAQs</Link></li>
                                        <li><Link to="/signup#">Join Us</Link></li>
                                        <li><Link to="/about#">All About Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-widget-four">
                                    <h2>contact us </h2>
                                    <div className="inner-box">
                                        <div className="media mb-2">
                                            <div className="inner-item d-flex">
                                                <div className="media-left me-3 mt-1">
                                                    <span className="icon"><i className="fa fa-map-marker"></i></span>
                                                </div>
                                                <div className="media-body">
                                                    <span className="inner-text d-block">273 Jagriti Vihar, Meerut</span>
                                                    <span className='inner-text'>Uttar Pradesh, India</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media mb-2">
                                            <div className="inner-item d-flex">
                                                <div className="media-left me-3 mt-1">
                                                    <span className="icon"><i className="fa-regular fa-envelope"></i></span>
                                                </div>
                                                <div className="media-body">
                                                    <span className="inner-text">
                                                        <a className='text-dimmed d-block' href="mailto:1sttouch.in@gmail.com">1sttouch.in@gmail.com</a>
                                                        <a className='text-dimmed' href="mailto:info.1sttouch.in@gmail.com">info.1sttouch.in@gmail.com</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="inner-item d-flex">
                                                <div className="media-left me-3 mt-1">
                                                    <span className="icon"><i className="fa fa-phone"></i></span>
                                                </div>
                                                <div className="media-body">
                                                    <span className="inner-text">
                                                        <a className='text-dimmed d-block' href="tel:+880 23456789">+91 0123456789</a>
                                                        <a className='text-dimmed' href="tel:27-2564687">91212-2564687</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="copy-right">
                                    <p>Copyright {(new Date().getFullYear())} &copy; <span><Link to="#">1st Touch,</Link></span> Subsidiary of:<span> NPFF</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;