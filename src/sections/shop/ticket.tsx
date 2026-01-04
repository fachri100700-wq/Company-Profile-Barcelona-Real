import Football from "../../assets/ticket/barca football.webp";
import WomenF from "../../assets/ticket/women football (1).webp";
import Basket from "../../assets/ticket/barca basket (1) (1).jpg";
import Handball from "../../assets/ticket/barca handball.webp";
import Futsall from "../../assets/ticket/barca futsal.webp";
import { VscArrowRight } from "react-icons/vsc";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Museum from "./musem";
export default function Ticket() {
  
  const barcaTiket = [
    {
      image: Football,
      ticket: "MEN'S FOOTBALL",
    },
    {
      image: WomenF,
      ticket: "WOMEN'S FOOTBALL",
    },
    {
      image: Basket,
      ticket: "BASKET",
    },
    {
      image: Handball,
      ticket: "HANDBALL",
    },
    {
      image: Futsall,
      ticket: "FUTSALL",
    },
  ];
  
  return (
    <>
      <div className="bg-[#04101C] py-20 md:py-30 px-8 md:px-10 flex flex-col gap-7 md:gap-10">
        <h1 className="font-oswald text-5xl md:text-7xl text-white flex flex-col gap-10">
          BARCA TICKET
        </h1>
        <div className="flex w-full h-1">
          <span className="w-1/2 bg-[#004D98]" />
          <span className="w-1/2 bg-[#A50044]" />
        </div>

        <div className="relative flex justify-between items-center">
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            className="mySwiper !pb-12"
            loop={true}
          >
            {/* =========================slide 1========================= */}
            {barcaTiket.map((barcaTiket, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-75">
                  <img
                    src={barcaTiket.image}
                    alt=""
                    className="flex-1 w-130 h-full object-cover rounded-2xl"
                  />

                  <div className="group cursor-pointer absolute inset-0 bg-gradient-to-t from-[#04101C]/100 via-[#04101C]/50 to-transparent flex items-end px-5 pb-10 gap-3">
                    <h2 className="text-white font-oswald text-5xl transition-colors duration-200 group-hover:text-[#d39820]">
                      {barcaTiket.ticket}
                    </h2>
                    <VscArrowRight className="text-white text-4xl transition-transform duration-200 group-hover:translate-x-3 group-hover:text-[#d39820]" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Museum />
    </>
  );
}
