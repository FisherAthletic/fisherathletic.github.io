import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IntroSection from './subComponents/IntroSection'

import './Search.css'

const Search = props => {
    const [searchInput, setSearchInput] = useState('')

    const handleInput = event => {
        setSearchInput(event.target.value)
    }

    return (
        <div>
            <IntroSection header="Search" subHeader="Find amazing products." />
            <form className="search" autoComplete="off">
                <input className="item-a" type="text" name="searchInput" placeholder="Fisher Athletic Products" onChange={handleInput} />
                <Link to={`${searchInput}/products`}>
                    <button className="item-b" type="submit">search</button>
                </Link>
            </form>
        </div>
    )
}

export default Search