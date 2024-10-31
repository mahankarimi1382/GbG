import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Register = () => {
  return (
    <div className=" flex justify-center items-center w-full h-screen bg">
      <div dir="rtl" className="wrapper">
        <form action="">
          <h1> ثبت نام </h1>
          <div className="input_box">
            <input type="text" placeholder="شماره موبایل" required />{" "}
            <FaUser className="icon text-[rgb(207,190,0)]" />
          </div>

          <div className="input_box">
            <input type="text" placeholder="کد ملی" required />{" "}
            <FaUser className="icon text-[rgb(207,190,0)]" />
          </div>

          <div className="input_box">
            <input type="password" placeholder="رمز عبور" required />{" "}
            <FaLock className="icon text-[rgb(207,190,0)]" />
          </div>

          <div className="input_box">
            <input type="password" placeholder="تکرار رمز عبور " required />{" "}
            <FaLock className="icon text-[rgb(207,190,0)]" />
          </div>
          <button className=" text-gray-800 bg-[rgb(207,190,0)] w-full rounded-full">
            ثبت نام
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
