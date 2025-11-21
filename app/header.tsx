import {Vend_Sans} from "next/font/google";

const cormorant = Vend_Sans({
    subsets: ['latin'],
    weight: ['500']
})




export default function Header(){


    return(<div className="sticky top-0 z-5 w-full h-18 bg-black flex items-center justify-between px-2 md:px-4 before:absolute before:inset-0 before:bg-linear-to-r before:from-blue-950/90 before:to-blue-900/85">
        <div className="relative w-auto h-full flex flex-row items-center justify-center gap-2 scale-80 sm:scale-100">
            {/* <div className="relative h-full w-13 scale-85 rotate-y-180 bg-white mask-[url(/pickaxe.png)] mask-cover mask-center" />
            <h1 className={`relative text-2xl text-white ${cormorant.className}`}>Nubia Mining</h1> */}
            <div className="relative w-32 h-28 mt-2 bg-[url('/brandtext.png')] bg-center bg-cover"></div>
        </div>
        <div className="relative w-[30%] min-w-80 h-full flex flex-row items-center justify-between">
            <a className="relative w-full h-full list-none text-gray-200/90 flex items-center font-sans hover:text-yellow-500/85 justify-center px-1" href="/Home">Home</a>
            <div className="w-1.5 h-[85%] bg-white/60" ></div>
            <a className="relative w-full h-full list-none text-gray-200/90 flex items-center font-sans hover:text-yellow-500/85 justify-center px-1 group" href="/About">About us
            <div className="absolute top-14 p-2 border-l border-white/80 left-0 h-auto w-auto min-w-35 bg-blue-900/60 hidden group-hover:block pointer-events-auto z-1">
            <><li className="text-white/65 hover:text-white/75 hover:underline decoration-white/70">About Nubia</li>
            <li className="text-white/65 hover:text-white/75 hover:underline decoration-white/70">Mission</li>
            <li className="text-white/65 hover:text-white/75 hover:underline decoration-white/70">Logistics</li>
            <li className="text-white/65 hover:text-white/75 hover:underline decoration-white/70">Our Team</li></>
            </div>
            </a>
            <div className="w-1.5 h-[85%] bg-white/60" ></div>
            <a className="relative w-full h-full list-none text-gray-200/90 flex items-center font-sans hover:text-yellow-500/85 justify-center px-1" href="/Products">Products</a>
            <div className="w-1.5 h-[85%] bg-white/60" ></div>
            <a className="relative w-full h-full list-none text-gray-200/90 flex items-center font-sans hover:text-yellow-500/85 justify-center px-1" href="/Services">Services</a>
            <div className="w-1.5 h-[85%] bg-white/60" ></div>
        </div>
    </div>)
}