import React from "react";

function WelcomePage() {
  return (
    <div className=" gap-5 w-full h-screen bg flex flex-col justify-center items-center">
      <h5 className=" text-white flex justify-center items-center gap-5 text-5xl">
        به
        <span className=" text-[rgb(207,190,0)] font-semibold font-sans">
          GBG
        </span>
        خوش آمدید
      </h5>
      <p className=" text-3xl text-gray-200 flex justify-center items-center gap-3">
        پلتفرمی که توش میتونی تنها با 10,000 تومان
        <span className="text-[rgb(207,190,0)]">طلا</span>
        بخری
      </p>
      <div className=" mt-16 flex justify-center items-center gap-5">
        <button className=" p-3 rounded-full text-xl w-52 bg-[rgb(207,190,0)] text-gray-800">
          ثبت نام
        </button>
        <button className="  p-3 border-[rgb(207,190,0)] text-[rgb(207,190,0)] border-2 rounded-full text-xl w-52">
          ورود
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
