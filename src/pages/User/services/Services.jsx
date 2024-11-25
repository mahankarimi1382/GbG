import React from "react";
import { PiHandDeposit } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { PiHandWithdraw } from "react-icons/pi";
import { MdCardGiftcard } from "react-icons/md";
import PhoneMenu from "../../../Components/PhoneMenu";

function Services() {
  return (
    <div className=" max-w-[500px] w-full  min-h-screen mt-24  items-center flex flex-col ">
      <div className=" gap-3 w-[90%] flex flex-col items-start ">
        <h2 className=" text-white">خدمات</h2>
        <div className=" p-2 w-full rounded-xl h-12 bg-white flex items-center justify-between">
          <div className=" flex uppercase items-center gap-2">
            <PiHandDeposit className=" text-primary-gray text-3xl rounded-lg" />
            <h5>انتقال طلا</h5>
          </div>
          <IoIosArrowBack className=" text-primary-gold" />
        </div>
        <div className=" p-2 w-full rounded-xl h-12 bg-white flex items-center justify-between">
          <div className=" flex uppercase items-center gap-2">
            <PiHandWithdraw className=" text-primary-gray text-3xl rounded-lg" />
            <h5>دریافت طلا</h5>
          </div>
          <IoIosArrowBack className=" text-primary-gold" />
        </div>
        <div className=" p-2 w-full rounded-xl h-12 bg-white flex items-center justify-between">
          <div className=" flex uppercase items-center gap-2">
            <MdCardGiftcard className=" text-primary-gray text-3xl rounded-lg" />
            <h5>کارت هدیه</h5>
          </div>
          <IoIosArrowBack className=" text-primary-gold" />
        </div>
      </div>
      <PhoneMenu />
    </div>
  );
}

export default Services;
