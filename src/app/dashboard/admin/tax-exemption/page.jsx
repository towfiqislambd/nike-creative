"use client";
import React, { useState } from "react";
import { BellIcon } from "lucide-react";
import Image from "next/image";
import {
  FiEdit2,
  FiTrash2,
  FiFileText,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";
import profilePicture from "../../../../Assets/profile.svg";


const headerCell = "px-6 py-4  font-semibold text-[#333] text-left bg-[#fff]";
const bodyCell =
  "px-6 py-4  text-[#333] bg-white align-middle whitespace-nowrap";

const initialRows = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    phone: "+1 123 1213 4566",
    address: "19th floor, UTC Building, Panthapath",
    hasDoc: true,
    expiration: "10/20/25",
    status: "Approved",
    enabled: true,
  },
  {
    id: 2,
    company: "Tech Solutions Inc.",
    phone: "+1 123 1213 4566",
    address: "19th floor, UTC Building, Panthapath",
    hasDoc: true,
    expiration: "Pending",
    status: "Pending",
    enabled: true,
  },
  {
    id: 3,
    company: "Tech Solutions Inc.",
    phone: "+1 123 1213 4566",
    address: "19th floor, UTC Building, Panthapath",
    hasDoc: false,
    expiration: "No Exception",
    status: "No Exception",
    enabled: false,
  },
];

export default function TaxExemptionPage() {
  const [rows, setRows] = useState(initialRows);

  const toggleEnabled = (id) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id ? { ...row, enabled: !row.enabled } : row
      )
    );
  };

  const setStatus = (id, status) => {
    setRows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, status } : row))
    );
  };

  const deleteRow = (id) => {
    if (!window.confirm("Are you sure you want to delete this company?"))
      return;
    setRows((prev) => prev.filter((row) => row.id !== id));
  };

  const renderStatus = (row) => {
    if (row.status === "Approved") {
      return (
        <span className="text-sm font-medium text-[#1A8F3A]">Approve</span>
      );
    }

    if (row.status === "Pending") {
      return (
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#F2A200]">
            Waiting Approval
          </span>
          <button
            onClick={() => setStatus(row.id, "Approved")}
            className="text-green-500 hover:text-green-600"
            title="Approve"
          >
            <FiCheckCircle size={18} />
          </button>
          <button
            onClick={() => setStatus(row.id, "No Exception")}
            className="text-red-500 hover:text-red-600"
            title="Reject"
          >
            <FiXCircle size={18} />
          </button>
        </div>
      );
    }
    return (
      <span className="text-sm font-medium text-gray-500">
        No tax exception
      </span>
    );
  };

  const renderDocCell = (row) => {
    if (row.hasDoc) {
      return (
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F3FF] text-[#007BFF]"
          title="View document"
        >
          <FiFileText size={18} />
        </button>
      );
    }

    return (
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
        <FiXCircle size={18} />
      </div>
    );
  };

  const renderToggle = (row) => (
    <button
      onClick={() => toggleEnabled(row.id)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full border transition-colors ${
        row.enabled
          ? "bg-[#4C9AF5] border-[#4C9AF5]"
          : "bg-gray-300 border-gray-300"
      }`}
      aria-label="Toggle tax exemption entry"
    >
      <span
        className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transform transition-transform ${
          row.enabled ? "translate-x-5" : "translate-x-1"
        }`}
      />
    </button>
  );

  return (
    <>
      <header className="bg-[#E4E3E0] p-2 md:p-6 rounded-2xl md:rounded-[40px] border-l-2 border-[#bbb] custom-shadow-xl">
        <nav className="flex max-[425px]:flex-col items-center justify-between gap-4 mb-5 pb-5 border-[#555]/50 border-b">
          <h2 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium">
            Tax Exemption
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
      <main className="mt-6">
        <div className="">
          <div className="">
            <table className="w-full border-separate border-spacing-y-[12px]">
              <thead>
                <tr>
                  <th className={`${headerCell} rounded-tl-[20px]`}>Company</th>
                  <th className={headerCell}>Phone Number</th>
                  <th className={headerCell}>Address</th>
                  <th className={headerCell}>Tax Exemption Document</th>
                  <th className={headerCell}>Tax Exemption Expiration Date</th>
                  <th className={headerCell}>Status</th>
                  <th className={`${headerCell} rounded-tr-[20px]`}>Action</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.id}
                    className="shadow-[0_6px_18px_rgba(0,0,0,0.29)] rounded-xl"
                  >
                    <td className={`${bodyCell} rounded-l-xl`}>
                      {row.company}
                    </td>
                    <td className={bodyCell}>{row.phone}</td>
                    <td className={bodyCell}>{row.address}</td>
                    <td className={bodyCell}>
                      <div className="flex justify-center">
                        {renderDocCell(row)}
                      </div>
                    </td>
                    <td className={bodyCell}>
                      <span className="text-sm text-[#333]">
                        {row.expiration}
                      </span>
                    </td>
                    <td className={bodyCell}>{renderStatus(row)}</td>
                    <td className={`${bodyCell} rounded-r-xl`}>
                      <div className="flex items-center justify-center gap-3">
                        <button
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50"
                          title="Edit"
                        >
                          <FiEdit2 size={18} />
                        </button>
                        <button
                          onClick={() => deleteRow(row.id)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 text-red-600 hover:bg-red-500/20"
                          title="Delete"
                        >
                          <FiTrash2 size={18} />
                        </button>
                        {renderToggle(row)}
                      </div>
                    </td>
                  </tr>
                ))}

                {rows.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-10 text-center text-gray-500"
                    >
                      No companies yet. Connect a company to see tax exemption
                      status here.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
