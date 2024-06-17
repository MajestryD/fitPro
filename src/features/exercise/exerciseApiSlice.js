import { apiSlice } from "../../app/api/apiSlice";

export const exerciseApiSlice = apiSlice.enhanceEndpoints({ addTagTypes: ['AllExercisesOfUser'] }).injectEndpoints({
    endpoints: (builder) => ({
        getAllExercises: builder.query({
            query: () => "/exerciseSet",
            providesTags: ['AllExercisesOfUser']
        }),
        getAllAvailableExercise: builder.query({
            query: () => "/exercise",
        }),
        getAllExercisesOfUser: builder.query({
            query: ({ userId, startDate, endDate }) => ({
                url: `/exerciseSet/user?userId=${userId}&startDate=${startDate}&endDate=${endDate}`,
            }),
            providesTags: ['AllExercisesOfUser']
        }),
        addUserExerciseWorkOut: builder.mutation({
            query: (postData) => ({
                url: "/exerciseSet/add",
                method: "POST",
                body: postData,
                headers: {
                    "Content-Type": "application/json"
                }
            }),
            invalidatesTags: ['AllExercisesOfUser']
        }),
    })
});

export const { useGetAllExercisesQuery, useGetAllExercisesOfUserQuery, useAddUserExerciseWorkOutMutation, useGetAllAvailableExerciseQuery } = exerciseApiSlice;
