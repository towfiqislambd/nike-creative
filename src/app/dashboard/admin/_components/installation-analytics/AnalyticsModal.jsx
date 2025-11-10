import { SearchSvg } from "../../../../../Components/Svg/SvgContainer";
import React from "react";
import productImg from "../../../../../Assets/preview_door.jpg";
import Image from "next/image";

const data = [
  {
    id: 1,
    product_image: productImg,
    sku: "KSBROOI",
    order_id: "12563",
    po_info: "PO-75000",
    installation_date: "5/11/2023",
    installation_time: "45min",
    company_name: "Tech Solutions Inc.",
  },
  {
    id: 2,
    product_image: productImg,
    sku: "KSBROOI",
    order_id: "12563",
    po_info: "PO-75000",
    installation_date: "5/11/2023",
    installation_time: "45min",
    company_name: "Tech Solutions Inc.",
  },
  {
    id: 3,
    product_image: productImg,
    sku: "KSBROOI",
    order_id: "12563",
    po_info: "PO-75000",
    installation_date: "5/11/2023",
    installation_time: "45min",
    company_name: "Tech Solutions Inc.",
  },
  {
    id: 4,
    product_image: productImg,
    sku: "KSBROOI",
    order_id: "12563",
    po_info: "PO-75000",
    installation_date: "5/11/2023",
    installation_time: "45min",
    company_name: "Tech Solutions Inc.",
  },
];

const AnalyticsModal = () => {
  return (
    <>
      <div className="flex items-center gap-5 mb-5">
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

      <div className="w-full max-w-lg md:max-w-full overflow-x-auto">
        <table className="w-full border-separate text-center border-spacing-y-3 lg:border-spacing-y-4 text-sm lg:text-base">
          <thead>
            <tr className="rounded shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] bg-[#F5F5F5]">
              <td className="text-nowrap px-2 py-4 lg:py-6 rounded-l-lg">
                Product Image
              </td>
              <td className="text-nowrap px-2 py-4 lg:py-6">SKU</td>
              <td className="text-nowrap px-2 py-4 lg:py-6">Order#</td>
              <td className="text-nowrap px-2 py-4 lg:py-6">PO</td>
              <td className="text-nowrap px-2 py-4 lg:py-6">
                Installation Date
              </td>
              <td className="text-nowrap px-2 py-4 lg:py-6">
                Installation Time
              </td>
              <td className="text-nowrap px-2 py-4 lg:py-6 rounded-r-lg">
                Company
              </td>
            </tr>
          </thead>

          <tbody>
            {data?.map(item => (
              <tr
                key={item?.id}
                className="rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.359px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] bg-white"
              >
                <td className="pl-3 py-2 md:py-3 rounded-l-lg">
                  <Image
                    src={item?.product_image}
                    alt="product_img"
                    className="size-10 md:size-[60px] rounded md:rounded-lg"
                  />
                </td>
                <td className="text-nowrap px-2">{item?.sku}</td>
                <td className="text-nowrap px-2">#{item?.order_id}</td>
                <td className="text-nowrap px-2">{item?.po}</td>
                <td className="text-nowrap px-2">{item?.installation_date}</td>
                <td className="text-nowrap px-2">{item?.installation_time}</td>
                <td className="text-nowrap px-2 rounded-r-lg">{item?.company_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AnalyticsModal;
