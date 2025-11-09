import { SearchSvg } from "../../../../../Components/Svg/SvgContainer";
import React from "react";

const AnalyticsModal = () => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <div className="w-[412px] shadow-lg rounded-lg bg-[#E4E3E0] py-3s flex gap-3 items-center px-4 py-3">
          <SearchSvg />
          <input
            type="text"
            className="border-none outline-none w-full"
            placeholder="Search Order # or PO Info..."
          />
        </div>

        <select className="px-4 py-3 rounded-lg bg-[#E4E3E0] shadow-lg outline-none border-none">
          <option value="">All Filter</option>
          <option value="">Eco Windows</option>
          <option value="">Eco Windows</option>
        </select>
      </div>
    </div>
  );
};

export default AnalyticsModal;
