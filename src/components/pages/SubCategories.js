import React from 'react'
import { useParams } from 'react-router-dom'

import BackButton from '../ui/BackButton'
import SubCategoryList from '../subComponents/SubCategoryList'
import subCategoryData from '../../assets/data/subCategoryData'

const SubCategories = props => {
    const url = useParams().subCategory
    const loadedSubCategories = subCategoryData.filter(item => (item.main.toUpperCase() === url.toUpperCase()))
    return (
        <div>
            <BackButton />
            <SubCategoryList items={loadedSubCategories} />
        </div>
    )
}

export default SubCategories