"use client";

import React, { useState } from "react";
import {
  BellIconSvg,
  PlusBlack,
} from "../../../../Components/Svg/SvgContainer";
import Image from "next/image";
import profilePicture from "../../../../Assets/profile.svg";
import Products from "../_components/product-management/product/Products";
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
  const [productManagementTab, setProductManagementTab] = useState("Products");

  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] p-2 sm:px-2.5 sm:pt-2 sm:pb-1.5 rounded-xl md:rounded-[20px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
        <nav className="flex max-sm:flex-col items-center justify-between gap-4 pb-1 border-[#555]/50 border-b">
          <div className="flex sm:items-center max-sm:flex-col-reverse w-full gap-5">
            <h1 className="dashboard_title">
              Product Management
            </h1>
            <div className="grid max-sm:gap-1.5 grid-cols-2 sm:flex sm:max-w-[660px] w-full sm:border border-[#eaeaea] sm:bg-[#D7D6D7] sm:-space-x-6 sm:rounded-[40px] max-sm:shadow-none custom-shadow-xl">
              {tabs.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setProductManagementTab(label)}
                  className={`flex-1 py-2 rounded-[35px] text-[13px] md:text-[15px] transition ${
                    productManagementTab === label
                      ? "bg-[#21BBA2] text-white border border-gray-300 custom-shadow-xl"
                      : "max-sm:border max-sm:border-gray-300 sm:border-r sm:!shadow-none custom-shadow-xl"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex sm:ml-auto items-center justify-between">
              <h1 className="text-lg sm:hidden font-medium">
                Product Management
              </h1>
              {/* notification & profile */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 sm:gap-3">
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
          </div>
        </nav>
        {/* buttons */}
        <div className="mt-1">
          {productManagementTab === "Products" && (
            <button
              onClick={() =>
                document.dispatchEvent(new CustomEvent("openAddProduct"))
              }
              className="max-sm:basis-2/3 dashboard_header_btn"
            >
              Add Product <PlusBlack />
            </button>
          )}
          {productManagementTab === "Categories" && (
            <button
              onClick={() =>
                document.dispatchEvent(new CustomEvent("openAddCategory"))
              }
              className="max-sm:basis-2/3 dashboard_header_btn"
            >
              Add Category <PlusBlack />
            </button>
          )}
          {productManagementTab === "Fields" && (
            <button
              onClick={() =>
                document.dispatchEvent(new CustomEvent("openAddField"))
              }
              className="max-sm:basis-2/3 dashboard_header_btn"
            >
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
