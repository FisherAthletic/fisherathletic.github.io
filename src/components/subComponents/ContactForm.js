import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import EmailIcon from '@material-ui/icons/Email';

import './ContactForm.css'

const ContactForm = props => {
    const [state, handleSubmit] = useForm('contactForm')
    if (state.succeeded) {
        return <div>Message Sent!</div>
    }
    return (
            <form onSubmit={handleSubmit} className='contact_form'>
                <EmailIcon className='form_email_icon' fontSize='large' />
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