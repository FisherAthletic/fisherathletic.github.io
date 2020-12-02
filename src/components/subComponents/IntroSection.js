import React from 'react'
import './IntroSection.css'

const IntroSection = props => {
    return (
        <div className="intro_container">
            <h1>{props.header}</h1>
            <p>{props.subHeader}</p>
        </div>
    )
}

export default IntroSection