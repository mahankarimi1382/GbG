import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { GiCardExchange } from "react-icons/gi";

function WalletSection() {
  return (
    <div className=" w-[90%] flex gap-2">
      <div className=" flex flex-col w-1/2 gap-3">
        <div className=" w-full h-[100px] justify-center items-center flex flex-col gap-1 text-xl bg-white rounded-3xl shadow-md">
          <h5 className=" text-gray-600">موجودی کیف پول</h5>
          <p>0</p>
          <p className=" text-opacity-gray">ریال</p>
        </div>
        <div className=" w-full h-[100px] bg-gray-800 bg-opacity-50 rounded-3xl flex flex-col justify-center items-center shadow-md">
          <h5 className=" text-primary-gold text-xl">تبدیل پول به طلا</h5>
          <GiCardExchange className=" text-5xl text-primary-gold" />
        </div>
      </div>
      <div className=" flex flex-col w-1/2 justify-between">
        <div className=" w-full h-[100px] bg-gray-800 bg-opacity-50 rounded-3xl flex flex-col justify-center items-center shadow-md">
          <h5 className=" text-primary-gold text-xl">شارژ کیف پول</h5>
          <GiWallet className=" text-5xl text-primary-gold" />
        </div>
        <div className=" w-full h-[100px] justify-center items-center flex flex-col gap-1 text-xl bg-white rounded-3xl shadow-md">
          <h5 className=" text-primary-gold">موجودی طلا</h5>
          <p>0</p>
          <p className="  text-opacity-gray">گرم</p>
        </div>
      </div>{" "}
    </div>
    // <div className=" w-[90%] rounded-xl">
    //   <div className=" w-full sm:text-lg h-48 p-5 gap-8 bg-white  rounded-xl flex flex-col justify-center items-center">
    //     <h5 className=" -mt-5">2020 - 4417 - 4471 - 4801</h5>

    //     <div className=" w-full text-primary-gray flex justify-between items-center">
    //       <div className=" flex items-center gap-2">
    //         <h5>موجودی</h5>
    //         <p className=" text-primary-gray text-xs">(طلا)</p>
    //         <FaArrowLeft className=" text-sm text-primary-gray" />
    //       </div>
    //       <h5 className=" text-primary-gray">0 گرم</h5>
    //     </div>
    //     <div className=" w-full text-primary-gray    flex justify-between items-center">
    //       <div className=" flex items-center gap-2">
    //         <h5>معادل</h5>
    //         <p className=" text-primary-gray text-xs">(ریال)</p>
    //         <FaArrowLeft className=" text-sm text-primary-gray" />
    //       </div>
    //       <h5 className=" text-primary-gray">0 ریال</h5>
    //     </div>
    //   </div>
    // </div>
  );
}

export default WalletSection;
