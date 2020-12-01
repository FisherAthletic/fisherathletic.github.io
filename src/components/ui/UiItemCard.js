import React, { useState } from 'react'

import Lightbox from 'react-awesome-lightbox'
import QuoteBar from '../subComponents/QuoteBar'
import ImageIcon from '@material-ui/icons/Image';
import "react-awesome-lightbox/build/style.css"
import './UiItemCard.css'

const UiItemCard = props => {
    const [lightboxShown, setLightboxShown] = useState(false)
    const [singleLightboxShown, setSingleLightboxShown] = useState(false)
    const [imgIndex, setImageIndex] = useState(0)
    const [imgLimit, setImgLimit] = useState(4)
    const [moreImgTxt, setMoreImgTxt] = useState(true)

    let multipleImages = props.images.length > 1

    const openLightbox = (index) => {
        if (multipleImages) {
            setImageIndex(index)
        }
        multipleImages ? setLightboxShown(true) : setSingleLightboxShown(true)
    }

    const closeLightbox = () => {
        multipleImages ? setLightboxShown(false) : setSingleLightboxShown(false)
    }

    const handleSeeMoreImg = () => {
        setImgLimit(20)
        setMoreImgTxt(false)
    }

    return (
        <div className="images">
            <div className="uiItemCard">
                <h3>{props.name}</h3>
                <img src={props.image} alt={props.name} onClick={() => openLightbox(0)} />
            </div>
            {multipleImages ? <ul className="itemImgList itemImgBar">
                {props.images.map((item, index) => {
                    if (index < imgLimit) {
                        return <li className="itemImgListLi">
                            <img src={item} alt={props.name} onClick={() => openLightbox(index)} />
                        </li>
                    }
                    return null
                })}
            </ul> : null}
            {lightboxShown ? <Lightbox images={props.images} title={props.name} onClose={closeLightbox} startIndex={imgIndex} /> : null}
            {singleLightboxShown ? <Lightbox image={props.image} title={props.name} onClose={closeLightbox} /> : null}
            {props.images.length > 4 && moreImgTxt ? <p onClick={handleSeeMoreImg} className="seeMoreImg">+ See more images</p> : null}
            <QuoteBar className="quoteBar" />
        </div>
    )
}

export default UiItemCard