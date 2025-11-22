


export default function Page(){

    return(<div className="bodyelement relative w-full h-auto flex flex-col items-center justify-center">
      {/* Hero Section */}
        <div className="relative w-full h-160 flex items-center justify-center bg-[url('/aboutimg2.avif')] bg-cover bg-center">
            <div className="relative h-auto text-2xl font-semibold font-sans w-[90%] px-2 flex justify-center md:justify-start">
                <div className="onstartanimation w-[90%] py-10 p-4 h-auto pb-10 max-w-140 bg-white">
                    <h1 className="text-gray-600/80 font-mono p-2 text-[14px]">Nubia Mining / About</h1>
                    <h1 className="onstartanimation delay-200 text-[22px] text-blue-900">We manage the full value chain--from exploration to processing and trade of gold, PGMs, and critical minerals--guided by OECD, LBMA and JORC standards to ensure ethical and traceable operations.</h1>
                    <div className="onstartanimation delay-250 relative w-full h-0.5 bg-red-600/70 my-2 " />
                    <h1 className="onstartanimation delay-300 text-[14px] text-black/80">Grounded in compliance, sustainability and technology, Nubia leverages digital ESO governance to deliver secure, transparent, and future-ready metal sipply chain</h1>
                </div>
            </div>
        </div>

        <div className="relative w-full px-4 md:px-8 lg:px-16 h-auto bg-white">
            <h1 className="text-black mt-10 p-2 underline decoration-red-600 text-3xl font-medium">Mission</h1>
            <h2 className="font-semibold mt-4 text-gray-800/85">Delivering Excellence Through Innovation and Intergrity</h2>
            <p className="relative w-full md:w-[70%] lg:w-[60%] text-gray-800/90 text-[18px] mt-2">To responsibly explore, develop, and trade precious and strategic metals by upholding the highest standards  of integrity, transparency, and envirnomental stewardship. We aim to build lasting partnerships, strengthen global supply chains, and create sustainable value for industries, communnities, and stakeholders worldwide.</p>
        </div>

        <div className="relative w-full px-4 md:px-8 lg:px-16 h-auto bg-white">
            <h1 className="text-black mt-10 p-2 underline decoration-red-600 text-3xl font-medium">Locations</h1>
            <h2 className="font-semibold mt-4 text-gray-800/85">Nubia Mining operates from two offices within Pakistan, strategically located to serve our regional and national operations efficiently.</h2>
            <p className="relative w-full md:w-[70%] lg:w-[60%] text-gray-800/90 text-[18px] mt-2">We have two locations in Pakistan: 
            <a className="cursor-pointer text-[18px] text-blue-900/85 hover:underline" href="https://maps.app.goo.gl/UUse279z1MFJ5aVe9" target="_blank"> House No. 17, Street No. 22, Sector F-6/2, Islamabad, Capital Territory, Pakistan</a> and another at 
            <a className="cursor-pointer text-[18px] text-blue-900/85 hover:underline" href="https://maps.app.goo.gl/B3nSpH3giDUgbFiEA" target="_blank"> House No. 218C Firdosi Road near GHQ Rawalpindi</a>
             </p>
        </div>

        <div className="relative w-full mt-20 h-auto bg-[url('/aboutimg3.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
            <h1 className="text-white text-center font-sans font-bold text-4xl pt-4 bg-linear-to-b from-black/40 to-transparent">Logistics & Export Operations</h1>
            <div className="relative w-full h-auto flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-evenly gap-8">
                <div className="relative w-[95%] max-w-110 my-10 h-auto pb-20 bg-white shadow-lg hover:shadow-black/40 transition-all duration-300 px-4 py-2">
                    <h1 className="text-gray-600/80 font-mono p-2 text-[14px]">Nubia Mining / About / Operations</h1>
                    <h1 className="text-[22px] text-blue-900">Transport</h1>
                    <h1 className="text-[14px] text-black/80">20-30 MT sealed, containerized, GPS-tracked trucksm monitored by SOS -- direct mine-to-Karachi delivery.</h1>
                    <div className="relative w-full h-0.5 bg-red-600/70 my-2 " />
                    <h1 className="text-[14px] text-black/80">Export Volume: Monthly Shipment as per client requirments.</h1>
                </div>
                <div className="relative w-[95%] max-w-110 my-10 h-auto pb-20 bg-white shadow-lg hover:shadow-black/40 transition-all duration-300 px-5 py-2">
                    <h1 className="text-gray-600/80 font-mono p-2 text-[14px]">Nubia Mining / About / Shipping</h1>
                    <h1 className="text-[22px] pt-4 text-blue-900">Shipping Options</h1>
                    <div className="relative w-full h-0.5 bg-red-600/70 my-2 " />
                    <li className="text-[14px] text-black/80">Containerized Export Prefered (Prefered): 80-100 * 20 containers per month.</li>
                    <li className="text-[14px] text-black/80">Breakbulk: 5,000-15,000 DWT vessels, 2,000-2,500 MT/day loading rate.</li>
                    <li className="text-[14px] text-black/80">Compliance: All operations follow SGS-certified procedures ensuring full export intergrity.</li>
                </div>
            </div>
        </div>

        <div className="relative w-full px-4 md:px-8 lg:px-16 bg-white">
            {/* Our Team */}
            <div className="relative py-6 w-full px-4 h-auto flex flex-row flex-wrap items-center justify-center">
                <h1 className="relative w-full py-6 text-black/95 text-center font-sans text-3xl font-semibold">Our Team</h1>
                <li className="list-none relative w-full md:w-80 md:p-8 h-auto p-2 m-2 rounded-md border border-black/20 hover:[box-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">
                    <h1 className="underline text-gray-800/90 font-semibold md:text-center text-2xl">Furqan Zahoor</h1>
                    <h2 className="text-[16px] text-gray-600/95 md:text-center">Program Manager</h2>
                </li>
                <li className="list-none relative w-full md:w-80 md:p-8 h-auto p-2 m-2 rounded-md border border-black/20 hover:[box-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">
                    <h1 className="underline text-gray-800/90 font-semibold md:text-center text-2xl">Saboor Karamat</h1>
                    <h2 className="text-[16px] text-gray-600/95 md:text-center">Legal Expert</h2>
                </li>
                <li className="list-none relative w-full md:w-80 md:p-8 h-auto p-2 m-2 rounded-md border border-black/20 hover:[box-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">
                    <h1 className="underline text-gray-800/90 font-semibold md:text-center text-2xl">Waqar Khan</h1>
                    <h2 className="text-[16px] text-gray-600/95 md:text-center">MD Mining & Exploration</h2>
                </li>
                <li className="list-none relative w-full md:w-80 md:p-8 h-auto p-2 m-2 rounded-md border border-black/20 hover:[box-shadow:0px_0px_10px_rgba(0,0,0,0.3)]">
                    <h1 className="underline text-gray-800/90 font-semibold md:text-center text-2xl">Bibi Sabira</h1>
                    <h2 className="text-[16px] text-gray-600/95 md:text-center">Project Coordinator</h2>
                </li>
            </div>
        </div>
    </div>)
}
