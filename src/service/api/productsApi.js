import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath:'productsApt',
    baseQuery : fetchBaseQuery({
        baseUrl:'http://localhost:5000/'
    }),
    endpoints:builder=>({
        getProducts:builder.query({
            query:()=>'/products'
        }),
        addProduct:builder.mutation({
            query:data=>({
                url:'/product',
                method:'POST',
                body:data
            })
        }),
        removeProduct:builder.mutation({
            query:(id)=>({
                url:`/product/${id}`,
                method:'DELETE',
            })
        })
    })
})

export const {useGetProductsQuery , useAddProductMutation , useRemoveProductMutation} = productsApi