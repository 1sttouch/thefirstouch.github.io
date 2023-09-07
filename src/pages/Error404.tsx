import React from 'react';
import Header5 from '../components/Header5';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import ErrorPageContent from '../components/ErrorPageContent';

const Error404 = () => {
    return (
        <>
            <Header5 />
            <BreadCrumb />
            <ErrorPageContent />
            <Footer />
        </>
    );
};

export default Error404;