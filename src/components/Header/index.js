import React from 'react';
import Nav from '../Nav';

function Header(props) {

    const {
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a href='/'>
                    Jason Smith
                </a>
            </h2>
            <Nav 
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
                portfolioSelected={portfolioSelected}
                setPortfolioSelected={setPortfolioSelected}
            />
        </header>
    );
}

export default Header;