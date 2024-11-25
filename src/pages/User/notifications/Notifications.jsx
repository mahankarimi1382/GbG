import React from "react";
import PhoneMenu from "../../../Components/PhoneMenu";
const notifs = [
  {
    id: 1,
    type: "buy",
    message:
      "قیمت هر گرم طلای 18 عیار امروز به 2,500,000 ریال رسید. فرصت مناسبی برای خرید!",
    date: "2024-11-16",
  },
  {
    id: 2,
    type: "buy",
    message:
      "با توجه به نوسانات بازار، خرید طلا در این زمان می‌تواند سرمایه‌گذاری خوبی باشد.",
    date: "2024-11-16",
  },
  {
    id: 3,
    type: "buy",
    message:
      "پیشنهاد ویژه: خرید طلای آب شده بدون اجرت و مالیات در اپلیکیشن ما.",
    date: "2024-11-16",
  },
  {
    id: 4,
    type: "sell",
    message:
      "قیمت فروش طلای 18 عیار امروز به 2,450,000 ریال کاهش یافت. اگر قصد فروش دارید، اکنون زمان مناسبی است.",
    date: "2024-11-16",
  },
  {
    id: 5,
    type: "sell",
    message: "با توجه به افزایش قیمت طلا، فروش طلای خود را به تعویق نیندازید.",
    date: "2024-11-16",
  },
  {
    id: 6,
    type: "sell",
    message:
      "پیشنهاد ویژه: فروش طلای آب شده با نرخ یکسان خرید و فروش در سامانه ما.",
    date: "2024-11-16",
  },
  {
    id: 7,
    type: "market",
    message:
      "بازار طلا امروز با نوسانات زیادی همراه بود. قیمت هر اونس طلا به 1,800 دلار رسید.",
    date: "2024-11-16",
  },
  {
    id: 8,
    type: "market",
    message:
      "با توجه به افزایش تقاضا، قیمت طلا در بازار جهانی به بالاترین حد خود در شش ماه اخیر رسید.",
    date: "2024-11-16",
  },
  {
    id: 9,
    type: "market",
    message:
      "پلتفرم‌های آنلاین خرید و فروش طلا زیر نظر اتحادیه طلا و جواهر فعالیت می‌کنند و بهترین فرصت سرمایه‌گذاری را فراهم می‌کنند.",
    date: "2024-11-16",
  },
];

function Notifications() {
  return (
    <div className=" min-h-screen mx-2 pb-20  relative mt-24 flex  max-w-[500px] items-center flex-col gap-4 ">
      <div className=" flex mb-5 flex-col w-full gap-3 bg-white px-2 pt-3 rounded-xl">
        {notifs.map((item) => {
          return (
            <div
              className={` text-right pb-4 w-full text-xs p-2 gap-2 last:border-none  border-b-2 relative items-center flex`}
              key={item.id}
            >
              <p>{item.message}</p>
              <p className=" left-0 bottom-0 text-primary-gold absolute">{item.date}</p>
            </div>
          );
        })}
      </div>
      <PhoneMenu />
    </div>
  );
}

export default Notifications;
