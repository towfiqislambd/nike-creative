import React from "react";

const data = [
  {
    id: "213021",
    po_info: "PO-75000",
    customer_name: "Cityscape Developers",
    installation_date: "5/11/2023",
    installation_duration: "111",
  },
  {
    id: "213021",
    po_info: "PO-75000",
    customer_name: "Cityscape Developers",
    installation_date: "5/11/2023",
    installation_duration: "111",
  },
  {
    id: "213021",
    po_info: "PO-75000",
    customer_name: "Cityscape Developers",
    installation_date: "5/11/2023",
    installation_duration: "111",
  },
  {
    id: "213021",
    po_info: "PO-75000",
    customer_name: "Cityscape Developers",
    installation_date: "5/11/2023",
    installation_duration: "111",
  },
  {
    id: "213021",
    po_info: "PO-75000",
    customer_name: "Cityscape Developers",
    installation_date: "5/11/2023",
    installation_duration: "111",
  },
  {
    id: "213021",
    po_info: "PO-75000",
    customer_name: "Cityscape Developers",
    installation_date: "5/11/2023",
    installation_duration: "111",
  },
];

const OrderHistory = () => {
  return (
    <div className="w-full max-w-lg md:max-w-full overflow-x-auto px-1">
      <table className="w-full border-separate text-center border-spacing-y-1.5 lg:border-spacing-y-3 text-sm lg:text-base">
        <thead>
          <tr className="rounded custom-shadow-xl bg-white text-sm font-medium">
            <td className="text-nowrap px-2 py-4 rounded-l-lg">
              Order #
            </td>
            <td className="text-nowrap px-2 py-4">PO Info</td>
            <td className="text-nowrap px-2 py-4">Customer</td>
            <td className="text-nowrap px-2 py-4">INSTALLATION DATE</td>
            <td className="text-nowrap px-2 py-4 rounded-r-lg">
              INSTALLATION Duration
            </td>
          </tr>
        </thead>

        <tbody>
          {data?.map(item => (
            <tr
              key={item?.id}
              className="rounded-lg custom-shadow-xl bg-white text-sm"
            >
              <td className="text-nowrap px-3 py-3 rounded-l-lg">
                {item?.id}
              </td>
              <td className="text-nowrap px-3 py-3">{item?.po_info}</td>
              <td className="text-nowrap px-3 py-3">
                {item?.customer_name}
              </td>
              <td className="text-nowrap px-3 py-3">
                ${item?.installation_date}
              </td>
              <td className="text-nowrap px-3 py-3 rounded-r-lg">
                ${item?.installation_duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
