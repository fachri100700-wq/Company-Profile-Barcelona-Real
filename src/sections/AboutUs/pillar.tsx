import { RiHandHeartFill } from "react-icons/ri";
import { FaDumbbell } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
export default function Pillar() {
  return (
    <>
      <div className="mx-auto flex flex-col justify-center items-center gap-4 w-full max-w-[800px]">
        <h1 className="font-oswald text-3xl d:text-5xl text-white">
          BARCA PILLAR
        </h1>

        <p className="font-inter text-white text-center text-sm md:text-base opacity-55 w-full">
          The Barça Pillars are our club's DNA—a set of core values that guide
          us beyond the pitch. These principles shape every athlete from La
          Masia to the first team, ensuring that excellence is not just about
          winning, but about integrity and our commitment to being 'More than a
          club'
        </p>
        <div className="flex flex-wrap justify-center md:justify-between items center gap-7 md:gap-10 font-inter text-[#d39820] mt-8">
          <div className="flex flex-col items-center gap-2">
            <RiHandHeartFill className="w-5 md:w-8 h-5 md:h-8" />
            <p className="text-sm md:text-base">Humility</p>
          </div>

          <span className="bg-[#d39820] h-10 md:h-15 w-px" />

          <div className="flex flex-col items-center gap-2">
            <FaDumbbell className="w-5 md:w-8 h-5 md:h-8" />
            <p className="text-sm md:text-base">Effort</p>
          </div>

          <span className="bg-[#d39820] h-10 md:h-15 w-px" />

          <div className="flex flex-col items-center gap-2">
            <HiTrendingUp className="w-5 md:w-8 h-5 md:h-8" />
            <p className="text-sm md:text-base">Ambition</p>
          </div>

          <span className="bg-[#d39820] h-10 md:h-15 w-px hidden md:block" />

          <div className="flex flex-col items-center gap-2">
            <FaHandshake className="w-5 md:w-8 h-5 md:h-8" />
            <p className="text-sm md:text-base">Respect</p>
          </div>

          <span className="bg-[#d39820] h-10 md:h-15 w-px" />

          <div className="flex flex-col items-center gap-2">
            <FaUsers className="w-5 md:w-8 h-5 md:h-8" />
            <p className="text-sm md:text-base">Teamwork</p>
          </div>
        </div>
      </div>
    </>
  );
}
