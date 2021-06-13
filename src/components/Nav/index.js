import React from 'react';

function Nav() {

    const categories = [
        {
            name: "Portfolio",
            description: "Portfolio of web development projects"
        },
        {
            name: "Resume",
            description: "Personal resume and we development proficiencies"
        }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h2>
                <a href='/'>
                    Jason Smith
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-2" key={category.name}>
                            <span onClick={() => categorySelected(category.name)}>{category.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;