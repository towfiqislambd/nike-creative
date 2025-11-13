"use client";
import { BellIcon, Plus } from "lucide-react";
import Image from "next/image";

import profilePicture from "../../../../Assets/profile.svg";
import ExpenseModal from "../_components/account-payable/ExpenseModal";
import { useState } from "react";
import { ReceiptFile } from "../../../../Components/Svg/SvgContainer2";

const amountStatus = [
  {
    title: "This Month’s Total Spent",
    amount: "4,235.25",
  },
  {
    title: "Pending Bills",
    amount: "952.00",
  },
  {
    title: "Overdue Bills",
    amount: "152.00",
  },
  {
    title: "This Year Total Spent",
    amount: "152.00",
  },
];

const page = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: "11/22/2025",
      description: "Gasoline for delivery truck",
      category: "Production Costs",
      paymentMethod: "Manual",
      reminder: "Due in: 2 days",
      supplier: "Water USA",
      amount: 1351.25,
      receipt: false,
    },
    {
      id: 2,
      date: "11/10/2025",
      description: "Gasoline for delivery truck",
      category: "Production Costs",
      paymentMethod: "Manual",
      reminder: "Upcoming",
      supplier: "Electricity USA",
      amount: 1850.75,
      receipt: true,
    },
    {
      id: 3,
      date: "11/25/2025",
      description: "Gasoline for delivery truck",
      category: "Production Costs",
      paymentMethod: "Manual",
      reminder: "Past Due: 2 Days",
      supplier: "Property Rent Company",
      amount: 1850.75,
      receipt: false,
    },
    {
      id: 4,
      date: "11/22/2025",
      description: "Gasoline for delivery truck",
      category: "Transportation",
      paymentMethod: "Automatically",
      reminder: "Paid",
      supplier: "Loan Machine Company",
      amount: 1850.75,
      receipt: false,
    },
    {
      id: 5,
      date: "11/22/2025",
      description: "Gasoline for delivery truck",
      category: "Transportation",
      paymentMethod: "Automatically",
      reminder: "Paid",
      supplier: "Loan Machine Company",
      amount: 1850.75,
      receipt: false,
    },
  ]);

  const [selectedExpense, setSelectedExpense] = useState(null);
  const [filters, setFilters] = useState({
    category: "All",
    provider: "All",
    date: "",
  });

  // handle filter
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    console.log(e.target.name);
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredExpenses = expenses.filter((e) => {
    const matchCategory =
      filters.category === "All" || e.category === filters.category;
    const matchProvider =
      filters.provider === "All" || e.supplier === filters.provider;
    const matchDate = filters.date === "" || e.date.startsWith(filters.date);
    return matchCategory && matchProvider && matchDate;
  });

  const handleUpdateExpense = (updatedData) => {
    setExpenses((prev) =>
      prev.map((exp) =>
        exp.id === updatedData.id
          ? { ...exp, receipt: true, amount: updatedData.amount }
          : exp
      )
    );
    setSelectedExpense(null);
  };

  const reminderColor = (status) => {
    if (status.includes("Due in")) return "bg-[#FF48424D]";
    if (status.includes("Past")) return "bg-[#FF48424D] text-[#FF4842]";
    if (status.includes("Paid")) return "bg-[#D7FFCA] text-[#3BB515]";
  };

  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] p-2 md:p-6 rounded-2xl md:rounded-[40px] border-l-2 border-[#bbb] custom-shadow-xl">
        <nav className="flex max-[425px]:flex-col items-center justify-between gap-4 mb-5 pb-5 border-[#555]/50 border-b">
          <h2 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium">
            Accounts Payable
          </h2>
          <div className="flex items-center gap-5">
            <button className="relative">
              <BellIcon className="text-[#F34235]" />
              <div className="size-5 text-white bg-[#F34235] rounded-full flex items-center justify-center text-xs absolute -top-1.5 -right-1.5 border-2 border-[#e4e3e0]">
                2
              </div>
            </button>
            <div className="relative shrink-0 cursor-pointer">
              <Image
                src={profilePicture}
                width={48}
                height={48}
                alt="profile"
                className="rounded-full"
              />
              <div className="size-4 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
            </div>
          </div>
        </nav>
      </header>
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-5">
        {amountStatus.map(({ title, amount }, index) => (
          <div
            key={index}
            className="rounded-lg md:rounded-[20px] bg-white flex flex-col justify-center items-center text-center gap-2 md:gap-[30px] py-5 md:py-[30px] md:pr-[32px] md:pl-[33px] custom-shadow-xl"
          >
            <h3 className="text-lg md:text-2xl font-medium">{title}</h3>
            <h4 className="text-xl md:text-4xl font-semibold text-[#3BB515]">
              ${amount}
            </h4>
          </div>
        ))}
      </div>
      <div className="flex flex-col min-[1877px]:flex-row gap-5">
        <div className="min-w-0 overflow-x-auto bg-white px-5 py-[30px] rounded-[20px] custom-shadow-xl">
          <div className="w-[1152px]">
            <h1 className="section_subTitle">Expense Management</h1>
            <hr className="my-5 text-[#55555580]" />
            {/* filter */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div>
                <select
                  name="category"
                  onChange={handleFilterChange}
                  className="bg-[#E4E3E0] hover:bg-[#E4E3E0]/80 px-3 py-2 sm:px-5 sm:py-4 max-sm:text-sm text-primary-text rounded-lg border border-[#565656] custom-shadow-xl"
                >
                  <option value="All">All Categories</option>
                  {[...new Set(expenses.map((e) => e.category))].map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  name="provider"
                  onChange={handleFilterChange}
                  className="bg-[#E4E3E0] hover:bg-[#E4E3E0]/80 px-3 py-2 sm:px-5 sm:py-4 max-sm:text-sm text-primary-text rounded-lg border border-[#565656] custom-shadow-xl"
                >
                  <option value="All">All Providers</option>
                  {[...new Set(expenses.map((e) => e.supplier))].map((prov) => (
                    <option key={prov}>{prov}</option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  type="month"
                  name="date"
                  onChange={handleFilterChange}
                  className="bg-[#E4E3E0] hover:bg-[#E4E3E0]/80 px-3 py-2 sm:px-5 sm:py-4 max-sm:text-sm text-primary-text rounded-lg border border-[#565656] custom-shadow-xl"
                />
              </div>
            </div>
            {/* table */}
            <table className="border-spacing-y-3 border-separate">
              <thead className="rounded-lg border custom-shadow-xl">
                <tr className="rounded-lg border bg-white">
                  <th className="px-3 py-3 md:py-5 font-normal rounded-tl-lg">
                    Due Date
                  </th>
                  <th className="px-3 py-3 md:py-5 font-normal">Description</th>
                  <th className="px-3 py-3 md:py-5 font-normal">Category</th>
                  <th className="px-3 py-3 md:py-5 font-normal">
                    Payment Method
                  </th>
                  <th className="px-3 py-3 md:py-5 font-normal">Reminder</th>
                  <th className="px-3 py-3 md:py-5 font-normal">Supplier</th>
                  <th className="px-3 py-3 md:py-5 font-normal">Amount</th>
                  <th className="px-3 py-3 md:py-5 font-normal rounded-tr-lg">
                    <ReceiptFile />
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {filteredExpenses.length > 0 ? (
                  filteredExpenses.map((exp) => (
                    <tr
                      key={exp.id}
                      className="border rounded-lg custom-shadow-xl bg-white"
                    >
                      <td className="px-3 py-3 md:py-5 text-center rounded-l-lg">
                        {exp.date}
                      </td>
                      <td className="px-3 py-3 md:py-5 text-center">
                        {exp.description}
                      </td>
                      <td className="px-3 py-3 md:py-5 text-center">
                        {exp.category}
                      </td>
                      <td className="px-3 py-3 md:py-5 text-center">
                        {exp.paymentMethod}
                      </td>
                      <td
                        className={`px-3 py-3 md:py-5 text-center  ${reminderColor(
                          exp.reminder
                        )}`}
                      >
                        {exp.reminder}
                      </td>
                      <td className="px-3 py-3 md:py-5 text-center">
                        {exp.supplier}
                      </td>
                      <td className="px-3 py-3 md:py-5 text-center">
                        {exp.amount ? `$${exp.amount}` : "-"}
                      </td>
                      <td className="px-3 py-3 md:py-5 text-center rounded-r-lg">
                        <div className="flex items-center justify-center">
                          {exp.receipt ? (
                            <ReceiptFile />
                          ) : (
                            <button
                              onClick={() => setSelectedExpense(exp)}
                              className="text-red-500 bg-white size-6 custom-shadow-xl flex items-center justify-center rounded-full"
                            >
                              <Plus />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="p-4 text-center text-gray-500" colSpan={8}>
                      No expenses found for selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* view & add receipt modal */}
          {selectedExpense && (
            <ExpenseModal
              expense={selectedExpense}
              onClose={() => setSelectedExpense(null)}
              onUpdate={handleUpdateExpense}
            />
          )}
        </div>
        <div className="space-y-5 flex-1 max-md:flex-col max-[1877px]:flex-row flex-col flex gap-5">
          <div className="inline-flex w-full flex-col gap-5 rounded-[20px] bg-white custom-shadow-xl px-[30px] py-5 max-w-[500px] h-fit">
            <h3 className="card_title font-medium">Quick Add Expense</h3>
            <div className="space-y-5 flex flex-col">
              <button className="px-2.5 py-[18px] bg-[#5190A2] rounded-lg text-white text-base md:text-xl">
                <h5>Add New Expense</h5>
              </button>
              <button className="px-2.5 py-[18px] bg-[#5190A2] rounded-lg text-white text-base md:text-xl">
                <h5>Setup Recurring</h5>
              </button>
            </div>
          </div>
          <div className="inline-flex w-full flex-col gap-5 rounded-[20px] bg-white custom-shadow-xl px-[30px] py-5 max-w-[500px] h-fit">
            <div className="flex items-center gap-2.5">
              <button className="relative">
                <BellIcon className="text-[#F34235]" />
                <div className="size-5 text-white bg-[#F34235] rounded-full flex items-center justify-center text-xs absolute -top-1.5 -right-1.5 border-2 border-[#e4e3e0]">
                  2
                </div>
              </button>
              <h3 className="card_title font-medium">Payment Alerts</h3>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between px-2.5 py-[18px] gap-[25px] bg-[#5190A2] rounded-lg text-white">
                <div>
                  <h5>Electricity USA</h5>
                  <p className="text-xs">Due in 1 day - $231.02</p>
                </div>
                <button className="px-4 py-2.5 bg-[#FF48424D] rounded-lg">
                  Update
                </button>
              </div>
              <div className="flex items-center justify-between px-2.5 py-[18px] gap-[25px] bg-[#5190A2] rounded-lg text-white">
                <div>
                  <h5>Electricity USA</h5>
                  <p className="text-xs">Due in 1 day - $231.02</p>
                </div>
                <button className="px-4 py-2.5 bg-[#FF48424D] rounded-lg">
                  Update
                </button>
              </div>
              <div className="flex items-center justify-between px-2.5 py-[18px] gap-[25px] bg-[#5190A2] rounded-lg text-white">
                <div>
                  <h5>Electricity USA</h5>
                  <p className="text-xs">Due in 1 day - $231.02</p>
                </div>
                <button className="px-4 py-2.5 bg-[#FF48424D] rounded-lg">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
