import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg'
import profileImage from '../../assets/large/profile.png'

function About() {
    return (
        <section className="my-5">
            <img src={profileImage} style={{ width: '300px' }} alt="profile"/>
            <h1 id="about">Hi there!</h1>
            <p>My name is Jason Smith, I am a full-stack web developer from Utah! If I am not on my computer building websites and apps you can usually find me somewhere in the mountains.
                This site is my personal portfolio of projects. Feel free to take a look at my projects in the portfolio section or contact me in the contact section!</p>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;