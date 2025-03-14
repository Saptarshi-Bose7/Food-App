const initialState={
    cart: []
}

const Reducer = (state=initialState,action) => {
    switch(action.type)
    {
        case 'ADD':  
        const findProductInCart = state.cart.find(item => item.id===action.payload.id)

        if(findProductInCart)
        {
            return {
                cart:state.cart.map(item => 
               item.id===action.payload.id?{...item,qty:item.qty+1}:item
            )
        }
        }
        return {
            cart:[...state.cart, {...action.payload}]
        }

        case "REMOVE":
            return {
                cart: state.cart.reduce((cal, item) => {
                    if(item.id===action.payload.id)
                    {
                        if(item.qty===1)
                        {
                           return cal
                        }
          
                        return [...cal,{...item, qty:item.qty-1}]
          
                    }
                    return [...cal,{...item}]
            },[])
            }

        case "DELETE":
            return {
                cart: state.cart.filter(product => product.id!==action.payload.id)
            }

        default:
            return state
    }
}

export default Reducer;