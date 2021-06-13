import React from 'react';
import Nav from '../Nav';

function Header() {

    return (
        <header className="flex-row px-1">
            <h2>
                <a href='/'>
                    Jason Smith
                </a>
            </h2>
            <Nav />
        </header>
    );
}

export default Header;