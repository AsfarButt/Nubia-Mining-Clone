"use client";
import React, { useMemo, useState } from "react";

type Asset = {
  title: string;
  value: number;
  unit: string;
  location: string;
  description: string;
  badge: string;
  image: string; // <-- add this
};

export default function Assets() {
  const assets: Asset[] = useMemo(
    () => [
      {
        title: "Platinum Block 1",
        value: 135.16,
        unit: "acres",
        location: "KPK Province",
        description: "Rich in Gold, PGM & other precious minerals",
        badge: "Platinum",
        image: "/about1.avif",
      },
      {
        title: "Placer Gold Block",
        value: 2.32,
        unit: "acres",
        location: "Hamzigond District, Kharmang",
        description: "Rich in Gold & Silver",
        badge: "Placer Gold",
        image: "/about2.jpg",
      },
      {
        title: "Placer Gold Block",
        value: 5.98,
        unit: "acres",
        location: "Ghawn District, Ghanche",
        description: "Rich in Gold, Copper & Silver",
        badge: "Placer Gold",
        image: "/about3.jpg",
      },
      {
        title: "Platinum Block 2",
        value: 41.8,
        unit: "acres",
        location: "KPK Province",
        description: "Rich in Gold & PGM",
        badge: "Platinum",
        image: "/about4.avif",
      },
      {
        title: "Platinum Block",
        value: 499.33,
        unit: "acres",
        location: "KPK Province",
        description: "Rich in Platinum, Gold & PGM",
        badge: "Platinum",
        image: "/about5.jpg",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h2 className="text-neutral-800 text-3xl md:text-4xl font-libre font-bold">
            Assets
          </h2>
          <div className="w-20 h-[3px] bg-red-600" />
          <p className="text-neutral-600 text-[16px] md:text-[17px] max-w-2xl leading-relaxed">
            Mining blocks and key mineral resources, presented in a structured format for fast
            review.
          </p>
        </div>

        {/* Body */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Left image panel */}
          <div className="md:col-span-5">
            <div className="relative border border-black/10 bg-white shadow-sm overflow-hidden">
              {/* Dynamic image */}
              <img
                src={assets[active].image}
                alt={assets[active].title}
                className="h-[360px] md:h-[520px] w-full object-cover transition-opacity duration-300"
                loading="lazy"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/25" />

              {/* Bottom info strip */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="bg-white/95 border-t border-black/10 p-4">
                  <div className="text-neutral-500 font-mono text-[12px]">
                    Nubia Mining / Assets
                  </div>

                  <div className="mt-2 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-neutral-800 font-bold text-[18px] md:text-[20px]">
                        {assets[active].title}
                      </h3>
                      <p className="mt-1 text-neutral-600 text-[14px] leading-relaxed">
                        {assets[active].location}
                      </p>
                    </div>

                    <div className="flex-none text-right">
                      <div className="text-[12px] text-neutral-500">Area</div>
                      <div className="text-neutral-800 font-bold text-[18px]">
                        {assets[active].value}{" "}
                        <span className="text-[12px] font-semibold text-neutral-500">
                          {assets[active].unit}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 h-px w-full bg-black/10" />
                  <p className="mt-3 text-neutral-600 text-[14px] leading-relaxed">
                    {assets[active].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: structured list/table */}
          <div className="md:col-span-7">
            <div className="border border-black/10 shadow-sm">
              {/* Table header */}
              <div className="grid grid-cols-12 bg-neutral-50 border-b border-black/10 px-4 py-3 text-[12px] font-semibold text-neutral-600">
                <div className="col-span-5">Asset</div>
                <div className="col-span-3">Location</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-2 text-right">Area</div>
              </div>

              {/* Rows */}
              {assets.map((a, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActive(idx)}
                  onMouseEnter={() => setActive(idx)} // optional: hover changes image
                  className={[
                    "w-full text-left grid grid-cols-12 px-4 py-4 border-b border-black/10 bg-white transition",
                    "hover:bg-neutral-50",
                    idx === active ? "bg-neutral-50" : "",
                  ].join(" ")}
                >
                  <div className="col-span-5">
                    <div className="text-neutral-800 font-bold text-[15px] md:text-[16px]">
                      {a.title}
                    </div>
                    <div className="mt-1 text-neutral-600 text-[13px] leading-relaxed">
                      {a.description}
                    </div>
                  </div>

                  <div className="col-span-3 flex items-center">
                    <span className="text-neutral-700 text-[13px] md:text-[14px]">
                      {a.location}
                    </span>
                  </div>

                  <div className="col-span-2 flex items-center">
                    <span className="inline-flex border border-black/10 bg-white px-2 py-1 text-[12px] font-semibold text-neutral-700">
                      {a.badge}
                    </span>
                  </div>

                  <div className="col-span-2 flex items-center justify-end">
                    <span className="text-neutral-800 font-bold text-[14px]">
                      {a.value}{" "}
                      <span className="text-[12px] font-semibold text-neutral-500">
                        {a.unit}
                      </span>
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <p className="mt-4 text-[12.5px] text-neutral-500 leading-relaxed">
              Note: Figures shown represent block areas for high-level reference. Detailed
              technical documentation is maintained internally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
