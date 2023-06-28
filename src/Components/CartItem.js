import { AddRounded, Delete, RemoveRounded } from '@mui/icons-material'
import React from 'react'

function CartItem(props) {
  return (
    <div className='cardItem'>
        <div className='imgBox'>
            <img src={props.imgSrc} alt="" />
        </div>
        <div className='itemSection'>
            <h2 className='itemName'>{props.name}</h2>
            <div className='itemQuantity'>
                <span>x {props.qty}</span>
                <div className='quantity'>
                    <RemoveRounded className='itemRemove' onClick={() => props.handleRemoveFromCard(props.item.id,props.price)}/>

                    <AddRounded className='itemAdd' onClick={() => props.handleAddToCart(props.item,props.price)}/>

                    <Delete className='itemDelete' onClick={() => props.handleDeleteFromCard(props.item.id)}/>
                </div>
            </div>
        </div>
        <p className='itemPrice'>
            <span className='dolorSign'>$ </span>
            <span className='itemPriceValue'>{props.price}</span>
        </p>
        
        </div>
  )
}

export default CartItem