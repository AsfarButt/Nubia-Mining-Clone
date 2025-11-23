"use client";
import React,{ useEffect, useRef } from "react";

export default function Assets() {
  const assetRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-15", "opacity-0");
          }
        });
      },
      { threshold: 0.3 }
    );

    assetRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      assetRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const assets = [
    {
      title: "Schist Block 1",
      value: 135.16,
      location: "KPK Province",
      description: "Rich in Gold, PGM & other precious minerals",
    },
    {
      title: "Placer Gold Block",
      value: 2.32,
      location: "Hamzigond District, Kharmang",
      description: "Rich in Gold & Silver",
    },
    {
      title: "Placer Gold Block",
      value: 5.98,
      location: "Ghawn District, Ghanche",
      description: "Rich in Gold, Copper & Silver",
    },
    {
      title: "Schist Block 2",
      value: 41.8,
      location: "KPK Province",
      description: "Rich in Gold & PGM",
    },
    {
      title: "Platinum Block",
      value: 499.33,
      location: "KPK Province",
      description: "Rich in Platinum, Gold & PGM",
    },
  ];

  // const SingleAsset = ({ title, value, location, description }: any) => (
  //   <div className="relative w-full py-6 flex flex-col h-full">
  //     <div className="relative w-full p-6 md:min-w-80 rounded-2xl shadow-xl border border-white/80 bg-white group md:bg-white hover:bg-white backdrop-blur-xs hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex-1 flex flex-col items-center">
        
  //       {/* Title */}
  //       <h1 className="text-[26px] md:text-[28px] font-sans font-bold text-gray-900 tracking-wide drop-shadow-md">
  //         {title}
  //       </h1>
        
  //       {/* Value */}
  //       <h2 className="text-[32px] md:text-[36px] font-bold text-red-600 mt-2 drop-shadow-lg">
  //         {value}
  //       </h2>
        
  //       {/* Location */}
  //       <h3 className="text-[14px] md:text-[16px] text-gray-800/90 mt-1 font-semibold tracking-tight">
  //         {location}
  //       </h3>
        
  //       {/* Description */}
  //       <p className="text-[16px] md:text-[18px] text-gray-900/95 group-hover:text-gray-200/95 font-sans font-medium mt-3 text-center leading-relaxed tracking-wide">
  //         {description}
  //       </p>
  //     </div>
  //   </div>
  // );


  return (
    <div className="relative w-full px-4 md:px-8 lg:px-16 h-auto py-10 flex flex-col items-center justify-center bg-gray-100">
      <div className="relative w-full md:w-[50%] h-auto flex flex-col items-center justify-center">
      <h1 className="relative w-full md:text-left text-center text-gray-950/95 font-sans mt-10 p-2 underline decoration-red-600 text-[34px] font-bold">
        Assets
      </h1>
      <h2 className="relative w-full md:text-left text-center text-blue-950/85 text-2xl font-medium font-sans mb-4">
        Mining blocks and key mineral resources
      </h2>
      
      <ul className="w-full flex flex-col items-center justify-center">
        {assets.map((element, index) => (
          <li
            key={index}
            className="relative mt-4 w-[95%] h-auto flex flex-col items-center justify-center md:items-start border-b pb-4 border-gray-900/85"
          >
            <h1 className="text-[28px] text-red-700/95 font-sans font-bold">{element.title}</h1>
            <h4 className="font-semibold font-sans text-[28px] text-black/95">{element.value}</h4>
            <h2 className="text-[14px] text-gray-800/85">{element.location}</h2>
            <h2 className="font-mono text-[18px] px-4 md:px-0 text-center mt-2">
              {element.description}
            </h2>
          </li>
        ))}
      </ul>
      </div>
      <div className="relative hidden md:block w-[50%] bg-[url('/assetsimg2.jpg')] bg-cover bg-center h-full"></div>


    </div>
  )
}
