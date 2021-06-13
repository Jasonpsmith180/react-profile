import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import Gallery from '../Gallery';

function Portfolio() {

    // const [categories] = useState([
    //     {
    //         name: "front-end",
    //         description: "Websites built using front-end languages"
    //     },
    //     {
    //         name: "back-end",
    //         description: "Websites built using back-end languages"
    //     },
    //     {
    //         name: "full-stack",
    //         description: "Websites built using full-stack packages"
    //     }
    // ]);

    // const [currentCategory, setCurrentCategory] = useState(categories[0]);
    // const { name, description } = currentCategory;

    return (
        <section>
            <h3>
                {/* <ul className="flex-row">
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
                </ul> */}
            Projects
            </h3>
            <Gallery />
        </section>
    );
}

export default Portfolio;

