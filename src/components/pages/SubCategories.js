import React from 'react'
import { useParams } from 'react-router-dom'

import BackButton from '../ui/BackButton'
import SubCategoryList from '../subComponents/SubCategoryList'
import subCategoryData from '../../assets/data/subCategoryData'
import IntroSection from '../subComponents/IntroSection'

const urlConvertToTitle = input => {
    return input.charAt(0).toUpperCase() + input.slice(1)
}

const SubCategories = props => {
    const url = useParams().subCategory
    const loadedSubCategories = subCategoryData.filter(item => (item.main.toUpperCase() === url.toUpperCase()))
    return (
        <div>
            <BackButton />
            <IntroSection header={urlConvertToTitle(url)} subHeader={`Choose a subcategory.`} />
            <SubCategoryList items={loadedSubCategories} />
        </div>
    )
}

export default SubCategories