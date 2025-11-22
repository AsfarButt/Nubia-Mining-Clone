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
  {
  title: "Logistics & Distribution",
  description: "Nubia Mining operates a robust logistics network across Pakistan, ensuring that minerals and raw materials are delivered safely and on time to every region. We manage end-to-end distribution agreements at a national level, covering everything from single truckload deliveries to bulk shipments across major industrial hubs and ports. Our services include road transport, warehousing, tolling, and full compliance with local regulations and safety standards to guarantee seamless operations throughout the country.",
 },
];


    const SingleService = ({ title, description }: { title: string; description: string }) => (
      <div className="relative w-[90%] py-10 flex flex-col h-full pointer-events-none">
        <div className="relative w-full mx-1.5 sm:mx-6 p-6 bg-white shadow-lg border pointer-events-auto border-gray-200/40 hover:shadow-black/20 hover:-translate-y-2 transition-all duration-200 flex-1 flex flex-col">
        <h1 className="text-[20px] font-sans font-medium text-blue-950/90">{title}</h1>
        <p className="pt-2 text-[17px] text-black/95">{description}</p>
        </div>
    </div>
    );


  return (
    <div className="bodyelement relative w-full h-auto">
      {/* Hero Section */}
      <div className="relative w-full h-160 flex items-center justify-center bg-[url('/servicesimg1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 z-1 backdrop-blur-[2px]" />
        <div className="relative h-auto text-2xl font-semibold font-sans w-[90%] px-2 flex justify-center md:justify-start z-2">
          <div className="w-[90%] py-10 p-4 h-auto pb-10 max-w-140 bg-white shadow-md shadow-black/40">
            <h1 className="text-gray-600/80 font-mono p-2 text-[14px]">Nubia Mining / Services</h1>
            <h1 className="text-[22px] text-blue-900">
              Comprehensive, Personalized Services for a Dynamic Industry
            </h1>
            <div className="relative w-full h-0.5 bg-red-600/70 my-2 " />
            <h1 className="text-[14px] text-black/80">
              At Nubia Mining we represent your local interests - worldwide. We offer expertise
              every step of the way, enabling business opportunities and minimizing risk as we
              take raw materials from mine to market.
            </h1>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative w-full px-4 md:px-8 lg:px-16 h-auto bg-white">
        <h1 className="text-black mt-10 p-2 underline decoration-red-600 text-3xl font-medium">
          Services
        </h1>
        <h2 className="text-blue-950/85 text-2xl font-medium font-sans">
          We trade the raw materials that shape modern life.
        </h2>
        <p className="text-black/95 text-[16px] ">
          Nubia Mining works at the center of the raw materials industry supplying the essential
          metals and minerals at the foundation of the modern world. Our full service marketing
          and logistics management and comprehensive financial and commercial services move
          materials to market faster, efficiently, with less risk and less working capital.
        </p>

      <div className="flex flex-wrap justify-center gap-4 px-4 md:px-8 lg:px-16">
        {services.map((service, index) => (
          <div key={index} className="w-full md:w-[48%]">
            <SingleService title={service.title} description={service.description} />
          </div>
        ))}
      </div>

      </div>

      <div className="relative w-full h-auto py-4 bg-[url('/serviceimg2.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/50 before:backdrop-blur-[2px]">
      <CoreOperations />
      </div>
    </div>
  );
}
