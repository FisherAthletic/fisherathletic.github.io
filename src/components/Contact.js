import React from "react"
import IntroSection from './subComponents/IntroSection'
import ContactForm from './subComponents/ContactForm'

import './Contact.css'

function Contact() {
    return(
        <div className='contact-div'>
            <div className='contact_intro'>
                <IntroSection header='Contact Fisher Athletic' subHeader='Call our customer service now or send us a quick message!' />
            </div>
            <div className='contact_form_con'>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact