import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const LazyImage = ( props ) => {
  return ( 
    <LazyLoadImage
    alt={props.alt} 
    src={props.src}
    placeholderSrc={"https://firebasestorage.googleapis.com/v0/b/fisher-website-r.appspot.com/o/products%2Fprod-placeholder-1.jpg?alt=media&token=2d103bf7-31cf-4d33-b90f-42d75f275597"}
    effect="blur" />
  )
}

export default LazyImage