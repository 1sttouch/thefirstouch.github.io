import React from 'react';
import Header5 from '../components/common/Header5';
import BreadCrumb from '../components/common/BreadCrumb';
import Footer from '../components/common/Footer';
import ErrorPageContent from '../components/error/ErrorPageContent';

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