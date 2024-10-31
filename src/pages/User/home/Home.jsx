import React from "react";
import WalletSection from "../../../container/home/WalletSection";
import FastAccesSection from "../../../container/home/FastAccesSection";
import ChartSection from "../../../container/home/ChartSection";
import { BiSupport } from "react-icons/bi";
import SwiperSection from "../../../container/home/SwiperSection";
import PhoneMenu from "../../../Components/PhoneMenu";

function Home() {
  return (
    <div className=" w-full pb-20 relative mt-24 flex justify-center max-w-[500px] items-center flex-col gap-4 ">
      <div className=" text-white w-[90%] flex justify-between items-center">
        <h5>ماهان کریمی</h5>
        <button className=" font-semibold flex justify-center items-center gap-2 rounded-lg p-1 bg-primary-gold text-primary-gray">
          پشتیبانی
          <BiSupport className=" text-2xl" />
        </button>
      </div>
      <WalletSection />
      <FastAccesSection />
      <SwiperSection />
      <ChartSection />
      <PhoneMenu />
    </div>
  );
}

export default Home;
