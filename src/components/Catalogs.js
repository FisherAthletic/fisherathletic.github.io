import React from "react"
import Catalog from "./subComponents/Catalog"
import catalogData from '../assets/data/catalogData'

import './Catalogs.css'

const catalogList = catalogData.map(item => 
    <Catalog
        name={item.name} 
        year={item.year} 
        image={item.image} 
        link={item.link}
    />)

const Catalogs = () => {
    return(
        <div>
            <h1>Catalogs</h1>
                <div className="catalog_grid">
                    {catalogList}
                </div>
        </div>
    )
}

export default Catalogs