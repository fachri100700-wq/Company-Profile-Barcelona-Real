import History from "./History";
import Lamasia from "./lamasia";
import Pillar from "./pillar";

export default function AboutUsPage () {
    return (
      <>
        <div className="bg-[#04101C] py-20 md:py-30 px-8 md:px-10 flex flex-col gap-7 md:gap-10">
          <h1 className="font-oswald text-5xl md:text-7xl text-white">ABOUT US</h1>
          <div className="flex w-full h-1">
            <span className="w-1/2 bg-[#004D98]" />
            <span className="w-1/2 bg-[#A50044]" />
          </div>

          <div className="flex flex-col gap-10 md:gap-20">
            <History />
            <Lamasia />
            <Pillar />
          </div>
        </div>
      </>
    );
}