"use client";
import React, { useEffect, useRef } from "react";

export default function CoreValues() {
  const element1 = useRef<HTMLDivElement | null>(null);
  const element2 = useRef<HTMLDivElement | null>(null);
  const element3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!element1.current || !element2.current || !element3.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("translate-y-10", "opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element1.current);
    observer.observe(element2.current);
    observer.observe(element3.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full py-16 flex flex-col items-center bg-white/95">
      <h1 className="w-full mb-6 text-[36px] font-bold text-center font-libre text-black underline decoration-red-600/70 underline-offset-4">
        Core Values
      </h1>

      <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
        {/* Card 1 */}
        <div
          ref={element1}
          className="group flex-1 m-4 p-6 rounded-xl border border-black/10
                     bg-white transition-all duration-700 ease-out
                     translate-y-10 opacity-0
                     shadow-sm hover:shadow-lg hover:-translate-y-1"
        >
          <h2 className="text-center text-[23px] font-semibold text-yellow-800/90 tracking-wide">
            Responsible Development & Innovation
          </h2>
          <p className="mt-4 text-[16.5px] text-center leading-relaxed text-blue-950/80">
            We pursue advanced exploration and mining using cutting-edge,
            low-impact technologies aligned with JORC principles, ensuring
            efficiency, safety, and environmental responsibility.
          </p>
        </div>

        {/* Card 2 */}
        <div
          ref={element2}
          className="group flex-1 m-4 p-6 rounded-xl border border-black/10
                     bg-white transition-all duration-700 delay-150 ease-out
                     translate-y-10 opacity-0
                     shadow-sm hover:shadow-lg hover:-translate-y-1"
        >
          <h2 className="text-center text-[23px] font-semibold text-yellow-800/90 tracking-wide">
            Sustainability & Ethical Sourcing
          </h2>
          <p className="mt-4 text-[16.5px] text-center leading-relaxed text-blue-950/80">
            We uphold ESG-driven practices and global standards for responsible
            trade, ensuring compliance, ethical sourcing, and positive community
            impact across every operation.
          </p>
        </div>

        {/* Card 3 */}
        <div
          ref={element3}
          className="group flex-1 m-4 p-6 rounded-xl border border-black/10
                     bg-white transition-all duration-700 delay-300 ease-out
                     translate-y-10 opacity-0
                     shadow-sm hover:shadow-lg hover:-translate-y-1"
        >
          <h2 className="text-center text-[23px] font-semibold text-yellow-800/90 tracking-wide">
            Transparency & Traceability
          </h2>
          <p className="mt-4 text-[16.5px] text-center leading-relaxed text-blue-950/80">
            We ensure full visibility, integrity, and accountability across the
            value chain through digital monitoring and transparent supply-chain
            governance.
          </p>
        </div>
      </div>
    </div>
  );
}
