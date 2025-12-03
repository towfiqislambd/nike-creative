"use client";

import React, { useState } from "react";
import Image from "next/image";
import profilePicture from "../../../../../Assets/profile.svg";
import { BellIconSvg } from "../../../../../Components/Svg/SvgContainer";
import OrdersSection from "../../_components/OrdersSection";
import CreateDesignWithAI from "../../_components/CreateDesignWithAI";

const page = () => {
  const [userManagementTab, setUserManagementTab] = useState("Create_Design");

  return (
    <section className="text-primary-text w-full relative">

      {/* header */}
      <header className="bg-[#E4E3E0] p-2 sm:px-2.5 sm:pt-2 sm:pb-1.5 rounded-xl md:rounded-[20px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
        <nav className="flex max-sm:flex-col items-center justify-between gap-4 pb-1.5 border-[#555]/50 border-b">
          <div className="flex md:items-center max-md:flex-col-reverse w-full md:gap-3">

            <h1 className="dashboard_title max-md:hidden mr-8">Create Design</h1>

            {/* Tabs */}
            <div className="flex max-w-[350px] w-full bg-[#D7D6D7] rounded-[40px] custom-shadow-xl">
              <button
                onClick={() => setUserManagementTab("Create_Design")}
                className={`flex-1 py-2.5 rounded-[40px] text-[13px] md:text-sm transition 
                  ${
                    userManagementTab === "Create_Design"
                      ? "bg-[#21BBA2] text-white border border-[#EAEAEA] custom-shadow-xl"
                      : "hover:bg-gray-200"
                  }`}
              >
                Create Design
              </button>

              <button
                onClick={() => setUserManagementTab("Design_History")}
                className={`flex-1 py-2.5 rounded-[40px] text-[13px] md:text-sm transition 
                  ${
                    userManagementTab === "Design_History"
                      ? "bg-[#21BBA2] text-white border border-[#EAEAEA] custom-shadow-xl"
                      : "hover:bg-gray-200"
                  }`}
              >
                Design History
              </button>
            </div>

            {/* Right section */}
            <div className="flex md:ml-auto items-center justify-between">
              <h1 className="text-lg md:hidden font-medium">Design Panel</h1>

              {/* notification & profile */}
              <div className="flex items-center gap-3">
                <button className="relative">
                  <BellIconSvg className="text-[#F34235]" />
                  <div className="size-5 text-white bg-[#F34235] rounded-full flex items-center justify-center text-xs absolute -top-1.5 -right-1.5 border-2 border-[#e4e3e0]">
                    2
                  </div>
                </button>

                <div className="relative shrink-0 cursor-pointer">
                  <Image
                    src={profilePicture}
                    width={36}
                    height={36}
                    alt=""
                    className="rounded-full max-sm:size-8"
                  />
                  <div className="size-3 rounded-full border-[2px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
                </div>
              </div>

            </div>
          </div>
        </nav>
      </header>

      {/* CONTENT SECTION */}
      <div className="mt-5">
        {userManagementTab === "Create_Design" && (
<div className="">
  <CreateDesignWithAI />
</div>
        )}

        {userManagementTab === "Design_History" && (
<div className="">
    <OrdersSection />
</div>
        )}
      </div>

    </section>
  );
};

export default page;
