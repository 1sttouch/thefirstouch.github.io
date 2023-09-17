import React from 'react';
import BreadCrumb from '../components/common/BreadCrumb';
import Footer from '../components/common/Footer';
import Header5 from '../components/common/Header5';
import JoinUs from '../components/signup/JoinUs';

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