import React from "react"
import { useParams } from 'react-router-dom'

import BackButton from './ui/BackButton'
import ProductList from './ProductList'
import productData from '../assets/data/productData'
import IntroSection from './subComponents/IntroSection'

const Products = props => {
    const url = useParams().products
    const urlMinusEndChar = url.slice(0, -1)
    const urlNoChar = url.replace(/\D/g, '')
    const urlSpaceToPlus = url.replace(/ /g, '+')
    const isSku = productData.some(item => item.sku.toUpperCase().includes(url.toUpperCase()))
    const isSkuNum = /\d/.test(url) ? productData.some(item => item.sku.toUpperCase() === urlNoChar.toUpperCase()) : false
    const isName = productData.some(item => item.name.toUpperCase().includes(urlMinusEndChar.toUpperCase()))
    const isCategory = productData.some(item => item.category.toUpperCase() === url.toUpperCase())
    const isSubcategory = productData.some(item => item.urlSubCategory.toUpperCase() === url.toUpperCase())
    const isAll = url.includes('+all')
    let allCategory

    if (isAll) {
        allCategory = url.replace('+all', '')
    }

    let loadedProducts
    let output

    if (isAll) {
        loadedProducts = productData.filter(item => item.urlCategory === allCategory)
        output = "isAll"
    } else if (isSku) {
        loadedProducts = productData.filter(item => item.sku.toUpperCase().includes(url.toUpperCase()))
        loadedProducts = loadedProducts.concat(productData.filter(item => item.options.join().toUpperCase().includes(url.toUpperCase())))
        output = "isSku"
    } else if (isSkuNum) {
        loadedProducts = productData.filter(item => item.sku.toUpperCase().includes(urlNoChar.toUpperCase()))
        loadedProducts = loadedProducts.concat(productData.filter(item => item.options.join().toUpperCase().includes(url.toUpperCase())))
        output = "isSkuNum"
    } else if (isCategory) {
        loadedProducts = productData.filter(item => item.category.toUpperCase().includes(url.toUpperCase()))
        output = "isCategory"
    } else if (isSubcategory) {
        loadedProducts = productData.filter(item => item.subCategory.toUpperCase().includes(url.toUpperCase()))
        output = "isSubcategory"
    } else if (isName) {
        loadedProducts = productData.filter(item => item.name.toUpperCase().includes(urlMinusEndChar.toUpperCase()))
        output = "isName"
    } else {
        loadedProducts = productData.filter(item => item.urlSubCategory.toUpperCase().includes(url.toUpperCase()))
        loadedProducts = loadedProducts.concat(productData.filter(item => item.description.toUpperCase().includes(url.toUpperCase())))
        loadedProducts = loadedProducts.concat(productData.filter(item => item.options.join().toUpperCase().includes(url.toUpperCase())))
        output = "else"
    }

    // removes duplicates from the array
    loadedProducts = [...new Set(loadedProducts)]

    return (
        <div>
            <BackButton />
            <IntroSection header="Products" subHeader={`Find amazing items from Fisher Athletic.`} />
            <h3 style={{color: 'lightgray', padding: '0.5rem 0 0.5rem 0', fontWeight: 'lighter', background: '#242D33', textAlign: 'center'}}>Search results for: {url.replace('+all', '')}</h3>
            <ProductList items={loadedProducts} />
            {/* <h3>{urlSpaceToPlus}</h3> */}
            {/* <h3>{output}</h3> */}
        </div>
    )
}

export default Products