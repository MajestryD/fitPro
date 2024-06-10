import {apiSlice } from "../../../app/api/apiSlice"

export const facebookAuthApi  = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        facebookProfile: builder.query({
            query: () => "/auth/profile",
            method: 'GET',
            credentials: 'include', 
        }),
    }),
})

export const { useFacebookProfileQuery } = facebookAuthApi;


