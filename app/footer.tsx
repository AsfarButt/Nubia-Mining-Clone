





export default function Footer(){




    return(<div className="w-full h-auto z-5 min-h-36 bg-linear-to-tl from-blue-900/85 to-blue-950/90 backdrop-brightness-20 flex flex-col justify-center items-center overflow-hidden">
        <div className="relative pt-8 w-full h-auto flex justify-center">
        <img src="/brandlogo.png" alt="Logo Image" className="w-25 h-25" />
        </div>
        <div className="relative w-full flex flex-row flex-wrap items-start justify-evenly pt-3">
            <a className="cursor-pointer list-none min-w-15 m-2 text-white/85 font-medium hover:text-yellow-500/85 hover:font-normal" href="/Home">Home</a>
            <a className="cursor-pointer list-none min-w-15 m-2 text-white/85 font-medium hover:text-yellow-500/85 hover:font-normal md:border-l-2 md:border-gray-200/60 pl-2" href="/About">About us
            <li className="cursor-pointer mt-4 text-[13px] text-yellow-100/55 hover:text-white/85">About Nubia</li>
            <li className="cursor-pointer text-[13px] text-yellow-100/55 hover:text-white/85">Mission</li>
            <li className="cursor-pointer text-[13px] text-yellow-100/55 hover:text-white/85">Logistics</li>
            <li className="cursor-pointer text-[13px] text-yellow-100/55 hover:text-white/85">Our Team</li>
            </a>
            <a className="cursor-pointer list-none min-w-15 m-2 text-white/85 font-medium hover:text-yellow-500/85 hover:font-normal md:border-l-2 md:border-gray-200/60 pl-2" href="/Products">Products</a>
            <li className="cursor-pointer list-none min-w-15 m-2 text-white/85 font-medium hover:text-yellow-500/85 hover:font-normal md:border-l-2 md:border-gray-200/60 pl-2">Address
            <a className="block cursor-pointer mt-4 max-w-35 sm:max-w-40 text-[13px] text-yellow-100/55 hover:text-white/85" href="https://maps.app.goo.gl/UUse279z1MFJ5aVe9" target="_blank">House No. 17, Street No. 22, Sector F-6/2, Islamabad, Capital Territory, Pakistan</a>
            </li>
            <li className="cursor-pointer list-none min-w-15 m-2 text-white/85 font-medium hover:text-yellow-500/85 hover:font-normal md:border-l-2 md:border-gray-200/60 pl-2">Contact Info
            <a className="block cursor-pointer mt-4 text-[13px] w-35 sm:w-40 md:w-full text-yellow-100/55 hover:text-white/85" href="https://wa.me/+923218550786" target="_blank">+92 321 8550786</a>
            <a className="block cursor-pointer text-[13px] w-35 sm:w-40 md:w-full text-yellow-100/55 hover:text-white/85" href="https://wa.me/+923128550786" target="_blank">+92 312 8550786</a>
            <a className="block cursor-pointer text-[13px] w-35 sm:w-40 md:w-full text-yellow-100/55 hover:text-white/85" href="https://wa.me/0516162000">051 616 2000</a>
            <a className="block cursor-pointer text-[13px] w-35 sm:w-40 md:w-full text-yellow-100/55 hover:text-white/85" href="https://wa.me/0516164000" target="_blank">051 616 4000</a>
            <a className="cursor-pointer text-[13px] w-35 sm:w-40 md:w-full text-yellow-100/55 flex flex-row flex-wrap hover:text-white/85" href="mailto:support@nubiamining.com" target="_blank"><span>support@nubia</span><span>mining.com</span></a>
            <a className="cursor-pointer text-[13px] w-35 sm:w-40 md:w-full text-yellow-100/55 flex flex-row flex-wrap hover:text-white/85" href="mailto:ghulamali@hhsheikhahmed.com" target="_blank"><span>ghulamali@hhsheikh</span><span>ahmed.com</span></a>
            </li>
        </div>
        <div className="relative w-[90%] border-t md:text-[12px] border-gray-300/65 h-auto text-center text-gray-300/85 text-[10px] mt-8 py-2 pb-10">@nubiamining. |  All Rights Reserved</div>
    </div>)
}