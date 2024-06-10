import React, { useState,  } from "react";
import "../../essentials/css/insertExercise/insertBodyPart.css"
import { useSelector } from 'react-redux';
import { useGetAllExercisesQuery, useGetAllExercisesOfUserQuery } from "../../features/exercise/exerciseApiSlice";
import Login from "../appComponents/Login/FacebookLogin";
import DisplayUserExercises from "./displayUserExercises/displayUserExercises";
import DisplayAllExerciseSets from "./displayAllExerciseSets/displayAllExerciseSets";


const DisplayBodyPart = () => {
    const { user } = useSelector((state) => state.auth);
    const { data, error, isLoading} = useGetAllExercisesQuery();

    if (!user) {
        return <Login />;
    }
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <DisplayUserExercises/>
            <DisplayAllExerciseSets/>
        </div>
    );


}


export default DisplayBodyPart;