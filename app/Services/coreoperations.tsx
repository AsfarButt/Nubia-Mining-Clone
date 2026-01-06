"use client";
import React, { useEffect, useRef } from "react";

export default function CoreOperations() {
  const element1 = useRef<HTMLLIElement | null>(null);
  const element2 = useRef<HTMLLIElement | null>(null);
  const element3 = useRef<HTMLLIElement | null>(null);
  const element4 = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (!element1.current || !element2.current || !element3.current || !element4.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("-translate-x-12", "opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element1.current);
    observer.observe(element2.current);
    observer.observe(element3.current);
    observer.observe(element4.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[#0F1B2D]">
      {/* subtle depth – no glow */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 to-950/95" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-14">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <h2 className="text-white text-3xl md:text-4xl font-libre font-bold tracking-tight">
            Core Operations
          </h2>

          {/* restrained accent */}
          <div className="mt-3 w-16 h-[2px] bg-blue-400/70" />

          <p className="mt-5 text-slate-200 text-[16px] md:text-[17px] leading-relaxed">
            Nubia Mining focuses on the responsible exploration, development, and commercialization
            of precious and strategic metals in Pakistan, supported by sustainability principles,
            regulatory compliance, and modern mining and trading infrastructure.
          </p>
        </div>

        {/* Operations list */}
        <ul className="flex flex-col gap-4">
          {[
            "Exploration and development of precious and strategic metal assets using JORC-aligned and environmentally responsible practices.",
            "Extraction, processing, and logistics of ores, metals, and value-added concentrates supported by modern infrastructure and ESG-compliant operations.",
            "Global trading and export of precious and base metals, ensuring full traceability, regulatory compliance, and transparent supply-chain governance.",
            "Consultancy and management of mining and metal projects, covering technical planning, operational execution, risk management, and sustainability frameworks.",
          ].map((text, i) => {
            const refs = [element1, element2, element3, element4];
            return (
              <li
                key={i}
                ref={refs[i]}
                className={`
                  relative w-full border border-white/10 bg-[#101C2E]
                  px-5 py-4 text-slate-100 text-[16px] md:text-[17px] lg:text-[18px]
                  leading-relaxed opacity-0 -translate-x-12
                  transition-all duration-700 ease-out
                `}
              >
                <div className="flex gap-3">
                  <span className="font-mono text-blue-400 text-[14px] pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{text}</span>
                </div>

                <div className="mt-3 h-px w-full bg-white/5" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
