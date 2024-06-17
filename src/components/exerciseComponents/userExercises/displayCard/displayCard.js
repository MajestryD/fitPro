import React, { useEffect, useState } from "react";
import DisplayCollapsible from "./displayCollapsible";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const DisplayCard = ({ cardTitle, cardDescription, cardContent, cardFooter }) => {


    return (

        <Card className="h-[450px] w-[450px] no-scrollbar overflow-scroll pb-1 mb-2 flex flex-col">
            <CardHeader className="w-[80%] self-center">
                <CardTitle>{cardTitle}</CardTitle>
                <CardDescription>{cardDescription} </CardDescription>
            </CardHeader>
            <CardContent className="flex w-[80%] self-center">
                {cardContent}
            </CardContent>
            <CardFooter className="w-[80%] self-center">
                {cardFooter}
            </CardFooter>
        </Card>

    );
};

export default DisplayCard;
