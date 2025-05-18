import React, { useEffect, useState } from "react";
import PhoneMenu from "../../../Components/PhoneMenu";
import { BiSupport } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { IoLockOpenOutline } from "react-icons/io5";
import { PiUsersFourLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { get_Profile } from "../../../API/ApiCalling";
import { tokenStore } from "../../../store/Store";

function Profile() {
  const [national_code, setNational_code] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const navigate = useNavigate();
  const { token,setToken } = tokenStore();
  const fetchData = async () => {
    const data = await get_Profile(token);
    if (data) {
      console.log(data);
      setPhone_number(data.phone_number);
      setNational_code(data.national_code);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" w-full min-h-screen pb-20 relative mt-24 flex max-w-[500px] items-center flex-col gap-2 ">
      <div className=" text-white w-[90%] flex justify-between items-center">
        <h5 className=" text-base">پروفایل</h5>
        <button className=" font-semibold flex justify-center items-center gap-2 rounded-lg p-1 bg-primary-gold text-primary-gray">
          پشتیبانی
          <BiSupport className=" text-2xl" />
        </button>
      </div>
      <div className=" w-[90%] flex flex-col"></div>
      <button className=" relative bg-white p-2 px-3 rounded-xl w-full flex justify-between items-center">
        <div className=" flex gap-3 flex-col items-start">
          <h5>{national_code}</h5>
          <p className=" text-gray-500">{phone_number}</p>
        </div>
        <p className=" bg-primary-gold text-xs absolute top-0 left-5 p-2 rounded-b-xl">
          احراز هویت شده
        </p>
      </button>
      <button
        onClick={() => navigate("history")}
        to="history"
        className=" relative bg-white p-2 px-3 rounded-xl w-full flex justify-between items-center"
      >
        <h5>تاریخچه</h5>
        <GoHistory className=" text-xl" />
      </button>
      <button className=" relative bg-white p-2 px-3 rounded-xl w-full flex justify-between items-center">
        <h5>تغییر رمز عبور</h5>
        <IoLockOpenOutline className=" text-xl" />
      </button>
      <button className=" relative bg-white p-2 px-3 rounded-xl w-full flex justify-between items-center">
        <h5>درباره ما</h5>
        <PiUsersFourLight className=" text-xl" />
      </button>
      <button onClick={()=>{
        setToken(null)
        navigate("/")
      }} className=" relative mt-2 bg-primary-gold p-2 px-3 rounded-xl w-full flex justify-center items-center">
        <h5>خروج از حساب</h5>
      </button>
      <PhoneMenu />
    </div>
  );
}

export default Profile;
