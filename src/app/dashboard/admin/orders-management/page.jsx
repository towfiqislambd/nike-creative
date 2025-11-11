import React from "react";
import {
  DeleteSvg,
  EditedSvg,
  EditSvg,
  HomeSvg,
} from "../../../../Components/Svg/SvgContainer";
import m5 from "../../../../Assets/m5.png";

const page = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="p-3 rounded-xl shadow-lg bg-white">
        <div className="flex gap-3 items-center justify-between mb-3">
          <h3 className="text-sm font-medium">Order #15257</h3>
          <span className="bg-[#EFF3F6] text-xs px-3 py-1 rounded-full shadow-lg text-gray-500">
            Received
          </span>
          <div className="flex gap-3 items-center">
            <HomeSvg />
            <EditedSvg />
            <EditSvg />
            <DeleteSvg />
          </div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <p className="text-xs text-gray-500">Order Date: 06/13/2025</p>
          <p className="text-xs text-gray-500">PO 10-20-2025 </p>
        </div>

        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium">Availability:</h3>
          <button className="bg-[#EFF3F6] text-xs px-3 py-1 rounded-full shadow-lg text-gray-500">
            in 1 week
          </button>
          <button className="text-gray-500">Technical Files</button>
        </div>

        <div className="flex gap-3 items-center justify-between">
          <p className="text-gray-500 text-sm">4-5 week</p>
          <div className="flex gap-2 items-center">
            <div>DXF:</div>
            <div>EPS:</div>
          </div>
        </div>

        <h3 className="text-sm text-gray-500">Company Florida hurricane</h3>

        <div className="flex items-center justify-between gap-3">
          <p>Manufacturer</p>
          <p>
            Series: <span>546 Series</span>
          </p>
          <p>
            Color: <span>White</span>
          </p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <p>European industries</p>
          <p>
            Quantity: <span>1</span>
          </p>
          <p>
            <img src={m5} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
