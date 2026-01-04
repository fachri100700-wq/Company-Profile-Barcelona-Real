import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation} from "swiper/modules";
import fotoA from "../../assets/Hero/1.-Supercopa-d-Espanya-2-5-12-1-Marc-Graupera (1).webp";
import fotoB from "../../assets/Hero/23.-Retorn-Spotify-Camp-Nou-22-11-Germ-n-Parga (1).webp";
import fotoC from "../../assets/Hero/4.-Bar-a-4-0-Borussia-9-4-Sense-autor (1).webp";
import fotoD from "../../assets/Hero/5.-Bar-a-4-3-Celta-de-Vigo-19-4-Marc-Graupera (1).webp";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroPage() {
  return (
    <>
      <div className="bg-[#04101C]">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          {/*========================slide 1==================================  */}
          <SwiperSlide>
            <div className="w-full h-[700px] overflow-hidden relative">
              <img
                src={fotoA}
                alt="Barca Hero"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04101C]/100 via-[#04101C]/30 to-transparent flex items-end px-5 md:px-10 pb-20">
                <div className="max-w-[600px] text-white">
                  <h1 className="font-oswald text-5xl md:text-7xl font-semibold drop-shadow-lg">
                    MORE THAN A CLUB
                  </h1>
                  <p className="font-inter text-sm md:text-base mt-3">
                    Discover the heart and soul of FC Barcelona. From our
                    legendary history to the philosophy that defines us.
                  </p>
                  <NavLink to="/About-us">
                    <button className="bg-[#A50044] hover:bg-[#004D98] text-white font-oswald font-bold text-sm md:text-base px-6 py-3 rounded-full transition-all duration-300 mt-3 cursor-pointer">
                      EXPLORE MORE
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*========================slide 2==================================  */}
          <SwiperSlide>
            <div className="w-full h-[700px] overflow-hidden relative">
              <img
                src={fotoB}
                alt="Barca Hero"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04101C]/100 via-[#04101C]/30 to-transparent flex items-end px-5 md:px-10 pb-20">
                <div className="max-w-[600px] text-white">
                  <h1 className="font-oswald text-5xl md:text-7xl font-semibold drop-shadow-lg">
                    WITNESS THE MAGIC LIVE
                  </h1>
                  <p className="font-inter text-sm md:text-base mt-3">
                    Feel the atmosphere, hear the roar, and be part of the
                    legend at the Spotify Camp Nou.
                  </p>
                  <NavLink to="/Ticket">
                    <button className="bg-[#004D98] hover:bg-[#A50044] text-white text-sm md:text-base font-oswald font-bold px-6 py-3 rounded-full transition-all duration-300 mt-3 cursor-pointer">
                      GET TICKET
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*========================slide 3==================================  */}
          <SwiperSlide>
            <div className="w-full h-[700px] overflow-hidden relative">
              <img
                src={fotoC}
                alt="Barca Hero"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04101C]/100 via-[#04101C]/30 to-transparent flex items-end px-5 md:px-10 pb-20">
                <div className="max-w-[600px] text-white">
                  <h1 className="font-oswald text-5xl md:text-7xl font-semibold drop-shadow-lg">
                    WEAR THE COLORS WITH PRIDE
                  </h1>
                  <p className="font-inter text-sm md:text-base mt-3">
                    Get the latest official kits and exclusive collections. Look
                    like a champion, on and off the pitch.
                  </p>
                  <NavLink to="/Apparel">
                    <button className="bg-[#A50044] hover:bg-[#004D98] text-white text-sm md:text-base font-oswald font-bold px-6 py-3 rounded-full transition-all duration-300 mt-3 cursor-pointer">
                      SHOP NOW
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*========================slide 4==================================  */}
          <SwiperSlide>
            <div className="w-full h-[700px] overflow-hidden relative">
              <img
                src={fotoD}
                alt="Barca Hero"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04101C]/100 via-[#04101C]/30 to-transparent flex items-end px-5 md:px-10 pb-20">
                <div className="max-w-[600px] text-white">
                  <h1 className="font-oswald text-5xl md:text-7xl font-semibold drop-shadow-lg">
                    STAY AHEAD OF THE GAME
                  </h1>
                  <p className="font-inter text-sm md:text-base mt-3">
                    Never miss a beat. Get the latest transfer news, match
                    reports, and exclusive behind-the-scenes updates.
                  </p>
                  <NavLink to="/barca-news">
                    <button className="bg-[#004D98] hover:bg-[#A50044] text-white text-sm md:text-base font-oswald font-bold px-6 py-3 rounded-full transition-all duration-300 mt-3 cursor-pointer">
                      READ NOW
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
