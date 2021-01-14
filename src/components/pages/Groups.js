import React from 'react'
import { useParams } from 'react-router-dom'

import BackButton from '../ui/BackButton'
import IntroSection from '../subComponents/IntroSection'
import productData from '../../assets/data/productData'
import ProductList from '../ProductList'

const Groups = () => {
    const url = useParams().groups
    const urlConvertToTitle = input => {
        let title = input
        title = title.replace('&', ' & ')
        title = title.replace('+', ' ')
        return title
    }
    let loadedProducts
    loadedProducts = productData.filter(item => item.group === url)
    return (
        <div>
            <BackButton />
            <IntroSection header={urlConvertToTitle(url)} subHeader='All products under this group.' />
            <ProductList items={loadedProducts} inGroup={true} />
        </div>
    )
}

export default Groups