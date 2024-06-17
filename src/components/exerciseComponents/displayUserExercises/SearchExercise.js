import React from "react";

function SearchExercise({ data, passPropUp }) {
  if (!data) return <div> Something is wrong!</div>;
  return (
    <div>
      {data?.map((exercise, index) => (
        <div key={index}>
          {exercise.name}
          <input
            type="button"
            value="passPropUp"
            onClick={() => passPropUp({ [exercise.name]: [] })}
          />
        </div>
      ))}
    </div>
  );
}

export default SearchExercise;
