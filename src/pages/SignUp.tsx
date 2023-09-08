import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import Header5 from '../components/Header5';
import JoinUs from '../components/JoinUs';

const SignUp = () => {
    return (
        <>
            <Header5 />
            <BreadCrumb pageTitle="SignUp Page" />

            <JoinUs />

            <Footer />
        </>
    );
};

export default SignUp;