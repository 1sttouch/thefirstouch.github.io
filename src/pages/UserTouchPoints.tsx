import React from 'react';
import Footer from '../components/common/Footer';
import UserJourneyConsole from '../components/user/journey/UserJourneyConsole';
import Header5 from '../components/common/Header5';

const UserTouchPoints = () => {
    return (
        <>
            <Header5 />
            <UserJourneyConsole/>
            <Footer />
        </>
    );
};

export default UserTouchPoints;