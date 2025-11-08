"use client";
import { BellIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import profilePicture from "../../../Assets/profile.svg";
import OrderByCategoryChart from "./_components/OrderByCategoryChart";
import OrderByColorChart from "./_components/OrderByColorChart";
import OrderByCustomer from "./_components/OrderByCustomer";
import ProductionCosts from "./_components/ProductionCosts";
import PerformanceByCategory from "./_components/PerformanceByCategory";

const data = [
  { title: "Total Revenue", value: "55,000" },
  { title: "Total Costs", value: "32,000" },
  { title: "Net Profit", value: "18,000" },
  { title: "Total Orders", value: "120" },
  { title: "Avg Cost / Order", value: "300" },
  { title: "Avg Profit Margin", value: "28.2" },
  { title: "Average Revenue per Order", value: "21,000" },
];

const data2 = [
  { title: "Total Revenue(Last Month)", value: "300" },
  { title: "Avg Cost / Order (Last Month)", value: "300" },
  { title: "Avg Profit Margin (Last Month)", value: "28.6" },
  { title: "Average Revenue per Order (Last Month)", value: "21,000" },
  { title: "Total Costs (Last Month)", value: "300" },
  { title: "Net Profit (Last Month)", value: "300" },
  { title: "Total Orders (Last Month)", value: "28" },
];

const page = () => {
  return (
    <>
      <header className="bg-[#E4E3E0] text-[#333] p-6 rounded-[40px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
        {/* Upper part */}
        <nav className="flex items-center justify-between gap-4 mb-5 pb-5 border-[#555]/50 border-b">
          <h2 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium text-[#333]">
            Dashboard
          </h2>

          {/* nav, cart, & profile */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
              <button className="relative">
                <BellIcon className="text-[#F34235]" />
                <div className="size-5 text-white bg-[#F34235] rounded-full flex items-center justify-center text-xs absolute -top-1.5 -right-1.5 border-2 border-[#e4e3e0]">
                  2
                </div>
              </button>
              <div className="relative shrink-0 cursor-pointer">
                <Image
                  src={profilePicture}
                  width={48}
                  height={48}
                  alt=""
                  unoptimized
                  className="rounded-full"
                />
                <div className="size-4 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
              </div>
            </div>
          </div>
        </nav>

        {/* Lower part */}
        <div className="flex items-center gap-12">
          <div>
            <h3 className="text-primary-text text-xl mb-3">Product Category</h3>
            <div className="flex gap-7 items-center">
              <label
                htmlFor="double"
                className="text-primary-text flex gap-1.5 items-center"
              >
                <input id="double" type="checkbox" className="size-4" />
                Double Door
              </label>

              <label
                htmlFor="single"
                className="text-primary-text flex gap-1.5 items-center"
              >
                <input id="single" type="checkbox" className="size-4" />
                Single Door
              </label>

              <label
                htmlFor="custom"
                className="text-primary-text flex gap-1.5 items-center"
              >
                <input id="custom" type="checkbox" className="size-4" />
                Custom
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-primary-text text-xl mb-3">Product Category</h3>
            <select className="px-3 py-2 rounded-lg border border-primary-text">
              <option value="">Eco Windows</option>
              <option value="">Eco Windows</option>
              <option value="">Eco Windows</option>
            </select>
          </div>

          <div>
            <h3 className="text-primary-text text-xl mb-3">Compare</h3>
            <p className="px-3 py-2 rounded-lg border border-primary-text">
              <input type="date" className="border-none outline-none" />
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-7 gap-5 my-5">
        {data?.map(item => (
          <div className="small_card">
            <h3 className="text-primary-text mb-1">{item?.title}</h3>
            <p className="text-primary-text font-semibold text-xl">
              ${item?.value}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-medium text-primary-text mb-5">
        Key Metrics from Last Month
      </h2>

      <div className="grid grid-cols-4 gap-4 my-5">
        {data2?.map(item => (
          <div className="small_card">
            <h3 className="text-primary-text mb-1">{item?.title}</h3>
            <p className="text-primary-text font-semibold text-xl">
              ${item?.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-5 mb-5">
        {/* Left - Graph Cart */}
        <div className="small_card col-span-8">
          <h2 className="text-xl font-medium text-primary-text mb-5">
            Orders by Product Category
          </h2>

          <OrderByCategoryChart />
        </div>

        {/* Right - Pie Cart */}
        <div className="small_card col-span-4">
          <h2 className="text-xl font-medium text-primary-text mb-5">
            Orders by Color
          </h2>

          <OrderByColorChart />
        </div>
      </div>

      <OrderByCustomer />

      <div className="small_card my-5">
        <h2 className="text-xl font-medium text-primary-text mb-5">
          Production & Operational Costs
        </h2>
        <ProductionCosts />
      </div>

      <PerformanceByCategory />

      <div className="small_card mt-5">
        <h2 className="text-xl font-medium text-primary-text mb-1">
          Production & Operational Costs
        </h2>

        <p className="text-primary-text">
          Net profit increased by $6,000 this month compared to last.
        </p>
      </div>
    </>
  );
};

export default page;
