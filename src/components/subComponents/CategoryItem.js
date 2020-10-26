import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = props => {
    return (
        <li>
            <Link to={`/${props.urlName}/subcategories`}>
                <h3>{props.name}</h3>
            </Link>
        </li>
    )
}

export default CategoryItem