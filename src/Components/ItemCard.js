import { AddRounded, Favorite, ShoppingCart, Star, StarRounded } from '@mui/icons-material'
import React, { useState } from 'react'

function ItemCard(props) {
    const [isFavourite,setFavourite] = useState(false)
    const [currentValue,setCurrentValue] = useState(Math.floor(props.ratings))

    const handleClick = value =>
    {
        setCurrentValue(value)
    }

  return (
    <div className='itemCard' id={props.itemId}>
        <div className={`isFavourite ${isFavourite ? "active":""}`} onClick={() => setFavourite(!isFavourite)}>
            <Favorite />
        </div>
            <div className='imgBox'>
                <img src={props.imgSrc} alt="" className='itemImg'/>
            </div>
            <div className='itemContent'>
                <h3 className='itemName'>{props.name}</h3>
                <div className='bottom'>
                    <div className='ratings'>{Array.apply(null,{length:5}).map((e,index) => {
                        return (
                        <i key={index} className={`rating ${currentValue > index ? "orange" : "gray"}`} onClick={() => handleClick(index+1)}><StarRounded /></i>
                        )
                    })}
                    <h3 className='price'><span>$ </span>{props.price}</h3>
                    </div>
                    <i className='addToCart'><AddRounded onClick={() => props.handleAddToCart(props.item,props.price)}/></i>
                </div>
            </div>
        
    </div>
  )
}

export default ItemCard