import React from 'react';
import profileImage from '../../assets/large/profile.png'

function About() {
    return (
        <section className="my-5">
            <div className="container hero-form justify-center">
                <img src={profileImage} style={{ width: '300px' }} alt="profile"/>
                <h1 id="about">About Me</h1>
                <p>
                    My name is Jason Smith, I am a full-stack web developer from Utah! I started my web development career by putting myself through a bootcamp that I pursued while working a full-time job.
                    I am well versed in the MERN stack as well as other technologies such as JavaScript, MySQL, Jest, HTML and CSS. I am fresh to the development world but I am a fast and determined learner.
                    I love a good challenge and I am not afraid to jump into something new.
                </p>
                <p>
                    If I am not on my computer building a project you can usually find me somewhere in the mountains doing something fun like hiking, mountain biking, or skiing.
                    I feel being outdoors is a great way to balance out the time spent in front of my computer, it's also a great way to debug code when I get stuck.
                </p>
            </div>
        </section>
    );
}

export default About;