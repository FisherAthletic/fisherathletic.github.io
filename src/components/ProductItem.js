import React from 'react'
import { Link } from 'react-router-dom'
import LazyImage from './subComponents/LazyImage'

import './ProductItem.css'

const ProductItem = props => {
    return (
        <div className="productItem">
            <Link to={`/${props.sku}/item`}>
                <LazyImage src={props.image} alt={props.name} />
                <h3>{props.name}</h3>
                <p>{props.sku.toUpperCase()}</p>
            </Link>
        </div>
    )
}

export default ProductItem