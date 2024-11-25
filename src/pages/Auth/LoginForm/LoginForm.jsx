import React from "react";
import "./LoginForm.css";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate=useNavigate()
  return (
    <div className=" w-full h-screen flex justify-center items-center bg">
      <div dir="rtl" className="wrapper">
        <form action="">
          <h1> ورود </h1>
          <div className="input_box">
            <input type="text" placeholder="شماره موبایل" required />{" "}
            <FaLock className="icon text-[rgb(207,190,0)]" />
          </div>
          <div className="input_box">
            <input type="password" placeholder="رمز عبور" required />{" "}
            <FaLock className="icon text-[rgb(207,190,0)]" />
          </div>
          <div className="remmember_forget">
            <label>
              {" "}
              <input type="checkbox" /> مرا به خاطر بسپار
            </label>
            <a href="#"> فراموشی رمز عبور </a>
          </div>
          <button onClick={()=>navigate("/user/home")} className=" hover:text-white  transition-all text-gray-800 bg-[#deb317] pb-1 w-full rounded-full">
            ورود
          </button>{" "}
          <div className="register">
            <p>
              حساب کاربری ندارید؟ <a href="../Register/register">ثبت نام</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
