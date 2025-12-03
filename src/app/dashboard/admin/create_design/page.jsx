"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiImage } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { IoSend } from "react-icons/io5";


// static json data
const DESIGN_TABS = [
  { id: "single", label: "Single Door Design" },
  { id: "double", label: "Double Door Design" },
];

const PREVIOUS_DESIGNS = [
  {
    id: 1,
    img: "https://i.ibb.co.com/6RnS2Tfp/Frame-2147228050.png",
  },
  {

    img: "https://i.ibb.co.com/6RnS2Tfp/Frame-2147228050.png",
  },
  {
    id: 3,
    img: "https://i.ibb.co.com/6RnS2Tfp/Frame-2147228050.png",
  },
];

const CURRENT_DOOR = {
  img: "https://i.ibb.co.com/ZpbPyTtw/Frame-2147228016.png",
};

export default function DoorAiDesignerPage() {
  const [activeTab, setActiveTab] = useState("single");
  const [prompt, setPrompt] = useState("Make A Door Like glass");

  return (
    <main className="bg-[#EEF4F8] px-4 py-8">
      <div className="">
        {/* Tabs */}
        <div className="mb-4 flex flex-wrap gap-3">
          {DESIGN_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium shadow-sm transition
              ${
                activeTab === tab.id
                  ? "bg-[#21BBA2] text-white"
                  : "bg-white text-[#333]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main layout */}
        <div className="flex gap-10">
          {/* Left: current design + prompt area */}
          <section className="rounded-[26px] bg-white p-4 sm:p-6 shadow-[0_12px_35px_rgba(15,35,52,0.08)] h-[500px]">
            <div className="relative mx-auto mb-6 flex max-w-md justify-center rounded-[24px] bg-[#F7F9FB] p-4">
              <Image
                src={CURRENT_DOOR.img}
                alt="Current door design"
                width={360}
                height={420}
                className="h-auto w-full rounded-[16px] object-cover"
                unoptimized
              />

              <button
                type="button"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-md"
              >
                <LuDownload />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="mb-4 flex items-start gap-3">
              <div className="mt-1 h-9 w-9 overflow-hidden rounded-full border border-white shadow-md">
                <Image
                  src="https://i.ibb.co.com/ZpbPyTtw/Frame-2147228016.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>

              <div className="inline-flex max-w-md items-center rounded-full bg-[#F4F7FB] px-4 py-2 text-sm text-[#444] shadow-sm">
                Type your ideas to create your door design!
              </div>
            </div>

            {/* Prompt input row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center ">
              <div className="flex-1 rounded-full bg-[#F7F9FB] px-5 py-3 text-sm text-[#333] shadow-inner shadow-slate-200">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full bg-transparent text-sm text-[#333] outline-none"
                />
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CDD6E2] bg-white text-[20px] text-[#4B5B73] shadow-sm"
                >
                  <FiImage />
                </button>

                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#21BBA2] text-[22px] text-white shadow-md"
                >
                  <IoSend  />
                </button>
              </div>
            </div>
          </section>

          {/* Right: previous designs */}
          <section className="rounded-[26px] bg-white p-4 sm:p-5 shadow-[0_12px_35px_rgba(15,35,52,0.08)] w-[400px]">
            <h2 className="mb-4 text-lg font-semibold text-[#333]">
              View Previous
            </h2>

            <div className="flex flex-col gap-4 overflow-y-auto pr-1">
              {PREVIOUS_DESIGNS.map((item) => (
                <div
                  key={item.id}
                  className="relative overflow-hiddenbg-[#F7F9FB]"
                >
                  <Image
                    src={item.img}
                    alt={`Previous design ${item.id}`}
                    width={360}
                    height={260}
                    className="h-auto w-full rounded-[18px] object-cover"
                    unoptimized
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-md"
                  >
                    <LuDownload />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
