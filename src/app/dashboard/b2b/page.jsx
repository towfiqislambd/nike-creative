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
        <h1 className="dashboard_header flex gap-4">
          (B2B)Pogo Creative studio
          <Image src={wavingHand} width={36} height={36} alt="" />
        </h1>
        <div className="relative">
          <Image src={profilePicture} width={48} height={48} alt="" className="rounded-full"/>
          <div className="size-4 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
        </div>
      </header>
      {/* order cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5 md:mt-8">
        {orderCardData?.map(({ icon, totalCount, subTitle }, idx) => (
          <div
            key={idx}
            className="flex items-center text-primary-text gap-3 px-3 md:px-6 py-4 md:py-7 bg-white rounded-[20px] shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),0_0_0.225px_0.225px_rgba(0,0,0,0.07),0_0_0.225px_0_rgba(0,0,0,0.05),0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
          >
            <div className="flex p-5 justify-center items-center bg-[#f8fcfe] rounded-[13.5px] shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),0_0_0.225px_0.225px_rgba(0,0,0,0.07),0_0_0.225px_0_rgba(0,0,0,0.05),0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
              {icon}
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-medium">{totalCount}</h2>
              <h3>{subTitle}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* notification table */}
      <div className="w-full mt-5 md:mt-8 inline-flex flex-col justify-end items-start px-3 md:px-5 lg:px-[30px] py-8 gap-[10px] rounded-[20px] border border-white bg-white shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
        <div className="flex items-center gap-8">
          <label className="text-lg md:text-xl lg:text-[26px] text-primary-text">
            Manufacturer
          </label>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-[#333] text-sm lg:text-base focus:ring-2 focus:ring-teal-500">
            <option>Last 5 days</option>
            <option>Last 10 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
        {/* table */}
        <div className="w-full overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="w-full text-[#333] border-spacing-y-3 border-separate">
            <thead className="rounded-lg text-sm md:text-base font-medium border shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
              <tr className="rounded-lg border">
                <th className="px-6 py-3 md:py-5">Date-Time</th>
                <th className="px-6 py-3 md:py-5">Order#</th>
                <th className="px-6 py-3 md:py-5">PO</th>
                <th className="px-6 py-3 md:py-5">Status</th>
                <th className="px-6 py-3 md:py-5">Notification</th>
                <th className="px-6 py-3 md:py-5">Action</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((item, idx) => (
                <tr
                  key={idx}
                  className="border rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                >
                  <td className="px-6 py-4 text-sm text-center">{item.date}</td>
                  <td className="px-6 py-4 text-sm text-center">
                    {item.order}
                  </td>
                  <td className="px-6 py-4 text-sm text-center">{item.po}</td>
                  <td className="px-6 py-4 text-sm text-center bg-[#C8FFEC]">
                    <span className="text-gray-700 px-3 py-1 rounded-md">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-center">
                    {item.notification}
                  </td>
                  <td className="px-6 py-4 text-sm text-center">
                    <button className="bg-[#21BBA2] text-white px-3 py-1.5 text-nowrap rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
                      View Order
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button className="fixed cursor-pointer bottom-10 right-10 bg-white size-16 p-3 rounded-full shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
        <Stars />
      </button>
    </section>
  );
};

export default page;
