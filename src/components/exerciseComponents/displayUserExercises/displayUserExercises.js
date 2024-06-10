import React, { useState } from "react";
import { useGetAllExercisesOfUserQuery } from "../../../features/exercise/exerciseApiSlice";
import { useSelector } from 'react-redux';

const DisplayUserExercises = () => {

    const today = new Date();
    const date = today.toISOString().split('T')[0];


    const { user } = useSelector((state) => state.auth.user);
    const [startDate, setStartDate] = useState('2024-06-04');
    const [endDate, setEndDate] = useState('2024-06-06');

    const [userId, setUserId] = useState(user.userId);
    const { data, error, isLoading } = useGetAllExercisesOfUserQuery({ userId, startDate, endDate });

    const exerciseDayRange = (amountOfDays) => {
        
        const ytd = new Date(today);
        ytd.setDate(today.getDate() - amountOfDays)
        const ytdd= ytd.toISOString().split('T')[0];
        setStartDate(ytdd);
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;


    return (
        <div>
            
            <div onClick={() => exerciseDayRange(1)}> 1D </div>
            <div onClick={() => exerciseDayRange(3)}> 3D </div>
            <div onClick={() => exerciseDayRange(7)}> 7D </div>
            <div onClick={() => exerciseDayRange(30)}> 1M </div>
            <h1>Display {user.name}'s Exercise List</h1>
            <div> {user.userId}</div>
            <div>{date}</div>
            <div>{startDate}</div>
            <ul>
                {data?.map((exercises) => (
                    <li key={exercises._id}>{exercises.userId} : {exercises.exercisePerformed.name} | {exercises.rep} rep</li>
                ))}
            </ul>
        </div>

    )
}

export default DisplayUserExercises;