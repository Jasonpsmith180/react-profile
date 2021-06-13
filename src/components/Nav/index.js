import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About Me
                    </a>
                </li>
                <li className="mx-2">
                    <span>Portfolio</span>
                </li>
                <li className="mx-2">
                    <span>Contact</span>
                </li>
                <li className="mx-2">
                    <span>Resume</span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;