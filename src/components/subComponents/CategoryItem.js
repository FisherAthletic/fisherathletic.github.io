import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = props => {
    return (
        <li>
            <Link to={`/${props.urlName}/subcategories`}>
                <h3 className='category-title'>{props.name}</h3>
                <img className='category-image' src={props.image} />
            </Link>
        </li>
    )
}

export default CategoryItem