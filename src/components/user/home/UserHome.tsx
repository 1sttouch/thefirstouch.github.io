import React from 'react';
import Footer from '../../common/Footer';
import UserEvents from './UserEventsSlider';
import UserLearnings from './UserLearningsSlider';
import EventsSlider from '../../events/EventsSlider';
import LearningsSlider from '../../courses/LearningSlider';
import BreadCrumb from '../../common/BreadCrumb';
import Header5 from '../../common/Header5';


const UserHome = () => {
    return (
        <>
            <Header5 />
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