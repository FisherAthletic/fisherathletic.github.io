import React from 'react'

import './BackButton.css'

const handleClick = () => {
    window.history.back()
}

const BackButton = props => {
    return (
        <div className="backBtnTop">
            <button className="backButton" onClick={handleClick} >&lt; back</button>
        </div>
    )
}

export default BackButton