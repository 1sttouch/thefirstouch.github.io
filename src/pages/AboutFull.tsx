import React from 'react';
import Header5 from '../components/common/Header5';
import BreadCrumb from '../components/common/BreadCrumb';
import CountUp from '../components/CountUp';
import Instructor from '../components/Instructor';
import Footer from '../components/common/Footer';
import AboutUsFull from '../components/AboutUsFull';

const About = () => {
    return (
        <>
            <Header5 />
            <BreadCrumb pageTitle="About Us" />
            <AboutUsFull />
            {/* <CountUp />
            <Instructor /> */}
            <Footer />
        </>
    );
};

export default About;