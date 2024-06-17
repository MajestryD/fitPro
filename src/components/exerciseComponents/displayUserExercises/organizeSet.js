import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"




const OrganizeSet = ({ data, passPropUp, day }) => {
  const [exerciseSet, setExerciseSet] = useState({});

  useEffect(() => {
    let tempSetDate = new Set();
    const newExerciseSetDate = {};
    data.forEach((setA, index) => {
      const exerciseName = setA.exercisePerformed.name;
      const exerciseDate = new Date(setA.dateOfExercise);
      const sDate = exerciseDate.toISOString().split("T")[0];

      if (!tempSetDate.has(sDate)) {
        tempSetDate.add(sDate);
        if (!newExerciseSetDate[sDate]) {
          newExerciseSetDate[sDate] = { [exerciseName]: [] };
        }
        setA.reps.forEach((number) => {
          if (!newExerciseSetDate[sDate][exerciseName]) {
            newExerciseSetDate[sDate][exerciseName] = [];
          }
          newExerciseSetDate[sDate][exerciseName].push(number);
        });
      } else {
        if (!newExerciseSetDate[sDate]) {
          newExerciseSetDate[sDate] = { [exerciseName]: [] };
        }

        setA.reps.forEach((number) => {
          if (!newExerciseSetDate[sDate][exerciseName]) {
            newExerciseSetDate[sDate][exerciseName] = [];
          }
          newExerciseSetDate[sDate][exerciseName].push(number);
        });
      }
    });

    setExerciseSet((prevState) => ({
      ...newExerciseSetDate,
    }));
  }, [data]);

  return (
    <div>
      <Card className="h-[450px] w-[450px] no-scrollbar overflow-scroll pb-1 mb-2">
        <CardHeader>
          <CardTitle>Your Exercises</CardTitle>
          <CardDescription>The exercise you've perfromed for the past {day} day(s) </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            {Object.entries(exerciseSet).map(([date, exer], index) => (
              <div key={index} className="flex flex-col flex-nowrap justify-between">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{date}</h2>
                {Object.entries(exer).map(([name, reps], index) => (
                  <div key={index} className="flex overflow-scroll no-scrollbar justify-between">
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight w-[20%]">{name}</h3>
                    <ScrollArea className="w-[35%] h-[40px] self-center p-[5px]" >
                      <div className="flex flex-row self-center justify-center pr-[2px]">
                        {reps.map((rep, idx) => (
                          <div key={idx} className="flex ">
                            <Separator orientation="vertical" />
                            <div className=" min-w-[30px]"> x{rep} </div>
                            <Separator orientation="vertical" />
                          </div >
                        ))}
                      </div>
                      <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                    <Button onClick={() => passPropUp({ [name]: [] })} className="w-[20%]">Add</Button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>



      <Button onClick={() =>
        console.log(
          "The Data being passed is: \n -------- \n" + JSON.stringify(data)
        )
      } className="w-[20%]">Data</Button>

      <Button onClick={() =>
        console.log(
          "The Data being passed is: \n -------- \n" + JSON.stringify(exerciseSet)
        )
      } className="w-[20%]">exerciseSet</Button>

    </div>
  );
};

export default OrganizeSet;
