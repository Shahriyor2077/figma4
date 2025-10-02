import { memo } from "react";
import { GoRocket } from "react-icons/go";
import robotica from "../../assets/robotica.png";

const creatorsData = [
  { id: 1, name: "Keepitreal", sales: "34.53 ETH" },
  { id: 2, name: "DigiLab", sales: "32.13 ETH" },
  { id: 3, name: "GravityOne", sales: "28.93 ETH" },
  { id: 4, name: "Juanie", sales: "25.30 ETH" },
  { id: 5, name: "BlueWhale", sales: "22.22 ETH" },
  { id: 6, name: "Mr Fox", sales: "19.28 ETH" },
  { id: 7, name: "Shroomie", sales: "34.53 ETH" },
  { id: 8, name: "Robotica", sales: "34.53 ETH" },
  { id: 9, name: "RustyRobot", sales: "34.53 ETH" },
  { id: 10, name: "Animakid", sales: "34.53 ETH" },
  { id: 11, name: "Dotgu", sales: "34.53 ETH" },
  { id: 12, name: "Ghiblier", sales: "34.53 ETH" },
];

const Creators = () => {
  return (
    <section className="bg-[#2B2B2B]">
      <div className="max-w-[1050px] mx-auto py-20 px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div>
            <h2 className="font-semibold font-work text-white text-[38px]">
              Top Creators
            </h2>
            <p className="font-normal text-[22px] font-work text-white">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <button className="flex items-center gap-3 bg-transparent border border-solid border-[#A259FF] py-4 px-8 rounded-2xl text-white font-work font-semibold cursor-pointer">
            <GoRocket className="text-[#A259FF]" size={20} /> View Rankings
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {creatorsData.map((creator) => (
            <div
              key={creator.id}
              className="relative bg-[#3B3B3B] rounded-2xl p-4 flex sm:flex-row md:flex-col items-center sm:justify-between md:justify-start text-left md:text-center gap-4"
            >
              {/* Rank badge */}
              <span className="absolute top-4 left-4 bg-[#2B2B2B] text-white w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold">
                {creator.id}
              </span>

              {/* Profile image */}
              <img
                src={robotica}
                alt={creator.name}
                className="w-16 h-16 rounded-full object-cover sm:ml-6 md:ml-0"
              />

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-white font-semibold text-base md:text-lg">
                  {creator.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Total Sales:{" "}
                  <span className="text-white font-medium">
                    {creator.sales}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Creators);
