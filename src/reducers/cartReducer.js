
import { 
DELETE_ONE_CART,
DELETE_ALL_PROD,
CLEAR_CART,
PUSH_CART
 } from "../types";


export const initialState = { 
    products: [
        {id:1,name:'Producto1',price:200},
        {id:2,name:'Producto2',price:10},
        {id:3,name:'Producto3',price:2220},
        {id:4,name:'Producto4',price:100},
        {id:5,name:'Producto5',price:400},
        {id:6,name:'Producto6',price:200},
    ],
    cart:[]
}



export default function cartReducer(state = initialState , action) { 

    switch(action.type){
        case PUSH_CART: {
            let newItem  = state.products.find((product) => product.id === action.payload)
            let ItemInCart = state.cart.find((item) => item.id === newItem.id)
            return ItemInCart 
            ? {...state, cart: state.cart.map(item => item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item)} 
            : {...state, cart:[...state.cart, {...newItem, quantity:1}]}
            
        }
        case DELETE_ALL_PROD:{
            return {
                ...state,
                cart:state.cart.filter((item) => item.id !== action.payload)
            }
        }
        case DELETE_ONE_CART:{
            let itemDelete = state.cart.find((item) => item.id === action.payload)
            return itemDelete.quantity > 1 
            ? {...state, cart:state.cart.map((item => item.id === action.payload ? {...item,quantity:item.quantity -1} : item))} 
            : {...state, cart: state.cart.filter((item) => item.id !== action.payload)}
        }
        case CLEAR_CART: return initialState
        default: return state
                
    } 
}