import React, { useState } from "react";
import {
  Minus2Svg,
  Plus2Svg,
} from "../../../../../Components/Svg/SvgContainer";
import Modal from "../../../../../Components/Common/Modal";
import AnalyticsModal from "./AnalyticsModal";

const data = [
  {
    id: 1,
    category: "Doors",
    installation_time: "89.00",
    of_installation: "1004",
    children: [
      { sku: "SKU-3", installation_time: "89.00", of_installation: "1004" },
      { sku: "SKU-2", installation_time: "89.00", of_installation: "1004" },
      { sku: "SKU-1", installation_time: "89.00", of_installation: "1004" },
    ],
  },
  {
    id: 2,
    category: "Windows",
    installation_time: "89.00",
    of_installation: "1004",
    children: [
      { sku: "SKU-A", installation_time: "89.00", of_installation: "1004" },
    ],
  },
  {
    id: 3,
    category: "Skylights",
    installation_time: "89.00",
    of_installation: "1004",
    children: [],
  },
];

const ProductAnalytics = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState([]);

  const toggleExpand = id => {
    setExpanded(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-lg md:max-w-full overflow-x-auto">
      <table className="w-full border-separate text-center border-spacing-y-3 lg:border-spacing-y-4 text-sm lg:text-base">
        <thead>
          <tr className="shadow bg-white rounded">
            <td className="text-nowrap px-2 py-4 lg:py-6 rounded-l-lg">SKU / CATEGORY</td>
            <td className="text-nowrap px-2 py-4 lg:py-6">ROBUST MEDIAN INSTALLATION TIME (MIN)</td>
            <td className="text-nowrap px-2 py-4 lg:py-6"># OF INSTALLATIONS</td>
            <td className="text-nowrap px-2 py-4 lg:py-6 rounded-r-lg">Details</td>
          </tr>
        </thead>

        <tbody>
          {data.map(item => (
            <React.Fragment key={item.id}>
              <tr className="shadow bg-white rounded-lg">
                <td className="text-nowrap px-3 py-3 lg:py-6 rounded-l-lg">{item.category}</td>
                <td className="text-nowrap px-3 py-3 lg:py-6">{item.installation_time}</td>
                <td className="text-nowrap px-3 py-3 lg:py-6">{item.of_installation}</td>
                <td
                  className="text-nowrap px-3 py-3 lg:py-6 rounded-r-lg cursor-pointer"
                  onClick={() => toggleExpand(item?.id)}
                >
                  {expanded.includes(item.id) ? <Minus2Svg /> : <Plus2Svg />}
                </td>
              </tr>

              {expanded.includes(item.id) &&
                item.children?.map((child, idx) => (
                  <tr key={idx} className="bg-[#eaeaea] shadow rounded-lg">
                    <td className="text-nowrap px-3 py-3 lg:py-6 pl-8">{child.sku}</td>
                    <td className="text-nowrap px-3 py-3 lg:py-6">{child.installation_time}</td>
                    <td className="text-nowrap px-3 py-3 lg:py-6">{child.of_installation}</td>
                    <td
                      onClick={() => setOpen(true)}
                      className="text-nowrap px-3 py-3 lg:py-6 cursor-pointer"
                    >
                      <Plus2Svg />
                    </td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>

        <Modal open={open} onClose={() => setOpen(false)} className="max-w-6xl">
          <AnalyticsModal />
        </Modal>
      </table>
    </div>
  );
};

export default ProductAnalytics;
