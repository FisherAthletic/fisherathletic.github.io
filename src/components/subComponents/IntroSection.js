import React from 'react'
import './IntroSection.css'

const IntroSection = props => {
    return (
        <div className="intro_container">
            <h2 className='intro-div-title'>{props.header}</h2>
            <p className='intro-div-subtitle'>{props.subHeader}</p>
        </div>
    )
}

export default IntroSection