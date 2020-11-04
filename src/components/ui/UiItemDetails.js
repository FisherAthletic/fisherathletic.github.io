import React from 'react'

import './UiDetailList.css'
import './UiItemDetails.css'

const UiItemDetails = props => {
    return (
        <div className="details">
            <div className="uiItemDetails">
                <h3>Product Details</h3>
                <ul className="uiDetailList">
                    {props.details.map(item => {
                        return <li>• {item}</li>
                    })}
                </ul>
                {props.options[0] !== '' ? <h3>Options</h3> : null}
                {props.options[0] !== '' ? 
                <ul className="uiDetailList">
                    {props.options.map(item => {
                        return <li>• {item}</li>
                    })}
                </ul> : null}
                <h3>Description</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default UiItemDetails