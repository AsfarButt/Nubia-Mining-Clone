"use client";
import React, { useEffect, useRef } from "react";

export default function Assets() {
  const assetRefs = useRef<HTMLLIElement[]>([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate all children of the li
            const children = Array.from(entry.target.children) as HTMLElement[];
            children.forEach((child, i) => {
              child.classList.replace("translate-y-8","translate-y-0");
              child.classList.replace("opacity-0","opacity-100");
            });
            observer.unobserve(entry.target); // stop observing once animated
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

  return (
    <div className="relative w-full px-4 md:px-8 lg:px-16 h-auto flex flex-row items-stretch justify-center bg-gray-100">
      <div className="relative w-full md:w-[65%] h-auto flex flex-col items-center justify-center">
        <h1 className="relative w-full md:text-left text-center text-gray-950/95 font-sans mt-10 p-2 underline decoration-red-600 text-[34px] font-bold">
          Assets
        </h1>
        <h2 className="relative w-full md:text-left text-center text-blue-950/85 text-2xl font-medium font-sans mb-4">
          Mining blocks and key mineral resources
        </h2>

        <ul className="w-full list-disc ml-5">
          {assets.map((element, index) => (
            <li
              key={index}
              ref={(el) => {
                if (el) {
                  assetRefs.current[index] = el; // assign to ref
                }
              }}

              className="relative mt-4 w-full h-auto border-b pb-4 border-gray-900/85 flex flex-col items-start group"
            >
              <h1 className="text-[28px] text-red-700/95 font-sans font-bold group-hover:scale-105 origin-bottom opacity-0 translate-y-8 transition-all delay-0 duration-400">
                {element.title}
              </h1>
              <h4 className="font-semibold font-sans text-[28px] text-black/95 group-hover:scale-105 origin-bottom opacity-0 translate-y-8 transition-all delay-50 duration-400">
                {element.value}
              </h4>
              <h2 className="text-[14px] text-gray-800/85 group-hover:scale-105 origin-bottom opacity-0 translate-y-8 transition-all delay-150 duration-400">{element.location}</h2>
              <h2 className="font-mono text-black/95 text-[18px] mt-2 group-hover:scale-105 origin-bottom opacity-0 translate-y-8 transition-all delay-200 duration-400">
                {element.description}
              </h2>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative hidden w-full md:w-[50%] bg-[url('/assetsimg2.jpg')] bg-cover bg-center h-full min-h-100"></div>
    </div>
  );
}
