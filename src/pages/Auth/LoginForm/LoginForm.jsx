import React, { useState } from "react";
import "./LoginForm.css";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { login } from "../../../API/ApiCalling";
import { tokenStore } from "../../../store/Store";

function LoginForm() {
  const navigate = useNavigate();
  const [national_code, setNational_code] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = tokenStore();
  const data = {
    national_code,
    password,
  };
  const handleSubmit = () => {
    login(data, navigate,setToken);
  };
  return (
    <div className=" w-full h-screen flex justify-center items-center bg">
      <div dir="rtl" className="wrapper">
        <div>
          <h1> ورود </h1>
          <div className="input_box">
            <input
              onChange={(e) => setNational_code(e.target.value)}
              type="text"
              placeholder="کد ملی"
              required
            />{" "}
            <FaLock className="icon text-[rgb(207,190,0)]" />
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
          <div className="remmember_forget">
            <label>
              {" "}
              <input type="checkbox" /> مرا به خاطر بسپار
            </label>
            <a href="#"> فراموشی رمز عبور </a>
          </div>
          <button
            onClick={handleSubmit}
            className=" hover:text-white  transition-all text-gray-800 bg-[#deb317] pb-1 w-full rounded-full"
          >
            ورود
          </button>{" "}
          <div className="register">
            <p>
              حساب کاربری ندارید؟ <a href="/register">ثبت نام</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
