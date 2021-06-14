import React, { useState } from 'react';

function ProjectList() {
    const [projects] = useState([
        {
            name: 'Run Buddy',
            category: 'front-end',
            description: 'A site for runners to connect with trainers to improve their runs',
            url: 'https://jasonpsmith180.github.io/run-buddy/',
            github: 'https://github.com/Jasonpsmith180/run-buddy'
        },
        {
            name: 'Horiseon',
            category: 'front-end',
            description: 'A site for a SEO business looking to find more customers',
            url: 'https://jasonpsmith180.github.io/horiseon/',
            github: 'https://github.com/Jasonpsmith180/horiseon'
        },
        {
            name: 'Movie Search',
            category: 'back-end',
            description: 'A movie search site that uses API calls to display movie information',
            url: 'https://jasonpsmith180.github.io/movie-search/',
            github: 'https://github.com/Jasonpsmith180/movie-search'
        },
        {
            name: 'Weather Dashboard',
            category: 'back-end',
            description: 'A weather dashboard that allows users to search for weather in their area',
            url: 'https://jasonpsmith180.github.io/weather-dashboard/',
            github: 'https://github.com/Jasonpsmith180/weather-dashboard'
        },
        {
            name: 'Full-Stack Appointment App',
            category: 'full-stack',
            description: 'A full-stack appointment application that allows users to set appointments with persistent data and logins',
            url: 'https://secure-basin-72350.herokuapp.com/',
            github: 'https://github.com/Jasonpsmith180/fullstack-appointment-app'
        },
        {
            name: 'Deep Thoughts',
            category: 'full-stack',
            description: "A full-stack site that allows users to share thoughts and react to other's thoughts with persistent data and logins",
            url: 'https://obscure-plateau-59580.herokuapp.com/',
            github: 'https://github.com/Jasonpsmith180/deep-thoughts'
        }
    ]);

    return (
        <div>
            <div className="flex-row">
                {projects.map((project, i) => (
                    <a href={project.github} target="_blank" rel="noreferrer">
                    <img
                        src={require(`../../assets/small/${i}.jpg`)}
                        alt={project.name}
                        className="img-thumbnail mx-1"
                        key={project.name}
                    />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default ProjectList;