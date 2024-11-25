import React from "react";
import { SiTicktick } from "react-icons/si";
import { RxCrossCircled } from "react-icons/rx";
import PhoneMenu from "../../../../Components/PhoneMenu";

function History() {
  const transActions = [
    {
      id: 1,
      isSucsec: true,
      caption:
        " مبلغ 15,000 تومان در تاریخ 1403/06/12 ساعت 19:49:32 از کیف پول کاهش یافت.",
      icon: "برداشت از کیف پول",
    },
    {
      id: 2,
      isSucsec: true,
      caption:
        " مبلغ 15,000 در تاریخ 1403/06/12 ساعت 19:49:32 به کیف پول واریز شد.",
      icon: "واریز به کیف پول",
    },
    {
      id: 3,
      isSucsec: false,
      caption:
        "تراکنش 349871259 در تاریخ 1403/06/12 ساعت 19:49:32 نا موفق بود.",
      icon: "نا موفق",
    },
    {
      id: 4,
      isSucsec: true,
      caption:
        " مبلغ 15,000 تومان بابت سفارش 349871259 در تاریخ 1403/06/12 ساعت 19:49:32 از کیف پول کاهش یافت.",
      icon: "تبدیل به طلا",
    },
    {
      id: 5,
      isSucsec: false,
      caption:
        " مبلغ 15,000 تومان بابت سفارش 349871259 در تاریخ 1403/06/12 ساعت 19:49:32 از کیف پول کاهش یافت.",
      icon: "نا موفق",
    },
  ];
  return (
    <div className=" min-h-screen mx-2 pb-20  relative mt-24 flex  max-w-[500px] items-center flex-col gap-4 ">
      <div className=" flex mb-5 flex-col w-full gap-3 bg-white px-2 py-3 rounded-xl">
        {transActions.map((item) => {
          return (
            <div
              className={` ${
                item.isSucsec ? "border-primary-gold" : "border-red-600"
              } pb-4 w-full text-xs p-2 gap-2  border-b-2 relative items-center flex`}
              key={item.id}
            >
              {item.isSucsec ? (
                <SiTicktick className=" text-primary-gold text-xl" />
              ) : (
                <RxCrossCircled className=" text-red-600 text-2xl" />
              )}

              <p className={!item.isSucsec ? " text-right" : " text-right"}>
                {item.caption}
              </p>
              {item.isSucsec ? (
                <p className=" absolute bg-primary-gold rounded-t-xl px-2 pt-1 bottom-0 left-0 -mt-3 ">
                  {item.icon}
                </p>
              ) : (
                <p className=" absolute bg-red-600 text-white rounded-t-xl px-2 pt-1 bottom-0 left-0 -mt-3 ">
                  {item.icon}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <PhoneMenu />
    </div>
  );
}

export default History;
