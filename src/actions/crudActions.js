import { 
    READ_ALL_DATA,
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    RESET , 
    CLEAR_CART, 
    DELETE_ONE_CART, 
    DELETE_ALL_PROD,
    PUSH_CART
 } from '../types';


// crud action
export const readAllAction = (data) => ({type:READ_ALL_DATA, payload:data})



// count actions
export const countIncrement = () => ({type:INCREMENT_COUNT})
export const countDecrement = () => ({type:DECREMENT_COUNT})
export const resetCount = () => ({type:RESET})



// cart actions
export const pushCart = (id) => ({type:PUSH_CART, payload:id})

export const removeAllProd  = (id, all = false) =>
all
 ? {type:DELETE_ALL_PROD,payload:id} 
 : {type:DELETE_ONE_CART,payload:id}

export const clearCart = () => ({type:CLEAR_CART})
