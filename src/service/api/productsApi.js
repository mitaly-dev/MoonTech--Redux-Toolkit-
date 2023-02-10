import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath:'productsApt',
    baseQuery : fetchBaseQuery({
        baseUrl:''
    }),
    endpoints:builder=>({
        getProducts : builder.query({
            query:()=>'/products'
        })
    })
})