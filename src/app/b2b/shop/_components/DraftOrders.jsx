import React from "react";
import productImg from "../../../../Assets/m2.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
const data = [
  {
    id: 1,
    product_name: "PO info",
    product_photo: productImg,
    saved_time: "20/08/25 8:08 am",
  },
  {
    id: 2,
    product_name: "PO info",
    product_photo: productImg,
    saved_time: "20/08/25 8:08 am",
  },
  {
    id: 3,
    product_name: "PO info",
    product_photo: productImg,
    saved_time: "20/08/25 8:08 am",
  },
  {
    id: 4,
    product_name: "PO info",
    product_photo: productImg,
    saved_time: "20/08/25 8:08 am",
  },
];

const DraftOrders = () => {
  return (
    <div className="w-full max-w-lg sm:max-w-full overflow-x-auto">
      <table className="w-full border-spacing-y-3 border-separate text-center text-sm md:text-base">
        <thead>
          <tr className="rounded-lg shadow-lg">
            <td className="py-4 px-2 text-nowrap">Product Photo</td>
            <td className="py-4 px-2 text-nowrap">Product Name</td>
            <td className="py-4 px-2 text-nowrap">Saved time</td>
            <td className="py-4 px-2 text-nowrap">Action</td>
            <td className="py-4 px-2 text-nowrap">Remove</td>
          </tr>
        </thead>

        <tbody>
          {data?.map(item => (
            <tr key={item?.id} className="rounded-lg bg-white shadow-lg">
              <td className="py-2 px-2 text-nowrap rounded-l-xl">
                <Image
                  src={item?.product_photo}
                  alt="product_photo"
                  className="w-[80px] h-[60px] rounded-lg"
                />
              </td>

              <td className="py-2 px-2 text-nowrap">{item?.product_name}</td>

              <td className="py-2 px-2 text-nowrap">{item?.saved_time}</td>

              <td className="py-2 px-2 text-nowrap">
                <button className="px-4 shadow-lg py-2 rounded-lg bg-light-green text-white cursor-pointer text-sm">
                  Continue
                </button>
              </td>

              <td className="py-2 px-2 text-nowrap rounded-r-xl">
                <button className="size-8 rounded-full bg-red-500 text-white cursor-pointer grid place-items-center">
                  <RiDeleteBin6Line className="text-lg" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DraftOrders;
