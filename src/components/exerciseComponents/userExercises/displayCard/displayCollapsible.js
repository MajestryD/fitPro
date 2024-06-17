import React, { useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"


function DisplayCollapsible({ collapsibleTitle, collapsibleButton, collapsibleContent }) {
    const [isOpen, setIsOpen] = useState(true)

    return (

        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[100%] space-y-2 self-center"
        >
            <div className="flex flex-row justify-between p-1">
                <CollapsibleTrigger asChild className=''>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight w-[60%] overflow-hidden self-center">{collapsibleTitle}</h4>
                </CollapsibleTrigger>
                {collapsibleButton}
            </div>
            <CollapsibleContent>
                {collapsibleContent}
            </CollapsibleContent>

        </Collapsible>
    )
}

export default DisplayCollapsible