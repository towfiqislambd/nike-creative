import React from "react";
const data = [
  {
    id: 1,
    door_name: "Double Door",
    sold: 20,
    profit: 5500,
    amount: 100,
  },
  {
    id: 2,
    door_name: "Double Door",
    sold: 20,
    profit: 5500,
    amount: 100,
  },
  {
    id: 3,
    door_name: "Double Door",
    sold: 20,
    profit: 5500,
    amount: 100,
  },
];

const PerformanceByCategory = () => {
  return (
    <div className="small_card">
      <h2 className="text-xl font-medium text-primary-text">
        Performance by Category
      </h2>

      <table className="w-full border-spacing-4 border-separate text-center">
        <thead>
          <tr className="rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
            <td className="py-4">Category</td>
            <td className="py-4">Units Sold</td>
            <td className="py-4">Revenue</td>
            <td className="py-4">Total Profit</td>
            <td className="py-4">Profit/Unit </td>
            <td className="py-4">AVG Profit Margin %</td>
          </tr>
        </thead>

        <tbody>
          {data?.map(item => (
            <tr
              key={item?.id}
              className="rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
            >
              <td className="py-4">{item?.door_name}</td>
              <td className="py-4">{item?.sold}</td>
              <td className="py-4">{item?.profit}</td>
              <td className="py-4">${item?.profit}</td>
              <td className="py-4">${item?.sold}</td>
              <td className="py-4">${item?.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceByCategory;
