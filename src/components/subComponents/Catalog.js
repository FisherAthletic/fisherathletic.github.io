import React from 'react'
import LazyImage from './LazyImage'

import './Catalog.css'

const Catalog = props => {
    return (
        <div className="catalog_item">
            <a href={props.link} rel="noopener noreferrer">
                <div className="catalog_image">
                    <LazyImage src={props.image} alt={props.name} />
                </div>
                <h3>{props.year} {props.name}</h3>
            </a>
        </div>
    )
}

export default Catalog