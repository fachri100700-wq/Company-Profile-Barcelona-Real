import { useState } from "react";
import barcaLogo from "../assets/FC_Barcelona_(crest).svg";
import { NavLink, useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { useAuthStore } from "../stores/useAuthStore";

export default function NavBarPage() {
  const [show, setShow] = useState(false);
  const [showshop, setShowShop] = useState(false);

  const { email, setEmail } = useAuthStore();
  const navigate = useNavigate()

  const logout = () => {
    setEmail(""),
    navigate("/home")
  }
  
  return (
    <>
      <nav className="fixed z-[50] w-full bg-white">
        <div className="flex justify-between items-center px-5 py-2 shadow-3xl drop-shadow-black">
          <NavLink
            to="/Home"
            className="cursor-pointer hover:opacity-50 duration-300"
          >
            <img
              src={barcaLogo}
              alt="barcelona"
              className="w-[40px] md:w-[50px]"
            />
          </NavLink>

          <button
            className="text-2xl md:hidden cursor-pointer hover:scale-110 duration-300"
            onClick={() => {
              if (show || showshop) {
                // 1. Kalau ada salah satu yang kebuka (tanda X muncul), RESET SEMUA jadi false
                setShow(false);
                setShowShop(false);
              } else {
                // 2. Kalau semuanya lagi ketutup, baru deh buka menu 'show'
                setShow(true);
              }
            }}
          >
            {show || showshop ? <FiX /> : <HiDotsHorizontal />}
          </button>

          <div className="flex gap-8 text-lg font-oswald hidden md:block md:flex">
            <NavLink
              to="/About-us"
              className="cursor-pointer hover:text-[#004D98] hover:border-b-3 duration-200"
            >
              About Us
            </NavLink>
            <button
              className="cursor-pointer hover:text-[#A50044] hover:border-b-3 duration-200"
              onClick={() => setShowShop(!showshop)} //biar true dan false
            >
              Shop
            </button>
            <NavLink
              to="/Teams"
              className="cursor-pointer hover:text-[#004D98] hover:border-b-3 duration-200"
            >
              Teams
            </NavLink>
            <NavLink
              to="/barca-news"
              className="cursor-pointer hover:text-[#A50044] hover:border-b-3 duration-200"
            >
              Barca News
            </NavLink>
          </div>

          {email ? (
            <div className="flex items-center gap-4 font-oswald font-bold text-sm md:text-base">
              <div className="hidden sm:flex flex-col items-end border-r border-slate-200 pr-4">
                <span className="text-[10px] text-[#A50044]/40 font-inter uppercase tracking-[0.2em] leading-none">
                  Hello Cullers
                </span>
                <p className="text-[#004D98] font-bold text-sm lowercase leading-tight">
                  {email}
                </p>
              </div>
              <button
                onClick={logout}
                className="shrink-0 bg-[#A50044] rounded-full text-white text-sm md:text-base px-4 md:px-6 py-1.5 hover:bg-[#67012b] cursor-pointer"
              >
                LOG OUT
              </button>
            </div>
          ) : (
            <div className="flex gap-1 font-bold">
              <NavLink
                to="/Login"
                className="border-2 border-[#A50044] text-[#A50044] rounded-full text-sm md:text-base px-4 md:px-6 py-1.5 hover:bg-[#A50044] hover:text-white cursor-pointer"
              >
                LOGIN
              </NavLink>
              <NavLink
                to="/Register"
                className="bg-[#A50044] rounded-full text-white text-sm md:text-base px-4 md:px-6 py-1.5 hover:bg-[#67012b] cursor-pointer"
              >
                SIGN UP
              </NavLink>
            </div>
          )}
        </div>

        {show && (
          <div className="w-full flex flex-col items-center font-bold border-t gap-1 mt-1">
            <NavLink
              to="/About-us"
              className="cursor-pointer hover:text-[#004D98] hover:border-b-3 duration-200"
              onClick={() => setShow(false)}
            >
              About Us
            </NavLink>
            <button
              className="cursor-pointer hover:text-[#A50044] hover:border-b-3 duration-200"
              onClick={() => {
                setShow(false);
                setShowShop(true);
              }}
            >
              Shop
            </button>
            <NavLink
              to="/Teams"
              className="cursor-pointer hover:text-[#004D98] hover:border-b-3 duration-200"
              onClick={() => setShow(false)}
            >
              Teams
            </NavLink>
            <NavLink
              to="/barca-news"
              className="cursor-pointer hover:text-[#A50044] hover:border-b-3 duration-200"
              onClick={() => setShow(false)}
            >
              Barca News
            </NavLink>
          </div>
        )}

        {showshop && (
          <div className="w-full flex flex-col font-oswald items-center border-t gap-2 mt-1">
            <NavLink
              to="/Apparel"
              className="cursor-pointer hover:text-[#004D98] hover:border-b-3 duration-200"
              onClick={() => setShowShop(false)}
            >
              Apparel
            </NavLink>
            <NavLink
              to="/Ticket"
              className="cursor-pointer hover:text-[#004D98] hover:border-b-3 duration-200"
              onClick={() => setShowShop(false)}
            >
              Ticket
            </NavLink>
          </div>
        )}

        <div className="flex w-full h-1.5">
          <div className="w-1/2 bg-[#004D98]"></div>
          <div className="w-1/2 bg-[#A50044]"></div>
        </div>
      </nav>
    </>
  );
}
