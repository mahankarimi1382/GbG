import React, { useEffect, useState } from "react";
import { GiWallet } from "react-icons/gi";
import { GiCardExchange } from "react-icons/gi";

function WalletSection() {
  const [goldRemain, setGoldRemain] = useState(26);
  const [goldFull, setGoldFull] = useState(10);
  const [goldScale, setGoldScale] = useState(10);

  useEffect(() => {
    if (goldRemain > 9) {
      setGoldFull(50);
      setGoldScale(2);
    }
  }, [goldRemain]);
  return (
    <div className=" w-[90%] flex gap-2">
      <div className=" flex flex-col w-1/2 gap-3">
        <div className=" w-full h-[100px] justify-center items-center flex flex-col gap-1 text-xl bg-white rounded-3xl shadow-md">
          <h5 className=" text-gray-600">موجودی کیف پول</h5>
          <p>0</p>
          <p className=" text-opacity-gray">ریال</p>
        </div>
        <button className=" w-full h-[100px] bg-opacity-gray rounded-3xl flex flex-col justify-center items-center shadow-md">
          <h5 className=" text-primary-gold text-xl">تبدیل پول به طلا</h5>
          <GiCardExchange className=" text-5xl text-primary-gold" />
        </button>
      </div>
      <div className=" flex flex-col relative  w-1/2 justify-between">
        <button className=" w-full h-[100px] bg-opacity-gray rounded-3xl flex flex-col justify-center items-center shadow-md">
          <h5 className=" text-primary-gold text-xl">شارژ کیف پول</h5>
          <GiWallet className=" text-5xl text-primary-gold" />
        </button>
        <div className=" w-full h-[100px] justify-center relative items-center flex flex-col gap-1 text-xl bg-white rounded-3xl shadow-md">
          <h5 className=" z-10  text-opacity-gray">موجودی طلا</h5>
          <p className=" z-10">
            {goldRemain}/{goldFull}
          </p>
          <p className=" z-10 text-opacity-gray">گرم</p>
          <span
            style={{ height: goldRemain * goldScale }}
            className="w-full bottom-0 z-0  rounded-b-3xl absolute rounded-tl-[10%] rounded-tr-[18%] bg-primary-gold"
          ></span>
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
