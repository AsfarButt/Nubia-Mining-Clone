



export default function Page(){

    return(<div className="relative w-full h-150">
        
        {/* First SEction  */}
        <div className="w-full h-120 bg-[url(/homepagebg1.jpg)] bg-cover bg-center flex items-center justify-center">
        <div className="absolute w-full h-120 z-1 bg-linear-to-t from-blue-800/60 to-blue-950" />
        <div className="relative p-4 z-2 w-[90%] max-w-120 h-70 bg-white flex flex-col items-center justify-center">
            <h1 className="font-bold font-sans text-blue-950/95 text-[24px] text-center">Nubia Mining: Sourcing the Metals and Minerals that Move the World</h1>
            <div className="relative my-2 w-[90%] h-0.5 bg-red-600/80" />
            <p className="text-center text-[14px] font-sans">From exploration and mining to trading and marketing, we provide critical sourcing solutions for the ferroalloy, metal, mineral, mining and energy industries that power modern life.</p>
            <a href="/About" className="px-4 py-2 mt-4 text-[20px] font-bold text-white rounded-lg bg-red-600/85">Learn More About Nubia Mining</a>
        </div>
        </div>
    </div>)
}