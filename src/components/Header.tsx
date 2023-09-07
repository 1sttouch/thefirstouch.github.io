import React from 'react';
import HeaderTop from './HeaderTop';
import MainMenu from './MainMenu';

const Header = () => {
    return (
        <>
            <header>
                <HeaderTop />
                <MainMenu />
            </header>
        </>
    );
};

export default Header;