"use client";
import Link from "next/link";
import profilePicture from "../../../../../../Assets/profile.svg";
import {
  Cart,
  Filter,
  LeftArrow,
  Search,
  TrashBin,
} from "../../../../../../Components/Svg/SvgContainer";
import Image from "next/image";
import { useState } from "react";
import DoorImage from "../../../../../../Assets/door.jpg";
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
     <header className="bg-[#E4E3E0] text-[#333] p-2.5 sm:p-6 rounded-xl md:rounded-[40px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
        <nav className="flex max-lg:flex-col items-center justify-between gap-4 mb-5 pb-5 border-[#555]/50 border-b">
          {/* search bar */}
          <div className="flex items-center w-full">
            <div className="max-w-[325px] 2xl:max-w-[425px] w-full flex items-center justify-between bg-[#E4E3E0] rounded-[40px] px-5 py-3.5 custom-shadow-xl">
              <input
                type="text"
                placeholder="Search by order number and PO info"
                className="flex-1 bg-transparent outline-none text-sm text-[#5F6C72] leading-[20px]"
              />
              <Search />
            </div>
            <div className="inline-flex px-5 py-[14px] items-center gap-2.5 md:text-xl">
              <div>Filter</div>
              <Filter />
            </div>
          </div>
          {/* nav, cart, & profile */}
          <div className="flex max-sm:flex-col sm:items-center gap-2 md:gap-5 w-full justify-between lg:justify-end">
            <div className="flex flex-wrap min-w-0 sm:justify-center gap-3 md:gap-5 xl:gap-7">
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

            <div className="flex max-sm:justify-end items-center gap-2 md:gap-5">
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
        <div className="flex flex-wrap gap-x-2.5 gap-y-2.5 md:gap-y-5 md:mb-8 pb-5 border-[rgba(85,85,85,0.50)] border-b">
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
        <div className="flex justify-between items-center md:mt-10 sm:px-6 py-4">
          <h2 className="text-lg md:text-xl xl:text-2xl font-medium text-[#333]">
            Total Orders Showing - <span className="font-normal">132</span>
          </h2>
          <Link
            href={"/dashboard/b2b/orders/order/cart"}
            className="bg-[#4BCDE4] hover:bg-[#4BCDE4]/80 cursor-pointer text-nowrap text-white text-base lg:text-xl py-3 px-6 rounded-lg"
          >
            Pay Now
          </Link>
        </div>
      </header>

      <div className="my-5">
        <Link href={"/dashboard/b2b/orders"}>
          <div className="size-8 shrink-0 bg-[#21BBA2] flex items-center justify-center rounded-full custom-shadow-xl">
            <LeftArrow />
          </div>
        </Link>
        <div className="flex max-xl:flex-col gap-5 xl:gap-8 mt-5">
          <div className="space-y-2 sm:space-y-5">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div className="flex max-sm:flex-col max-sm:gap-5 flex-1 items-center justify-between xl:gap-5 2xl:gap-[49px] text-xs xl:text-sm 2xl:text-xl text-[#333] py-3 sm:py-[21px] pl-2 sm:pl-5 sm:pr-5 min-2xl:pr-[85px] rounded-xl sm:rounded-b-[20px] bg-white custom-shadow-xl">
                  <div className="flex items-center gap-5">
                    <div>
                      {" "}
                      <Image
                        src={DoorImage}
                        width={144}
                        height={165}
                        alt=""
                        className="rounded-[20px] shrink-0"
                      />{" "}
                    </div>
                    <div className="flex flex-col xl:block xl:gap-[13px]">
                      <p>Product Name: KDWH009</p>
                      <div className="flex xl:block items-center gap-2">
                        <p>Po: Po Info</p>
                        <p>Order#: 123654</p>
                      </div>
                      <p>Size: DLO (w56, h58)</p>
                      <div className="flex items-center">
                        <p>Color:</p>
                        <div className="mr-1.5 ml-2.5 size-5 xl:size-[30px] rounded-full bg-[#333]" />
                        <p>Bronze</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 2xl:gap-[61px]">
                    <div className="flex items-center gap-4 2xl:gap-12">
                      <p>$35.99</p>
                      <p>Installed</p>
                    </div>
                    <button className="size-7 bg-red-500 flex items-center justify-center rounded-full">
                      <TrashBin />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          {/* total order */}
          <div className="max-w-[551px] h-fit w-full rounded-md [40px] bg-white p-5 xl:p-10 shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)]">
            <h2 className="text-xl md:text-3xl font-medium text-sub-text">
              Total Orders
            </h2>
            <div className="text-primary-text flex flex-col gap-3 xl:gap-5 2xl:gap-7 mt-3.5 text-base xl:text-xl 2xl:text-2xl">
              <div className="flex items-center justify-between">
                <div>Sub Total:</div>
                <div>$5221.00</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Selected Order:</div>
                <div>5</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Total Discount:</div>
                <div>-$455</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Total Amount:</div>
                <div>$5455.00</div>
              </div>
            </div>
            <button className="w-full py-4 bg-[#d7f9ff] text-base rounded-lg xl:text-xl mt-4 xl:mt-6 2xl:mt-10">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
