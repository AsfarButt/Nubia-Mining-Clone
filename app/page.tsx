import Scrollar from "./Home/scrollar";
import CoreValues from "./Home/corevalues";
import News from "./Home/news";


export default function Page(){

    return(<div className="relative w-full h-auto bg-white">
        
        {/* First SEction  */}
        <div className="relative bodyelement w-full h-140 xl:h-175 bg-[url(/homepagebg2.jpg)] bg-cover bg-center flex items-center justify-center overflow-x-hidden z-2">
        <div className="absolute w-full h-140 xl:h-175 z-1 bg-linear-to-t from-blue-800/30 to-blue-950/60" />
        <div className="onstartanimation relative p-4 min-h-60 py-10 z-2 w-[90%] lg:max-w-140 xl:max-w-160 h-auto shadow-lg shadow-black/30 bg-white flex flex-col items-center justify-center">
            <h1 className="absolute top-2 left-4 text-gray-600/80 font-mono p-2 text-[14px]">Nubia Mining</h1>
            <h1 className="onstartanimation font-sans font-bold px-10 text-blue-900/95 text-[28px] lg:text-[31px] text-center">Nubia Mining: Sourcing the Metals and Minerals that Move the World</h1>
            <div className="onstartanimation2 relative my-3 w-[90%] h-0.5 bg-red-600/80" />
            <p className="onstartanimation2 text-center px-6 text-[15px] lg:text-[16px] font-sans text-black/85">From exploration and mining to trading and marketing, we provide critical sourcing solutions for the ferroalloy, metal, mineral, mining and energy industries that power modern life.</p>
            {/* <a href="/About" className="onstartanimation px-4 py-2 mt-4 text-[20px] font-bold text-white rounded-lg bg-red-600/85">Learn More About Nubia Mining</a> */}
        </div>
        </div>
        {/* Image Section */}
        <div className="relative w-full -translate-y-10 h-auto min-h-40 md:max-h-80 lg:max-h-100 z-0">
            <video src="nubiavideo.webm" muted loop autoPlay playsInline className="w-full h-auto">
            Your browser does not support the video tag.
            </video>
        </div>

        <div className="relative w-full py-8 md:pt-8 h-auto px-2 bg-white text-black md:px-4 flex flex-col justify-center items-center">
          <h1 className="text-neutral-800 text-3xl md:text-4xl font-libre font-bold">
            Our Vision & Mission
          </h1>
          <div className="mt-2 w-66 h-[3px] bg-red-600" />
        {/* VISION ROW */}
        <div className="relative mt-12 w-[90%] max-w-7xl h-auto flex flex-row items-center justify-between">
            
            <div className="relative h-full flex-none min-w-[30%] hidden md:flex items-center justify-start">
            <img
                src="/vision.png"
                alt="Vision"
                className="relative w-full h-70 opacity-90 transition-all duration-200 mx-8 hover:-translate-y-2"
            />
            </div>

            <div className="relative w-fit px-4 md:pr-10">
            <div className="rounded-xl bg-gray-100/70 p-6 shadow-sm">
                <h2 className="mb-3 text-[28px] font-bold">
                Vision
                </h2>

                <p className="text-[18px] md:text-[20px] font-sans text-black/90 md:line-clamp-8 lg:line-clamp-5">
                To be a globally trusted leader in the responsible exploration, development, and trade of precious and strategic metals—driving transparency, sustainability, and continuous innovation across the global resources and natural materials sector.
                </p>
            </div>
            </div>
        </div>

        {/* MISSION ROW */}
        <div className="relative mt-12 w-[90%] max-w-7xl h-auto flex flex-row items-center justify-between">

            <div className="relative w-fit px-4 md:pr-10">
            <div className="rounded-xl bg-gray-100/70 p-6 shadow-sm">
                <h2 className="mb-3 text-[28px] font-bold">
                Mission
                </h2>

                <p className="text-[18px] md:text-[20px] font-sans text-black/90 md:line-clamp-8 lg:line-clamp-5">
                To responsibly explore, develop, and trade precious and strategic metals while upholding the highest standards of integrity, transparency, and environmental stewardship, building strong partnerships and resilient supply chains for communities and industries worldwide.
                </p>
            </div>
            </div>

            <div className="relative h-full flex-none min-w-[30%] hidden md:flex items-center justify-end">
            <img
                src="/mission.png"
                alt="Mission"
                className="relative w-full h-70 opacity-90 transition-all duration-200 mx-8 hover:-translate-y-2"
            />
            </div>
        </div>
        </div>

        
        {/* Core Values */}
        <CoreValues />

        {/* Third Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center">
            <div className="parentelement relative w-full h-140 before:absolute before:inset-0 before:bg-[url('/sectionrightimage.jpg')] before:bg-center before:opacity-80 before:brightness-80 before:bg-cover flex items-center justify-center">
                <div className="childelement relative w-[75%] max-w-120 h-auto py-6 group bg-white/70 p-4 hover:bg-white/90 transition-all duration-300 flex flex-col items-center justify-center">
                    <h1 className="text-[28px] mt-2 font-semibold text-blue-900/85 text-center">Nubia Mining Services</h1>
                    <h2 className="text-center font-bold font-sans text-black/95 text-[18px]">
                       Tailored solutions at every stage of mining operations, designed to maximize efficiency, operational safety, long-term performance, and environmental sustainability across complex project lifecycles.
                    </h2>
                    <a className="p-2 mb-2 rounded-lg mt-4 bg-red-600/65 group-hover:bg-red-600/80 text-white text-[20px] transition-all duration-150 font-bold" href="/Services">
                        Discover Our Services
                    </a>
                </div>
            </div>
            <div className="parentelement relative w-full h-140 before:absolute before:inset-0 before:bg-[url('/sectionleftimage.jpg')] before:bg-center before:opacity-80 before:brightness-80 before:bg-cover flex items-center justify-center">
                <div className="childelement relative w-[75%] max-w-120 h-auto py-6 group bg-white/70 p-4 hover:bg-white/90 transition-all duration-300 flex flex-col items-center justify-center">
                    <h1 className="text-[28px] mt-2 font-semibold text-blue-900/85 text-center">Nubia Mining Products</h1>
                    <h2 className="text-center font-bold font-sans text-black/95 text-[18px]">
                        High-quality minerals and raw materials, responsibly sourced from our mining operations and reliably delivered to support modern industrial requirements and evolving global market demands.
                    </h2>
                    <a className="p-2 mb-2 rounded-lg mt-4 bg-red-600/65 group-hover:bg-red-600/80 text-white text-[20px] transition-all duration-150 font-bold" href="/Products">
                        Discover Our Products
                    </a>
                </div>
            </div>
        </div>



        {/* News Section */}
        {/* <News /> */}

    </div>)
}
