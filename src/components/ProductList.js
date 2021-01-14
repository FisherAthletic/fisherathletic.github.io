import React from 'react'

import ProductItem from './ProductItem'
import GroupCard from './subComponents/GroupCard'
import productData from '../assets/data/productData'
import './ProductList.css'

const ProductList = props => {
    if (props.items.length === 0) {
        return (
            <h4>Nothing found.</h4>
        )
    }

    let groupCount = {}
    const getGroupCount = () => {
        productData.map((item, index) => {
            if (Object.keys(groupCount).length === 0) {
                groupCount[`${item.group}`] = 1
            } else if (Object.keys(groupCount).includes(`${item.group}`)) {
                groupCount[`${item.group}`]++
            } else {
                groupCount[`${item.group}`] = 1
            }
        })
        console.log(groupCount)
    }
    getGroupCount()

    let groupList = []
    const renderItems = () => {
         return props.items.map(item => {
            if (groupCount[`${item.group}`] > 1 && (item.group != '' && props.inGroup === false) && groupList.includes(`${item.group}`) === false) {
                groupList.push(`${item.group}`)
                console.log(`This is the group list: `, groupList)
                return <GroupCard group={item.group} image={item.image} itemCount={groupCount[`${item.group}`]} />
            } else if(groupList.includes(`${item.group}`)) {
                return null
            } else {
                return <ProductItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            sku= {item.sku}
                            description={item.description}
                            category={item.category}
                            subCategory={item.subCategory}
                            urlCategory={item.urlCategory}
                            image={item.image} />
            }
        })
    }

    return (
        <ul className="productList prodListGrid">
            {renderItems()}
        </ul>
    )
}

export default ProductList