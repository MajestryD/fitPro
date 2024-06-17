import React, { useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"


function CollapsibleDisplay({ name, passPropUp, setArray }) {
    const [isOpen, setIsOpen] = useState(true)

    return (

        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[100%] space-y-2 self-center"
        >
            <div className="flex flex-row justify-between">
                <CollapsibleTrigger asChild>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight w-[70%]">{name}</h3>
                </CollapsibleTrigger>
                <Button onClick={() => passPropUp({ [name]: [] })} className="w-[20%]">Add</Button>
            </div>
            <CollapsibleContent>
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
            </CollapsibleContent>

        </Collapsible>
    )
}

export default CollapsibleDisplay