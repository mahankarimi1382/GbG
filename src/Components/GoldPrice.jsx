import React from "react";
import { FaCoins } from "react-icons/fa";

const GoldPrice = () => {
  return (
    <div className=" w-full flex items-center bg-black justify-center">
      <div className=" lg:text-xl md:text-lg sm:text-base w-[60%] min-w-[280px] text-xs absolute top-5 shadow-xl p-3 bg-[#deb317] rounded-full text-[#393d3f] flex justify-between items-center">
        <p className=" flex justify-center items-center flex-row-reverse gap-2">
          قیمت لحظه ای طلا:
          <FaCoins />
        </p>
        <p> 30000 ریال</p>
      </div>
    </div>
  );
};

export default GoldPrice;
