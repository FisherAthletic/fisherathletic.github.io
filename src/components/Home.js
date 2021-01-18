import React from "react"
import ImageHero from './subComponents/ImageHero'

import './Home.css'

function Home() {
    return (
        <div className='home-div'>
            <div className='image_hero_group'>
                <ImageHero 
                image='https://firebasestorage.googleapis.com/v0/b/fisher-website-r.appspot.com/o/products%2Fchair-sq-ad.jpg?alt=media&token=973fe8b0-6a6f-4d01-823a-bb0e47dbfe57'
                header='Custom Chairs'
                subheader='Order yours today!'
                middle={false}
                />
                <ImageHero 
                image='https://firebasestorage.googleapis.com/v0/b/fisher-website-r.appspot.com/o/products%2Fstool-sq-ad.jpg?alt=media&token=5d9b30bd-986a-4f45-845d-d028c9986585'
                header='Custom Stools'
                subheader='Order yours today!'
                middle={false}
                />
            </div>
        </div>
    )
}

export default Home