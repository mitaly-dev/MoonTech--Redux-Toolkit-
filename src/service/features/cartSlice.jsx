import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers : {
        addToCart : (state,action)=>{
            const selectedCart = state.cart.find(product=>product._id===action.payload._id)
            if(selectedCart){
                selectedCart.quantity = selectedCart.quantity + 1 
               state.cart.filter(product=>product._id!==action.payload._id).push(selectedCart)
            // state.cart.push({...action.payload,quantitsy:1})
            }else{
                state.cart.push({...action.payload,quantity:1})
            }
        },
        removeCart : (state,action)=>{
            if(action.payload.quantity > 1){
               const product = {
                ...action.payload,
                quantity : action.payload.quantity - 1
               }
                state.cart = state.cart.filter(product=>product._id!==action.payload._id)
                state.cart.push(product)
            }else{
                state.cart = state.cart.filter(product=>product._id!==action.payload._id)
            }
        }
    }
})

export const {addToCart , removeCart} = cartSlice.actions

export default cartSlice.reducer