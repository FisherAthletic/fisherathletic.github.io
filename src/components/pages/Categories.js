import React from 'react'

import BackButton from '../ui/BackButton'
import CategoryList from '../subComponents/CategoryList'
import categoryData from '../../assets/data/categoryData'
import IntroSection from '../subComponents/IntroSection'

const Categories = props => {
    return (
        <div>
            <BackButton />
            <IntroSection header="All Categories" subHeader={`Choose a category.`} />
            <CategoryList items={categoryData} />
        </div>
    )
}

export default Categories