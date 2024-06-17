import React from 'react'


function CollapsibleDisplay({setArray}) {


    return (
        <div className="flex flex-col self-center justify-between pr-[2px] w-[100%]">
            {setArray?.map((set, idx) => (
                <div key={idx} className="w-[80%]  self-center">
                    {Object.entries(set).map(([weight, reps], index) => (
                        <div key={index} className="flex flex-row justify-between">
                            <span> {weight} </span>
                            <span> {reps}</span>
                        </div>

                    ))}
                </div>
            ))}
        </div>


    )
}

export default CollapsibleDisplay