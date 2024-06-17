import React, { useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"



function CollapsibleInserts({ removeExercise, handleInputChange, name, reps, index, handleRemoveRep, handleInputEnter }) {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2"
        >

            <div key={index} className="flex overflow-scroll no-scrollbar justify-between">
                <CollapsibleTrigger asChild>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight w-[20%]">{name}</h3>
                </CollapsibleTrigger>
                <Button variant="destructive" onClick={() => removeExercise(name)}>x</Button>
            </div>

            <CollapsibleContent>
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
            </CollapsibleContent>
        </Collapsible>
    )
}

export default CollapsibleInserts