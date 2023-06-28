import React, { useEffect } from 'react'
import {} from '@mui/material'
import {BarChart, SearchRounded, ShoppingCartRounded} from '@mui/icons-material'

function Header(props) {
    const click = () =>
    {
        var toggleMenu=document.querySelector('.toggleMenu');
        toggleMenu.addEventListener('click', () => {
            document.querySelector('.rightMenu').classList.toggle('active');
        });
    }
  return (
    <header>
        <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" alt="" className='logo'/>
        <div className='inputBox'>
            <SearchRounded className='searchIcon'/>
            <input type="text" placeholder='search' onChange={e => props.input(e.target.value)} />
        </div>
        <div className='shoppingCart'>
            <ShoppingCartRounded className='cart'/>
            <div className='cart_content'>
                <p>{props.cart.length}</p>
            </div>
        </div>
        <div className='profileContainer'>
            <div className='imgBox'>
                <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937" alt="" className='profilePic'/>
            </div>
            <h2 className='userName'>Saptarshi Bose</h2>
        </div>
        <div className='toggleMenu'>
            <BarChart className='toggleIcon' onClick={click}/>
        </div>
    </header>
  )
}

export default Header