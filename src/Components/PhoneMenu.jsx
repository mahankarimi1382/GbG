import React from "react";
import { FiHome } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiApps2AddLine } from "react-icons/ri";
import { TfiWallet } from "react-icons/tfi";
import { IoPersonCircle } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function PhoneMenu() {
  const Location = useLocation();

  const pathname = Location.pathname;
  console.log(pathname);
  return (
    <div className=" shadow-2xl fixed max-w-[500px] w-[97%] min-w-[320px] py-2 pt-3 bottom-0 z-50 flex bg-primary-gold rounded-xl justify-around items-center  p-1">
      <Link
        to="/user/home"
        className={`${
          pathname === "/user/home" && "text-white"
        } transition-all hover:no-underline hover:text-white flex flex-col justify-center items-center gap-2`}
      >
        <FiHome className=" text-2xl" />
        خانه
        {pathname === "/user/home" && (
          <hr className=" border-white border-[5px] w-full rounded-full" />
        )}
      </Link>
      <Link
        to="/user/notifications"
        className={`${
          pathname === "/user/notifications" && "text-white"
        } transition-all hover:no-underline hover:text-white flex flex-col justify-center items-center gap-2`}
      >
        <IoNotificationsOutline className=" text-2xl" />
        اعلانات
        {pathname === "/user/notifications" && (
          <hr className=" border-white border-[5px] w-full rounded-full" />
        )}
      </Link>
      <Link
        to="/user/profile"
        className={`transition-all group hover:text-gray-800 hover:no-underline  relative flex justify-center items-center `}
      >
        <h5
          className={`${
            pathname === "/user/profile"
              ? "border-white"
              : "border-primary-gold"
          } border-[3px] transition-all group-hover:border-white  lg:w-20 w-16 aspect-square rounded-full lg:text-base text-sm  bg-primary-gray text-primary-gold -mt-20 flex flex-col justify-center items-center  absolute`}
        >
          <IoPersonCircle
            className={`${
              pathname === "/user/profile" ? "text-white" : "text-primary-gold"
            } transition-all group-hover:text-white text-3xl lg:text-5xl `}
          />
        </h5>
        <h5
          className={`${
            pathname === "/user/profile" && "text-white"
          } group-hover:text-white transition-all -mb-[28px]`}
        >
          پروفایل
        </h5>
      </Link>
      <Link
        to="/user/services"
        className={` ${
          pathname === "/user/services" && "text-white"
        } transition-all hover:no-underline hover:text-white  flex flex-col justify-center items-center gap-2`}
      >
        <RiApps2AddLine className=" text-2xl" />
        خدمات
        {pathname === "/user/services" && (
          <hr className=" border-white border-[5px] w-full rounded-full" />
        )}
      </Link>
      <Link
        to="/user/wallet"
        className={`${pathname === "/user/wallet"&&"text-white"} transition-all hover:no-underline hover:text-white flex flex-col justify-center items-center gap-2`}
      >
        <TfiWallet className=" text-2xl" />
        کیف پول
        {pathname === "/user/wallet" && (
          <hr className=" border-white border-[5px] w-full rounded-full" />
        )}
      </Link>
    </div>
  );
}

export default PhoneMenu;
