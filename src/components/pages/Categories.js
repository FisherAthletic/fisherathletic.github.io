import React from 'react'

import BackButton from '../ui/BackButton'
import CategoryList from '../subComponents/CategoryList'
import categoryData from '../../assets/data/categoryData'

const Categories = props => {
    return (
        <div>
            <BackButton />
            <CategoryList items={categoryData} />
        </div>
    )
}

export default Categories