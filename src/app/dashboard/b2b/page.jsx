import Image from "next/image";
import React from "react";
import wavingHand from "../../../Assets/waving-hand.png";
import profilePicture from "../../../Assets/profile.svg";
import {
  DeliverTrack,
  Laptop,
  OrderList,
  Stars,
  Timer,
} from "../../../Components/Svg/SvgContainer";

const orderCardData = [
  {
    icon: <OrderList />,
    totalCount: "12",
    subTitle: "Total Orders This Month",
  },
  {
    icon: <DeliverTrack />,
    totalCount: "05",
    subTitle: "Total Orders Ready to Install or deliver",
  },
  {
    icon: <Laptop />,
    totalCount: "12",
    subTitle: "Orders Installed/Delivered – Ready-to-Pay",
  },
  {
    icon: <Timer />,
    totalCount: "02",
    subTitle: "Guest User Design Requests – Not Yet Sent to Manufacture",
  },
];

const ordersData = [
  {
    date: "08/25/2025 – 5:30 PM",
    order: "12563",
    po: "Po-2025-02",
    status: "Ready To Cut",
    notification: "This order has been delivered",
  },
  {
    date: "08/25/2025 – 5:30 PM",
    order: "12563",
    po: "Po-2025-02",
    status: "Ready To Cut",
    notification: "This order has been received",
  },
  {
    date: "08/25/2025 – 5:30 PM",
    order: "12563",
    po: "Po-2025-02",
    status: "Ready To Cut",
    notification: "This order has been completed",
  },
  {
    date: "08/25/2025 – 5:30 PM",
    order: "12563",
    po: "Po-2025-02",
    status: "Ready To Cut",
    notification: "This order has been installed",
  },
  {
    date: "08/25/2025 – 5:30 PM",
    order: "12563",
    po: "Po-2025-02",
    status: "Delivery/install",
    notification:
      "This order has been moved to Ready-to-Deliver/Install status.",
  },
  {
    date: "08/25/2025 – 5:30 PM",
    order: "12563",
    po: "Po-2025-02",
    status: "Delivery/install",
    notification: "This order has been moved to Ready-To-Paint status.",
  },
  {
    date: "08/25/2025 – 5:30 PM",
    order: "12563",
    po: "Po-2025-02",
    status: "Delivery/install",
    notification: "This order has been moved to Ready-To-Cut status.",
  },
];
const page = () => {
  return (
    <section className="relative">
      <header className="flex items-center justify-between">
        <h1 className="dashboard_header max-sm:!text-xl flex gap-4">
          (B2B)Pogo Creative studio
          <Image src={wavingHand} width={36} height={36} alt="" />
        </h1>
        <div className="relative">
          <Image src={profilePicture} width={42} height={42} alt="" className="rounded-full"/>
          <div className="size-3.5 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
        </div>
      </header>
      {/* order cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-3 mt-4">
        {orderCardData?.map(({ icon, totalCount, subTitle }, idx) => (
          <div
            key={idx}
            className="flex items-center text-primary-text gap-3 px-3 md:px-4 py-2.5 bg-white rounded-[20px] custom-shadow-xl"
          >
            <div className="flex p-2.5 sm:p-3 justify-center items-center bg-[#f8fcfe] rounded-[13.5px] custom-shadow-xl">
              {icon}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-medium">{totalCount}</h2>
              <h3 className="text-sm">{subTitle}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* notification table */}
      <div className="w-full mt-5 inline-flex flex-col justify-end items-start p-3 gap-[10px] rounded-[14px] border border-white bg-white custom-shadow-xl">
        <div className="flex items-center gap-3">
          <label className="text-lg md:text-xl lg:text-[24px] text-primary-text">
            Manufacturer
          </label>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-primary-text text-sm lg:text-base focus:ring-2 focus:ring-teal-500">
            <option>Last 5 days</option>
            <option>Last 10 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
        {/* table */}
        <div className="w-full overflow-x-auto rounded-lg shadow-md bg-white px-1 ">
          <table className="w-full text-primary-text border-spacing-y-1 sm:border-spacing-y-1.5 text-nowrap border-separate">
            <thead className="rounded-lg text-sm border custom-shadow-xl">
              <tr className="rounded-lg border">
                <th className="px-6 py-3 font-medium">Date-Time</th>
                <th className="px-6 py-3 font-medium">Order#</th>
                <th className="px-6 py-3 font-medium">PO</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Notification</th>
                <th className="px-6 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((item, idx) => (
                <tr
                  key={idx}
                  className="border rounded-lg custom-shadow-xl"
                >
                  <td className="px-6 py-3 text-sm text-center">{item.date}</td>
                  <td className="px-6 py-3 text-sm text-center">
                    {item.order}
                  </td>
                  <td className="px-6 py-3 text-sm text-center">{item.po}</td>
                  <td className="px-6 py-3 text-sm text-center bg-[#C8FFEC]">
                    <span className="text-gray-700 px-3 py-1 rounded-md">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-sm text-center">
                    {item.notification}
                  </td>
                  <td className="px-6 py-3 text-sm text-center">
                    <button className="bg-[#21BBA2] text-white px-3 py-1.5 text-nowrap rounded-lg custom-shadow-xl">
                      View Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button className="fixed cursor-pointer bottom-10 right-10 bg-white size-16 p-3 rounded-full custom-shadow-xl">
        <Stars />
      </button>
    </section>
  );
};

export default page;
