import React, { useEffect, useState } from "react";
import CollapsibleDisplay from "./collapsibleDisplay";
import DisplayCollapsible from "../displayCard/displayCollapsible";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


const DisplayUserRoutine = ({ data, passPropUp, day }) => {
    const [exerciseSet, setExerciseSet] = useState({});

    useEffect(() => {
        let tempSetDate = new Set();
        const currentRoutine = {};
        data?.forEach((setA, index) => {
            const exerciseDate = new Date(setA.dateOfExercise);
            const exerciseName = setA.exercisePerformed.exercise;
            const sDate = exerciseDate.toISOString().split("T")[0];


            if (!tempSetDate.has(sDate)) {
                tempSetDate.add(sDate);
                if (!currentRoutine[sDate]) {
                    currentRoutine[sDate] = { [exerciseName]: [] };
                }
                setA.exercisePerformed.set.forEach((set) => {
                    if (!currentRoutine[sDate][exerciseName]) {
                        currentRoutine[sDate][exerciseName] = [];
                    }
                    currentRoutine[sDate][exerciseName].push({ ["weight: " + set.weight + set.unit]: set.reps + " reps" });
                });

            } else {
                if (!currentRoutine[sDate]) {
                    currentRoutine[sDate] = { [exerciseName]: [] };
                }
                setA.exercisePerformed.set.forEach((set) => {
                    if (!currentRoutine[sDate][exerciseName]) {
                        currentRoutine[sDate][exerciseName] = [];
                    }
                    currentRoutine[sDate][exerciseName].push({ ["weight: " + set.weight + set.unit]: set.reps + " reps" });
                });

            }
        });
        setExerciseSet((prevState) => ({
            ...currentRoutine,
        }));
    }, [data]);

    return (

        <CardContent className="flex w-[80%] self-center">
            {Object.entries(exerciseSet).map(([date, exer], index) => (
                <div key={index} className="flex flex-col flex-nowrap justify-between w-[100%] self-center">
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{date}</h2>
                    {Object.entries(exer).map(([name, setArray], index) => (
                        <div key={index} className="flex overflow-scroll flex-col no-scrollbar justify-between w-[100%]">
                            <DisplayCollapsible
                                collapsibleTitle={name}
                                collapsibleButton={
                                    <Button onClick={() => passPropUp({ [name]: [] })} className="w-[20%]">Add</Button>
                                }
                                collapsibleContent={
                                    <CollapsibleDisplay
                                        setArray={setArray}
                                    />}
                            />


                        </div>

                    ))}

                </div>
            ))}

        </CardContent>



    );
};

export default DisplayUserRoutine;
