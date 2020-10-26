import React from 'react'
import { Link } from 'react-router-dom'

import './ProductItem.css'

const ProductItem = props => {
    return (
        <div className="productItem">
            <Link to={`/${props.sku}/item`}>
                <img src={props.image} alt={props.name}></img>
                <h3>{props.name}</h3>
                <p>{props.sku.toUpperCase()}</p>
            </Link>
        </div>
    )
}

export default ProductItem