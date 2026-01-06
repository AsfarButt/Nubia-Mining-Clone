"use client";

import Assets from "./assets";

export default function Page() {
  return (
    <div className="bodyelement relative w-full h-auto flex flex-col items-center justify-center bg-white">
      {/* Hero Section */}
      <div className="relative w-full md:h-160 h-140 flex items-center justify-center bg-[url('/aboutmain.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative h-auto text-2xl font-semibold font-sans w-[90%] px-2 flex justify-center md:justify-start">
          <div className="onstartanimation w-[92%] md:w-[85%] py-10 p-5 h-auto max-w-140 bg-white/95 backdrop-blur-sm shadow-lg border border-black/10">
            <h1 className="text-neutral-500 font-mono p-2 text-[14px]">
              Nubia Mining / About
            </h1>

            <h1 className="onstartanimation delay-200 text-[22px] md:text-[24px] text-neutral-800 font-bold leading-snug">
              We manage the full value chain—from exploration to processing and trade of gold,
              PGMs, and critical minerals—guided by OECD, LBMA, and JORC standards to ensure
              ethical, transparent, and fully traceable operations worldwide.abo
            </h1>

            {/* sharp divider */}
            <div className="onstartanimation2 relative my-3 w-[90%] h-0.5 bg-red-600/80" />

            <p className="onstartanimation delay-300 text-[14px] md:text-[15px] text-neutral-600 leading-relaxed">
              Grounded in compliance, sustainability, and advanced technology, Nubia leverages
              digital ESG governance frameworks to deliver secure, transparent, and future-ready
              metal supply chains for global industries and strategic partners.
            </p>
          </div>
        </div>
      </div>

      {/* Our Approach */}
      <div className="relative w-full py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-neutral-800 text-3xl md:text-4xl font-libre font-bold">
            Our Approach
          </h1>
          <div className="mt-2 w-16 h-[3px] bg-red-600" />

          <p className="mt-6 w-full md:w-[85%] lg:w-[75%] text-neutral-700 text-[18px] leading-relaxed">
            We manage the full value chain—from exploration to processing and trade of gold,
            PGMs, and critical minerals—guided by OECD, LBMA, and JORC standards to ensure
            ethical, transparent, and fully traceable operations worldwide.
          </p>

          <p className="mt-4 w-full md:w-[85%] lg:w-[75%] text-neutral-600 text-[17px] leading-relaxed">
            Grounded in compliance, sustainability, and advanced technology, Nubia leverages
            digital ESG governance frameworks to deliver secure, transparent, and future-ready
            metal supply chains for global industries and strategic partners.
          </p>

          <div className="mt-10 h-px w-full bg-black/10" />
        </div>
      </div>

      {/* Locations */}
      <div className="relative w-full py-10 px-4 md:px-8 lg:px-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-neutral-800 text-3xl md:text-4xl font-libre font-bold">
            Locations
          </h1>
          <div className="mt-2 w-16 h-[3px] bg-red-600" />

          <h2 className="mt-6 font-semibold text-neutral-700 text-[18px] md:text-[19px]">
            Nubia Mining operates from two offices within Pakistan, strategically located to
            serve our regional and national operations efficiently.
          </h2>

          <p className="mt-3 w-full md:w-[85%] lg:w-[75%] text-neutral-600 text-[17px] leading-relaxed">
            We operate from{" "}
            <a
              className="font-semibold text-neutral-800 hover:underline underline-offset-4"
              href="https://maps.app.goo.gl/UUse279z1MFJ5aVe9"
              target="_blank"
              rel="noreferrer"
            >
              Islamabad
            </a>{" "}
            and{" "}
            <a
              className="font-semibold text-neutral-800 hover:underline underline-offset-4"
              href="https://maps.app.goo.gl/B3nSpH3giDUgbFiEA"
              target="_blank"
              rel="noreferrer"
            >
              Rawalpindi
            </a>
            , supporting regional and national operations.
          </p>
        </div>
      </div>

      {/* Logistics */}
      <div className="relative w-full mt-16 bg-[url('/aboutimg3.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Logistics & Export Operations
          </h1>
          <div className="mt-3 w-20 h-[3px] bg-red-600" />

          <div className="mt-10 flex flex-col md:flex-row gap-8">
            <div className="bg-white/95 shadow-lg border border-black/10 p-6">
              <h1 className="text-neutral-500 font-mono text-[13px]">
                Nubia Mining / Operations
              </h1>
              <h2 className="mt-2 text-[22px] font-bold text-neutral-800">
                Transport
              </h2>
              <div className="mt-2 w-12 h-[2px] bg-red-600" />

              <p className="mt-4 text-[15px] text-neutral-600 leading-relaxed">
                20–30 MT sealed and containerized shipments, GPS-tracked and monitored by SOS,
                enabling secure mine-to-Karachi delivery across approved corridors.
              </p>
            </div>

            <div className="bg-white/95 shadow-lg border border-black/10 p-6">
              <h1 className="text-neutral-500 font-mono text-[13px]">
                Nubia Mining / Shipping
              </h1>
              <h2 className="mt-2 text-[22px] font-bold text-neutral-800">
                Shipping Options
              </h2>
              <div className="mt-2 w-12 h-[2px] bg-red-600" />

              <ul className="mt-4 space-y-2 text-[15px] text-neutral-600 list-disc pl-5">
                <li>
                  <strong className="text-neutral-800">Containerized Export:</strong> 80–100
                  containers per month.
                </li>
                <li>
                  <strong className="text-neutral-800">Breakbulk:</strong> 5,000–15,000 DWT
                  vessels, 2,000–2,500 MT/day loading.
                </li>
                <li>
                  <strong className="text-neutral-800">Compliance:</strong> SGS-certified export
                  procedures.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Assets */}
      <Assets />
    </div>
  );
}
