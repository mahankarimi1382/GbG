import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { FaCoins } from "react-icons/fa";

export default function ChartSection() {
  return (
    <div dir="ltr" className=" w-[90%] rounded-3xl pb-4 bg-white shadow-md">
      <div className=" w-full gap-2 p-3 px-4 justify-end flex">
        <FaCoins className=" text-xl text-primary-gold" />
        <h5>نمودار قیمت طلا</h5>
      </div>
      <LineChart
        xAxis={[{ data: ["1398", "1399", "1400", "1401", "1402", "1403"] }]}
        series={[
          {
            data: [50, 100, 200, 250, 500, 800],
            showMark: false,
            color: "#393d3f",
            curve: "monotoneX",
          },
        ]}
        height={200}
      />
      <div
        dir="rtl"
        className=" rounded-xl mx-5 p-1 bg-primary-gold flex justify-around"
      >
        <button className=" bg-primary-gray rounded-xl text-white p-2">
          روزانه
        </button>
        <button>هفتگی</button>
        <button>ماهانه</button>
      </div>
    </div>
  );
}
