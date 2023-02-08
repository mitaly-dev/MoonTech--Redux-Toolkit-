import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import filterReducer from './features/filterSlice'
import logger from 'redux-logger'

const store = configureStore({
    reducer : {
        cart : cartReducer,
        filter : filterReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store