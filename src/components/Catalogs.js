import React from "react"
import Catalog from "./subComponents/Catalog"
import catalogData from '../assets/data/catalogData'
import IntroSection from './subComponents/IntroSection'

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
        <div className='catalogs-div'>
            <IntroSection header="Catalogs" subHeader="Browse our most recent catalogs." />
            <div className="catalog_grid">
                {catalogList}
            </div>
        </div>
    )
}

export default Catalogs