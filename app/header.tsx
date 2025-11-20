import {Vend_Sans} from "next/font/google";

const cormorant = Vend_Sans({
    subsets: ['latin'],
    weight: ['500']
})




export default function Header(){


    return(<div className="sticky top-0 z-5 w-full h-18 bg-linear-to-r from-blue-900/90 to-blue-800/85 flex items-center justify-between px-2 md:px-4">
        <div className="relative w-auto h-full flex flex-row items-center justify-center gap-2 scale-80 sm:scale-100">
            <div className="relative h-full w-13 scale-85 rotate-y-180 bg-white mask-[url(/pickaxe.png)] mask-cover mask-center" />
            <h1 className={`relative text-2xl text-white ${cormorant.className}`}>Nubia Mining</h1>
        </div>
        <div className="relative w-[30%] min-w-80 h-full flex flex-row items-center justify-between">
            <a className="relative w-full h-full list-none text-gray-800/90 flex items-center font-sans hover:text-white/85 justify-center px-1" href="/Home">Home</a>
            <div className="w-1.5 h-[85%] bg-white/60" ></div>
            <a className="relative w-full h-full list-none text-gray-800/90 flex items-center font-sans hover:text-white/85 justify-center px-1 group" href="/About">About us
            <div className="absolute top-14 p-2 border-l border-white/80 left-0 h-auto w-auto min-w-35 bg-blue-900/60 hidden group-hover:block pointer-events-auto z-1">
            <><li className="text-white/65 hover:text-white/90">Locations</li>
            <li className="text-white/65 hover:text-white/90">History</li>
            <li className="text-white/65 hover:text-white/90">ESG</li>
            <li className="text-white/65 hover:text-white/90">Careers</li></>
            </div>
            </a>
            <div className="w-1.5 h-[85%] bg-white/60" ></div>
            <a className="relative w-full h-full list-none text-gray-800/90 flex items-center font-sans hover:text-white/85 justify-center px-1" href="/Products">Products</a>
            <div className="w-1.5 h-[85%] bg-white/60" ></div>
        </div>
    </div>)
}