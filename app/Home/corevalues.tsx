"use client";
import React,{useEffect, useRef, useState} from 'react';




export default function CoreValues(){
    const element1 = useRef<HTMLDivElement | null>(null);
    const element2 = useRef<HTMLDivElement | null>(null);
    const element3 = useRef<HTMLDivElement | null>(null);
    useEffect(() =>{
        if(!element1.current || !element2.current || !element3.current) return;
        const observer = new IntersectionObserver((elements) => {
                elements.forEach((element, index) => {
                    if(element.isIntersecting){
                    element.target.classList.remove("translate-y-30","opacity-0");
                    }
                })
        })
        observer.observe(element1.current);
        observer.observe(element2.current);
        observer.observe(element3.current);

        return () => {
            if(element1.current) observer.unobserve(element1.current);
            if(element2.current) observer.unobserve(element2.current);
            if(element3.current) observer.unobserve(element3.current);
        }
    },[])
    
return (
  <div className="relative w-full pb-12 h-fit flex flex-col items-center bg-white">
    <h1 className="relative w-full py-4 text-[36px] text-black font-sans font-bold text-center underline decoration-red-600/80">
      Core Values
    </h1>

    {/* Row container */}
    <div className="relative w-full flex flex-col md:flex-row flex-wrap items-stretch justify-center">
      
      <div
        className="relative w-auto md:w-[33%] flex-1 transition-all delay-50 translate-y-30 opacity-0 duration-800 ease-out p-4 rounded-md border m-4 border-black/20 shadow-md shadow-transparent hover:shadow-black/30 flex flex-col"
        ref={element1}
      >
        <h1 className="w-full text-center text-yellow-800/90 text-[24px] font-semibold font-sans">
          Responsible Development & Innovation
        </h1>
        <p className="text-[17px] px-4 mt-4 pb-8 text-center text-blue-950/85 flex-1">
          We pursue advanced exploration and mining using cutting-edge, low impact technologies aligned with JORC principles, ensuring efficiency, safety , and environmental responsibility
        </p>
      </div>

      <div
        className="relative w-auto md:w-[33%] flex-1 transition-all delay-150 translate-y-30 opacity-0 duration-800 ease-out p-4 rounded-md border m-4 border-black/20 shadow-md shadow-transparent hover:shadow-black/30 flex flex-col"
        ref={element2}
      >
        <h1 className="w-full text-center text-yellow-800/90 text-[24px] font-semibold font-sans">
          Sustainability & Ethical Sourcing
        </h1>
        <p className="text-[18px] px-4 mt-4 pb-8 text-center text-blue-950/85 flex-1">
          We uphold ESG-driven practices and global standards for responsible trade -- ensuring compliance, ethical sourcing, and positive community impact across every operation.
        </p>
      </div>

      <div
        className="relative w-auto md:w-[33%] flex-1 transition-all delay-250 translate-y-30 opacity-0 duration-800 ease-out p-4 rounded-md border m-4 border-black/20 shadow-md shadow-transparent hover:shadow-black/30 flex flex-col"
        ref={element3}
      >
        <h1 className="w-full text-center text-yellow-800/90 text-[24px] font-semibold font-sans">
          Transparency & Traceability
        </h1>
        <p className="text-[18px] px-4 mt-4 pb-8 text-center text-blue-950/85 flex-1">
          We ensure full visibility, integrity, and accountability across the value chain through digital monitoring and transparent supply-chain governance.
        </p>
      </div>
    </div>
  </div>
);

}