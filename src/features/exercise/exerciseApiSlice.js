import {apiSlice } from "../../app/api/apiSlice"

export const exerciseApiSlice  = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        getAllExercises: builder.query({
            query: () => "/exerciseSet"
        }),
        getAllExercisesOfUser: builder.query({
            query:({userId, startDate, endDate}) =>({
                url: `/exerciseSet/user?userId=${userId}&startDate=${startDate}&endDate=${endDate}`,
                method: 'GET',
            }),
        }),
    })
})

export const {useGetAllExercisesQuery, useGetAllExercisesOfUserQuery} = exerciseApiSlice;
