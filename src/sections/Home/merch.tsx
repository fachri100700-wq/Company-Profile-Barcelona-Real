import fotoBB from '../../assets/gift/B4z0NwbCcAEh7rq (1).jpg'
import { NavLink } from 'react-router-dom';

export default function MerchPage () {
    return (
      <>
        <div className="relative w-full h-[600px]">
          <img src={fotoBB} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center gap-5">
            <h1 className="text-white font-oswald text-4xl md:text-5xl w-full max-w-[500px] text-center drop-shadow-black">
              THE XMAS SPECIAL: UP TO 50% OFF
            </h1>

            <NavLink to="/Apparel">
              <button className="bg-[#d39820] hover:bg-[#8c6517] py-2 px-5 text-[#04101C] rounded-lg font-oswald font-semi text-sm md:text-lg cursor-pointer">
                SHOP NOW
              </button>
            </NavLink>
          </div>
        </div>
      </>
    );
}