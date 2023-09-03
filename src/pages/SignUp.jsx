import React from 'react';
import Banner from '../components/Banner';
import Header5 from '../components/Header5';
import WhyChooseH2 from '../components/WhyChooseH2';
import CoursesH2 from '../components/CoursesH2';
import AnotherCourse from '../components/AnotherCourse';
import JoinUs from '../components/JoinUs';
import Instructor from '../components/Instructor';
import TestimonialH2 from '../components/TestimonialH2';
import Event from '../components/Event';
import CallToActionV2 from '../components/CallToActionV2';
import LatestBlogPost from '../components/LatestBlogPost';
import Footer from '../components/Footer';
import BreadCrumb from '../components/BreadCrumb';

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