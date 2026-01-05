import {Vend_Sans} from "next/font/google";

const cormorant = Vend_Sans({
    subsets: ['latin'],
    weight: ['500']
})




export default function Header({Selection}:{Selection: number}){


    return(<div className="sticky top-0 z-5 w-full h-15 sm:h-16 bg-black flex items-center justify-between px-2 md:px-4 before:absolute before:inset-0 before:bg-blue-900/60 before:brightness-100">
        <div className="relative w-auto h-full flex flex-row items-center justify-center gap-2 scale-80 sm:scale-100">
            {/* <div className="relative h-full w-13 scale-85 rotate-y-180 bg-white mask-[url(/pickaxe.png)] mask-cover mask-center" />
            <h1 className={`relative text-2xl text-white ${cormorant.className}`}>Nubia Mining</h1> */}
            {/* <a className="relative w-28 sm:w-32 h-28 mt-2 bg-[url('/brandtext.png')] bg-center bg-cover" href="/"></a> */}
            <a
            href="/"
            className="relative onstartheaderlogoanimation w-28 sm:w-28 h-28 mt-2 bg-white hover:bg-yellow-500/85 mask-[url('/brandtext.png')] mask-center mask-cover"
            // style={{
            //     WebkitMaskImage: "url('/brandtext.png')",
            //     WebkitMaskRepeat: "no-repeat",
            //     WebkitMaskSize: "cover",
            //     WebkitMaskPosition: "center",
            //     maskImage: "url('/brandtext.png')",
            //     maskRepeat: "no-repeat",
            //     maskSize: "cover",
            //     maskPosition: "center",
            // }}
            ></a>
        </div>
        <div className="relative w-[85%] md:w-[65%] lg:w-[45%] h-full flex flex-row items-center justify-between z-2">
            <a className={`relative w-full h-full list-none onstartheaderanimation1 text-gray-200/90 flex items-center text-[14px] sm:text-[15px] font-sans hover:text-yellow-500/85 justify-center sm:px-1 ${(Selection==1)? "text-yellow-500/85":"text-gray-200/90"}`} href="/Home">Home</a>
            <div className="w-1 h-[65%] onstarthaderline1 bg-white/60" ></div>
            <a className={`relative w-full h-full list-none onstartheaderanimation2 text-gray-200/90 flex items-center text-[14px] sm:text-[15px] font-sans hover:text-yellow-500/85 justify-center sm:px-1 ${(Selection==2)? "text-yellow-500/85":"text-gray-200/90"} group`} href="/About">About us
            <div className="absolute top-14 p-2 border-l border-white/80 left-0 h-auto w-auto min-w-35 bg-blue-900/95 hidden group-hover:block pointer-events-auto z-1">
            <>
            <li className="text-white/65 p-1 hover:text-white/75 hover:underline decoration-white/70">About Nubia</li>
            <li className="text-white/65 p-1 hover:text-white/75 hover:underline decoration-white/70">Mission</li>
            <li className="text-white/65 p-1 hover:text-white/75 hover:underline decoration-white/70">Locations</li>
            <li className="text-white/65 p-1 hover:text-white/75 hover:underline decoration-white/70">Our Team</li></>
            </div>
            </a>
            <div className="w-1 h-[65%] onstarthaderline2 bg-white/60" ></div>
            <a className={`relative w-full h-full list-none onstartheaderanimation3 text-gray-200/90 flex items-center text-[14px] sm:text-[15px] font-sans hover:text-yellow-500/85 justify-center sm:px-1 ${(Selection==3)? "text-yellow-500/85":"text-gray-200/90"}`} href="/Products">Products</a>
            <div className="w-1 h-[65%] onstarthaderline3 bg-white/60" ></div>
            <a className={`relative w-full h-full list-none onstartheaderanimation4 text-gray-200/90 flex items-center text-[14px] sm:text-[15px] font-sans hover:text-yellow-500/85 justify-center sm:px-1 ${(Selection==4)? "text-yellow-500/85":"text-gray-200/90"}`} href="/Services">Services</a>
            <div className="w-1 h-[65%] onstarthaderline4 bg-white/60 hidden sm:block" ></div>
            <a className={`hidden relative w-full h-full list-none onstartheaderanimation5 text-gray-200/90 md:flex items-center text-[14px] sm:text-[15px] font-sans hover:text-yellow-500/85 justify-center sm:px-1 ${(Selection==5)? "text-yellow-500/85":"text-gray-200/90"}`} href="/ContactUs">Contact Us</a>
            {/* <div className="w-1 h-[65%] onstarthaderline5 bg-white/60 hidden sm:block" ></div> */}
        </div>
    </div>)
}