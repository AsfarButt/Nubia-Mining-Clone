"use client";
import React from "react";

const products = [
  {
    src: "/Products/Cooper.jpg",
    title: "Cooper",
    description: "Low & high grade, concentrate & raw form",
    location: "KP, Baluchistan, GB",
  },
  {
    src: "/Products/Graphite.jpg",
    title: "Graphite",
    description: "+50% Carbon quality with associated minerals",
    location: "KP",
  },
  {
    src: "/Products/Magnesium.jpg",
    title: "Manganese",
    description: "Good quality in raw form",
    location: "KP, Baluchistan",
  },
  {
    src: "/Products/Chromite.jpg",
    title: "Chromite",
    description: "High-grade chromite, raw & concentrates",
    location: "KP, Baluchistan",
  },
  {
    src: "/Products/Gypsum.jpg",
    title: "Gypsum",
    description: "High-grade gypsum, raw & concentrates",
    location: "Punjab, KP",
  },
  {
    src: "/Products/Antimony.jpg",
    title: "Antimony",
    description: "40-65% Sb, raw & concentrate form",
    location: "KP, Baluchistan, GB",
  },
  {
    src: "/Products/Ironore.avif",
    title: "Iron Ore",
    description: "Hematite / Laterite, up to 60% Fe",
    location: "KP, Punjab, Baluchistan",
  },
  {
    src: "/Products/Tungsten.jpg",
    title: "Tungsten",
    description: "Medium-high grade, multi-mineral content",
    location: "KP, Baluchistan",
  },
];

const SingleProduct = ({ src, title, description, location }: any) => (
  <div className="relative m-4 w-[90%] sm:w-60 md:w-64 lg:w-72 xl:w-80 h-auto flex flex-col shadow-lg hover:shadow-black/30 hover:-translate-y-2 transition-all duration-200 ease-out">
    <img
      src={src}
      alt={title}
      loading="lazy"
      className="w-full h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 object-cover rounded-t-lg"
    />
    <div className="p-3 flex flex-col items-start justify-center bg-white rounded-b-lg">
      <h2 className="font-bold text-lg md:text-xl">{title}</h2>
      <p className="text-gray-700 text-sm md:text-base leading-snug mt-1">{description}</p>
      <p className="text-gray-900 font-semibold text-sm md:text-base mt-1">{location}</p>
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="relative w-full h-auto">
      {/* Hero Section */}
      <div className="relative w-full h-60 md:h-80 lg:h-96 flex items-center justify-center md:justify-start bg-[url('/productimg1.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/30 shadow-lg shadow-black/10">
            <div className="relative md:ml-16 lg:ml-32 w-[90%] pb-12 md:pb-4 max-w-140 bg-white p-4 shadow-lg rounded-lg">
                <h1 className="text-gray-600 font-mono text-sm md:text-[14px]">Nubia Mining / Products</h1>
                <h2 className="text-blue-900 text-lg md:text-2xl mt-2">
                    At Nubia Mining, We supply the key Industrial and Metallurgical Minerals in Raw as well as Concentrated form.
                </h2>
                <div className="w-full h-0.5 bg-red-600/70 my-2" />
                <p className="text-black/80 text-sm md:text-base">
                    We value quality over quantity and try our best to keep our customers satisfied. Our customer response rate is 96% good
                </p>
            </div>
      </div>

      {/* Products Section */}
      <h2 className="px-4 md:px-6 mt-12 text-left underline decoration-red-600/90 text-2xl md:text-3xl">
        Products
      </h2>

      <div className="w-full mb-18 bg-white flex justify-center mt-8 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <SingleProduct key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
