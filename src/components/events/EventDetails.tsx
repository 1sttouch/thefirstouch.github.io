import React from 'react';
import Header5 from '../common/Header5';
import BreadCrumb from '../common/BreadCrumb';
import EventDetailsContent from './EventDetailsContent';
import Footer from '../common/Footer';

const EventDetails = () => {
    return (
        <>
            <Header5 />
            <BreadCrumb pageTitle="Event Details" />
            <EventDetailsContent />
            <Footer />
        </>
    );
};

export default EventDetails;