"use client";
import CoreOperations from "./coreoperations";

export default function Services() {
  const services = [
    {
      title: "Market Support",
      description:
        "Nubia Mining offers comprehensive market support, connecting clients with high-quality minerals and raw materials. Leveraging our extensive operational expertise and regional presence, we ensure reliable supply, timely deliveries, and efficient transaction management to meet the demands of modern industries.",
    },
    {
      title: "Off-Take Agreements",
      description:
        "Nubia Mining acts as your trusted agent, representing your interests from initial introductions to consumers through to the final delivery and execution of sales. We work directly with producers and leverage our extensive experience to provide strategic guidance on commercial approaches and pricing, ensuring complete transparency throughout the process.",
    },
  ];

  const SingleService = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div className="relative w-full h-full">
      <div className="relative h-full p-6 border bg-white border-gray-200/50 shadow-md hover:shadow-black/20 hover:-translate-y-1 transition-all duration-200 flex flex-col">
        <h3 className="text-[20px] md:text-[21px] font-sans font-semibold text-blue-950/90">
          {title}
        </h3>

        <div className="mt-3 w-12 h-[2px] bg-red-600/80" />

        <p className="mt-4 text-[16px] md:text-[17px] leading-relaxed text-black/80 text-justify md:text-left">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bodyelement relative w-full h-auto bg-white">
      {/* Hero Section */}
      <div className="relative w-full md:h-160 h-140 flex items-center justify-center bg-[url('/services1.jpg')] bg-cover bg-center">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* FIX: max-width container for consistent alignment */}
        <div className="relative w-full max-w-7xl px-4 md:px-8 lg:px-16 flex justify-center md:justify-start z-10">
          <div className="onstartanimation w-full md:w-[85%] py-10 p-5 max-w-140 bg-white shadow-md shadow-black/40 border border-black/10">
            <h1 className="text-gray-600/80 font-mono p-2 text-[14px]">
              Nubia Mining / Services
            </h1>

            <h2 className="onstartanimation delay-200 text-[22px] md:text-[24px] text-blue-900 font-bold leading-snug">
              Comprehensive, Personalized Services for a Dynamic Industry
            </h2>

            <div className="relative w-full h-0.5 bg-red-600/70 my-3" />

            <p className="onstartanimation delay-300 text-[14px] md:text-[15px] text-black/80 leading-relaxed text-justify md:text-left">
              At Nubia Mining we represent your local interests - worldwide. We offer expertise
              every step of the way, enabling business opportunities and minimizing risk as we
              take raw materials from mine to market.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="relative w-full bg-white">
        {/* FIX: single aligned container (no nested random padding) */}
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-16 py-12">
          <div className="flex flex-col gap-3">
            <h1 className="text-black text-3xl md:text-4xl font-libre font-bold">
              Services
            </h1>
            {/* keep red underline feel, but cleaner */}
            <div className="w-16 h-[3px] bg-red-600" />
          </div>

          <h2 className="mt-6 text-blue-950/85 text-xl md:text-2xl font-semibold font-sans">
            We trade the raw materials that shape modern life.
          </h2>

          <p className="mt-3 text-black/80 text-[16px] md:text-[17px] leading-relaxed max-w-4xl text-justify md:text-left">
            Nubia Mining works at the center of the raw materials industry supplying the essential
            metals and minerals at the foundation of the modern world. Our full service marketing
            and logistics management and comprehensive financial and commercial services move
            materials to market faster, efficiently, with less risk and less working capital.
          </p>

          {/* FIX: grid for perfect alignment */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <SingleService
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core Operations */}
      <div className="relative w-full h-auto pt-10 bg-white bg-cover bg-center">
        <div className="absolute inset-0" />
        <div className="relative z-10">
          <CoreOperations />
        </div>
      </div>
    </div>
  );
}
