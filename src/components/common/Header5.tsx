import React from 'react';
import HeaderMainMenu from './HeaderMainMenu';
import HeaderTop from './HeaderTop';

const Header5 = () => {
    return (
        <>
            <header>
                <HeaderTop headerBgGray={"home-v5"} />
                <HeaderMainMenu />
            </header>
        </>
    );
};

export default Header5;