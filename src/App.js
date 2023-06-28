import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { AccountBalanceRounded, Chat, Favorite, HomeMaxRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import MenuContainer from './Components/MenuContainer'
import BannerName from './Components/BannerName';
import { useEffect, useState } from 'react';
import SubMenuContainer from './Components/SubMenuContainer';
import MenuCard from './Components/MenuCard';
import {MenuItems,Items} from './Components/Data'
import ItemCard from './Components/ItemCard';
import DebitCard from './Components/DebitCard';
import CartItem from './Components/CartItem';


function App() {
  
  const [query,setQuery] = useState("")
  const [isMainData,setMainData] = useState(Items.filter(item => item.itemId==="buger01"))
  useEffect(() => {
    const menuLi=document.querySelectorAll('#menu li')
    function setMenuActive()
    {
      menuLi.forEach(n => n.classList.remove("active"))
      this.classList.add("active")
    }
    menuLi.forEach(n => n.addEventListener('click',setMenuActive))

    const menuCard=document.querySelector('.rowContainer').querySelectorAll('.rowMenuCard')

    function setMenuCardActive()
    {
        menuCard.forEach(n => n.classList.remove("active"))
        this.classList.add("active")
    }

    menuCard.forEach(n => n.addEventListener('click',setMenuCardActive))

  },[isMainData])

  const setData = itemId =>
  {
     setMainData(Items.filter(item => item.itemId===itemId))
  }
 const [cart, setCart] = useState([])



  const handleAddToCart = (product,price1) =>
  {
     setCart(() => {
       const findProductInCart = cart.find(item => item.id===product.id)

       if(findProductInCart)
       {
           return cart.map(item => 
              item.id===product.id?{...item,qty:item.qty+1}:item
           )
       }
       return [...cart, {...product}]
     })
  }
  
  const handleRemoveFromCard = (id,price1) =>
  {
      setCart(() => {
        return cart.reduce((cal, item) => {
          if(item.id===id)
          {
              if(item.qty===1)
              {
                 return cal
              }

              return [...cal, {...item,qty:item.qty-1}]

          }
          return [...cal,{...item}]
        }, [])
      })
  }

  const handleDeleteFromCard = id =>
  {
     setCart(cart.filter(product => product.id!==id))
  }

  const total = arr =>
  {
     return arr.reduce((cal,items) => {
      return cal + parseInt(items.price) * items.qty
     },0)
  } 

  return (
    <div className="App">
       <Header cart={cart} input={setQuery}/>
       <main>
            <div className='mainContainer'>
              <div className='banner'>
                <BannerName name={"Saptarshi"} discount={"20"} link={"#"}/>
                <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337" alt="" className='delieveryPicture'/>
              </div>
              <div className='dishContainer'>
                <div className='menuCard'><SubMenuContainer name="Menu Category"/></div>
                <div className='rowContainer'>
                  {MenuItems && MenuItems.map(data => {
                    return (
                        <div key={data.id} onClick={() => setData(data.itemId)}>
                        <MenuCard image={data.imgSrc} name={data.name} isActive={data.id===1?true:false}/>
                      </div>
                    )
                  })
                  
                  }
                 
                </div>
                <div className='dishItemContainer'>
                  { isMainData && isMainData.filter(post => {
                    if(query=='')
                    {
                      return post
                    }
                    else if(post.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
                    {
                      return post
                    }

                  }).map((item,index) => {
                    return (
                      <ItemCard item={item} key={index} id={item.id} imgSrc={item.imgSrc} itemId={item.id} name={item.name} ratings={item.ratings} price={item.price} handleAddToCart={handleAddToCart}/>
                    )
                  }) 
                 
                  }
                </div>
              </div>
            </div>
           
            <div className='rightMenu'>
              <div className='debitCardContainer'>
                <div className='debitCard'>
                  <DebitCard />
                </div>
              </div>
              <div className='cardCheckOutContainer'>
                  <SubMenuContainer name="Cart Items" />
                  <div className='cartContainer'>
                    <div className='cartItems'>
                      {cart.map((item,index) => {
                        return (
                          <div key={index}>
                            <CartItem item={item} name={item.name} imgSrc={item.imgSrc} qty={item.qty} price={item.price} handleAddToCart={handleAddToCart} handleRemoveFromCard={handleRemoveFromCard} handleDeleteFromCard={handleDeleteFromCard}/>
                          </div>
                        )
                      })
                      
                      } 
                    </div>
                    
              </div>
              <div className='totalSection'>
                    <h3>Total</h3>
                    <p><span>$ {total(cart)}</span></p>
        </div>
        <button className='checkOut'>Check Out</button>
              </div>
                 
            </div>
       </main>
       <div className='bottomMenu'>
         <ul id="menu">
            <MenuContainer link={'#'} icon={<HomeMaxRounded />} isHome/>
            <MenuContainer link={'#'} icon={<Chat />} />
            <MenuContainer link={'#'} icon={<AccountBalanceRounded />} />
            <MenuContainer link={'#'} icon={<Favorite />} />
            <MenuContainer link={'#'} icon={<SummarizeRounded />} />
            <MenuContainer link={'#'} icon={<Settings />} />
            <div className='indicator'></div>
         </ul>
       </div>
    </div>
  );
}

export default App;
