import React from 'react';
import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';
import CarouselSlider from '../components/CarouselSlider';
import UserEvents from '../components/user/home/UserEvents';
import UserLearnings from '../components/user/home/UserLearnings';


const UserHome = () => {
    return (
        <>
            <UserHeader />
            <UserEvents/>
            <UserLearnings/>
            <Footer />
        </>
    );
};

export default UserHome;