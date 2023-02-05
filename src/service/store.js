import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import filterReducer from './features/filterSlice'

const store = configureStore({
    reducer : {
        cart : cartReducer,
        filter : filterReducer
    }
})

export default store