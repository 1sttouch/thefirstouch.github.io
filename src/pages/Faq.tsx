import React from 'react';
import Header5 from '../components/Header5';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import FaqContent from '../components/FaqContent';

const Faq = () => {
    return (
        <>
            <Header5 />
            <BreadCrumb pageTitle="Faq" />
            <FaqContent />
            <Footer />
        </>
    );
};

export default Faq;