import React from 'react';

import Header5 from '../components/common/Header5';
import BreadCrumb from '../components/common/BreadCrumb';
import ContactContent from '../components/ContactContent';
import Footer from '../components/common/Footer';

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