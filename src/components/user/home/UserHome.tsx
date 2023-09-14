import React from 'react';
import UserHeader from '../UserHeader';
import Footer from '../../Footer';
import CarouselSlider from '../../CarouselSlider';
import UserEvents from './UserEventsSlider';
import UserLearnings from './UserLearningsSlider';
import EventsSlider from '../../EventsSlider';
import LearningsSlider from '../../LearningSlider';
import BreadCrumb from '../../BreadCrumb';


const UserHome = () => {
    return (
        <>
            <UserHeader />
            <BreadCrumb pageTitle="My View" />
            <UserEvents/>
            <UserLearnings/>
            <EventsSlider/>
            <LearningsSlider/>
            <Footer />
        </>
    );
};

export default UserHome;