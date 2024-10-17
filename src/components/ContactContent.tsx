import React, { useState } from 'react';
import ContactForm from './ContactForm';
import Spinner from './common/Spinner';
import { showMessage } from '../common/Utils';


const ContactContent = () => {
    const [inProgress, setProgress] = useState<boolean>(true);

    const onSuccess = (data) => {
        showMessage("Thanks for contacting us",'SUCCESS')
    };
    
    return (
        <>
            <Spinner show={inProgress} />
            <section className="contact-page-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="contact-page-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1367.3980101597674!2d78.2169686!3d29.3598483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390be958e0c8d12d%3A0xbc6189fb9ec5efe9!2sKarondi%2C%20Uttar%20Pradesh%20246728!5e1!3m2!1sen!2sin!4v1729178509249!5m2!1sen!2sin" width="100%" height="350" frameBorder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h2>address</h2>
                                        <span>CaliForniya , United State</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h2>e-mail</h2>
                                        <span><a href="mailto:company@gmail.com">company@gmail.com</a></span>
                                        <span><a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">
                                        <i className="fa-regular fa-clock"></i>
                                    </div>
                                    <div className="contact-info-text">
                                        <h2>office time</h2>
                                        <span>Mon - Thu  9:00 am - 4.00 pm</span>
                                        <span>Thu - Mon  10.00 pm - 5.00 pm</span>
                                        <span>Fri - Sun Office Holiday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ContactForm onSuccess={onSuccess} setProgress={setProgress}/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactContent;