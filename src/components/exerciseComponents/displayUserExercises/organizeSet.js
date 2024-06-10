import React, { useEffect, useState } from "react";

const OrganizeSet = (data) => {
    const [exerciseSet, setExerciseSet] = useState();

    useEffect(() =>{   
        let tempSet = new Set;
        data.data.map((set, index) => {
            if(!tempSet.has(set.name)){
                tempSet.add(set.name);
                setExerciseSet({...exerciseSet, set})
            }
        })
    },[exerciseSet])

    return (
        <div>
            <div>useless 1: {JSON.stringify(exerciseSet)}</div>
        <ul>
            {data.data?.map((exercises) => (
                <li key={exercises._id}>{exercises.userId} : {exercises.exercisePerformed.name} | {exercises.rep} rep</li>
            ))}
        </ul>
        </div>

    )
}

export default OrganizeSet;