import React from 'react'
import './ImageHeroSplit.css'

const ImageHeroSplit = props => {
    return (
        <div className='container'>
            <img src='https://firebasestorage.googleapis.com/v0/b/fisher-website-r.appspot.com/o/products%2Fchair-sq-ad.jpg?alt=media&token=973fe8b0-6a6f-4d01-823a-bb0e47dbfe57' alt='chair_ad' />
            <div className='text_container'>
                <h1 className='header'>Custom Chairs</h1>
                <p className='subheader'>Order yours today!</p>
            </div>
        </div>
    )
}

export default ImageHeroSplit