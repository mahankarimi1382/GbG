import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { register } from "../../../API/ApiCalling";
import { Eror } from "../../../utils/ToastAlert";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [national_code, setNational_code] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate=useNavigate()

  const data = {
    national_code,
    password,
    phone_number,
  };
  const handlesubmit = () => {
    if (password === password2) {
      register(data,navigate);
    } else {
      Eror("رمز عبور و تکرار آن باید یکی باشد");
    }
  };
  return (
    <div className=" flex justify-center items-center w-full h-screen bg">
      <div dir="rtl" className="wrapper">
        <div>
          <h1> ثبت نام </h1>
          <div className="input_box">
            <input
              onChange={(e) => setPhone_number(e.target.value)}
              type="text"
              placeholder="شماره موبایل"
              required
            />{" "}
            <FaUser className="icon text-[rgb(207,190,0)]" />
          </div>

          <div className="input_box">
            <input
              onChange={(e) => setNational_code(e.target.value)}
              type="text"
              placeholder="کد ملی"
              required
            />{" "}
            <FaUser className="icon text-[rgb(207,190,0)]" />
          </div>

          <div className="input_box">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="رمز عبور"
              required
            />{" "}
            <FaLock className="icon text-[rgb(207,190,0)]" />
          </div>

          <div className="input_box">
            <input
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              placeholder="تکرار رمز عبور "
              required
            />{" "}
            <FaLock className="icon text-[rgb(207,190,0)]" />
          </div>
          <button
            onClick={handlesubmit}
            className=" text-gray-800 bg-[rgb(207,190,0)] w-full rounded-full"
          >
            ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
