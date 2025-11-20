


export default function Footer(){

    return(<div className="w-full h-auto z-5 min-h-36 bg-linear-to-tr from-blue-950/90 to-blue-800/85 flex flex-col items-center justify-center">
        <div className="relative w-full flex items-start justify-evenly pt-3">
            <a className="cursor-pointer list-none text-blue-950 font-medium hover:text-white/95 hover:font-normal" href="/Home">Home</a>
            <li className="cursor-pointer list-none text-blue-950 font-medium hover:text-white/95 hover:font-normal border-l-2 border-gray-200/60 pl-2">Services</li>
            <a className="cursor-pointer list-none text-blue-950 font-medium hover:text-white/95 hover:font-normal border-l-2 border-gray-200/60 pl-2" href="/About">About us
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/95">Locations</li>
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/95">History</li>
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/95">ESG</li>
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/95">Careers</li>
            </a>
            <a className="cursor-pointer list-none text-blue-950 font-medium hover:text-white/95 hover:font-normal border-l-2 border-gray-200/60 pl-2" href="/Products">Products</a>
            <a className="cursor-pointer list-none text-blue-950 font-medium hover:text-white/95 hover:font-normal border-l-2 border-gray-200/60 pl-2">Contact Info
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/90">+92 9725 978234</li>
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/90">abc123@example.com</li>
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/90">nubiaminings.linked</li>
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/90">@nubiamining</li>
            <li className="cursor-pointer text-[14px] text-blue-950 hover:text-gray-950/90">mubia-platform</li>
            </a>
        </div>
        <div className="relative w-[90%] border-t md:text-[12px] border-gray-300/65 h-auto text-center text-gray-300/85 text-[10px] mt-8 py-2 pb-10">@nubiamining. |  All Rights Reserved</div>
    </div>)
}