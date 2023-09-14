import React from 'react';
import UserHeader from '../UserHeader';
import Footer from '../../Footer';
import UserProfileConsole from './UserProfileConsole';

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