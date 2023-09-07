import React from 'react';
import Header5 from '../components/Header5';
import LogIn from '../components/LogIn';
import Footer from '../components/Footer';
import BreadCrumb from '../components/BreadCrumb';

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