import React from 'react';
import Header5 from '../components/common/Header5';
import LogIn from '../components/signin/LogIn';
import Footer from '../components/common/Footer';
import BreadCrumb from '../components/common/BreadCrumb';

const SignIn = () => {
    return (
        <>
            <Header5 />
            <BreadCrumb pageTitle="Sign In" />
            <LogIn />
            <Footer />
        </>
    );
};

export default SignIn;