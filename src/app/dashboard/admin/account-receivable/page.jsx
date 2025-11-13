"use client";
import React, { useState } from "react";
import {
  FiSend,
  FiCreditCard,
  FiCamera,
  FiX,
  FiBell,
} from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { DocSvg } from "../../../../Components/Svg/SvgContainer";

// ✅ Status Component
function Status({ value }) {
  const styles =
    value === "Installed"
      ? "bg-teal-50 text-teal-700"
      : value === "Delivered"
      ? "bg-emerald-200 text-emerald-800"
      : "bg-gray-100 text-gray-700";

  return (
    <td
      className={`status-td px-4 py-2 text-sm font-medium text-center ${styles}`}
    >
      {value}
    </td>
  );
}

// ✅ Proof Component
function Proof({ available }) {
  return (
    <div className="flex items-center justify-center gap-2 text-sm">
      <span className={`${available ? "text-gray-700" : "text-red-500"}`}>
        {available ? <FiCamera /> : <FiX />}
      </span>
      <span
        className={`${
          available ? "text-gray-700" : "text-red-600"
        } font-medium`}
      >
        {available ? "Available" : "Missing"}
      </span>
    </div>
  );
}

// ✅ Main Component
export default function AccountsReceivable() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [company, setCompany] = useState("All");

  const STATUS = ["All", "Pending", "Paid", "Overdue"];
  const COMPANIES = ["All", "Google", "Apple", "Microsoft"];

  const [rows] = useState([
    {
      id: "r1",
      date: "02/19/2025",
      order: "#123654",
      po: "PO-2024-001",
      company: "Tech Solutions Inc.",
      status: "Installed",
      proof: true,
      invoice: true,
      balance: "$4532.00",
    },
    {
      id: "r2",
      date: "02/19/2025",
      order: "#123654",
      po: "PO-2024-002",
      company: "Tech Solutions Inc.",
      status: "Delivered",
      proof: false,
      invoice: true,
      balance: "$4532.00",
    },
    {
      id: "r3",
      date: "02/19/2025",
      order: "#123654",
      po: "PO-2024-003",
      company: "Nike Company",
      status: "Installed",
      proof: true,
      invoice: true,
      balance: "$4532.00",
    },
    {
      id: "r4",
      date: "02/19/2025",
      order: "#123654",
      po: "PO-2024-004",
      company: "It Solution",
      status: "Delivered",
      proof: false,
      invoice: true,
      balance: "$4532.00",
    },
    {
      id: "r5",
      date: "02/19/2025",
      order: "#123654",
      po: "PO-2024-005",
      company: "It Solution",
      status: "Installed",
      proof: true,
      invoice: true,
      balance: "$4532.00",
    },
    {
      id: "r6",
      date: "02/19/2025",
      order: "#123654",
      po: "PO-2024-006",
      company: "Tech Solutions Inc.",
      status: "Installed",
      proof: true,
      invoice: true,
      balance: "$4532.00",
    },
    {
      id: "r7",
      date: "02/19/2025",
      order: "#123654",
      po: "PO-2024-006",
      company: "Tech Solutions Inc.",
      status: "Installed",
      proof: true,
      invoice: true,
      balance: "$4532.00",
    }])

  // ✅ Filter rows based on company search only
  const filteredRows = rows.filter((row) =>
    row.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <div className="rounded-[24px] bg-[#E0DDD7] px-5 py-4 shadow-sm w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-[22px] sm:text-[24px] font-semibold text-[#333]">
            Accounts Receivable
          </h1>

          <div className="flex items-center justify-end gap-4">
            {/* Notification */}
            <div className="relative text-red-500 text-xl cursor-pointer">
              <FiBell />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </div>

            {/* Profile */}
            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=120&auto=format&fit=crop"
                alt="User Avatar"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#71F18E] ring-2 ring-white" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-3 h-px w-full bg-black/15" />

        {/* Filters */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          {/* ✅ Search Input (only filters by company) */}
          <div className="flex items-center rounded-[10px] border border-gray-300 bg-[#E0DDD7] px-3 py-2 shadow-sm w-full sm:w-auto sm:min-w-[260px]">
            <IoSearch className="text-gray-500 text-lg mr-2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Company..."
              className="w-full bg-transparent text-sm outline-none placeholder-gray-500"
            />
          </div>

          {/* Status Filter */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full sm:w-[180px] rounded-[10px] border border-gray-300 bg-[#E0DDD7] px-3 py-2 text-sm shadow-sm focus:border-gray-500 outline-none"
          >
            {STATUS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          {/* Company Filter */}
          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full sm:w-[180px] rounded-[10px] border border-gray-300 bg-[#E0DDD7] px-3 py-2 text-sm shadow-sm focus:border-gray-500 outline-none"
          >
            {COMPANIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table Section */}
      <main className="min-h-screen">
        <div className="mb-6">
          <h1 className="text-[28px] md:text-[34px] font-semibold text-[#333]">
            Accounts Receivable
          </h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-4">
            <thead>
              <tr>
                <th className="th rounded-l-xl">
                  <input type="checkbox" className="h-5 w-5 accent-[#21BBA2]" />
                </th>
                <th className="th">Date</th>
                <th className="th">Order #</th>
                <th className="th">PO #</th>
                <th className="th">Company</th>
                <th className="th">Status</th>
                <th className="th">Install Proof</th>
                <th className="th">Invoice</th>
                <th className="th">Balance</th>
                <th className="th rounded-r-xl">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredRows.length > 0 ? (
                filteredRows.map((r) => (
                  <tr
                    key={r.id}
                    className="rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.07)]"
                  >
                    <td className="td rounded-l-xl">
                      <div className="flex justify-center">
                        <input
                          type="checkbox"
                          className="h-5 w-5 accent-[#21BBA2]"
                        />
                      </div>
                    </td>

                    <td className="td">{r.date}</td>
                    <td className="td">{r.order}</td>
                    <td className="td">{r.po}</td>
                    <td className="td">{r.company}</td>
                    <Status value={r.status} />
                    <td className="td">
                      <Proof available={r.proof} />
                    </td>

                    <td className="td">
                      <div className="flex items-center justify-center gap-2 text-[#2f6efc]">
                        <DocSvg />
                        <button className="text-black">View</button>
                      </div>
                    </td>

                    <td className="td">
                      <div className="text-center font-medium">{r.balance}</div>
                    </td>

                    <td className="td rounded-r-xl">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          className="grid h-10 w-10 place-items-center rounded-full bg-[#E6F4FF] text-[#1d6ee3] hover:opacity-90"
                          title="Send"
                        >
                          <FiSend />
                        </button>
                        <button
                          className="grid h-10 w-10 place-items-center rounded-full bg-[#E6F3FF] text-[#1d6ee3] hover:opacity-90"
                          title="Pay"
                        >
                          <FiCreditCard />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={10}
                    className="bg-white px-5 py-10 text-center text-gray-500 rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
                  >
                    No receivables found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
