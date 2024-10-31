import React from "react";
import { FiHome } from "react-icons/fi";
import { GoHistory } from "react-icons/go";
import { RiApps2AddLine } from "react-icons/ri";
import { TfiWallet } from "react-icons/tfi";

function PhoneMenu() {
  return (
    <div className=" fixed w-[500px] bottom-0 z-50 flex bg-primary-gold rounded-xl justify-around items-center py-2 pt-3">
      <button className=" flex flex-col justify-center items-center gap-2">
        <FiHome className=" text-2xl" />
        خانه
      </button>
      <button className=" flex flex-col justify-center items-center gap-2">
        <GoHistory className=" text-2xl" />
        تاریخچه
      </button>
      <button className=" flex flex-col justify-center items-center gap-2">
        <RiApps2AddLine className=" text-2xl" />
        خدمات
      </button>
      <button className=" flex flex-col justify-center items-center gap-2">
        <TfiWallet className=" text-2xl" />
        کیف پول
      </button>
    </div>
  );
}

export default PhoneMenu;
