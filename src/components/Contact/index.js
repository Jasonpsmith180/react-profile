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
        const response = await fetch("http://localhost:3001/send", {
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
                alert("Message Sent");
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
        <section className="hero-form">
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" defaultValue={name} onBlur={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="email" id="email" defaultValue={email} onBlur={handleChange} required/>
                </div>
                <div>
                    <label hmtlFor="subject">Subject:</label>
                    <input type="text" name="subject" id="subject" defaultValue={subject} onBlur={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" rows="5" defaultValue={message} onBlur={handleChange} required/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;