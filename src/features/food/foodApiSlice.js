import { apiSlice } from "../../app/api/apiSlice";

export const foodApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllFood: builder.query({
            query: () => "/food"
        }),
    })
})

export const { useGetAllFoodQuery} = foodApiSlice;