"use client";
import React,{useEffect, useRef} from "react";

export default function News(){
    const element1 = useRef<HTMLDivElement | null>(null);
    const element2 = useRef<HTMLDivElement | null>(null);
    const element3 = useRef<HTMLDivElement | null>(null);
    const element4 = useRef<HTMLDivElement | null>(null);
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

    return(
        <div className="w-full pb-30 h-auto bg-linear-to-br from-blue-950/95 to-blue-900/85">
        <h1 className="w-full p-8 text-[32px] font-bold text-white/95">News</h1>

        <div className="w-full flex flex-col items-center justify-center gap-8 mt-10">

            {/* Row 1 */}
            <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
            {/* News Card */}
            <div className="relative w-[90%] md:w-[45%] p-4 border-b-2 border-white/40 flex flex-row items-start gap-4 -translate-x-15 opacity-0 transition-all duration-600 ease-out delay-150 text-white/75" ref={element1}>
                <div className="flex items-center justify-center min-w-10">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white font-bold hover:bg-white/10 transition-all duration-400">&gt;</div>
                </div>
                <div className="flex flex-col">
                <h1 className="text-[17px] text-red-800/70">2025-04-12</h1>
                <h2 className="text-[20px] text-black/85">
                  Recent studies have revealed significant deposits of rare earth elements in previously unexplored regions, opening new opportunities in the global mineral sector.
                </h2>
                </div>
            </div>

            <div className="relative w-[90%] md:w-[45%] p-4 border-b-2 border-white/40 flex flex-row items-start gap-4 -translate-x-15 opacity-0 transition-all duration-600 ease-out delay-300 text-white/75" ref={element2}>
                <div className="flex items-center justify-center min-w-10">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white font-bold hover:bg-white/10 transition-all duration-400">&gt;</div>
                </div>
                <div className="flex flex-col">
                <h1 className="text-[17px] text-red-800/70">2025-08-07</h1>
                <h2 className="text-[20px] text-black/85">
                    Statement issued on strengthening responsible supply chain practices, emphasizing proactive due-diligence measures across all operational stages.
                </h2>
                </div>
            </div>
            </div>

            {/* Row 2 */}
            <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
            <div className="relative w-[90%] md:w-[45%] p-4 border-b-2 border-white/40 flex flex-row items-start gap-4 -translate-x-15 opacity-0 transition-all duration-600 ease-out delay-150 text-white/75" ref={element3}>
                <div className="flex items-center justify-center min-w-10">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white font-bold hover:bg-white/10 transition-all duration-400">&gt;</div>
                </div>
                <div className="flex flex-col">
                <h1 className="text-[17px] text-red-800/70">2025-01-23</h1>
                <h2 className="text-[20px] text-black/85">
                   Nubia Mining have formed a strategic alliances to expand sustainable production all across Pakistan.
                </h2>
                </div>
            </div>

            <div className="relative w-[90%] md:w-[45%] p-4 border-b-2 border-white/40 flex flex-row items-start gap-4 -translate-x-15 opacity-0 transition-all duration-600 ease-out delay-300 text-white/75" ref={element4}>
                <div className="flex items-center justify-center min-w-10">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white font-bold hover:bg-white/10 transition-all duration-400">&gt;</div>
                </div>
                <div className="flex flex-col">
                <h1 className="text-[17px] text-red-800/70">2025-07-31</h1>
                <h2 className="text-[20px] text-black/85">
                    Researchers highlight that minerals can be efficiently recovered from discarded electronics and industrial waste, supporting long-term conservation of natural resources.
                </h2>
                </div>
            </div>
            </div>

        </div>
        </div>
    )
}