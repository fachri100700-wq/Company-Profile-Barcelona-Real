import { useState } from "react";
import home from "../../assets/apparel/jd_FN8797-456_a.webp"
import away from "../../assets/apparel/HJ4603-784_431735711_D_A_1X1_4ebdb94b-be58-4c4a-bceb-d3900f4fdc4f.webp"
import third from "../../assets/apparel/Imagen7_d836fcb6-6f06-4f05-91f2-6750e00cb0d8.webp"
import womenhome from "../../assets/apparel/HJ5210-455_419384899_D_A_1X1_6174322e-594d-4542-91f2-6e6fc229931e.webp"
import womenaway from "../../assets/apparel/AURORA_HJ5094-783_PHSFM001-2000-Champions.webp"
import keepoer from "../../assets/apparel/2da401e3544a42c6a540791b0bbfd7aa (1).webp";
import traininga from "../../assets/apparel/1041223_Main_2017723.webp";
import trainingb from "../../assets/apparel/VO250930A60488_med (1).webp";
import womentraining from "../../assets/apparel/1034382_Main_2026072 (1).webp"

export default function Apparel() {
  const [page, setPage] = useState(1); 
  
  const ApparelOne = [
    {
      image: home,
      name: "Home Kit 24/25",
      price: "€99.00",
      discount: "€79.00",
    },
    {
      image: away,
      name: "Away Kit 24/25",
      price: "€99.00",
      discount: "€79.00",
    },
    {
      image: keepoer,
      name: "Keeper Kit 24/25",
      price: "€99.00",
      discount: "€79.00",
    },
    {
      image: third,
      name: "Third Kit 24/25",
      price: "€99.00",
      discount: "€79.00",
    },
    {
      image: womenhome,
      name: "Women Home Kit 24/25",
      price: "€99.00",
      discount: "€79.00",
    },
    {
      image: womenaway,
      name: "Women Away Kit 24/25",
      price: "€99.00",
      discount: "€79.00",
    },
  ];

  const ApparelTwo = [
    {
      image: traininga,
      name: "Training Kit 24/25",
      price: "€99.00",
      discount: "€79.00",
    },
    {
      image: trainingb,
      name: "Training Kit 24/25",
      price: "€99.00",
      discount: "€79.00",
    },
    {
      image: womentraining,
      name: "Women Training Kit 24/25",
      price: "€99.00",
      discount: "€79.00",
    },
  ];

  return (
    <div className="bg-[#04101C] py-20 md:py-30 px-8 md:px-10 flex flex-col gap-7 md:gap-10">
      <h1 className="font-oswald text-5xl md:text-7xl text-white">APPAREL</h1>
      <div className="flex w-full h-1">
        <span className="w-1/2 bg-[#004D98]" />
        <span className="w-1/2 bg-[#A50044]" />
      </div>

      {/* ===================== SLIDE 1 ================== */}
      {page === 1 && (
        <div className="grid grid-cols md:grid-cols-3 gap-6">
          {ApparelOne.map((ApparelOne, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-4">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src={ApparelOne.image}
                  alt="home jersey"
                  className="h-full w-full object-cover object-top rounded-2xl"
                />
              </div>
              <p className="text-white font-oswald text-xl mt-5">
                {ApparelOne.name}
              </p>
              <div className="flex items-center gap-3">
                <p className=" line-through text-white/30 italictext-[#d39820] text-xs ">
                  {ApparelOne.price}
                </p>
                <p className="text-[#d39820]">{ApparelOne.discount}</p>
              </div>
              <button className="bg-[#A50044] font-oswald text-white items-center w-full rounded-2xl py-1 mt-2 hover:bg-[#5f0128] cursor-pointer">
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      )}

      {/* ===================== SLIDE 2 ================== */}
      {page === 2 && (
        <div className="grid grid-cols md:grid-cols-3 gap-6">
          {ApparelTwo.map((ApparelTwo, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-4">
              <div className="h-80 w-full overflow-hidden">
                <img
                  src={ApparelTwo.image}
                  alt="training jersey"
                  className="h-full w-full object-cover object-top rounded-2xl"
                />
              </div>
              <p className="text-white font-oswald text-xl mt-5">
                {ApparelTwo.name}
              </p>
              <div className="flex items-center gap-3">
                <p className=" line-through text-white/30 italictext-[#d39820] text-xs ">
                  {ApparelTwo.discount}
                </p>
                <p className="text-[#d39820]">{ApparelTwo.price}</p>
              </div>
              <button className="bg-[#A50044] font-oswald text-white items-center w-full rounded-2xl py-1 mt-2 hover:bg-[#5f0128] cursor-pointer">
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => setPage(1)}
          className={`font-oswald text-2xl cursor-pointer ${
            page === 1
              ? "text-[#d39820] border-b-2 border-[#d39820]"
              : "text-white opacity-50 hover:opacity-100"
          }`}
        >
          1
        </button>

        <button
          onClick={() => setPage(2)}
          className={`font-oswald text-2xl cursor-pointer ${
            page === 2
              ? "text-[#d39820] border-b-2 border-[#d39820]"
              : " text-white opacity-50 hover:opacity-100"
          }`}
        >
          2
        </button>
      </div>
    </div>
  ); };