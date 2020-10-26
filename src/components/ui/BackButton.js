import React from 'react'

import './BackButton.css'

const handleClick = () => {
    window.history.back()
}

const BackButton = props => {
    return (
        <button className="backButton" onClick={handleClick} >&lt; back</button>
    )
}

export default BackButton