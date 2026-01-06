"use client";
import React from "react";

const products = [
  { src: "/Products/copper.jpg", title: "Copper", description: "Low & high grade, concentrate & raw form", location: "KP, Balochistan, GB" },
  { src: "/Products/Graphite.jpg", title: "Graphite", description: "+50% Carbon quality with associated minerals", location: "KP" },
  { src: "/Products/Magnesium.avif", title: "Magnesium", description: "Good quality in raw form", location: "KP, Balochistan" },
  { src: "/Products/Chromite.jpg", title: "Chromite", description: "High-grade chromite, raw & concentrates", location: "KP, Balochistan" },
  { src: "/Products/Gypsum.avif", title: "Gypsum", description: "High-grade gypsum, raw & concentrates", location: "Punjab, KP" },
  { src: "/Products/Antimony.jpg", title: "Antimony", description: "40-65% Sb, raw & concentrate form", location: "KP, Balochistan, GB" },
  { src: "/Products/Ironore.avif", title: "Iron Ore", description: "Hematite / Laterite, up to 60% Fe", location: "KP, Punjab, Balochistan" },
  { src: "/Products/Coal.avif", title: "Coal", description: "Medium-high grade, multi-mineral content", location: "KP, Balochistan" },
];

const SingleProduct = ({ src, title, description, location }: any) => (
  <div className="w-full bg-white border border-black/10 shadow-sm hover:shadow-black/25 hover:-translate-y-1 transition-all duration-200">
    <img
      src={src}
      alt={title}
      loading="lazy"
      className="w-full h-56 md:h-64 lg:h-72 object-cover"
    />
    <div className="p-4">
      <h2 className="font-bold text-[20px] md:text-[22px] text-neutral-900">
        {title}
      </h2>
      <p className="mt-1 text-neutral-600 text-[14px] md:text-[15px] leading-snug">
        {description}
      </p>
      <p className="mt-1 text-neutral-800 font-semibold text-[14px] md:text-[15px]">
        {location}
      </p>
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="bodyelement w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full md:h-160 h-140 flex items-center justify-center bg-[url('/products2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* FIX: constrain hero content to max width + correct centering */}
        <div className="relative w-full max-w-7xl px-4 md:px-6 flex justify-center md:justify-start">
          <div className="onstartanimation w-full md:w-[85%] max-w-140 py-10 p-4 bg-white">
            <h1 className="text-gray-600/80 font-mono p-2 text-[14px]">
              Nubia Mining / Products
            </h1>

          <h1 className="onstartanimation delay-200 text-[22px] text-blue-900 leading-snug">
            At Nubia Mining, we supply key industrial and metallurgical minerals in both raw
            and concentrated forms, supporting a wide range of global industrial
            applications.
          </h1>

          <div className="onstartanimation delay-250 w-full h-0.5 bg-red-600/70 my-2" />

          <p className="onstartanimation delay-300 text-[14px] text-black/80 leading-relaxed">
            We prioritize quality over quantity, maintaining consistent product standards
            and reliable supply performance. Our customer satisfaction and response rate
            exceeds 96%, reflecting our commitment to service excellence, transparency,
            and long-term partnerships.
          </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      {/* FIX: use a single container for alignment + remove underline (it shifts visually) */}
      <section className="w-full bg-white py-12">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          <h2 className="text-left text-neutral-900 font-libre font-bold text-3xl md:text-[34px]">
            Products
          </h2>
          {/* sharp red line (consistent with your site) */}
          <div className="mt-2 w-20 h-[3px] bg-red-600" />

          {/* Grid */}
          {/* FIX: center items + equal widths + no weird gaps */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-stretch">
            {products.map((product, index) => (
              <SingleProduct key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
