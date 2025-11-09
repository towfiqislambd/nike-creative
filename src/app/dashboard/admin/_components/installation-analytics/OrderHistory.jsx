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
    <table className="w-full border-spacing-y-4 border-separate text-center">
      <thead>
        <tr className="rounded shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] bg-white">
          <td className="py-6 rounded-l-lg">Order #</td>
          <td className="py-6">PO Info</td>
          <td className="py-6">Customer</td>
          <td className="py-6">INSTALLATION DATE</td>
          <td className="py-6 rounded-r-lg">INSTALLATION Duration</td>
        </tr>
      </thead>

      <tbody>
        {data?.map(item => (
          <tr
            key={item?.id}
            className="rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.359px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)] bg-white"
          >
            <td className="py-6 rounded-l-lg">{item?.id}</td>
            <td className="py-6">{item?.po_info}</td>
            <td className="py-6">{item?.customer_name}</td>
            <td className="py-6">${item?.installation_date}</td>
            <td className="py-6 rounded-r-lg">
              ${item?.installation_duration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderHistory;
