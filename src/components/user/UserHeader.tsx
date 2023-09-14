import React from 'react';
import UserMenu from './UserMenu';
import HeaderTop from '../HeaderTop';

const UserHeader = () => {
    return (
        <>
            <header>
                <HeaderTop headerBgGray={"home-v5"} />
                <UserMenu />
            </header>
        </>
    );
};

export default UserHeader;