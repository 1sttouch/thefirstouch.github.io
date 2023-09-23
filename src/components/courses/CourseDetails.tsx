import React from 'react';
import BreadCrumb from '../common/BreadCrumb';
import Footer from '../common/Footer';
import CourseDetailsContent from './CourseDetailsContent';
import Header5 from '../common/Header5';

const CourseDetails = () => {
    return (
        <>
            <Header5 />
            <BreadCrumb pageTitle="Course Details" />
            <CourseDetailsContent />
            <Footer/>
        </>
    );
};

export default CourseDetails;