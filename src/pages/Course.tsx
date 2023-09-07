import React from 'react';
import Header5 from '../components/Header5';
import Banner from '../components/Banner';
import BreadCrumb from '../components/BreadCrumb';
import AllCourses from '../components/AllCourses';
import Footer from '../components/Footer';

const Course = () => {
    return (
        <>
            <Header5 />
            <BreadCrumb pageTitle="Course Page" />
            <AllCourses />
            <Footer />
        </>
    );
};

export default Course;