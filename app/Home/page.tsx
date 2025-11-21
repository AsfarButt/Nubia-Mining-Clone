import Scrollar from "./scrollar";
import CoreValues from "./corevalues";


export default function Page(){

    return(<div className="relative w-full h-auto">
        
        {/* First SEction  */}
        <div className="bodyelement w-full h-120 bg-[url(/homepagebg1.jpg)] bg-cover bg-center flex items-center justify-center">
        <div className="absolute w-full h-120 z-1 bg-linear-to-t from-blue-800/60 to-blue-950" />
        <div className="onstartanimation relative p-4 py-10 z-2 w-[90%] max-w-130 h-auto shadow-lg shadow-black/30 bg-white flex flex-col items-center justify-center">
            <h1 className="absolute top-2 left-4 text-gray-600/80 font-mono p-2 text-[14px]">Nubia Mining</h1>
            <h1 className="onstartanimation delay-200 font-bold font-sans text-blue-900/95 text-[24px] text-center">Nubia Mining: Sourcing the Metals and Minerals that Move the World</h1>
            <div className="onstartanimation delay-300 relative my-2 w-[90%] h-0.5 bg-red-600/80" />
            <p className="onstartanimation delay-500 text-center text-[14px] font-sans text-black/85">From exploration and mining to trading and marketing, we provide critical sourcing solutions for the ferroalloy, metal, mineral, mining and energy industries that power modern life.</p>
            <a href="/About" className="onstartanimation px-4 py-2 mt-4 text-[20px] font-bold text-white rounded-lg bg-red-600/85">Learn More About Nubia Mining</a>
        </div>
        </div>
        {/* Image Section */}
        <div className="relative w-full h-auto">
            <video src="homepagevideo.webm" muted loop autoPlay playsInline className="w-full h-auto">
            Your browser does not support the video tag.
            </video>
        </div>

        {/* Second Section */}
        <div className="relative w-full h-auto flex flex-col md:flex-row flex-wrap items-center justify-center bg-white">
            <div className="relative w-full md:w-[50%] h-auto">
                <h1 className="bg-red-600/75 p-2 py-4 lg:py-10 text-center font-bold text-white/75 text-[22px]">Nubia Mining at a Glance</h1>
                <div className="relative w-full h-[50%] flex flex-row flex-wrap">
                    <div className="relative w-[50%] h-auto border py-2 md:py-4 lg:py-6 border-gray-600/80 flex flex-col items-center jusity-center">
                        <h1 className="text-[36px] text-black/95 font-bold font-sans">$10.0B+</h1>
                        <h2 className="text-[24px] text-red-600/90">ANNUAL</h2>
                        <h2 className="text-[24px] text-black/95">REVENUE</h2>
                    </div>
                    <div className="relative w-[50%] h-auto border py-2 md:py-4 lg:py-6 border-gray-600/80 flex flex-col items-center jusity-center">
                        <h1 className="text-[36px] text-black/95 font-bold font-sans">65+</h1>
                        <h2 className="text-[24px] text-red-600/90">COMMODITIES</h2>
                        <h2 className="text-[24px] text-black/95">TRADED</h2>
                    </div>
                </div>
                <div className="relative w-full h-[50%] flex flex-row flex-wrap">
                    <div className="relative w-[50%] h-auto border py-2 md:py-4 lg:py-6 border-gray-600/80 flex flex-col items-center jusity-center">
                        <h1 className="text-[36px] text-black/95 font-bold font-sans">400+</h1>
                        <h2 className="text-[24px] text-red-600/90">GLOBAL</h2>
                        <h2 className="text-[24px] text-black/95">EMPLOYEES</h2>
                    </div>
                    <div className="relative w-[50%] h-auto border py-2 md:py-4 lg:py-6 border-gray-600/80 flex flex-col items-center jusity-center">
                        <h1 className="text-[36px] text-black/95 font-bold font-sans">100+</h1>
                        <h2 className="text-[24px] text-red-600/90">YEARS OF</h2>
                        <h2 className="text-[24px] text-black/95">HISTORY</h2>
                    </div>
                </div>
            </div>

            <div className="relative px-12 w-full md:w-[50%] h-85 flex flex-col items-center justify-center">
                {/* Scrollar */}
                <Scrollar />
                <div className="relative mb-2 w-full h-0.5 bg-gray-600/60" />
                <h1 className="text-2xl font-semibold text-blue-950/90 font-sans">Over 20 Global Offices</h1>
                <a href="/About/locations" className="p-2 px-4 mt-4 rounded-lg bg-red-600/80 text-white/95 font-bold">Discover Our Locations</a>
            </div>
        </div>

        {/* Third Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center">
            <div className="parentelement relative w-full h-140 bg-[url('/sectionleftimage.jpg')] bg-center bg-cover flex before:absolute before:inset-0 items-center justify-center">
            <div className="childelement relative w-[75%] max-w-120 h-70 group bg-white/85 p-4 hover:bg-white/95 transition-all duration-300 flex flex-col items-center justify-center">
            <h1 className="text-[28px] font-semibold text-blue-900/85 text-center">Nubia Mining Services</h1>
            <h2 className="text-center font-bold font-sans text-black/95 text-[18px]">Comprehensive, personalized services for a dynamic industry.</h2>
            <a className="p-2 rounded-lg mt-4 bg-red-600/65 group-hover:bg-red-600/80 text-white text-[20px] transition-all duration-150 font-bold" href="/Services">Discover Our Services</a>
            </div>
            </div>
            <div className="parentelement relative w-full h-140 bg-[url('/sectionrightimage.avif')] bg-center bg-cover flex before:absolute before:inset-0 items-center justify-center">
            <div className="childelement relative w-[75%] max-w-120 h-70 group bg-white/85 p-4 hover:bg-white/95 transition-all duration-300 flex flex-col items-center justify-center">
            <h1 className="text-[28px] font-semibold text-blue-900/85 text-center">Nubia Mining Products</h1>
            <h2 className="text-center font-bold font-sans text-black/95 text-[18px]">From mine to market, we source essential elements of modern life.</h2>
            <a className="p-2 rounded-lg mt-4 bg-red-600/65 group-hover:bg-red-600/80 text-white text-[20px] transition-all duration-150 font-bold" href="/Products">Discover Our Products</a>
            </div>
            </div>
        </div>
        
        {/* Core Values */}
        <CoreValues />

        {/* News Section */}
        <div className="w-full pb-30 h-auto bg-linear-to-br from-blue-950/95 to-blue-900/85">
        <h1 className="w-full p-8 text-[32px] font-bold text-white/95">News</h1>

        <div className="w-full flex flex-col items-center justify-center gap-8 mt-10">

            {/* Row 1 */}
            <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
            {/* News Card */}
            <div className="w-[90%] md:w-[45%] p-4 border-b-2 border-white/40 flex flex-row items-start gap-4 text-white/75">
                {/* Arrow */}
                <div className="flex items-center justify-center min-w-10">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white font-bold hover:bg-white/10 transition-all duration-400">&gt;</div>
                </div>
                {/* Text */}
                <div className="flex flex-col">
                <h1 className="text-[17px] text-red-800/70">2025-04-12</h1>
                <h2 className="text-[20px] text-black/85">
                    Recent studies in the field of minerals have highlighted exciting discoveries of rare earth elements in previously unexplored regions
                </h2>
                </div>
            </div>

            <div className="w-[90%] md:w-[45%] p-4 border-b-2 border-white/40 flex flex-row items-start gap-4 text-white/75">
                <div className="flex items-center justify-center min-w-10">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white font-bold hover:bg-white/10 transition-all duration-400">&gt;</div>
                </div>
                <div className="flex flex-col">
                <h1 className="text-[17px] text-red-800/70">2025-08-07</h1>
                <h2 className="text-[20px] text-black/85">
                    Statement on Responsible Supply Chain Management & Proactive Due Diligence Measures
                </h2>
                </div>
            </div>
            </div>

            {/* Row 2 */}
            <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
            <div className="w-[90%] md:w-[45%] p-4 border-b-2 border-white/40 flex flex-row items-start gap-4 text-white/75">
                <div className="flex items-center justify-center min-w-10">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white font-bold hover:bg-white/10 transition-all duration-400">&gt;</div>
                </div>
                <div className="flex flex-col">
                <h1 className="text-[17px] text-red-800/70">2025-01-23</h1>
                <h2 className="text-[20px] text-black/85">
                    Nubia Mining, Pure Aluminum and Consortium Metals Form Strategic Partnership to Expand Sustainable Aluminum Production all over Pakistan
                </h2>
                </div>
            </div>

            <div className="w-[90%] md:w-[45%] p-4 border-b-2 border-white/40 flex flex-row items-start gap-4 text-white/75">
                <div className="flex items-center justify-center min-w-10">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white font-bold hover:bg-white/10 transition-all duration-400">&gt;</div>
                </div>
                <div className="flex flex-col">
                <h1 className="text-[17px] text-red-800/70">2025-07-31</h1>
                <h2 className="text-[20px] text-black/85">
                    Minerals can be recycled from old electronics and industrial products, helping to conserve natural reserves.
                </h2>
                </div>
            </div>
            </div>

        </div>
        </div>

    </div>)
}
