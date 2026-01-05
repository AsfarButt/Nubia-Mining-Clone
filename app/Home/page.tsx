import Scrollar from "./scrollar";
import CoreValues from "./corevalues";
import News from "./news";


export default function Page(){

    return(<div className="relative w-full h-auto">
        
        {/* First SEction  */}
        <div className="bodyelement w-full h-160 bg-[url(/homepagebg2.jpg)] bg-cover bg-center flex items-center justify-center overflow-x-hidden overf">
        <div className="absolute w-full h-160 z-1 bg-linear-to-t from-blue-800/30 to-blue-950/60" />
        <div className="onstartanimation relative p-4 min-h-60 py-10 z-2 w-[90%] lg:max-w-140 xl:max-w-160 h-auto shadow-lg shadow-black/30 bg-white flex flex-col items-center justify-center">
            <h1 className="absolute top-2 left-4 text-gray-600/80 font-mono p-2 text-[14px]">Nubia Mining</h1>
            <h1 className="onstartanimation delay-200 font-sans font-bold px-10 text-blue-900/95 text-[28px] text-center">Nubia Mining: Sourcing the Metals and Minerals that Move the World</h1>
            <div className="onstartanimation delay-300 relative my-3 w-[90%] h-0.5 bg-red-600/80" />
            <p className="onstartanimation delay-500 text-center px-6 text-[15px] font-sans text-black/85">From exploration and mining to trading and marketing, we provide critical sourcing solutions for the ferroalloy, metal, mineral, mining and energy industries that power modern life.</p>
            {/* <a href="/About" className="onstartanimation px-4 py-2 mt-4 text-[20px] font-bold text-white rounded-lg bg-red-600/85">Learn More About Nubia Mining</a> */}
        </div>
        </div>
        {/* Image Section */}
        <div className="relative w-full h-auto min-h-40 md:max-h-80 lg:max-h-100">
            <video src="nubiavideo.webm" muted loop autoPlay playsInline className="w-full h-auto">
            Your browser does not support the video tag.
            </video>
        </div>

    {/* Vision & Mission Section with Image */}
    <div className="relative w-full py-20 px-4 md:px-8 bg-white text-black flex flex-col items-center">

    {/* Section Title */}
    <h1 className="text-center text-[32px] md:text-[38px] font-bold font-libre underline underline-offset-4 decoration-red-600/85 mb-16">
        Vision & Mission
    </h1>

    <div className="relative h-auto lg:h-120 bg-black/2 p-2 md:p-8 w-full max-w-6xl flex flex-col lg:flex-row items-start gap-12">

        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-16">

        {/* Vision */}
        <div>
            <h2 className="text-[24px] md:text-[26px] font-semibold text-yellow-800/90 mb-4">
            VISION
            </h2>
            <p className="text-[17px] md:text-[18px] text-black/85 leading-relaxed">
            To be a globally trusted leader in the responsible exploration, development, and trade of precious and strategic metals — driving transparency, sustainability, and innovation across the global resources sector.
            </p>
        </div>

        {/* Mission */}
        <div>
            <h2 className="text-[24px] md:text-[26px] font-semibold text-yellow-800/90 mb-4">
            MISSION
            </h2>
            <p className="text-[17px] md:text-[18px] text-black/85 leading-relaxed">
            Delivering Excellence Through Innovation and Integrity.  
            To responsibly explore, develop, and trade precious and strategic metals by upholding the highest standards of integrity, transparency, and environmental stewardship.  
            We aim to build lasting partnerships, strengthen global supply chains, and create sustainable value for industries, communities, and stakeholders worldwide.
            </p>
        </div>

        </div>

        {/* Right Image */}
        <div className="relative h-full hidden lg:flex flex-none w-[32%] items-center justify-center">
        <img
            src="/missionandvision.jpg"
            alt="Mission & Vision"
            className="w-full h-full opacity-95 transition-all duration-300"
        />
        </div>

    </div>
    </div>

        
        {/* Core Values */}
        <CoreValues />

        {/* Third Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center">
            <div className="parentelement relative w-full h-140 before:absolute before:inset-0 before:bg-[url('/sectionleftimage.jpg')] before:bg-center before:opacity-80 before:brightness-120 before:bg-cover flex items-center justify-center">
                <div className="childelement relative w-[75%] max-w-120 h-auto py-6 group bg-white/50 p-4 hover:bg-white/75 transition-all duration-300 flex flex-col items-center justify-center">
                    <h1 className="text-[28px] mt-2 font-semibold text-blue-900/85 text-center">Nubia Mining Services</h1>
                    <h2 className="text-center font-bold font-sans text-black/95 text-[18px]">
                        Tailored solutions at every stage of mining operations, designed to maximize efficiency, safety, and sustainability.
                    </h2>
                    <a className="p-2 mb-2 rounded-lg mt-4 bg-red-600/65 group-hover:bg-red-600/80 text-white text-[20px] transition-all duration-150 font-bold" href="/Services">
                        Discover Our Services
                    </a>
                </div>
            </div>
            <div className="parentelement relative w-full h-140 before:absolute before:inset-0 before:bg-[url('/sectionrightimage.avif')] before:bg-center before:opacity-80 before:brightness-120 before:bg-cover flex items-center justify-center">
                <div className="childelement relative w-[75%] max-w-120 h-auto py-6 group bg-white/50 p-4 hover:bg-white/75 transition-all duration-300 flex flex-col items-center justify-center">
                    <h1 className="text-[28px] mt-2 font-semibold text-blue-900/85 text-center">Nubia Mining Products</h1>
                    <h2 className="text-center font-bold font-sans text-black/95 text-[18px]">
                        High-quality minerals and raw materials, responsibly sourced from our mines and delivered to meet modern industrial demands.
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
