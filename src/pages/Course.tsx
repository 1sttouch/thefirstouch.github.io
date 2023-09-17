import React from 'react';
import Header5 from '../components/common/Header5';
import Banner from '../components/Banner';
import BreadCrumb from '../components/common/BreadCrumb';
import AllCourses from '../components/courses/AllCourses';
import Footer from '../components/common/Footer';

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