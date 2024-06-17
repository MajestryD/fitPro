import React, { useEffect, useState } from "react";
import CollapsibleDisplay from "./collapsibleDisplay";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

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
                    currentRoutine[sDate][exerciseName].push({ [set.weight + set.unit]: set.reps });
                });

            } else {
                if (!currentRoutine[sDate]) {
                    currentRoutine[sDate] = { [exerciseName]: [] };
                }
                setA.exercisePerformed.set.forEach((set) => {
                    if (!currentRoutine[sDate][exerciseName]) {
                        currentRoutine[sDate][exerciseName] = [];
                    }
                    currentRoutine[sDate][exerciseName].push({ [set.weight + set.unit]: set.reps });
                });

            }
        });
        setExerciseSet((prevState) => ({
            ...currentRoutine,
        }));
    }, [data]);

    return (

        <Card className="h-[450px] w-[450px] no-scrollbar overflow-scroll pb-1 mb-2">
            <CardHeader>
                <CardTitle>Your Exercises</CardTitle>
                <CardDescription>The exercise you've perfromed for the past {day} day(s) </CardDescription>
            </CardHeader>
            <CardContent>
                {Object.entries(exerciseSet).map(([date, exer], index) => (
                    <div key={index} className="flex flex-col flex-nowrap justify-between w-[100%]">
                        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{date}</h2>
                        {Object.entries(exer).map(([name, setArray], index) => (
                            <div key={index} className="flex overflow-scroll flex-col no-scrollbar justify-between w-[100%]">
                                <CollapsibleDisplay
                                    name={name}
                                    passPropUp={passPropUp}
                                    setArray={setArray}
                                />

                            </div>

                        ))}

                    </div>
                ))}

            </CardContent>
            <CardFooter>
                <Button onClick={() =>
                    console.log(
                        "The Data being passed is: \n -------- \n" + JSON.stringify(exerciseSet)
                    )
                } className="w-[20%]">Data</Button>
            </CardFooter>

        </Card>



    );
};

export default DisplayUserRoutine;
