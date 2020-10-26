import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Search.css'

const Search = props => {
    const [searchInput, setSearchInput] = useState('')

    const handleInput = event => {
        setSearchInput(event.target.value)
    }

    return (
            <form className="search" autoComplete="off">
                <input className="item-a" type="text" name="searchInput" placeholder="Fisher Athletic Products" onChange={handleInput} />
                <Link to={`${searchInput}/products`}>
                    <button className="item-b" type="submit">search</button>
                </Link>
            </form>
    )
}

export default Search