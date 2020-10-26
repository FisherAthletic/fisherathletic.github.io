import React from "react"
import { useParams } from 'react-router-dom'

import BackButton from './ui/BackButton'
import ProductList from './ProductList'
import productData from '../assets/data/productData'

const Products = props => {
    const prodCategory = useParams().products
    const editedParam = prodCategory.slice(0, -1)
    const noChar = prodCategory.replace(/\D/g, '')
    const spaceConvert = prodCategory.replace(' ', '+')
    const isSku = productData.some(item => item.sku.toUpperCase().includes(prodCategory.toUpperCase()))
    const isSkuNum = /\d/.test(prodCategory) ? productData.some(item => item.sku.toUpperCase() === noChar.toUpperCase()) : false
    const isName = productData.some(item => item.name.toUpperCase().includes(editedParam.toUpperCase()))
    const isCategory = productData.some(item => item.category.toUpperCase() === prodCategory.toUpperCase())
    const isSubcategory = productData.some(item => item.urlSubCategory.toUpperCase() === spaceConvert.toUpperCase())
    const isAll = prodCategory.includes('+all')
    let allCategory

    if (isAll) {
        allCategory = prodCategory.replace('+all', '')
    }

    let loadedProducts
    let output

    if (isAll) {
        loadedProducts = productData.filter(item => item.urlCategory === allCategory)
        output = "isAll"
    } else if (isSku) {
        loadedProducts = productData.filter(item => item.sku.toUpperCase().includes(prodCategory.toUpperCase()))
        output = "isSku"
    } else if (isSkuNum) {
        loadedProducts = productData.filter(item => item.sku.toUpperCase().includes(noChar.toUpperCase()))
        output = "isSkuNum"
    } else if (isCategory) {
        loadedProducts = productData.filter(item => item.category.toUpperCase().includes(prodCategory.toUpperCase()))
        output = "isCategory"
    } else if (isSubcategory) {
        loadedProducts = productData.filter(item => item.subCategory.toUpperCase().includes(prodCategory.toUpperCase()))
        output = "isSubcategory"
    } else if (isName) {
        loadedProducts = productData.filter(item => item.name.toUpperCase().includes(editedParam.toUpperCase()))
        output = "isName"
    } else {
        loadedProducts = productData.filter(item => item.urlSubCategory.toUpperCase().includes(prodCategory.toUpperCase()))
        loadedProducts = loadedProducts.concat(productData.filter(item => item.description.toUpperCase().includes(prodCategory.toUpperCase())))
        output = "else"
    }

    return (
        <div>
            <BackButton />
            <ProductList items={loadedProducts} />
        </div>
    )
}

export default Products