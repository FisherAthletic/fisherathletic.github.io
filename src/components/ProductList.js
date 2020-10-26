import React from 'react'

import ProductItem from './ProductItem'
import './ProductList.css'

const ProductList = props => {
    if (props.items.length === 0) {
        return (
            <h4>Nothing found.</h4>
        )
    }
    return (
        <ul className="productList prodListGrid">
            {props.items.map(item => (
                <ProductItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    sku= {item.sku}
                    description={item.description}
                    category={item.category}
                    subCategory={item.subCategory}
                    urlCategory={item.urlCategory}
                    image={item.image} />
            ))}
        </ul>
    )
}

export default ProductList