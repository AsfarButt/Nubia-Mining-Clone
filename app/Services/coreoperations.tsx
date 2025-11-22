"use client";
import React,{useEffect, useRef, useState} from "react";



export default function CoreOperations(){
    const element1 = useRef<HTMLLIElement | null>(null);
    const element2 = useRef<HTMLLIElement | null>(null);
    const element3 = useRef<HTMLLIElement | null>(null);
    const element4 = useRef<HTMLLIElement | null>(null);
    useEffect(() =>{
        if(!element1.current || !element2.current || !element3.current || !element4.current) return;
        const observer = new IntersectionObserver((elements) => {
                elements.forEach((element, index) => {
                    if(element.isIntersecting){
                    element.target.classList.remove("-translate-x-15","opacity-0");
                    }
                })
        },{threshold: 0.5})
        observer.observe(element1.current);
        observer.observe(element2.current);
        observer.observe(element3.current);
        observer.observe(element4.current);

        return () => {
            if(element1.current) observer.unobserve(element1.current);
            if(element2.current) observer.unobserve(element2.current);
            if(element3.current) observer.unobserve(element3.current);
            if(element4.current) observer.unobserve(element4.current);
        }
    },[])

    return(<div className="relative w-full h-auto p-4 z-2">
        <div className="relative w-fill h-auto sm:px-4">
            <h2 className="text-white text-3xl drop-shadow-xl font-sans font-semibold">Main operations</h2>
            <h2 className="text-gray-300/90 drop-shadow-lg shadow-black">Nubian Mining Company focuses on exploring, extracting, and processing gold in Pakistan while emphasizing sustainability, community development, and modern mining practices.</h2>
        </div>
        <div className="relative pt-4 px-2 sm:px-4 md:px-8 lg:px-12 w-full h-auto flex flex-col items-center justify-center">
            <li className="relative w-full my-1 py-2 md:py-3 lg:py-4 -translate-x-15 transition-alldelay-50 duration-600 ease-out opacity-0 text-white/90 backdrop-blur-[1px] text-[18px] md:text-[22px] lg:text-[24px] h-auto border-1 border-gray-200/40 p-1" ref={element1}>Exploration and development of precious and strategic metal assets using JORC-aligned and sustainable and practices.</li>
            <li className="relative w-full my-1 py-2 md:py-3 lg:py-4 -translate-x-15 transition-alldelay-150 duration-600 ease-out opacity-0 text-white/90 backdrop-blur-[1px] text-[18px] md:text-[22px] lg:text-[24px] h-auto border-1 border-gray-200/40 p-1" ref={element2}>Extraction, processing and logistics of ores/metals and value-add concentrates with modern infrastructure and ESG complaince.</li>
            <li className="relative w-full my-1 py-2 md:py-3 lg:py-4 -translate-x-15 transition-alldelay-250 duration-600 ease-out opacity-0 text-white/90 backdrop-blur-[1px] text-[18px] md:text-[22px] lg:text-[24px] h-auto border-1 border-gray-200/40 p-1" ref={element3}>Global trading and export of precious and base metals, ensuring full traceability with regulatory transparency.</li>
            <li className="relative w-full my-1 py-2 md:py-3 lg:py-4 -translate-x-15 transition-alldelay-350 duration-600 ease-out opacity-0 text-white/90 backdrop-blur-[1px] text-[18px] md:text-[22px] lg:text-[24px] h-auto border-1 border-gray-200/40 p-1" ref={element4}>Consultancy and management of mining and metal projects, covering technical, operational, and sustainability aspects.</li>
        </div>
    </div>)
}