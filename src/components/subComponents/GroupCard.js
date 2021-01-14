import React from 'react'
import { Link } from 'react-router-dom'
import LazyImage from './LazyImage'
import './GroupCard.css'

const GroupCard = props => {
    return (
        <div className='group-card-div'>
                <Link to={`/${props.group}/groups`}>
                    <LazyImage src={props.image} />
                    <h3>{props.group}</h3>
                    <p>{`${props.itemCount} models`}</p>
                </Link>
        </div>
    )
}

export default GroupCard