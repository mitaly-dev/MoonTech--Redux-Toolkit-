import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import filterReducer from './features/filterSlice'
import { productsApi } from './api/productsApi'

const store = configureStore({
    reducer : {
        cart : cartReducer,
        filter : filterReducer,
        [productsApi.reducerPath] : productsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(productsApi.middleware)
})

export default store