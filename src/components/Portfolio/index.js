import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Gallery from '../Gallery';

function Portfolio() {

    const [categories] = useState([
        {
            name: "front-end",
            description: "Websites built using front-end languages"
        },
        {
            name: "back-end",
            description: "Websites built using back-end languages"
        },
        {
            name: "full-stack",
            description: "Websites built using full-stack packages"
        }
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <section>
            <h1>
                <ul className="flex-row">
                    {categories.map((category) => (
                        <li 
                            className={`mx-2 ${
                                currentCategory.name === category.name
                            }`} key={category.name}
                        >
                            <span 
                                onClick={() => {
                                    setCurrentCategory(category)
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </h1>
            <Gallery 
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            />
        </section>
    );
}

export default Portfolio;

