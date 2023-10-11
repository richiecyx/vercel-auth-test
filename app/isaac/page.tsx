"use client"

import Image from "next/image";
import isaac from "@/app/isaac.png";
import ugly from "@/app/ugly.png";
import {Checkbox} from "@nextui-org/react";
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'


export default function Isaac() {
    const [rating, setRating] = useState(0)
    const [clappedStatus, setClappedStatus] = useState("")
    const clappy = () => {
        if (rating === 1){
            setClappedStatus("YOU COULDN'T BE MORE WRONG")
        }
        else if(rating === 2){
            setClappedStatus("HE'S SO UGLY")
        }
        else if(rating === 3){
            setClappedStatus("OH MY GOODNESS WHAT IS THAT THING ON HIS HEAD")
        }
        else if(rating === 4){
            setClappedStatus("WHY IS HE SMILING LIKE THAT BRUH")
        }
        else{
            setClappedStatus("keep it real g :)")

        }

    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div><h1 className={"text-5xl"}>HOW CLAPPED IS ISAAC?</h1></div>
            <Image
                src={isaac}
                width={500}
                height={500}
                alt="Picture of the Isaac"
            />
            {/*<div className="flex gap-4">*/}
            {/*    <Checkbox defaultSelected color={"default"}>1</Checkbox>*/}
            {/*    <Checkbox>2</Checkbox>*/}
            {/*    <Checkbox>3</Checkbox>*/}
            {/*    <Checkbox>4</Checkbox>*/}
            {/*    <Checkbox>5</Checkbox>*/}
            {/*</div>*/}
            <div className={"flex flex-row justify-between space-x-14 p-7"}>
                <input type="radio" value="1" name="1" onClick={(e)=>{setRating(1); setClappedStatus("YOU COULDN'T BE MORE WRONG")}}/> 1
                <input type="radio" value="2" name="1" onClick={(e)=>{setRating(2); setClappedStatus("HE'S SO UGLY")}}/> 2
                <input type="radio" value="3" name="1" onClick={(e)=>{setRating(3); setClappedStatus("OH MY GOODNESS WHAT IS THAT THING ON HIS HEAD")}}/> 3
                <input type="radio" value="4" name="1" onClick={(e)=>{setRating(4); setClappedStatus("WHY IS HE SMILING LIKE THAT BRUH")}}/> 4
                <input type="radio" value="5" name="1" onClick={(e)=>{setRating(5); setClappedStatus("keep it real g :)")}}/> 5
            </div>
            <div><h1 className={"text-3xl"}>{clappedStatus??""}</h1></div>



        </main>
    )
}