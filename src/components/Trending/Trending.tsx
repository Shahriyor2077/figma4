import { memo } from "react";
import robot from "../../assets/robot.png";
import trending_profile from "../../assets/trending-profile.svg";

const Trending = () => {
  return (
    <section className="bg-[#2B2B2B] text-white">
      <div className="max-w-[1074px] mx-auto px-3">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">Trending Collection</h2>
          <p className="text-gray-400 mt-2">
            Checkout Our Weekly Updated Trending Collection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <img
              src={robot}
              alt="DSGN Animals"
              className="w-full h-72 object-cover rounded-2xl"
            />
            <div className="flex items-center justify-between mt-4">
              <img
                src={robot}
                alt="thumb"
                className="w-[100px] h-[100px] object-cover rounded-xl"
              />
              <img
                src={robot}
                alt="thumb"
                className="w-[100px] h-[100px] object-cover rounded-xl"
              />
              <div className="w-[100px] h-[100px] bg-[#A259FF] rounded-xl flex items-center justify-center text-white font-bold font-mono">
                1025+
              </div>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-lg">DSGN Animals</p>
              <div className="flex items-center gap-2 mt-1">
                <img
                  src={trending_profile}
                  alt="profile"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-400 font-semibold font-work">
                  MrFox
                </span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src={robot}
              alt="Magic Mushrooms"
              className="w-full h-72 object-cover rounded-2xl"
            />
            <div className="flex items-center justify-between mt-4">
              <img
                src={robot}
                alt="thumb"
                className="w-[100px] h-[100px] object-cover rounded-xl"
              />
              <img
                src={robot}
                alt="thumb"
                className="w-[100px] h-[100px] object-cover rounded-xl"
              />
              <div className="w-[100px] h-[100px] bg-[#A259FF] rounded-xl flex items-center justify-center text-white font-bold font-mono">
                1025+
              </div>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-lg">Magic Mushrooms</p>
              <div className="flex items-center gap-2 mt-1">
                <img
                  src={trending_profile}
                  alt="profile"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-400 font-semibold font-work">
                  Shroomie
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src={robot}
              alt="Disco Machines"
              className="w-full h-72 object-cover rounded-2xl"
            />
            <div className="flex items-center justify-between mt-4">
              <img
                src={robot}
                alt="thumb"
                className="w-[100px] h-[100px] object-cover rounded-xl"
              />
              <img
                src={robot}
                alt="thumb"
                className="w-[100px] h-[100px] object-cover rounded-xl"
              />
              <div className="w-[100px] h-[100px] bg-[#A259FF] rounded-xl flex items-center justify-center text-white font-bold font-mono">
                1025+
              </div>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-lg">Disco Machines</p>
              <div className="flex items-center gap-2 mt-1">
                <img
                  src={trending_profile}
                  alt="profile"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-400 font-semibold font-work">
                  BeKind2Robots
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Trending);
