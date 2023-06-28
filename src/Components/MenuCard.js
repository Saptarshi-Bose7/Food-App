import { ChevronRightRounded } from '@mui/icons-material'
import React from 'react'

function MenuCard(props) {
  return (
    <div className={`rowMenuCard ${props.isActive?`active`:``}`}>
        <div className='imgBox'>
            <img src={props.image} alt="" />
        </div>
        <h3>{props.name}</h3>
        <i className='loadMenu'>
            <ChevronRightRounded />
        </i>
    </div>
  )
}

export default MenuCard