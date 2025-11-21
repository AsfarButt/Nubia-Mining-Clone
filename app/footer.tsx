





export default function Footer(){




    return(<div className="w-full h-auto z-5 min-h-36 bg-linear-to-tl from-blue-900/85 to-blue-950/90 backdrop-brightness-20 flex flex-col justify-center items-center">
        <div className="relative w-full h-auto flex justify-center">
        <img src="/brandlogo.png" alt="Logo Image" className="w-25 h-25" />
        </div>
        <div className="relative w-full flex flex-row flex-wrap items-start justify-evenly pt-3">
            <a className="cursor-pointer list-none min-w-15 m-2 text-white/85 font-medium hover:text-yellow-500/85 hover:font-normal" href="/Home">Home</a>
            <li className="cursor-pointer list-none min-w-15 m-2 text-white/85 font-medium hover:text-yellow-500/85 hover:font-normal md:border-l-2 md:border-gray-200/60 pl-2">Services</li>
            <a className="cursor-pointer list-none min-w-15 m-2 text-white/85 font-medium hover:text-yellow-500/85 hover:font-normal md:border-l-2 md:border-gray-200/60 pl-2" href="/About">About us
            <li className="cursor-pointer mt-4 text-[13px] text-yellow-100/55 hover:text-white/85">About Nubia</li>
            <li className="cursor-pointer text-[13px] text-yellow-100/55 hover:text-white/85">Mission</li>
            <li className="cursor-pointer text-[13px] text-yellow-100/55 hover:text-white/85">Logistics</li>
            <li className="cursor-pointer text-[13px] text-yellow-100/55 hover:text-white/85">Our Team</li>
            </a>
            <a className="cursor-pointer list-none min-w-15 m-2 text-white/85 font-medium hover:text-yellow-500/85 hover:font-normal md:border-l-2 md:border-gray-200/60 pl-2" href="/Products">Products</a>
            <a className="cursor-pointer list-none min-w-15 m-2 text-white/85 font-medium hover:text-yellow-500/85 hover:font-normal md:border-l-2 md:border-gray-200/60 pl-2">Contact Info
            <li className="cursor-pointer mt-4 text-[13px] text-yellow-100/55 hover:text-white/85">+93 321 8550786</li>
            <li className="cursor-pointer text-[13px] text-yellow-100/55 hover:text-white/85">+92 312 8550786</li>
            <li className="cursor-pointer text-[13px] text-yellow-100/55 hover:text-white/85">support@nubiamining.com</li>
            <li className="cursor-pointer text-[13px] text-yellow-100/55 hover:text-white/85">ghulamali@hhsheikhahmed.com</li>
            </a>
        </div>
        <div className="relative w-[90%] border-t md:text-[12px] border-gray-300/65 h-auto text-center text-gray-300/85 text-[10px] mt-8 py-2 pb-10">@nubiamining. |  All Rights Reserved</div>
    </div>)
}