import React from 'react'
import { Link } from 'react-router-dom'

const SubCategoryItem = props => {
    return (
        <li>
            <Link to={`/${props.urlName}/products`}>
            <h3>{props.name}</h3>
            </Link>
        </li>
    )
}

export default SubCategoryItem