import React from 'react';
import Header5 from '../components/common/Header5';
import BreadCrumb from '../components/common/BreadCrumb';
import AboutUs from '../components/AboutUs';
import CountUp from '../components/CountUp';
import Instructor from '../components/Instructor';
import Footer from '../components/common/Footer';

const About = () => {
    return (
        <>
            <Header5 />
            <BreadCrumb pageTitle="About Us" />
            <AboutUs />
            <CountUp />
            <Instructor />
            <Footer />
        </>
    );
};

export default About;