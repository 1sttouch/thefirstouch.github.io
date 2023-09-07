import React from 'react';
import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';
import UserProfileConsole from '../components/user/profile/UserProfileConsole';

const UserProfile = () => {
    return (
        <>
            <UserHeader />
            <UserProfileConsole />
            <Footer />
        </>
    );
};

export default UserProfile;