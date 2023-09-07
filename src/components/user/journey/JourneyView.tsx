import React from 'react';
import UserHeader from '../../../components/UserHeader';
import BreadCrumb from '../../../components/BreadCrumb';
import Footer from '../../../components/Footer';
import CourseDetailsContent from './CourseDetailsContent';

const JourneyView = () => {
    return (
        <>
            <UserHeader />
            <BreadCrumb pageTitle="Course Details" />
            <CourseDetailsContent />
            <Footer/>
        </>
    );
};

export default JourneyView;