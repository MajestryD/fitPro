import React, { useEffect, useState } from "react";

import {
  useGetAllAvailableExerciseQuery,
  useGetAllRoutineOfUserQuery,
} from "../../../features/exercise/routineApiSlice";

import { useSelector } from "react-redux";
import InsertNewUserExercise from "../insertNewUserExercises/insertNewUserExercises";
import SearchExercise from "./SearchExercise";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DisplayUserRoutine from "./displayUserRoutine";


const UserExercises = () => {
  const getDate = (amountOfDays) => {
    const ytd = new Date();
    ytd.setHours(24, 0, 0, 0);
    ytd.setDate(ytd.getDate() - amountOfDays);
    const ytdd = ytd.toISOString();
    return ytdd;
  };

  const getEndOfToday = () => {
    const today = new Date();
    today.setHours(24, 0, 0, 0);
    const ytdd = today.toISOString();
    return ytdd;
  };
  const [startDate, setStartDate] = useState(getDate(1));

  const [endDate, setEndDate] = useState(getEndOfToday());
  const { user } = useSelector((state) => state.auth.user);
  const [userId, setUserId] = useState(user.userId);
  const {
    data: userExercise,
    error: userExerciseError,
    isLoading: userExerciseIsLoading,
  } = useGetAllRoutineOfUserQuery({
    userId,
    startDate,
    endDate,
  });

  const [populateNewSet, setPopulateNewSet] = useState({});
  const [exerciseMap, setExerciseMap] = useState({});
  const {
    data: exerciseData,
    error: exerciseError,
    isLoading: exerciseIsLoading,
  } = useGetAllAvailableExerciseQuery();

  useEffect(() => {
    if (exerciseData) {
      exerciseData.forEach((ex) => {
        if (!exerciseMap.hasOwnProperty(ex.name)) {
          setExerciseMap({ ...exerciseMap, [ex.name]: [ex._id] });
        }
      });
    }
    setStartDate(getDate(1));
  }, [exerciseData, exerciseMap]);

  const [isSearchByDate, setIsSearchByDate] = useState(true);

  const passPropUp = (something) => {
    setPopulateNewSet(something);
  };

  const exerciseDayRange = (amountOfDays) => {
    setStartDate(getDate(amountOfDays));
  };

  if (userExerciseIsLoading) return <div>Loading...</div>;
  if (userExerciseError) return <div>Error: {userExerciseError.message}</div>;

  return (
    <Tabs defaultValue="1D" className="w-[100%] flex flex-col justify-around items-center self-center">
      <h1>{user.name}'s List</h1>
      <div> user ID: {user.userId}</div>
      <div> Today: {getDate(-1)}</div>
      <div> Start Date: {startDate}</div>
      <div> End Date: {getEndOfToday()}</div>
      <TabsList>
        <TabsTrigger value="1D" onClick={() => { exerciseDayRange(1); setIsSearchByDate(true) }}> 1D </TabsTrigger>
        <TabsTrigger value="3D" onClick={() => { exerciseDayRange(3); setIsSearchByDate(true) }}> 3D </TabsTrigger>
        <TabsTrigger value="7D" onClick={() => { exerciseDayRange(30); setIsSearchByDate(true) }}> 1M </TabsTrigger>
        <TabsTrigger value="Search" onClick={() => setIsSearchByDate(false)}> Search </TabsTrigger>
      </TabsList>
      <div className="w-[100%] flex flex-row justify-around items-center self-center">
        {isSearchByDate ? (
          <div>
            <TabsContent value="1D">
              <DisplayUserRoutine
                day="1"
                key={userExercise}
                data={userExercise}
                passPropUp={passPropUp}
              />
            </TabsContent>
            <TabsContent value="3D">
              <DisplayUserRoutine
                day="3"
                key={userExercise}
                data={userExercise}
                passPropUp={passPropUp}
              />
            </TabsContent>
            <TabsContent value="7D">
              <DisplayUserRoutine
                day="7"
                key={userExercise}
                data={userExercise}
                passPropUp={passPropUp}
              />
            </TabsContent>
          </div>
        ) : (
          <div>
            <TabsContent value="Search">
              <SearchExercise data={exerciseData} passPropUp={passPropUp} />
            </TabsContent>

          </div>
        )}

        <InsertNewUserExercise
          data={populateNewSet}
          exerciseMap={exerciseMap}
          userId={userId}
          today={getDate(0)}
        />
      </div>
    </Tabs>

  );
};

export default UserExercises;
