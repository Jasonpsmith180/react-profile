import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import ProjectList from '../ProjectList';

function Gallery(props) {
    // const { currentCategory } = props;

    return (
        <section>
            {/* <p>{currentCategory.description}</p> */}
            <ProjectList/>
        </section>
    )
}

export default Gallery;