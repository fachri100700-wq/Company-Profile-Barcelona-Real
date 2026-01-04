import barcaLogo from "../assets/FC_Barcelona_(crest).svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function FooterPage() {
  return (
    <footer className="bg-[#04101C] py-10 px-6 md:py-15 md:px-10 border-t border-[#d39820]">
      {/* Container Utama: Default numpuk (col), kalau Tablet ke atas baru sebelahan (row) */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        
        {/* Bagian Kiri: Logo & Socials */}
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
          <div className="flex justify-center items-center gap-2">
            <img src={barcaLogo} alt="barcelona" className="w-[40px] md:w-[50px]" />
            <h1 className="font-oswald text-white text-xl md:text-2xl font-bold">
              FC BARCELONA
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4 text-2xl md:text-3xl text-white">
            <NavLink to="https://www.instagram.com/fcbarcelona">
              <FaInstagram className="hover:text-[#A50044] transition-colors" />
            </NavLink>
            <NavLink to="https://www.facebook.com/fcbarcelona">
              <FaFacebook className="hover:text-[#A50044] transition-colors"/>
            </NavLink>
            <NavLink to="https://www.youtube.com/user/fcbarcelona">
              <FaYoutube className="hover:text-[#A50044] transition-colors"/>
            </NavLink>
            <NavLink to="https://www.tiktok.com/@fcbarcelona">
              <FaTiktok className="hover:text-[#A50044] transition-colors"/>
            </NavLink>
          </div>

          {/* Copyright: Di HP numpuk, di Desktop sejajar */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2 font-oswald text-white mt-5 md:mt-10 text-sm md:text-base">
            <p>© Copyright FC Barcelona</p>
            <p className="font-light hidden md:block">|</p> {/* Pemisah cuma muncul di desktop */}
            <p className="font-light italic opacity-80">Official website of FC Barcelona</p>
          </div>
        </div>

        {/* Bagian Kanan: Links Menu */}
        {/* Di HP kita bikin 2 baris biar gak menuhi layar, di Tablet ke atas 1 baris */}
        <div className="flex justify-center items-center gap-4 md:gap-6 font-oswald text-white text-base md:text-lg">
          <NavLink to="/Home" className="hover:text-[#A50044] transition-colors">Home</NavLink>
          <NavLink to="/About-us" className="hover:text-[#A50044] transition-colors">About us</NavLink>
          <NavLink to="/Apparel" className="hover:text-[#A50044] transition-colors">Shop</NavLink>
          <NavLink to="/Teams" className="hover:text-[#A50044] transition-colors">Teams</NavLink>
          <NavLink to="/barca-news" className="hover:text-[#A50044] transition-colors">Barca News</NavLink>
        </div>
      </div>
    </footer>
  );
}