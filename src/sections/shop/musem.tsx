import museuma from '../../assets/ticket/coKXJ46LOzgBm3kIwiuRfVYCtaw.webp'
export default function Museum () {
    return (
      <>
        <div>
          <div className=" relative bg-[#04101C] w-full h-[600px] py-10">
            <img src={museuma} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#04101C]/70 flex flex-col justify-center items-center gap-3">
              <h1 className="text-white font-oswald text-4xl md:text-7xl w-full max-w-[700px] text-center drop-shadow-black ">
                TOUR AND MUSEUM
              </h1>

              <p className="font-inter text-white text-xs md:text-base font-light max-w-[500px] text-center">
                Discover all the available visits to the Barça museum and the
                most exclusive Barça tours.
              </p>

              <button className="bg-[#d39820] hover:bg-[#8c6517] py-2 px-5 text-[#04101C] rounded-lg font-oswald font-semi text-sm md:text-lg cursor-pointer">
                VISIT NOW
              </button>
            </div>
          </div>
        </div>
      </>
    );
}