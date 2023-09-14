import React from 'react';
import UserHeader from '../components/user/UserHeader';
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