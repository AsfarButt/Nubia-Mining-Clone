







export default function Services() {
  const services = [
    {
      title: "Market Support",
      description:
        "Traxys helps its customers find solutions that maximize value and minimize risk. The breadth of our global network allows us to keep up with rapidly changing market conditions and react efficiently. Our team deals at a local level worldwide - financially and culturally - to expedite transactions.",
    },
    {
      title: "Off-Take Agreements",
      description:
        "Traxys acts as your agent by representing your interests from the first introduction to consumers to the ultimate delivery and execution of the sale. Traxys coordinates directly with you as the producer and based on our extensive experience with the product and consuming market, we give guidance about commercial strategies and pricing. This process provides complete transparency all the way through to final markets.",
    },
    {
      title: "Logistics & Distribution",
      description:
        "As a global company, we have worldwide logistics partners that help ensure your products leave your facility and arrive at your customer’s location safely and on time. We help fulfill your end-customer requirements by executing your distribution agreements. Whether regional, national, or international, or one truckload per week delivered to a plant or ten shiploads unloading at a major port, we have the resources to meet your customers’ needs. Distribution: Ocean/Land Movement, Warehousing, Tolling. Regulatory Compliance: US and EU Customs, REACH, United States-Mexico-Canada Agreement (USMCA).",
    },
    {
      title: "Financial Services",
      description:
        "Traxys has the financial resources and technical expertise to help you hedge prices to forecast your revenues better. It's part of our financial service offerings based on our in-depth industry pricing knowledge.",
    },
    {
      title: "Risk Management",
      description:
        "Dealing with new customers or exotic markets carries a level of risk that can disrupt cash flows. Traxys has the international industry know-how to structure various ways to cover your risk.",
    },
    {
      title: "Funding Solutions",
      description:
        "Traxys has the financial resources to offer solutions ranging from simple working capital funding to highly structured long-term financing to suppliers and customers.",
    },
  ];

    const SingleService = ({ title, description }: { title: string; description: string }) => (
    <div className="relative w-[90%] py-10 bg-white flex flex-col h-full">
        <div className="relative w-full mx-6 p-6 bg-white shadow-sm border border-gray-200/40 hover:shadow-black/40 flex-1 flex flex-col">
        <h1 className="text-[20px] font-sans font-medium text-blue-950/90">{title}</h1>
        <p className="pt-2 text-[17px] text-black/95">{description}</p>
        </div>
    </div>
    );


  return (
    <div className="relative w-full h-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 auto-rows-fr">
        {services.map((service, index) => (
            <SingleService key={index} title={service.title} description={service.description} />
        ))}
        </div>

      </div>
    </div>
  );
}
