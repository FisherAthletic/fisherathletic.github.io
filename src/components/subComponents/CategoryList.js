import React from 'react'

import CategoryItem from '../subComponents/CategoryItem'
import '../ui/UiList.css'

const CategoryList = props => {
    if (props.items.length === 0) {
        return (
            <h3>No categories found.</h3>
        )
    }
    return (
        <ul className="category-grid">
            {props.items.map(item => (
                <CategoryItem
                    className='category-block'
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    urlName={item.urlName}
                    image={item.coverImg}
                />
            ))}
        </ul>
    )
}

export default CategoryList