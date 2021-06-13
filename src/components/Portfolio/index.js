import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/0.jpg";

function Portfolio(props) {

    const currentCategory = {
        name: "front-end",
        description: "Websites done using front-end languages like HTML and CSS"
      };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img src={photo} alt="Front-End Example"
                className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Portfolio;