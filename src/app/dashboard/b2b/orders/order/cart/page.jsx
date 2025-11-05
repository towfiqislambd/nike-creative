"use client";
import Link from "next/link";
import profilePicture from "../../../../../../Assets/profile.svg";
import {
  Cart,
  LeftArrow,
  Search,
} from "../../../../../../Components/Svg/SvgContainer";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "Shop",
    link: "#",
  },
  {
    label: "Category",
    link: "#",
  },
  {
    label: "Contact Us",
    link: "#",
  },
  {
    label: "About US",
    link: "#",
  },
];

const tabs = [
  "All Orders",
  "Received",
  "Ready to paint",
  "Ready to Cut",
  "Quality Control",
  "Ready",
  "Scheduled",
  "Installed/Delivery",
  "Pending Payment",
  "Completed",
  "Services",
];

const CartPage = () => {
  const [activeTab, setActiveTab] = useState("Received");
  return (
    <section className=" w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] text-[#333] p-6 rounded-[40px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
        <nav className="flex items-center justify-between gap-4 mb-5 pb-5 border-[#555]/50 border-b">
          {/* search bar */}
          <div className="max-w-[325px] 2xl:max-w-[425px] w-full flex items-center justify-between bg-[#E4E3E0] rounded-[40px] px-5 py-3.5 shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
            <input
              type="text"
              placeholder="Search by order number and PO info"
              className="flex-1 bg-transparent outline-none text-sm text-[#5F6C72] leading-[20px]"
            />
            <Search />
          </div>
          {/* nav, cart, & profile */}
          <div className="flex items-center gap-5">
            <div className="flex justify-center gap-3 md:gap-5 xl:gap-7">
              {navItems?.map(({ label, link }, idx) => (
                <Link
                  key={idx}
                  href={link}
                  className="text-sm md:text-base 2xl:text-xl text-[#333] hover:text-[#21BBA2] transition"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <button className="bg-[#21BBA2] hover:bg-[#21BBA2]/80 shrink-0 rounded-full size-11 flex items-center justify-center cursor-pointer">
                <Cart />
              </button>
              <div className="relative shrink-0 cursor-pointer">
                <Image
                  src={profilePicture}
                  width={48}
                  height={48}
                  alt=""
                  className="rounded-full"
                />
                <div className="size-4 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
              </div>
            </div>
          </div>
        </nav>

        {/* filter Tabs */}
        <div className="flex flex-wrap gap-x-3 gap-y-3 md:gap-y-5 mb-8 pb-5 border-[rgba(85,85,85,0.50)] border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 md:px-5 py-2 md:py-4 cursor-pointer text-[#333] rounded-xl md:rounded-[18px] border-b border-[#777] text-sm md:text-base xl:text-xl transition shadow-[0_5px_5px_0_rgba(0,0,0,0.25)] ${
                activeTab === tab
                  ? "bg-[#21BBA2] text-white"
                  : "bg-[#D7D7D7] hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-10 px-6 py-4">
          <h2 className="text-lg md:text-xl xl:text-2xl font-medium text-[#333]">
            Total Orders Showing - <span className="font-normal">132</span>
          </h2>
          <Link
            href={"/dashboard/b2b/orders/order/cart"}
            className="bg-[#4BCDE4] hover:bg-[#4BCDE4]/80 cursor-pointer text-white text-base lg:text-xl py-3 px-6 rounded-lg"
          >
            Pay Now
          </Link>
        </div>
      </header>

      <div className="my-5">
        <Link href={"/dashboard/b2b/orders"}>
          <div className="size-8 shrink-0 bg-[#21BBA2] flex items-center justify-center rounded-full shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
            <LeftArrow />
          </div>
        </Link>
        <div className="flex gap-5">
          <div className="flex flex-1 items-center gap-[49px] mt-5 text-base lg:text-xl text-[#333] py-[21px] pl-5 pr-[85px] rounded-b-[20px] bg-white shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
            <div className="flex items-center gap-5">
              {/* <Image src={}/> */}
            </div>
          </div>
          {/* total order */}
          <div className="max-w-[551px] w-full rounded-md [40px] bg-white px-4 py-5">
            <h2 className="text-3xl font-medium text-sub-text">Total Orders</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
