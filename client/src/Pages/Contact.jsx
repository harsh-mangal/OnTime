// Contact.js
import React from 'react';
import Navbar from '../Components/Navbar';


const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className='contact-container'>
            <Navbar />
            <div className='contact-form-container'>
                <h1>Contact Us</h1>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' name='name' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' name='message' rows='5' required></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
