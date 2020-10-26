import React from 'react'
import { useParams } from 'react-router-dom'
import { useMediaQuery } from "@material-ui/core"

import productData from '../../assets/data/productData'
import UiItemCard from '../ui/UiItemCard'
import UiItemDetails from '../ui/UiItemDetails'
import BackButton from '../ui/BackButton'
import QuoteBar from '../subComponents/QuoteBar'
import './Item.css'

const Item = props => {
  const urlItem = useParams().item;
  const itemData = productData.filter((item) => item.sku === urlItem);

  // variable for using a media query
  const isSmall = useMediaQuery('(max-width: 599px)');
  const isMedium = useMediaQuery('(max-width: 1000px)');
  const isLarge = useMediaQuery('(max-width: 1500px)');

  const backBtn = {
      gridArea: 'backBtn'
  }

  const images = {
    gridArea: 'images'
}

 const quoteBar = {
      gridArea: 'quoteBar'
  }

  const details = {
    gridArea: 'details'
}

  const largeDiv = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto',
    margin: 'auto',
    maxWidth: '1500px',
    gridTemplateAreas: `
    'backBtn'
    'images'
    'QuoteBar'
    'details'
    `
  };
  const mediumDiv = {
    display: 'grid',
    gridTemplateColumns: '250px 250px 250px 250px',
    gridTemplateRows: 'auto',
    margin: 'auto',
    maxWidth: '150px',
    gridTemplateAreas: `
    'backBtn'
    'images'
    'QuoteBar'
    'details'
    `
  };
  const smallDiv = {
    display: 'grid',
    gridTemplateColumns: '250px 250px 250px 250px',
    gridTemplateRows: 'auto',
    margin: 'auto',
    maxWidth: '150px',
    gridTemplateAreas: `
    'backBtn'
    'images'
    'QuoteBar'
    'details'
    `
  };

  return (
    <div style={largeDiv}>
      <BackButton style={backBtn} />
      <UiItemCard
        style={images}
        name={itemData[0].name}
        image={itemData[0].image}
        images={itemData[0].images}
        description={itemData[0].description}
      />
      <QuoteBar style={quoteBar} />
      <UiItemDetails
        style={details}
        sku={itemData[0].sku}
        name={itemData[0].name}
        description={itemData[0].description}
        details={itemData[0].details}
        options={itemData[0].options}
      />
      <BackButton style={backBtn} />
    </div>
  );
}

export default Item