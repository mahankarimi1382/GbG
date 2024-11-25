import React from "react";
import { BiSupport } from "react-icons/bi";
import { FiPlusSquare } from "react-icons/fi";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { RiExchangeBoxLine } from "react-icons/ri";
import PhoneMenu from "../../../Components/PhoneMenu";
import { TbArrowsExchange } from "react-icons/tb";

function Wallet() {
  return (
    <div className=" min-h-screen w-full pb-20 relative mt-24 flex  max-w-[500px] items-center flex-col gap-4 ">
      <div className=" text-white w-[90%] flex justify-between items-center">
        <h5 className=" text-base">کیف پول</h5>
        <button className=" font-semibold flex justify-center items-center gap-2 rounded-lg p-1 bg-primary-gold text-primary-gray">
          پشتیبانی
          <BiSupport className=" text-2xl" />
        </button>
      </div>
      <div className=" w-[90%] p-3 py-4 gap-8 rounded-xl bg-white flex flex-col">
        <div className=" flex flex-col justify-center items-center">
          <h5 className=" text-xl text-primary-gold">
            2020 - 4417 - 4471 - 4801
          </h5>
        </div>
        <div className=" flex justify-between items-center">
          <h5>موجودی کیف پول:</h5>
          <h5>0 ریال</h5>
        </div>
        <hr className=" border-primary-gold" />
        <div className=" flex justify-between items-center">
          <h5 className=" flex justify-center gap-1 items-center">
            موجودی
            <span className=" text-primary-gold">GBG</span>:
          </h5>
          <h5 className=" flex justify-center items-center gap-1">
            0<span className=" text-primary-gold">GBG</span>
          </h5>
        </div>
        <div className=" flex items-center justify-between">
          <button className=" gap-1 bg-primary-gold rounded-xl h-20 aspect-square flex flex-col justify-center items-center">
            <FiPlusSquare className=" text-3xl" />
            <h5 className=" text-xs">شارژ کیف پول</h5>
          </button>
          <button className=" gap-1 bg-primary-gray text-primary-gold rounded-xl h-20 aspect-square flex flex-col justify-center items-center">
            <MdOutlineCurrencyExchange className=" text-3xl" />
            <h5 className=" text-xs">تبدیل به طلا</h5>
          </button>
          <button className=" gap-1 bg-primary-gold rounded-xl h-20 aspect-square flex flex-col justify-center items-center">
            <RiExchangeBoxLine className=" text-3xl" />
            <h5 className=" text-xs">انتقال طلا به طلا</h5>
          </button>
        </div>
        <div className=" bg-primary-gray p-2 rounded-xl text-white gap-5 flex justify-center items-center">
          <h5 className=" w-36 text-right">1 GBG</h5>
          <TbArrowsExchange className=" text-2xl text-primary-gold" />
          <h5 className=" w-36">1 میلی گرم طلا</h5>
        </div>
      </div>

      <PhoneMenu />
    </div>
  );
}

export default Wallet;
