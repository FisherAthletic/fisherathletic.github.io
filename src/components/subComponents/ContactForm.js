import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

import './ContactForm.css'

const ContactForm = props => {
    const [state, handleSubmit] = useForm('contactForm')
    if (state.succeeded) {
        return <div>Thank you for signing up!</div>
    }
    return (
            <form onSubmit={handleSubmit} className='contact_form'>
                
                {/* <label htmlFor="name">
                  Name
                </label> */}
                <input
                  id="name"
                  type="text" 
                  name="name"
                  placeholder='name'
                  className='form_name'
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />

                {/* <label htmlFor="email">
                  Email Address
                </label> */}
                <input
                  id="email"
                  type="email" 
                  name="email"
                  placeholder='your email'
                  className='form_email'
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />

                {/* <label htmlFor="message">
                  Message
                </label> */}
                <textarea
                  id="message"
                  name="message"
                  placeholder='message'
                  className='form_message'
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />

                <button type="submit" disabled={state.submitting} className='form_submit_btn'>
                  Send
                </button>
            </form>
    )
}

export default ContactForm