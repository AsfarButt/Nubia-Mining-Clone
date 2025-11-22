"use client";
import React,{useEffect, useRef, useState} from "react";



export default function Scrollar(){
    const [activeindex, setactiveindex] = useState(0);
    const [activebutton, setactivebutton] = useState(0);
    const container = useRef<HTMLHeadingElement | null>(null);
    const isDisabled = useRef(false);

    const Data = [
    { state: "Sindh", city: "Karachi" },
    { state: "Federal Territory", city: "Islamabad" },
    { state: "Gilgit-Baltistan", city: "Gilgit" }
    ];


    function MoveLeft(){
        if(isDisabled.current) return;
        setactivebutton(1);
        isDisabled.current = true;
        container.current!.style.opacity = "0";
        setTimeout(() => {container.current!.style.opacity = "100"; setactiveindex((prev) => (prev-1+Data.length)%Data.length); isDisabled.current = false;},700);
    }
    function MoveRight(){
        if(isDisabled.current) return;
        setactivebutton(2);
        isDisabled.current = true;
        container.current!.style.opacity = "0";
        setTimeout(() => {container.current!.style.opacity = "100"; setactiveindex((prev) => (prev+1)%Data.length); isDisabled.current = false;},700);
    }

    useEffect(() =>{
        console.log("active index: ",activeindex);
    },[activeindex])

    return(<div className="relative w-full h-auto">
        <div className="relative w-auto h-auto transition-all duration-800" ref={container}>
            <h1 className="text-center text-[26px] leading-5 font-bold text-red-700/85">{Data[activeindex].state}</h1>
            <h1 className="text-center mb-2 text-[22px] font-bold text-black/95">{Data[activeindex].city}</h1>
        </div>
        <div className="absolute sm:px-[10%] top-1 w-full h-10 flex items-center justify-between">
            <button className={`relative w-10 h-10 rounded-full transition-all text-[22px] pr-3 duration-600 ${activebutton == 1? "bg-red-600/85 text-white/95":"bg-black/10 text-black"}`} onClick={MoveLeft}>〈</button>
            <button className={`relative w-10 h-10 rounded-full transition-all text-[22px] pl-3 duration-600 ${activebutton == 2? "bg-red-600/85 text-white/95":"bg-black/10 text-black"}`} onClick={MoveRight}>〉</button>
        </div>
    </div>)
}