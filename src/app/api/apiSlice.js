import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:2500", credentials: 'include'}),
    endpoints: (builder) => ({}),
    
})


