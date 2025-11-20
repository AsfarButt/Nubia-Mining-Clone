



export default function Page(){


    return(<div className="relative w-full h-auto">
        <div className="relative w-full h-160 flex items-center justify-center bg-[url('/productimg1.jpg')] bg-cover bg-center shadow-lg shadow-black/10">
            <div className="relative h-auto text-2xl font-semibold font-sans w-[90%] px-2 flex justify-center md:justify-start">
                <div className="w-[90%] py-2 px-4 h-70 max-w-140 bg-white shadow-lg shadow-black/40">
                    <h1 className="text-gray-600/80 font-mono p-2 text-[14px]">Nubia Mining / Products</h1>
                    <h1 className="text-[22px] text-blue-900">At Nubia Mining, We supply the key Industrial and Metallurgical Minerals in Raw as well as Concentrated form.</h1>
                    <div className="relative w-full h-0.5 bg-red-600/70 my-2 " />
                    <h1 className="text-[14px] text-black/80">We value quality over quantity and try our best to keep our customers satisfied. Our customer response rate is 96% good</h1>
                </div>
            </div>
        </div>

        <h1 className="px-2 md:px-6 mt-16 text-left underline decoration-red-600/90 text-3xl">Products</h1>
        <div className="relative mt-12 p-8 flex flex-row flex-wrap justify-center items-center">
       
        {/* Products  */}

        <div className="relative m-8 w-140 h-100 flex flex-col shadow-lg hover:shadow-black/30 hover:-translate-y-5 duration-200 transition-all ease-out">
            <img src="/Products/Cooper.jpg" alt="" className="w-full h-[70%]" />
            <div className="relative p-2 flex flex-col items-start justify-center">
                <h1 className="font-bold text-3xl py-2">Cooper</h1>
                <h2 className="text-gray-800/70 text-[16px] leading-none">Low & high grade, concentrate & raw form</h2>
                <h2 className="text-[16px] font-sans font-bold text-black/98"> KP, Baluchistan, GB</h2>
            </div>
        </div>

        <div className="relative m-8 w-140 h-100 flex flex-col shadow-lg hover:shadow-black/30 hover:-translate-y-5 duration-200 transition-all ease-out">
            <img src="/Products/Graphite.jpg" alt="" className="w-full h-[70%]" />
            <div className="relative p-2 flex flex-col items-start justify-center">
                <h1 className="font-bold text-3xl py-2">Graphite</h1>
                <h2 className="text-gray-800/70 text-[16px] leading-none">+50% Carbon quality with associated minerals</h2>
                <h2 className="text-[16px] font-sans font-bold text-black/98">KP</h2>
            </div>
        </div>

        <div className="relative m-8 w-140 h-100 flex flex-col shadow-lg hover:shadow-black/30 hover:-translate-y-5 duration-200 transition-all ease-out">
            <img src="/Products/Magnesium.jpg" alt="" className="w-full h-[70%]" />
            <div className="relative p-2 flex flex-col items-start justify-center">
                <h1 className="font-bold text-3xl py-2">Manganese</h1>
                <h2 className="text-gray-800/70 text-[16px] leading-none">Good quality in raw form</h2>
                <h2 className="text-[16px] font-sans font-bold text-black/98"> KP, Baluchistan</h2>
            </div>
        </div>

        <div className="relative m-8 w-140 h-100 flex flex-col shadow-lg hover:shadow-black/30 hover:-translate-y-5 duration-200 transition-all ease-out">
            <img src="/Products/Antimony.jpg" alt="" className="w-full h-[70%]" />
            <div className="relative p-2 flex flex-col items-start justify-center">
                <h1 className="font-bold text-3xl py-2">Antimony</h1>
                <h2 className="text-gray-800/70 text-[16px] leading-none">40-65% Sb, raw & concentrate form</h2>
                <h2 className="text-[16px] font-sans font-bold text-black/98"> KP, Baluchistan, GB</h2>
            </div>
        </div>

        <div className="relative m-8 w-140 h-100 flex flex-col shadow-lg hover:shadow-black/30 hover:-translate-y-5 duration-200 transition-all ease-out">
            <img src="/Products/Chromite.jpg" alt="" className="w-full h-[70%]" />
            <div className="relative p-2 flex flex-col items-start justify-center">
                <h1 className="font-bold text-3xl py-2">Chromite</h1>
                <h2 className="text-gray-800/70 text-[16px] leading-none">High-grade chromite, raw & concentrates</h2>
                <h2 className="text-[16px] font-sans font-bold text-black/98"> KP, Baluchistan</h2>
            </div>
        </div>

        <div className="relative m-8 w-140 h-100 flex flex-col shadow-lg hover:shadow-black/30 hover:-translate-y-5 duration-200 transition-all ease-out">
            <img src="/Products/Gypsum.jpg" alt="" className="w-full h-[70%]" />
            <div className="relative p-2 flex flex-col items-start justify-center">
                <h1 className="font-bold text-3xl py-2">Gypsum</h1>
                <h2 className="text-gray-800/70 text-[16px] leading-none"> High-grade gypsum, raw & concentrates</h2>
                <h2 className="text-[16px] font-sans font-bold text-black/98">Punjab, KP</h2>
            </div>
        </div>

        <div className="relative m-8 w-140 h-100 flex flex-col shadow-lg hover:shadow-black/30 hover:-translate-y-5 duration-200 transition-all ease-out">
            <img src="/Products/Ironore.avif" alt="" className="w-full h-[70%]" />
            <div className="relative p-2 flex flex-col items-start justify-center">
                <h1 className="font-bold text-3xl py-2">Iron Ore</h1>
                <h2 className="text-gray-800/70 text-[16px] leading-none">Hematite / Laterite, up to 60% Fe</h2>
                <h2 className="text-[16px] font-sans font-bold text-black/98"> KP, Punjab, Baluchistan</h2>
            </div>
        </div>

        <div className="relative m-8 w-140 h-100 flex flex-col shadow-lg hover:shadow-black/30 hover:-translate-y-5 duration-200 transition-all ease-out">
            <img src="/Products/Tungsten.jpg" alt="" className="w-full h-[70%]" />
            <div className="relative p-2 flex flex-col items-start justify-center">
                <h1 className="font-bold text-3xl py-2">Tungsten</h1>
                <h2 className="text-gray-800/70 text-[16px] leading-none">Medium-high grade, multi-mineral content</h2>
                <h2 className="text-[16px] font-sans font-bold text-black/98"> KP, Baluchistan</h2>
            </div>
        </div>

        </div>
    </div>)
}