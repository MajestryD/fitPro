import React, { useEffect, useState } from "react";
import { useAddUserExerciseWorkOutMutation } from "../../../features/exercise/exerciseApiSlice";
import CollapsibleInserts from "./collapsibleInserts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"



const InsertNewUserExercise = ({ data, exerciseMap, userId, today }) => {


  const [exerciseSet, setExerciseSet] = useState({});

  useEffect(() => {
    setExerciseSet(prevState => ({
      ...data,
      ...prevState
    }));
  }, [data]);

  const removeExercise = (exerciseName) => {
    const temp = { ...exerciseSet };
    delete temp[exerciseName];
    setExerciseSet(temp);
  }

  const handleInputChange = (name, idx, event) => {
    if (event.target.value != '') {
      const temp = { ...exerciseSet };
      temp[name][idx] = event.target.value;
      setExerciseSet(temp);
    }
  }

  const handleInputEnter = (name, idx, event) => {
    if (event.key === 'Enter') {
      const temp = { ...exerciseSet };
      temp[name][idx] = event.target.value;
      setExerciseSet(temp);
    }
  }
  const handleRemoveRep = (name, idx) => {
    const temp = { ...exerciseSet };
    temp[name].splice(idx, 1);
    setExerciseSet(temp);
  }

  const [postData, isLoading, error] = useAddUserExerciseWorkOutMutation();

  const handleSubmit = async () => {
    try {

      Object.keys(exerciseSet).forEach((fullSet) => {

        const currentSet = {
          userId: userId,
          exercisePerformed: exerciseMap[fullSet][0],
          reps: exerciseSet[fullSet]
        }
        postData(currentSet)
          .then(resp => console.log(resp));
      })
    } catch (error) {
      console.error('Error posting workout:', error)
    }
  }


  return (
    <div>
      <Card className="h-[450px] w-[450px] no-scrollbar overflow-scroll pb-1 mb-2">
        <CardHeader>
          <CardTitle>Today's Workout</CardTitle>
          <CardDescription>Log you workout for {today}</CardDescription>
        </CardHeader>
        <CardContent>
          {Object.entries(exerciseSet).map(([name, reps], index) => (
            <CollapsibleInserts
              key={index}
              removeExercise={removeExercise}
              handleInputChange={handleInputChange}
              name={name}
              reps={reps}
              index={index}
              handleRemoveRep={handleRemoveRep}
              handleInputEnter={handleInputEnter}
            />
          ))}
        </CardContent>
      </Card>
      <Button onClick={() =>
        console.log(
          "The Data being passed is: \n -------- \n" + JSON.stringify(data)
        )
      } className="w-[20%]">Data</Button>
      <Button onClick={() => { console.log(JSON.stringify(exerciseSet)); handleSubmit() }}> Save workout</Button>
    </div>
  );
};

export default InsertNewUserExercise;
