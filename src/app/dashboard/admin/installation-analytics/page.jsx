"use client";
import { BellIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import profilePicture from "../../../../Assets/profile.svg";
import { SearchSvg } from "../../../../Components/Svg/SvgContainer";
import OrderHistory from "../_components/installation-analytics/OrderHistory";
import ProductAnalytics from "../_components/installation-analytics/ProductAnalytics";
import AiAgentSettings from "../_components/installation-analytics/AiAgentSettings";

const tabs = [
  { id: 1, label: "Order History" },
  { id: 2, label: "Product Analytics" },
  { id: 3, label: "Al Agent Settings" },
];

const page = () => {
  const [activeTab, setActiveTab] = useState("Order History");
  const [isAutomatic, setAutomatic] = useState(false);

  return (
    <>
      <header className="bg-[#E4E3E0] text-[#333] p-6 rounded-[40px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)] mb-5">
        {/* Upper part */}
        <nav className="flex items-center justify-between gap-4 mb-5 pb-5 border-[#555]/50 border-b">
          <h2 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium text-[#333]">
            Installation Analytics
          </h2>

          <div className="flex gap-5 items-center bg-[#dbdada] shadow-xl rounded-full">
            {tabs?.map(tab => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.label)}
                className={`px-10 py-5 rounded-full ${
                  activeTab === tab?.label ? "bg-light-green text-white" : ""
                }`}
              >
                {tab?.label}
              </button>
            ))}
          </div>

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
        <div className="flex justify-between items-center">
          {/* Left */}
          <div className="flex items-center gap-5">
            <div className="w-[412px] border border-[#565656] shadow-lg rounded-lg bg-[#E4E3E0] py-3s flex gap-3 items-center px-4 py-3">
              <SearchSvg />
              <input
                type="text"
                className="border-none outline-none w-full"
                placeholder="Search Order # or PO Info..."
              />
            </div>

            <select className="px-4 py-3 rounded-lg border outline-none border-[#565656] shadow-lg">
              <option value="">All Filter</option>
              <option value="">Eco Windows</option>
              <option value="">Eco Windows</option>
            </select>
          </div>

          {/* Right */}
          {activeTab === "Al Agent Settings" && (
            <div className="flex gap-2 items-center">
              <p className="text-lg text-primary-text">Use Automatic Data:</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  // checked={user?.is_email_notification}
                  onChange={() => setAutomatic(!isAutomatic)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-checked:bg-light-green rounded-full transition-all duration-300" />
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5" />
              </label>
            </div>
          )}
        </div>
      </header>

      {activeTab === "Order History" && <OrderHistory />}
      {activeTab === "Product Analytics" && <ProductAnalytics />}
      {activeTab === "Al Agent Settings" && (
        <AiAgentSettings isAutomatic={isAutomatic} />
      )}
    </>
  );
};

export default page;
