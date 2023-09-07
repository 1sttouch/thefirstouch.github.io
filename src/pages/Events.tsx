import React from 'react';
import Header5 from '../components/Header5';
import BreadCrumb from '../components/BreadCrumb';
import AllEvents from '../components/AllEvents';
import Footer from '../components/Footer';

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