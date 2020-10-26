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
        <ul className="uiList">
            {props.items.map(item => (
                <CategoryItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    urlName={item.urlName}
                />
            ))}
        </ul>
    )
}

export default CategoryList