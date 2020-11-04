import React from 'react'
import { useParams } from 'react-router-dom'
import { useMediaQuery } from "@material-ui/core"

import productData from '../../assets/data/productData'
import UiItemCard from '../ui/UiItemCard'
import UiItemDetails from '../ui/UiItemDetails'
import BackButton from '../ui/BackButton'
import './Item.css'

const Item = props => {
  const urlItem = useParams().item;
  const itemData = productData.filter((item) => item.sku === urlItem);

  // variable for using a media query
  const isSmall = useMediaQuery('(max-width: 600px)');
  const isMedium = useMediaQuery('(max-width: 1000px)');
  const isLarge = useMediaQuery('(max-width: 1500px)');

  const divSize = isSmall ? 'smallDiv' : isMedium ? 'mediumDiv' : isLarge ? 'largeDiv' : 'largeDiv'

  return (
    <div>
      <div className={divSize}>
        <BackButton className="backBtnTop" />
        <UiItemCard
          className="images"
          name={itemData[0].name}
          image={itemData[0].image}
          images={itemData[0].images}
          description={itemData[0].description}
        />
        <UiItemDetails
          className="details"
          sku={itemData[0].sku}
          name={itemData[0].name}
          description={itemData[0].description}
          details={itemData[0].details}
          options={itemData[0].options}
        />
        <BackButton className="backBtnBott" />
      </div>
    </div>
  );
}

export default Item