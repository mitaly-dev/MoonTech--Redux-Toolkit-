import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stock : false,
    brands : []
}

const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers : {
        stockToggle : (state,action)=>{
            state.stock = !state.stock
        },
        brandHandle : (state,action)=>{
            const selected = state.brands.find(brand=>brand===action.payload)
            if(!selected){
                state.brands.push(action.payload)
            }else{
                state.brands = state.brands.filter(brand=>brand!==action.payload)
            }
        }
    }
})

export const {stockToggle ,brandHandle} = filterSlice.actions
export default filterSlice.reducer