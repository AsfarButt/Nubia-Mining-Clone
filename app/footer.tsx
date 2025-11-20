


export default function Footer(){

    return(<div className="w-full h-auto min-h-36 bg-linear-to-tr from-blue-950/90 to-blue-800/85 flex flex-col items-center justify-center">
        <div className="relative w-full flex items-start justify-evenly pt-3">
            <a className="cursor-pointer list-none text-blue-950 font-medium hover:text-white/95 hover:font-normal border-l-2 border-gray-500/60 pl-1" href="/Home">Home</a>
            <li className="cursor-pointer list-none text-blue-950 font-medium hover:text-white/95 hover:font-normal border-l-2 border-gray-500/60 pl-1">Services</li>
            <a className="cursor-pointer list-none text-blue-950 font-medium hover:text-white/95 hover:font-normal border-l-2 border-gray-500/60 pl-1" href="/About">About us
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/95">Locations</li>
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/95">History</li>
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/95">ESG</li>
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/95">Careers</li>
            </a>
            <a className="cursor-pointer list-none text-blue-950 font-medium hover:text-white/95 hover:font-normal border-l-2 border-gray-500/60 pl-1" href="/Products">Products</a>
            <a className="cursor-pointer list-none text-blue-950 font-medium hover:text-white/95 hover:font-normal border-l-2 border-gray-500/60 pl-1">Contact Info
            <li className="text-[13px] mt-1 text-blue-900 hover:font-semibold border-b border-transparent hover:border-white/60">+92 9725 978234</li>
            <li className="text-[13px] text-blue-900 hover:font-semibold border-b border-transparent hover:border-white/60">abc123@example.com</li>
            <li className="text-[13px] text-blue-900 hover:font-semibold border-b border-transparent hover:border-white/60">nubiaminings.linked</li>
            <li className="text-[13px] text-blue-900 hover:font-semibold border-b border-transparent hover:border-white/60">@nubiamining</li>
            <li className="text-[13px] text-blue-900 hover:font-semibold border-b border-transparent hover:border-white/60">mubia-platform</li>
            </a>
        </div>
        <div className="relative w-[90%] border-t md:text-[12px] border-gray-300/65 h-auto text-center text-gray-300/85 text-[10px] mt-8 py-2 pb-10">@nubiamining. |  All Rights Reserved</div>
    </div>)
}