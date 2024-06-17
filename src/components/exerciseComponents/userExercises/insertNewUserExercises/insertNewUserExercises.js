import React, { useEffect, useState } from "react";
import { useAddUserExerciseWorkOutMutation } from "../../../../features/exercise/exerciseApiSlice";
import CollapsibleInserts from "./collapsibleInserts";
import DisplayCollapsible from "../displayCard/displayCollapsible";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
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


        <CardContent className="w-[80%] self-center">
          {Object.entries(exerciseSet).map(([name, reps], index) => (
            <DisplayCollapsible
              collapsibleTitle={name}
              collapsibleButton={<Button variant="destructive" onClick={() => removeExercise(name)}>x</Button>}
              collapsibleContent={
                <CollapsibleInserts
                key={index}
                handleInputChange={handleInputChange}
                name={name}
                reps={reps}
                handleRemoveRep={handleRemoveRep}
                handleInputEnter={handleInputEnter}
              />
              }
            />
            
           
          ))}
        </CardContent>

  );
};

export default InsertNewUserExercise;
