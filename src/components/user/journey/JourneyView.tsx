import React from 'react';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../common/Footer';
import CourseDetailsContent from './CourseDetailsContent';
import Header5 from '../../common/Header5';

const JourneyView = () => {
    return (
        <>
            <Header5 />
            <BreadCrumb pageTitle="Course Details" />
            <CourseDetailsContent />
            <Footer/>
        </>
    );
};

export default JourneyView;