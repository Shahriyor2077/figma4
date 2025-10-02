import { memo } from "react";
import { GoRocket } from "react-icons/go";
import hero from "../../assets/nft-hero.png";
import hero_profile from "../../assets/hero-profile.svg";

const Hero = () => {
  return (
    <section className="bg-[#2B2B2B] py-16">
      <div className="max-w-[1074px] mx-auto px-3">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2  lg:text-left">
            <h1
              className="text-white font-semibold font-work 
              text-[38px] leading-[42px] 
              md:text-[38px] md:leading-[42px] 
              lg:text-[67px] lg:leading-[68px]"
            >
              Discover Digital Art & Collect NFTs
            </h1>
            <p
              className="text-white font-work font-normal capitalize mt-6 
              text-[16px] leading-7 
              md:text-[16px] md:leading-7 
              lg:text-[22px] lg:leading-9 lg:max-w-[90%]"
            >
              NFT Marketplace UI Created With Anima For Figma. Collect, Buy And
              Sell Art From More Than 20k NFT Artists.
            </p>
            <button className="flex gap-3 mt-8 bg-[#A259FF] text-white font-work px-6 py-3 rounded-2xl font-semibold hover:bg-[#8a3ee0] transition lg:mx-0">
              <GoRocket size={20} /> Get Started
            </button>

            <div className="flex items-center justify-center lg:justify-start gap-12 mt-12 text-white font-work">
              <div>
                <h3 className="text-[28px] font-bold font-mono">240k+</h3>
                <p className="text-lg font-work font-normal">Total Sale</p>
              </div>
              <div>
                <h3 className="text-[28px] font-bold font-mono">100k+</h3>
                <p className="text-lg font-work font-normal">Auctions</p>
              </div>
              <div>
                <h3 className="text-[28px] font-bold font-mono">240k+</h3>
                <p className="text-lg font-work font-normal">Artists</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="flex flex-col">
              <img src={hero} alt="NFT Hero" className="rounded-t-2xl w-full" />

              <div className="bg-[#3B3B3B] p-4 rounded-b-2xl">
                <h5 className="text-white font-semibold text-lg font-work">
                  Space Walking
                </h5>
                <div className="flex items-center gap-3 mt-2">
                  <img src={hero_profile} alt="profile" />
                  <p className="text-white text-sm font-work font-normal">
                    Animakid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
