"use client";

import React, { useMemo, useState } from "react";
import { FiBell, FiClock, FiFolder } from "react-icons/fi";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export default function BankMatchingPage() {
  const [bankTransactions] = useState([
    {
      id: "b1",
      date: "09/18/2025",
      description: "Purchase Rotarn Tech Store",
      amount: 299,
    },
    {
      id: "b2",
      date: "09/18/2025",
      description: 'Payment for Advertising "A6Pafom"',
      amount: -350,
    },
    {
      id: "b3",
      date: "09/18/2025",
      description: 'Transfer from "Innovate Corp"',
      amount: 3200,
    },
    {
      id: "b4",
      date: "09/18/2025",
      description: "Bank Service Fee",
      amount: -15,
    },
    {
      id: "b5",
      date: "09/18/2025",
      description: "Wire Transfer Fee",
      amount: -25,
    },
    {
      id: "b6",
      date: "09/18/2025",
      description: 'Payment to "Office Supplies Co."',
      amount: -75,
    },
  ]);
  const unassignedTransactions = [
    {
      id: "u1",
      type: "income",
      description: "Refund from Tech World",
      date: "01/03/2026",
      amount: 120.0,
    },
    {
      id: "u2",
      type: "income",
      description: "Stripe Payout — Order #4270",
      date: "01/02/2026",
      amount: 499.99,
    },
    {
      id: "u3",
      type: "income",
      description: "Transfer from Client (Invoice #9812)",
      date: "01/02/2026",
      amount: 800.0,
    },
    {
      id: "u4",
      type: "expense",
      description: "Payment to Door Hardware Co.",
      date: "01/04/2026",
      amount: -245.5,
    },
    {
      id: "u5",
      type: "expense",
      description: "UPS Shipping Fee",
      date: "01/03/2026",
      amount: -19.95,
    },
  ];

  const [selectedBankIds, setSelectedBankIds] = useState(["b2"]);
  const [selectedUnassignedIds, setSelectedUnassignedIds] = useState([
    "u1",
    "u2",
  ]);
  const [unassignedTab, setUnassignedTab] = useState("income");

  const toggleBank = (id) => {
    setSelectedBankIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const toggleUnassigned = (id) => {
    setSelectedUnassignedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const visibleUnassigned = useMemo(
    () => unassignedTransactions.filter((t) => t.type === unassignedTab),
    [unassignedTab, unassignedTransactions]
  );

  const selectedBankTotal = useMemo(
    () =>
      bankTransactions
        .filter((t) => selectedBankIds.includes(t.id))
        .reduce((sum, t) => sum + t.amount, 0),
    [bankTransactions, selectedBankIds]
  );

  const selectedUnassignedTotal = useMemo(
    () =>
      visibleUnassigned
        .filter((t) => selectedUnassignedIds.includes(t.id))
        .reduce((sum, t) => sum + t.amount, 0),
    [visibleUnassigned, selectedUnassignedIds]
  );

  const showAssociateBar =
    selectedBankIds.length > 0 && selectedUnassignedIds.length > 0;

  const handleAssociate = () => {
    console.log("Associating", {
      bankTxIds: selectedBankIds,
      unassignedTxIds: selectedUnassignedIds,
    });
    toast.success("Pretend we associated these transactions in the backend");
  };

  return (
    <>
      <div className="bg-[#E4E3E0] p-2 sm:px-2.5 sm:pt-2.5 sm:pb-2 rounded-xl md:rounded-[20px] border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)] mb-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="dashboard_title">
            Bank Account Integration
          </h1>

          <div className="flex items-center justify-end gap-4">
            <div className="relative text-red-500 text-xl cursor-pointer">
              <FiBell />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </div>
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
      </div>

      <main className=" bg-[#EFF3F6]">
        <div className="">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="overflow-x-auto">
            <section className="rounded-[28px] w-[925px] bg-white px-4 py-3 shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] text-sm ">
              <div>
                <h2 className="text-xl font-medium text-[#333] mb-5">
                  Bank Transactions
                </h2>
              </div>

              <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex  items-end justify-between gap-4  text-[#5A5C5F] w-full">
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-1">
                      <span>Start Day</span>
                      <input
                        type="date"
                        className="rounded-lg border border-gray-300 px-3 py-2  outline-none"
                        defaultValue="2025-12-21"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span>End Day</span>
                      <input
                        type="date"
                        className="rounded-lg border border-gray-300 px-3 py-2  outline-none"
                        defaultValue="2025-12-30"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span>Type</span>
                      <select className="rounded-lg border border-gray-300 px-3 py-2 outline-none">
                        <option>All</option>
                        <option>Income</option>
                        <option>Expense</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 pt-5 ">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300"
                      />
                      <span>Show unassigned only</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="hidden rounded-[8px] bg-white px-4 py-3  text-[#333] custom-shadow-xl">
                <span />
                <span>Date</span>
                <span>Description</span>
                <span className="text-right">Amount</span>
                <span className="text-center">Status</span>
                <span className="text-center">Folder</span>
              </div>
              <div className="space-y-3">
                {bankTransactions.map((tx) => {
                  const isSelected = selectedBankIds.includes(tx.id);
                  const isNegative = tx.amount < 0;
                  return (
                    <div
                      key={tx.id}
                      className="rounded-[8px] bg-white px-4 py-4  text-[#333] shadow-[0_8px_22px_rgba(0,0,0,0.29)]"
                    >
                      <div className="grid grid-cols-[40px_110px_minmax(0,1.6fr)_minmax(0,1fr)_90px_70px] items-center gap-2">
                        <div className="flex justify-center">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleBank(tx.id)}
                            className="h-4 w-4 rounded border-gray-300 accent-[#21BBA2]"
                          />
                        </div>
                        <div className=" font-medium text-[#333]">
                          {tx.date}
                        </div>
                        <div className="truncate ">{tx.description}</div>
                        <div
                          className={`text-right  font-semibold ${
                            isNegative ? "text-[#FF4B4B]" : "text-[#03A66A]"
                          }`}
                        >
                          {formatCurrency(tx.amount)}
                        </div>
                        <div className="flex justify-center">
                          <div className="text-[#03A66A] text-xl ">
                            <FiClock />
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <div className=" text-xl cursor-pointer">
                            <FiFolder />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            </div>
            <section className="rounded-[28px] bg-white px-4 py-3 shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] text-sm">
              <h2 className="text-xl font-semibold text-[#333]">
                Unassigned Transactions
              </h2>
              <div className="mt-4 inline-flex rounded-full bg-[#F4F5F7] p-1 font-medium">
                <button
                  onClick={() => setUnassignedTab("income")}
                  className={`rounded-full px-4 py-1 ${
                    unassignedTab === "income"
                      ? "bg-white shadow-sm"
                      : "text-[#5A5C5F]"
                  }`}
                >
                  Income
                </button>
                <button
                  onClick={() => setUnassignedTab("expenses")}
                  className={`rounded-full px-4 py-1 ${
                    unassignedTab === "expenses"
                      ? "bg-white shadow-sm"
                      : "text-[#5A5C5F]"
                  }`}
                >
                  Expenses
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {visibleUnassigned.map((tx) => {
                  const isSelected = selectedUnassignedIds.includes(tx.id);
                  return (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between max-sm:text-sm rounded-2xl bg-white px-4 py-3  text-[#333] shadow-[0_8px_22px_rgba(0,0,0,0.06)]"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleUnassigned(tx.id)}
                          className="h-4 w-4 rounded border-gray-300 accent-[#21BBA2]"
                        />
                        <div>
                          <div className="max-w-[260px] text-wrap truncate font-medium">
                            {tx.description}
                          </div>
                          <div className=" text-[#5A5C5F]">
                            {tx.date}
                          </div>
                        </div>
                      </div>

                      <div className="font-semibold text-[#333]">
                        {formatCurrency(tx.amount)}
                      </div>
                    </div>
                  );
                })}

                {visibleUnassigned.length === 0 && (
                  <div className="rounded-2xl bg-white px-4 py-10 text-center  text-gray-500 shadow-[0_8px_22px_rgba(0,0,0,0.06)]">
                    No unassigned transactions for this tab.
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>

        {showAssociateBar && (
          <div className="fixed bottom-4 left-1/2 z-20 w-[92%] max-w-3xl -translate-x-1/2 rounded-2xl bg-white px-6 py-3  text-[#333] shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold">Associate</span>
                <span>
                  txs (
                  <span className="font-medium">
                    {formatCurrency(selectedBankTotal)}
                  </span>
                  ) with{" "}
                  <button className="text-[#1f7aa8] underline">
                    {selectedUnassignedIds.length} items
                  </button>{" "}
                  (
                  <span className="font-medium">
                    {formatCurrency(selectedUnassignedTotal)}
                  </span>
                  )
                </span>
              </div>

              <button
                onClick={handleAssociate}
                className="rounded-full bg-[#3B7F93] px-5 py-2  font-medium text-white hover:bg-[#356f81]"
              >
                Associate
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
