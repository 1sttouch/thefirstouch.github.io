import React from 'react';
import Header5 from '../components/common/Header5';
import BreadCrumb from '../components/common/BreadCrumb';
import Footer from '../components/common/Footer';
import FaqContent from '../components/faq/FaqContent';

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