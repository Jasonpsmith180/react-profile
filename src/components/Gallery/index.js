import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery(props) {
    const {
        // categories = [],
        // setCurrentCategory,
        currentCategory
    } = props;

    return (
        <section>
            <p>{currentCategory.description}</p>
            <div className="flex-row">
                <img
                    src={photo}
                    alt="Front-end example"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    )
}

export default Gallery;