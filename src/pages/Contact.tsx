import React from 'react';

import Header5 from '../components/Header5';
import BreadCrumb from '../components/BreadCrumb';
import ContactContent from '../components/ContactContent';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Header5 />
            <BreadCrumb pageTitle="Contact Us" />
            <ContactContent />
            <Footer />
        </>
    );
};

export default Contact;