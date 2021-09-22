import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import About from '../About';
import ContactForm from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Nav(props) {

    const {
        navSelected,
        setNavSelected
    } = props;

    return (
        <nav>
            <ul className="flex-row">
                <li className={`mx-2 ${(navSelected === <About />) && 'navActive'}`}>
                    <span onClick={() => setNavSelected('<About />')}>About Me</span>
                </li>
                <li className={`mx-2 ${(navSelected === <Portfolio />) && 'navActive'}`}>
                    <span onClick={() => setNavSelected('<Portfolio />')}>Portfolio</span>
                </li>
                <li className={`mx-2 ${(navSelected === <ContactForm />) && 'navActive'}`}>
                    <span onClick={() => setNavSelected('<ContactForm />')}>Contact</span>
                </li>
                <li className={`mx-2 ${(navSelected === <Resume />) && 'navActive'}`}>
                    <span  onClick={() => setNavSelected('<Resume />')}>Resume</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;