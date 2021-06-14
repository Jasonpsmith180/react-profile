import React, { useState } from 'react';
import photo from '../../assets/small/2.jpg';

function ProjectList() {
    const [projects] = useState([
        {
            name: 'Run-Buddy',
            category: 'front-end',
            description: 'A site for runners to connect with trainers to improve their runs'
        },
        {
            name: 'Horiseon',
            category: 'front-end',
            description: 'A site for a SEO business looking to find more customers'
        },
        {
            name: 'Movie Search',
            category: 'back-end',
            description: 'A movie search site that uses API calls to display movie information'
        },
        {
            name: 'Weather Dashboard',
            category: 'back-end',
            description: 'A weather dashboard that allows users to search for weather in their area'
        },
        {
            name: 'Full-Stack Appointment App',
            category: 'full-stack',
            description: 'A full-stack appointment application that allows users to set appointments with persistent data and logins'
        },
        {
            name: 'Deep Thoughts',
            category: 'full-stack',
            description: "A full-stack site that allows users to share thoughts and react to other's thoughts with persistent data and logins"
        }
    ]);

    return (
        <div>
            <div className="flex-row">
                {projects.map((project, i) => (
                    <img
                        src={require(`../../assets/small/${i}.jpg`)}
                        alt={project.name}
                        className="img-thumbnail mx-1"
                        key={project.name}
                    />
                ))}
                <img src={photo} alt="text" />
            </div>
        </div>
    );
}

export default ProjectList;