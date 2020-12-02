import React from 'react'
import './ImageHero.css'
import LazyImage from './LazyImage'

const ImageHero = props => {
    return (
        <div className='container'>
            <LazyImage src={props.image} alt='chair_ad' />
            <div className={props.middle ? 'text_container_middle' : 'text_container_bottom'}>
                <h1 className='header'>{props.header}</h1>
                <p className='subheader'>{props.subheader}</p>
            </div>
        </div>
    )
}

export default ImageHero