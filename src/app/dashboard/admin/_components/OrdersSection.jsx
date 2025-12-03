/* eslint-disable react/prop-types */
import React from "react";
import { FiDownload } from "react-icons/fi";
import { DownloadIconSvg } from "../../../../Components/Svg/SvgContainer2";
const orders = [
  {
    id: 1,
    orderNo: "123123",
    po: "dsf2133",
    createdBy: "Name.....",
    time: "12:09 PM",
    date: "21/28/25",
    image:
      "https://i.ibb.co.com/xtXLCkB1/Frame-2147229979.png",
  },
  {
    id: 2,
    orderNo: "123123",
    po: "dsf2133",
    createdBy: "Name.....",
    time: "12:09 PM",
    date: "21/28/25",
    image:
      "https://i.ibb.co.com/xtXLCkB1/Frame-2147229979.png",
  },
  {
    id: 3,
    orderNo: "123123",
    po: "dsf2133",
    createdBy: "Name.....",
    time: "12:09 PM",
    date: "21/28/25",
    image:
      "https://i.ibb.co.com/xtXLCkB1/Frame-2147229979.png",
  },
  {
    id: 1,
    orderNo: "123123",
    po: "dsf2133",
    createdBy: "Name.....",
    time: "12:09 PM",
    date: "21/28/25",
    image:
      "https://i.ibb.co.com/xtXLCkB1/Frame-2147229979.png",
  },
  {
    id: 2,
    orderNo: "123123",
    po: "dsf2133",
    createdBy: "Name.....",
    time: "12:09 PM",
    date: "21/28/25",
    image:
      "https://i.ibb.co.com/xtXLCkB1/Frame-2147229979.png",
  },
  {
    id: 3,
    orderNo: "123123",
    po: "dsf2133",
    createdBy: "Name.....",
    time: "12:09 PM",
    date: "21/28/25",
    image:
      "https://i.ibb.co.com/xtXLCkB1/Frame-2147229979.png",
  },
];

const OrderRow = ({ order }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
      {/* Left: image + text */}
      <div className="flex items-center gap-4">
        <div className="h-[90px] w-[90px] overflow-hidden rounded-md bg-gray-100">
          <img
            src={order.image}
            alt="door"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-1 text-sm text-gray-800">
          <p className="font-semibold">Order#: {order.orderNo}</p>
          <p>PO: {order.po}</p>
          <p>Create by: {order.createdBy}</p>
        </div>
      </div>

      {/* Middle: DXF / EPS */}
      <div className="hidden md:flex flex-col gap-3 text-sm text-gray-800">
        <div className="flex items-center gap-2">
          <span className="font-semibold">DXF:</span>
          <button className="flex h-6 w-6 items-center justify-center rounded-full bg-[#27AE60] text-white">
            <DownloadIconSvg size={14} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">EPS:</span>
          <button className="flex h-6 w-6 items-center justify-center rounded-full bg-[#27AE60] text-white">
            <DownloadIconSvg size={14} />
          </button>
        </div>
      </div>

      {/* Right: time + buttons */}
      <div className="flex flex-col items-end gap-2 text-right">
        <span className="text-xs text-gray-500">
          {order.time} {order.date}
        </span>

        <button className="min-w-[120px] rounded-[8px] bg-[#1ABC9C] px-4 py-1.5 text-xs font-semibold text-white">
          View Design
        </button>
        <button className="min-w-[120px] rounded-[8px] bg-[#1ABC9C] px-4 py-1.5 text-xs font-semibold text-white">
          Assign to Order
        </button>
      </div>
    </div>
  );
};

const OrdersSection = () => {
  return (
    <section className="w-full bg-[#f5f7f8] py-6">
      <div className="space-y-6">
        {orders.map((order, idx) => (
          <React.Fragment key={order.id}>
            <OrderRow order={order} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default OrdersSection;
