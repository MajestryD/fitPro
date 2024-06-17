import { apiSlice } from "../../app/api/apiSlice";

export const routineApiSlice = apiSlice.enhanceEndpoints({ addTagTypes: ['Routine'] }).injectEndpoints({
    endpoints: (builder) => ({
        getAllRoutine: builder.query({
            query: () => "/routine",
            providesTags: ['Routine']
        }),
        getAllAvailableExercise: builder.query({
            query: () => "/exercise",
        }),
        getAllRoutineOfUser: builder.query({
            query: ({ userId, startDate, endDate }) => ({
                url: `/routine/find?userId=${userId}&startDate=${startDate}&endDate=${endDate}`,
            }),
            providesTags: ['Routine']
        }),
        addUserRoutine: builder.mutation({
            query: (postData) => ({
                url: "/routine/add",
                method: "POST",
                body: postData,
                headers: {
                    "Content-Type": "application/json"
                }
            }),
            invalidatesTags: ['Routine']
        }),
    })
});

export const { useGetAllRoutineQuery, useGetAllRoutineOfUserQuery, useAddUserRoutineMutation, useGetAllAvailableExerciseQuery } = routineApiSlice;
