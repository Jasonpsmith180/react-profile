import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

    const {
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected
    } = props;

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => setContactSelected(false) && setPortfolioSelected(false)}>
                        About Me
                    </a>
                </li>
                <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(false) && setPortfolioSelected(true)}>Portfolio</span>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => setContactSelected(true) && setPortfolioSelected(false)}>Contact</span>
                </li>
                <li className="mx-2">
                    <span  onClick={() => setContactSelected(false) && setPortfolioSelected(false)}>Resume</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;