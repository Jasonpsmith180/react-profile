import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const { name, email, subject, message } = formState;

    // const [status, setStatus] = useState("Submit");

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required`)
                } else {
                    setErrorMessage('')
                }
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log({ formState });
        const response = await fetch("https://jksmith-development.herokuapp.com/send", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ formState }),
        })
        .then((res) => res.json())
        .then(async (res) => {
            const resData = await res;
            console.log(resData);
            if (resData.status === "success") {
                alert("Thank you for contacting me! I will respond as soon as possible.");
            } else if (resData.status === "fail") {
                alert("Message failed to send");
            }
        })
        .then(() => {
            setFormState({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        });
    };

    return(
        <section className="hero-form my-5 flex-row">
            <form id="contact-form" className="" onSubmit={handleSubmit} method="POST">
            <h1>Contact Me</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" className="form-input" defaultValue={name} onBlur={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" id="email" className="form-input" defaultValue={email} onBlur={handleChange} required/>
                </div>
                <div>
                    <label hmtlFor="subject">Subject:</label>
                    <input type="text" name="subject" id="subject" className="form-input" defaultValue={subject} onBlur={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" className="form-input" rows="5" defaultValue={message} onBlur={handleChange} required/>
                </div> < br/>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )} 
                <button className='' type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;