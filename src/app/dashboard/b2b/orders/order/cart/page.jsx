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

// svg
const TrashBin = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="16"
      viewBox="0 0 13 16"
      fill="none"
    >
      <path
        d="M11.4053 3.6112H1.06345C1.03458 3.61121 1.00602 3.6171 0.9795 3.6285C0.952979 3.63991 0.929056 3.65659 0.909187 3.67753C0.889224 3.6985 0.873748 3.72332 0.863706 3.75047C0.853663 3.77763 0.849265 3.80654 0.850781 3.83545L1.3942 14.3209C1.41825 14.7874 1.80286 15.1528 2.2702 15.1528H10.1985C10.6659 15.1528 11.0505 14.7874 11.0745 14.3209L11.6179 3.83545C11.6194 3.80654 11.615 3.77763 11.605 3.75047C11.595 3.72332 11.5795 3.6985 11.5595 3.67753C11.5397 3.65659 11.5157 3.6399 11.4892 3.6285C11.4627 3.61709 11.4342 3.61121 11.4053 3.6112ZM2.85839 5.72503C2.85445 5.58234 2.90648 5.44631 3.00506 5.34225C3.10364 5.23819 3.23662 5.17856 3.37931 5.1743C3.67627 5.1682 3.92273 5.40127 3.93127 5.69583L4.12875 13.0563C4.13094 13.1267 4.1191 13.1969 4.09392 13.2626C4.06874 13.3284 4.03072 13.3885 3.98208 13.4394C3.93368 13.4906 3.87566 13.5318 3.81134 13.5606C3.74701 13.5894 3.67765 13.6052 3.60722 13.6071H3.59142C3.45417 13.6071 3.32423 13.5551 3.22355 13.4595C3.1724 13.4113 3.13128 13.3534 3.10257 13.2893C3.07385 13.2251 3.05809 13.1559 3.0562 13.0856L2.85839 5.72503ZM5.69794 13.0627V5.70127C5.69794 5.4052 5.93864 5.1645 6.23438 5.1645C6.53011 5.1645 6.77081 5.4052 6.77081 5.70127V13.0627C6.77081 13.359 6.53011 13.6001 6.23438 13.6001C5.93864 13.6001 5.69794 13.3591 5.69794 13.0627ZM9.41255 13.0849C9.41072 13.1553 9.395 13.2246 9.36628 13.2889C9.33756 13.3532 9.29641 13.4112 9.2452 13.4595C9.14452 13.555 9.01458 13.6071 8.87733 13.6071H8.86059C8.79026 13.6051 8.72101 13.5893 8.65683 13.5604C8.59265 13.5316 8.5348 13.4904 8.48663 13.4391C8.43793 13.3882 8.39988 13.328 8.3747 13.2622C8.34952 13.1964 8.3377 13.1262 8.33995 13.0557L8.53744 5.69644C8.54597 5.40159 8.79061 5.16698 9.08574 5.1743H9.08939C9.23208 5.17856 9.36506 5.23819 9.46364 5.34225C9.56222 5.44631 9.61425 5.58234 9.61031 5.72503L9.41255 13.0849ZM12.4688 1.97081V2.53556H0V1.97081C0 1.65923 0.253453 1.40578 0.565031 1.40578H4.66641C4.71889 1.40576 4.76953 1.38637 4.80861 1.35133C4.84769 1.31629 4.87246 1.26806 4.87819 1.21589C4.95398 0.52275 5.53697 0 6.23438 0C6.93178 0 7.51477 0.52275 7.59056 1.21589C7.59629 1.26806 7.62106 1.31629 7.66014 1.35133C7.69922 1.38637 7.74986 1.40576 7.80234 1.40578H11.9037C12.2153 1.40578 12.4688 1.65923 12.4688 1.97081Z"
        fill="white"
      />
    </svg>
  );
};

const Filter = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M0.625 8.54167C0.625 4.80971 0.625 2.94374 1.78437 1.78437C2.94374 0.625 4.80971 0.625 8.54167 0.625C12.2736 0.625 14.1396 0.625 15.299 1.78437C16.4583 2.94374 16.4583 4.80971 16.4583 8.54167C16.4583 12.2736 16.4583 14.1396 15.299 15.299C14.1396 16.4583 12.2736 16.4583 8.54167 16.4583C4.80971 16.4583 2.94374 16.4583 1.78437 15.299C0.625 14.1396 0.625 12.2736 0.625 8.54167Z"
        stroke="#333333"
        stroke-width="1.25"
      />
      <path
        d="M6.03906 8.54102L11.0391 8.54105"
        stroke="#333333"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.875 11.458H10.2083"
        stroke="#333333"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.20703 5.625H11.8737"
        stroke="#333333"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const CartPage = () => {
  const [activeTab, setActiveTab] = useState("Received");
  return (
    <section className=" w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] text-[#333] p-6 rounded-[40px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
        <nav className="flex items-center justify-between gap-4 mb-5 pb-5 border-[#555]/50 border-b">
          {/* search bar */}
          <div className="flex items-center w-full">
            <div className="max-w-[325px] 2xl:max-w-[425px] w-full flex items-center justify-between bg-[#E4E3E0] rounded-[40px] px-5 py-3.5 shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
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
          <div className="flex items-center gap-5 w-full justify-end">
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
        <div className="flex max-xl:flex-col gap-5 xl:gap-8 mt-5">
          <div className="space-y-5">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <div className="flex flex-1 items-center justify-between xl:gap-5 2xl:gap-[49px] text-xs xl:text-sm 2xl:text-xl text-[#333] py-[21px] pl-5 pr-5 min-2xl:pr-[85px] rounded-b-[20px] bg-white shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
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
