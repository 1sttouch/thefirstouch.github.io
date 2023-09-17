import React from 'react';
import Header5 from '../components/common/Header5';
import BreadCrumb from '../components/common/BreadCrumb';
import AllEvents from '../components/events/AllEvents';
import Footer from '../components/common/Footer';

const Events = () => {
    return (
        <>
            <Header5 />
            <BreadCrumb pageTitle="Event Page" />
            <AllEvents />
            <Footer />
        </>
    );
};

export default Events;