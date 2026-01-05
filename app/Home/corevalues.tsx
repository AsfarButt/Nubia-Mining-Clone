"use client";
import React from "react";

export default function CoreValues() {
  const values = [
    {
      title: "Responsible Development & Innovation",
      desc: "We pursue advanced exploration and mining using cutting-edge, low-impact technologies aligned with JORC principles.",
      img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231f2937'><path d='M9 21h6v-1H9v1zm3-20C7.925 1 5 3.925 5 7c0 2.386 1.21 4.474 3.032 5.66L8 17h8l-.032-4.34C17.79 11.474 19 9.386 19 7c0-3.075-2.925-6-7-6z'/></svg>",
    },
    {
      title: "Sustainability & Ethical Sourcing",
      desc: "We uphold ESG-driven practices and global standards for responsible trade and positive community impact.",
      img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231f2937'><path d='M12 2C8 6 4 8 4 13c0 4.418 3.582 8 8 8s8-3.582 8-8c0-5-4-7-8-11z'/></svg>",
    },
    {
      title: "Transparency & Traceability",
      desc: "We ensure full visibility and accountability across the value chain through transparent governance.",
      img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231f2937'><path d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 16l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 8z'/></svg>",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-5">
        <h1 className="mb-10 text-center text-4xl font-bold text-slate-900 md:text-left">
          Core Values
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((item, i) => (
            <div
              key={i}
              className="min-h-[340px] rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-20 w-20"
                />
              </div>

              <h2 className="text-center text-lg font-bold text-slate-900">
                {item.title}
              </h2>

              <p className="mt-3 text-center text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
