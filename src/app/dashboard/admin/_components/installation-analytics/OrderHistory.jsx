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
    <div className="w-full max-w-lg md:max-w-full overflow-x-auto">
      <table className="w-full border-separate text-center border-spacing-y-3 lg:border-spacing-y-4 text-sm lg:text-base">
        <thead>
          <tr className="rounded shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] bg-white">
            <td className="text-nowrap px-2 py-4 lg:py-6 rounded-l-lg">
              Order #
            </td>
            <td className="text-nowrap px-2 py-4 lg:py-6">PO Info</td>
            <td className="text-nowrap px-2 py-4 lg:py-6">Customer</td>
            <td className="text-nowrap px-2 py-4 lg:py-6">INSTALLATION DATE</td>
            <td className="text-nowrap px-2 py-4 lg:py-6 rounded-r-lg">
              INSTALLATION Duration
            </td>
          </tr>
        </thead>

        <tbody>
          {data?.map(item => (
            <tr
              key={item?.id}
              className="rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.359px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] bg-white"
            >
              <td className="text-nowrap px-3 py-3 lg:py-6 rounded-l-lg">
                {item?.id}
              </td>
              <td className="text-nowrap px-3 py-3 lg:py-6">{item?.po_info}</td>
              <td className="text-nowrap px-3 py-3 lg:py-6">
                {item?.customer_name}
              </td>
              <td className="text-nowrap px-3 py-3 lg:py-6">
                ${item?.installation_date}
              </td>
              <td className="text-nowrap px-3 py-3 lg:py-6 rounded-r-lg">
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
