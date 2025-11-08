"use client";
import React, { useState } from "react";
import {
  EditSvg,
  SendIconSvg,
  PaperclipSvg,
  CrossIconSvg,
  BellIconSvg,
} from "../../../../Components/Svg/SvgContainer";
import AddEditQuoteModal from "../_components/AddEditQuoteModal";

const Status = ({ value }) => {
  const map = {
    Received: "bg-[rgba(255,72,66,0.30)] text-red-700",
    Sent: "bg-teal-100 text-teal-700",
    Accepted: "bg-teal-100 text-teal-700",
    "Order Placed": "bg-green-100 text-green-700",
    Pending: "bg-gray-100 text-gray-700",
  };
  return (
    <span
      className={`inline-block w-full text-center py-7 text-sm font-medium ${
        map[value] || "bg-gray-100 text-gray-700"
      }`}
    >
      {value}
    </span>
  );
};



const handleSubmitQuote = (data) => {

  console.log(modalMode === "edit" ? "Edit quote:" : "Add quote:", data);
};

export default function QuotesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [currentRow, setCurrentRow] = useState(null);
  const openAddQuote = () => {
  setCurrentRow(null);
  setModalMode("add");
  setModalOpen(true);
};

const openEditQuote = (row) => {
  setCurrentRow(row);
  setModalMode("edit");
  setModalOpen(true);
};

  const rows = [
  
  
  
    {
      id: "Q-1001",
      quoteBy: "Jacky",
      company: "Nexus Enterprises",
      description: "Custom CRM software build request..",
      date: "10/23/2025",
      price: "Pending",
      status: "Received",
      attach: true,
      actions: ["view", "send", "refresh"],
    },
    {
      id: "Q-1002",
      quoteBy: "Jacky",
      company: "Nexus Enterprises",
      description: "Custom CRM software build request..",
      date: "10/23/2025",
      price: "Pending",
      status: "Received",
      attach: true,
      actions: ["send", "refresh"],
    },
    {
      id: "Q-1003",
      quoteBy: "Jacky",
      company: "Nexus Enterprises",
      description: "Custom CRM software build request..",
      date: "10/23/2025",
      price: "Pending",
      status: "Received",
      attach: false,
      actions: ["send", "refresh"],
    },
    {
      id: "Q-1004",
      quoteBy: "Jacky",
      company: "Nexus Enterprises",
      description: "Custom CRM software build request..",
      date: "10/23/2025",
      price: "$561.00",
      status: "Sent",
      attach: false,
      actions: ["send", "refresh"],
    },
    {
      id: "Q-1005",
      quoteBy: "Jacky",
      company: "Nexus Enterprises",
      description: "Custom CRM software build request..",
      date: "10/23/2025",
      price: "$561.00",
      status: "Accepted",
      attach: true,
      actions: ["send", "refresh"],
    },
    {
      id: "Q-1006",
      quoteBy: "Jacky",
      company: "Nexus Enterprises",
      description: "Custom CRM software build request..",
      date: "10/23/2025",
      price: "$561.00",
      status: "Sent",
      attach: false,
      actions: ["send", "refresh"],
    },
    {
      id: "Q-1007",
      quoteBy: "Jacky",
      company: "Nexus Enterprises",
      description: "Custom CRM software build request..",
      date: "10/23/2025",
      price: "$561.00",
      status: "Order Placed",
      attach: true,
      actions: ["view"],
    },
  ];

  return (
    <>
      <div className="mb-6">
        <div className="relative rounded-[28px] bg-[#E0DDD7] px-6 py-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <h1 className="text-[28px] font-semibold text-[#333]">
              Account Details
            </h1>

            <div className="flex items-center gap-4">
              <div className="text-lg">
                <BellIconSvg />
              </div>
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10">
                <img
                  alt="avatar"
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=120&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#21BBA2] ring-2 ring-white" />
              </div>
            </div>
          </div>

          <div className="my-4 h-px w-full bg-black/15" />
          <div className="flex ">
            <button
              onClick={openAddQuote}
              className="flex items-center cursor-pointer justify-center text-[20px] font-normal leading-[150%] px-8 py-[17px] rounded-[10px] border border-[#F5F4F4] bg-[#D7D7D7] shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),0_0_0.225px_0.225px_rgba(0,0,0,0.07),0_0_0.225px_0_rgba(0,0,0,0.05),0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
            >
              Add New Quote
            </button>
          </div>
        </div>
      </div>

      <main className="">
        <div className="">
          <div className="overflow-x-auto">
            <table className="min-w-[1000px] w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-sm text-[#5A5C5F]">
                  <th className="rounded-tl-xl  bg-[#F7F7F7] px-5 py-4 font-semibold">
                    Quote#
                  </th>
                  <th className="bg-[#F7F7F7] px-5 py-4 font-semibold">
                    Company
                  </th>
                  <th className="bg-[#F7F7F7] px-5 py-4 font-semibold">
                    Description
                  </th>
                  <th className="bg-[#F7F7F7] px-5 py-4 font-semibold">Date</th>
                  <th className="bg-[#F7F7F7] px-5 py-4 font-semibold">
                    Price
                  </th>
                  <th className="bg-[#F7F7F7] px-5 py-4 font-semibold">
                    Status
                  </th>
                  <th className="bg-[#F7F7F7] px-5 py-4 font-semibold">
                    Attachment
                  </th>
                  <th className="rounded-tr-xl bg-[#F7F7F7] px-5 py-4 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.id}
                    className=" text-[15px] text-[#333] shadow-[0_8px_22px_rgba(0,0,0,0.06)]"
                  >
                    <td className=" bg-white px-5 py-5 font-medium">
                      {r.quoteBy}
                    </td>
                    <td className="bg-white px-5 py-5 whitespace-nowrap">
                      {r.company}
                    </td>
                    <td className="bg-white px-5 py-5">
                      <span className="block truncate max-w-[320px]">
                        {r.description}
                      </span>
                    </td>
                    <td className="bg-white px-5 py-5 whitespace-nowrap">
                      {r.date}
                    </td>
                    <td className="bg-white px-5 py-5 whitespace-nowrap">
                      {r.price}
                    </td>
                    <td className="bg-white ">
                      <Status value={r.status} />
                    </td>
                    <td className="bg-white text-center">
                      <div className="flex justify-center items-center cursor-pointer h-full w-full">
                        {r.attach ? <PaperclipSvg /> : <CrossIconSvg />}
                      </div>
                    </td>

                    <td className=" bg-white px-5 py-5">
                      <div className="flex items-center gap-4 text-[18px] text-gray-600">
                        <button
                          title="Send"
                          className="transition hover:opacity-80"
                        >
                          <SendIconSvg />
                        </button>
                        <button
                          title="Edit"
                          className="transition hover:opacity-80"
                          onClick={() => openEditQuote(r)}
                        >
                          <EditSvg />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <AddEditQuoteModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          mode={modalMode}
          initialData={currentRow || undefined}
          onSubmitQuote={handleSubmitQuote}
        />
      </main>
    </>
  );
}
