import React from 'react';
import jasonResume from '../../assets/resume/JasonSmithResume.pdf'

function Resume() {
    return (
        <section className="my-5 hero-form">
            <h2>Proficiencies</h2>
            <p>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        MongoDB
                    </li>
                    <li>
                        React.js
                    </li>
                </ul>
            </p>
            <h4><a href={jasonResume} download="JasonSmithResume">Download Resume</a></h4>
        </section>
    )
};

export default Resume;