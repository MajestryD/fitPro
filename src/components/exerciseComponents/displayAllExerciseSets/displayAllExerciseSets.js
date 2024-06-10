import React  from "react";
import { useGetAllExercisesQuery } from "../../../features/exercise/exerciseApiSlice";


const DisplayAllExerciseSets = () => {

    const { data, error, isLoading} = useGetAllExercisesQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
        <div>
            <h1>All Exercise List</h1>
            <ul>
                {data?.map((exercises) => (
                    <li key={exercises._id}>{exercises.userId} : {exercises.exercisePerformed.name} | {exercises.rep} rep</li>
                ))}
            </ul>
        </div>

    )
}

export default DisplayAllExerciseSets;