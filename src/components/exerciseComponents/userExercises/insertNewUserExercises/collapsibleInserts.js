import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



function CollapsibleInserts({ handleInputChange, name, reps, handleRemoveRep, handleInputEnter }) {


    return (

        <div className="flex flex-col self-center justify-center pr-[2px]">
            <Input
                key={reps.length}
                type="text"
                placeholder="Add Rep"
                onBlur={(e) => handleInputChange(name, reps.length, e)}
                onKeyDown={(e) => handleInputEnter(name, reps.length, e)}
                className=""
            />
            {reps.map((rep, idx) => (
                <div key={idx} className='flex'>
                    <Input
                        placeholder={rep}
                        type="text"
                        value={rep}
                        onChange={(e) => handleInputChange(name, idx, e)}
                        className=""
                    />
                    <Button variant="destructive" onClick={() => handleRemoveRep(name, idx)}>x</Button>
                </div>
            ))}
        </div>

    )
}

export default CollapsibleInserts