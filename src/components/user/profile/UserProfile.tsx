import React from 'react';
import Footer from '../../common/Footer';
import UserProfileConsole from './UserProfileConsole';
import Header5 from '../../common/Header5';

const UserProfile = () => {
    return (
        <>
            <Header5 />
            <UserProfileConsole />
            <Footer />
        </>
    );
};

export default UserProfile;