import React from 'react';
import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';
import UserJourneyConsole from '../components/user/journey/UserJourneyConsole';

const UserTouchPoints = () => {
    return (
        <>
            <UserHeader />
            <UserJourneyConsole/>
            <Footer />
        </>
    );
};

export default UserTouchPoints;