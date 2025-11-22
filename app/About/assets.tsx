export default function Assets() {
  const assets = [
    {
      title: "Schist Block 1",
      value: 135.16,
      location: "KPK Province",
      description: "Rich in Gold, PGM & other precious minerals",
    },
    {
      title: "Placer Gold Block",
      value: 2.32,
      location: "Hamzigond District, Kharmang",
      description: "Rich in Gold & Silver",
    },
    {
      title: "Placer Gold Block",
      value: 5.98,
      location: "Ghawn District, Ghanche",
      description: "Rich in Gold, Copper & Silver",
    },
    {
      title: "Schist Block 2",
      value: 41.8,
      location: "KPK Province",
      description: "Rich in Gold & PGM",
    },
    {
      title: "Platinum Block",
      value: 499.33,
      location: "KPK Province",
      description: "Rich in Platinum, Gold & PGM",
    },

  ];

  const SingleAsset = ({
    title,
    value,
    location,
    description,
  }: {
    title: string;
    value: number;
    location: string;
    description: string;
  }) => (
    <div className="relative w-full py-6 flex flex-col h-full">
    <div className="relative w-full p-6 rounded-2xl shadow-xl border border-white/20 bg-white/45 hover:bg-white/65 backdrop-blur-xs hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex-1 flex flex-col items-center">
        <h1 className="text-[24px] font-sans font-semibold text-gray-900">{title}</h1>
        <h2 className="text-[28px] font-bold text-red-700 mt-2">{value}</h2>
        <h3 className="text-[12px] text-gray-800/90 mt-1">{location}</h3>
        <p className="text-[16px] text-gray-600/90 font-sans font-medium mt-3 text-center">{description}</p>
    </div>
</div>
  );

  return (<div className="relative w-full px-4 md:px-8 lg:px-16 h-auto py-10 flex flex-col items-center justify-center bg-[url('/assetsimg1.avif')] bg-cover bg-center">
        <h1 className="text-black mt-10 p-2 underline decoration-red-600 text-3xl font-medium">
          Assets
        </h1>
        <h2 className="text-blue-950/85 text-2xl font-medium font-sans mb-4">
          Mining blocks and key mineral resources
        </h2>

        <div className="relative flex flex-wrap justify-center gap-6">
          {assets.map((asset, index) => (
            <div key={index} className="w-full sm:w-[48%] md:w-[32%] lg:w-[18%]">
              <SingleAsset
                title={asset.title}
                value={asset.value}
                location={asset.location}
                description={asset.description}
              />
            </div>
          ))}
        </div>
      </div>
    );
}
