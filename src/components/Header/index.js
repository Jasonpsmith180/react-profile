import React from 'react';
import Nav from '../Nav';
import Home from '../Home';

function Header(props) {

    const {
        navSelected,
        setNavSelected,
    } = props;

    return (
        <header className="flex-row">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <h2 className={`py-1 px-1 ${(navSelected === <Home />) && 'navActive'}`}>
                    <span onClick={() => setNavSelected('<Home />')}>Jason Smith</span>
                </h2>
                <Nav 
                    navSelected={navSelected}
                    setNavSelected={setNavSelected}
                />
            </div>
        </header>
    );
}

export default Header;