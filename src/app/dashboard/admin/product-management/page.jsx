"use client";

import React, { useState } from "react";
import {
  BellIconSvg,
  PlusBlack,
} from "../../../../Components/Svg/SvgContainer";
import Image from "next/image";
import profilePicture from "../../../../Assets/profile.svg";
import Products from "../_components/product-management/Products";
import ClientsVisibility from "../_components/product-management/ClientsVisibility";
import Categories from "../_components/product-management/Categories";
import Fields from "../_components/product-management/Fields";

const tabs = [
  {
    id: "1",
    label: "Products",
  },
  {
    id: "2",
    label: "Clients Visibility",
  },
  {
    id: "3",
    label: "Categories",
  },
  {
    id: "4",
    label: "Fields",
  },
];

const page = () => {
  const [productManagementTab, setProductManagementTab] = useState("Categories");

  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] text-[#333] px-2 py-3 sm:p-6 rounded-xl sm:rounded-[40px] border-l-2 border-[#bbb] custom-shadow-xl">
        <nav className="flex max-sm:flex-col items-center justify-between gap-4 pb-5 border-[#555]/50 border-b">
          <div className="flex sm:items-center max-sm:flex-col-reverse w-full gap-5">
            <h1 className="text-lg max-sm:hidden md:text-xl xl:text-2xl 2xl:text-3xl font-medium text-[#333]">
              Product Management
            </h1>
            <div className="flex max-w-[840px] w-full border border-[#eaeaea] bg-[#D7D6D7] -space-x-12 rounded-[40px] my-4 custom-shadow-xl">
              {tabs.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setProductManagementTab(label)}
                  className={`flex-1 py-3 md:py-4 lg:py-6 rounded-[35px] text-[13px] md:text-sm xl:text-lg transition ${
                    productManagementTab === label
                      ? "bg-[#21BBA2] text-white border border-[#EAEAEA] custom-shadow-xl"
                      : "border-r"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex sm:ml-auto items-center justify-between">
              <h1 className="text-lg sm:hidden md:text-xl xl:text-2xl 2xl:text-3xl font-medium text-[#333]">
                Product Management
              </h1>
              {/* notification & profile */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 sm:gap-5">
                  <button className="relative">
                    <BellIconSvg className="text-[#F34235]" />
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
                      className="rounded-full max-sm:size-8"
                    />
                    <div className="size-4 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* buttons */}
        <div className="mt-3 sm:mt-5">
          {productManagementTab === "Products" && (
            <button
              onClick={() =>
                document.dispatchEvent(new CustomEvent("openAddProduct"))
              }
              className="max-sm:basis-2/3 max-w-[300px] bg-[#D7D7D7] hover:bg-[#D7D7D7]/80 inline-flex items-center justify-center px-2 sm:px-4 lg:px-8 py-2 sm:py-4 text-sm sm:text-base lg:text-xl text-primary-text gap-2.5 rounded-[10px] border border-[#F5F4F4]/60 shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07)]"
            >
              Add Product <PlusBlack />
            </button>
          )}
          {productManagementTab === "Categories" && (
            <button
              onClick={() =>
                document.dispatchEvent(new CustomEvent("openAddCategory"))
              }
              className="max-sm:basis-2/3 max-w-[300px] bg-[#D7D7D7] hover:bg-[#D7D7D7]/80 inline-flex items-center justify-center px-2 sm:px-4 lg:px-8 py-2 sm:py-4 text-sm sm:text-base lg:text-xl text-primary-text gap-2.5 rounded-[10px] border border-[#F5F4F4]/60 shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07)]"
            >
              Add Category <PlusBlack />
            </button>
          )}
          {productManagementTab === "Fields" && (
            <button className="max-sm:basis-2/3 max-w-[300px] bg-[#D7D7D7] hover:bg-[#D7D7D7]/80 inline-flex items-center justify-center px-2 sm:px-4 lg:px-8 py-2 sm:py-4 text-sm sm:text-base lg:text-xl text-primary-text gap-2.5 rounded-[10px] border border-[#F5F4F4]/60 shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07)]">
              Add Field <PlusBlack />
            </button>
          )}
        </div>
      </header>

      {productManagementTab === "Products" && <Products />}
      {productManagementTab === "Clients Visibility" && <ClientsVisibility />}
      {productManagementTab === "Categories" && <Categories />}
      {productManagementTab === "Fields" && <Fields />}
    </section>
  );
};

export default page;
