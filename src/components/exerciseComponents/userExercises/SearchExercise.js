import React from "react";
import { Button } from "@/components/ui/button"

function SearchExercise({ data, passPropUp }) {
  if (!data) return <div> Something is wrong!</div>;
  return (
    <div>
      {data?.map((exercise, index) => (
        <div key={index} className="flex flex-row justify-between p-1">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight w-[60%] overflow-hidden self-center">{exercise.name}</h4>
          <Button
            value="passPropUp"
            onClick={() => passPropUp({ [exercise.name]: [] })}
          />
        </div>
      ))}
    </div>
  );
}

export default SearchExercise;
