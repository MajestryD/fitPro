import React, { useState } from "react";
import { useGetAllExercisesOfUserQuery } from "../../../features/exercise/exerciseApiSlice";
import { useSelector } from 'react-redux';
import OrganizeSet from "./organizeSet";

const DisplayUserExercises = () => {
    


    const getDate = (amountOfDays) =>{
        const today = new Date();
        const date = today.toISOString();
        const ytd = new Date(today);
        ytd.setDate(today.getDate() - amountOfDays)
        const ytdd= ytd.toISOString();
        return ytdd;
    }

    const [startDate, setStartDate] = useState(getDate(1));
    const [endDate, setEndDate] = useState(getDate(0));
    const { user } = useSelector((state) => state.auth.user);
    const [userId, setUserId] = useState(user.userId);
    const { data, error, isLoading } = useGetAllExercisesOfUserQuery({ userId, startDate, endDate });

    const exerciseDayRange = (amountOfDays) => {
        setStartDate(getDate(amountOfDays));
    }


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
        <div>
            
            <div onClick={() => exerciseDayRange(1)}> 1D </div>
            <div onClick={() => exerciseDayRange(3)}> 3D </div>
            <div onClick={() => exerciseDayRange(7)}> 7D </div>
            <div onClick={() => exerciseDayRange(30)}> 1M </div>
            <h1>{user.name}'s List</h1>
            <div> user ID: {user.userId}</div>
            <div> Today: {getDate(0)}</div>
            <div> Start Date: {startDate}</div>
            <OrganizeSet data= {data}/>
        </div>

    )
}

export default DisplayUserExercises;