"use client";
import React from "react";

export default function ServicesLikeMock() {
const services = [
  {
    tag: "Our Service",
    title: "Site Assessment",
    desc: "Our team of experts specializes in comprehensive site assessment services, providing you with valuable insights to identify the most promising mining opportunities.",
    img: "/corevalue2.jpg",
  },
  {
    tag: "Our Service",
    title: "Resource Development",
    desc: "From initial resource estimation to detailed mine planning, we offer end-to-end solutions to develop your mining project from concept to production.",
    img: "/corevalue1.jpg",
  },
  {
    tag: "Our Service",
    title: "Mining Operations",
    desc: "Our experienced team oversees all aspects of mining operations, from equipment management to workforce coordination, to ensure smooth and efficient production.",
    img: "/corevalue3.jpeg",
  },
];


  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative h-[320px] overflow-hidden rounded-2xl bg-slate-200 shadow-sm"
            >
              {/* Background image */}
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/15" />

              {/* Top-left pill */}
              <div className="absolute left-4 top-4 z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/35 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                  {s.tag}
                </span>
              </div>

              {/* Bottom white info box */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="rounded-xl bg-white p-4 shadow-md">
                  <h3 className="text-[15px] font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* Rounded border feel */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
