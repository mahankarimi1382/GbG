import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { PiHandCoinsFill } from "react-icons/pi";
import { PiCoinsFill } from "react-icons/pi";
import { BsCashCoin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function FastAccesSection() {
  const navigate=useNavigate()
  return (
    <div className=" w-[90%] flex justify-between items-center">
      <button className=" mb-10 w-[20%] aspect-square rounded-full border-2 border-primary-gold   bg-opacity-gray flex flex-col justify-center items-center">
        <PiHandCoinsFill className=" sm:text-5xl text-2xl text-opacity-gold" />
        <h2 className="  text-opacity-gold sm:text-base text-sm sm:font-semibold">
          خرید طلا
        </h2>
      </button>
      <button onClick={()=>navigate("/user/profile")} className=" mt-10 w-[20%] aspect-square bg-opacity-gold rounded-full flex flex-col justify-center items-center">
        <IoPersonCircleOutline className=" sm:text-5xl text-2xl text-opacity-gray" />
        <h2 className=" text-opacity-gray sm:text-base text-sm sm:font-semibold">
          پروفایل
        </h2>
      </button>
      <button className=" mb-10 w-[20%] aspect-square border-2 border-primary-gold bg-opacity-gray rounded-full flex flex-col justify-center items-center">
        <PiCoinsFill className=" sm:text-5xl text-2xl text-opacity-gold" />
        <h2 className=" text-opacity-gold text-sm sm:font-semibold">
          فروش طلا
        </h2>
      </button>
      <button onClick={()=>navigate("/user/wallet")} className=" mt-10 w-[20%] aspect-square bg-opacity-gold rounded-full flex flex-col justify-center items-center">
        <BsCashCoin className=" sm:text-5xl text-2xl text-opacity-gray" />
        <h2 className=" text-opacity-gray text-sm sm:text-base sm:font-semibold">
          کیف پول
        </h2>
      </button>
    </div>
  );
}

export default FastAccesSection;
