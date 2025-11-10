import React from "react";
const data = [
  {
    id: 1,
    customer_name: "Charli Curs",
    order_count: 20,
    amount: 100,
    profit: 5500,
  },
  {
    id: 2,
    customer_name: "William Sagel",
    order_count: 20,
    amount: 100,
    profit: 5500,
  },
  {
    id: 3,
    customer_name: "Charli Curs",
    order_count: 20,
    amount: 100,
    profit: 5500,
  },
];

const OrderByCustomer = () => {
  return (
    <div className="small_card">
      <h2 className="text-xl font-medium text-primary-text md:mb-5">
        Orders by Customer
      </h2>

      <div className="w-full max-w-lg sm:max-w-full overflow-x-auto">
        <table className="w-full border-spacing-3 md:border-spacing-4 border-separate text-center text-sm md:text-base">
          <thead>
            <tr className="rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
              <td className="py-4 px-2 text-nowrap">Customer</td>
              <td className="py-4 px-2 text-nowrap">Orders</td>
              <td className="py-4 px-2 text-nowrap">Total Amount</td>
              <td className="py-4 px-2 text-nowrap">Total Profit</td>
            </tr>
          </thead>

          <tbody>
            {data?.map(item => (
              <tr
                key={item?.id}
                className="rounded-lg shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
              >
                <td className="py-3 md:py-4 px-2 text-nowrap">{item?.customer_name}</td>
                <td className="py-3 md:py-4 px-2 text-nowrap">{item?.order_count}</td>
                <td className="py-3 md:py-4 px-2 text-nowrap">{item?.amount}</td>
                <td className="py-3 md:py-4 px-2 text-nowrap">{item?.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderByCustomer;
