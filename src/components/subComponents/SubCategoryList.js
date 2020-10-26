import React from 'react'

import SubCategoryItem from './SubCategoryItem'
import '../ui/UiList.css'

const SubCategoryList = props => {
    if (props.items.length === 0) {
        return <h4>Nothing found in this category.</h4>
    }

    return (
        <ul className="uiList">
            {props.items.map(item => <SubCategoryItem
                key={item.id}
                id={item.id}
                name={item.name}
                urlName={item.urlName}
            />)}
        </ul>
    )
}

export default SubCategoryList