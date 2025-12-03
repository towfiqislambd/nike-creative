"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiDownload, FiImage } from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import { ShareSvg } from "../../../../Components/Svg/SvgContainer";

// ---- static JSON data ----
const chatMessages = [
  {
    id: 1,
    from: "ai",
    text: "Hello Admin. I'm ready to assist. Please describe the glass design you need with specifications (Company, Factory, Sizes, Color, and Features).",
  },
  {
    id: 2,
    from: "user",
    text: "Modern glass door, tempered full-length glass, sleek aluminum frame, minimal style with frosted patterns, premium corporate look, realistic render.",
  },
];

const fileRows = [
  {
    id: 1,
    dxf: "1-123456.dxf",
    eps: "1-123456.eps",
    date: "11/23/2025",
    time: "10:07 PM",
    user: "AI Agent",
    isDefault: true,
    fileStatus: "Ready",
  },
  {
    id: 2,
    dxf: "2-123456.dxf",
    eps: "2-123456.eps",
    date: "11/23/2025",
    time: "8:06 AM",
    user: "AI Agent",
    isDefault: false,
    fileStatus: "Ready",
  },
  {
    id: 3,
    dxf: "3-123456.dxf",
    eps: "3-123456.eps",
    date: "10/20/2025",
    time: "9:07 PM",
    user: "Charlie",
    isDefault: false,
    fileStatus: "In review",
  },
  {
    id: 4,
    dxf: "4-123456.dxf",
    eps: "4-123456.eps",
    date: "10/20/2025",
    time: "8:05 PM",
    user: "Henry",
    isDefault: false,
    fileStatus: "Ready",
  },
];

// color options – same idea as your ProductPage
const productColor = [
  { name: "Bronze", color: "#3E3E3E" },
  { name: "White", color: "#ffffff" },
  { name: "Black", color: "#000000" },
];

// simple bubble avatar
const Avatar = ({ side }) => (
  <div
    className={`h-9 w-9 rounded-full border border-white shadow-sm bg-gradient-to-br from-slate-500 to-slate-800 flex items-center justify-center text-xs text-white font-semibold ${
      side === "ai" ? "" : "ml-auto"
    }`}
  >
    A
  </div>
);

export default function DesignAssistantPage() {
  // "chat" | "createProduct" | "assignOrder"
  const [step, setStep] = useState("chat");
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  return (
    <section className="bg-[#ECF1F7] flex items-center justify-center">
      <div className="w-full min-h-screen bg-white rounded-[32px] shadow-[0_18px_55px_rgba(15,23,42,0.16)] overflow-hidden flex flex-col lg:flex-row">
        {/* LEFT: chat + image + controls (UNCHANGED) */}
        <div className="lg:w-[55%] border-r border-slate-100 flex flex-col ">
          <div className="p-5 lg:p-8 flex flex-col gap-4 h-[600px] ">
            {/* messages */}
            <div className="flex flex-col gap-3">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2 ${
                    msg.from === "ai" ? "" : "justify-end"
                  }`}
                >
                  {msg.from === "ai" && <Avatar side="ai" />}
                  <div
                    className={`max-w-[90%] rounded-[22px] px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      msg.from === "ai"
                        ? "bg-[#F4FBF8] text-slate-800"
                        : "bg-[#E5F3FF] text-slate-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.from === "user" && <Avatar side="user" />}
                </div>
              ))}
            </div>

            {/* generated door image */}
            <div className="mt-3 rounded-[18px] overflow-hidden border border-slate-200 bg-slate-50 relative shadow-sm w-[70%]">
              <div className="relative w-full pt-[60%]">
                <Image
                  src="https://i.ibb.co.com/8LL7ctrR/Frame-2147229973-1.png"
                  alt="Generated door"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="flex gap-3 absolute top-3  right-4">
                  <button className=" h-9 w-9 rounded-full bg-white/95 flex items-center justify-center shadow-md text-slate-600">
                     <ShareSvg />
                  </button>
                  <button className=" right-3 h-9 w-9 rounded-full bg-white/95 flex items-center justify-center shadow-md text-slate-600">
                    <FiDownload />
                  </button>
                </div>
              </div>
            </div>

            {/* action buttons under image (step triggers) */}
            <div className="flex flex-wrap justify-end gap-3 mt-3 w-[70%]">
              {step === "createProduct" && (
                <button
                  type="button"
                  className="px-5 py-2 rounded-[8px] text-xs font-medium bg-white border border-slate-200 text-slate-600 shadow-sm"
                >
                  Create File
                </button>
              )}

              <button
                type="button"
                onClick={() => setStep("assignOrder")}
                className={`px-5 py-2 rounded-[8px] text-xs font-medium shadow-sm border ${
                  step === "assignOrder"
                    ? "bg-[#1BBC9B] border-[#1BBC9B] text-white"
                    : "bg-white border-slate-200 text-slate-700"
                }`}
              >
                Assign to Order
              </button>

              <button
                type="button"
                onClick={() => setStep("createProduct")}
                className={`px-5 py-2 rounded-[8px] text-xs font-medium shadow-sm border ${
                  step === "createProduct"
                    ? "bg-[#1BBC9B] border-[#1BBC9B] text-white"
                    : "bg-white border-slate-200 text-slate-700"
                }`}
              >
                Create Product
              </button>
            </div>
          </div>

          {/* bottom prompt input */}
          <div className=" border-t border-slate-100 px-5 py-4 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex-1 rounded-[8px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 flex items-center shadow-sm">
                <span className="text-slate-400 mr-1">
                  Make A Door Design...
                </span>
              </div>

              <button className="h-11 w-11 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-md text-slate-600">
                <FiImage />
              </button>

              <button className="h-11 w-11 rounded-full bg-[#1BBC9B] flex items-center justify-center shadow-md text-white">
                <IoSend />
              </button>
            </div>

            {/* order summary + table only in big createProduct step */}
            {step === "createProduct" && (
              <div className="mt-6">
                <div className="flex flex-wrap gap-6 text-xs text-slate-600 mb-3">
                  <div>
                    <span className="font-semibold">Order #:</span> 123456
                  </div>
                  <div>
                    <span className="font-semibold">Product Image:</span>{" "}
                    <span className="underline cursor-pointer">
                      door-front.png
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Vector Image:</span>{" "}
                    <span className="underline cursor-pointer">
                      door-vector.svg
                    </span>
                  </div>
                  <button className="ml-auto px-4 py-1.5 rounded-full border border-slate-200 text-xs bg-white shadow-sm">
                    Upload
                  </button>
                </div>

                <div className="overflow-x-auto rounded-[18px] border border-slate-200 bg-white shadow-sm">
                  <table className="min-w-full text-xs">
                    <thead className="bg-slate-50 text-slate-500">
                      <tr>
                        <th className="px-3 py-2 text-left">DXF</th>
                        <th className="px-3 py-2 text-left">EPS</th>
                        <th className="px-3 py-2 text-left">Date</th>
                        <th className="px-3 py-2 text-left">Time</th>
                        <th className="px-3 py-2 text-left">User</th>
                        <th className="px-3 py-2 text-center">Default</th>
                        <th className="px-3 py-2 text-center">File</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fileRows.map((row) => (
                        <tr
                          key={row.id}
                          className="border-t border-slate-100 last:border-b-0"
                        >
                          <td className="px-3 py-2">{row.dxf}</td>
                          <td className="px-3 py-2">{row.eps}</td>
                          <td className="px-3 py-2">{row.date}</td>
                          <td className="px-3 py-2">{row.time}</td>
                          <td className="px-3 py-2">{row.user}</td>
                          <td className="px-3 py-2 text-center">
                            {row.isDefault ? (
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white">
                                ✓
                              </span>
                            ) : (
                              "-"
                            )}
                          </td>
                          <td className="px-3 py-2 text-center">
                            <span className="inline-flex h-5 min-w-[1.8rem] items-center justify-center rounded-full bg-emerald-50 text-[11px] text-emerald-600">
                              {row.fileStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Design Info panel – FORM STYLED LIKE ProductPage */}
        <div className="lg:flex-1 flex flex-col">
          <div className="justify-center items-center  text-center px-6 py-5 flex flex-col gap-1 lg:text-left">
            <h2 className="text-xl font-semibold text-slate-800">
              Design Info
            </h2>
            <p className="text-xs text-slate-500">
              Customer select manual review
            </p>
          </div>

          <div className="flex-1 px-6 py-5 lg:px-8 lg:py-6 overflow-y-auto">
            {step === "chat" && (
              <div className="h-full flex items-center justify-center">
                <p className="text-sm text-slate-500 text-center max-w-xs">
                  Use <span className="font-semibold">Assign to Order</span> or{" "}
                  <span className="font-semibold">Create Product</span> to open
                  the detailed design form.
                </p>
              </div>
            )}

            {/* CREATE PRODUCT – uses shadow-card / card_input styles */}
            {step === "createProduct" && (
              <div className="space-y-4">
                {/* basic info */}
                <div className="shadow-card">
                  <h3 className="shadow-card-label !text-lg !mb-3">
                    Basic Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="shadow-card-label">Order#</label>
                      <input
                        className="card_input w-full"
                        placeholder="PO-2024-001"
                      />
                    </div>
                    <div>
                      <label className="shadow-card-label">PO</label>
                      <input
                        className="card_input w-full"
                        placeholder="PO Number"
                      />
                    </div>
                    <div>
                      <label className="shadow-card-label">Series</label>
                      <input
                        className="card_input w-full"
                        placeholder="Modern Glass"
                      />
                    </div>
                    <div>
                      <label className="shadow-card-label">Company Name</label>
                      <input
                        className="card_input w-full"
                        placeholder="Tech Solutions Inc."
                      />
                    </div>
                    <div>
                      <label className="shadow-card-label">Product Code</label>
                      <input
                        className="card_input w-full"
                        placeholder="GL-445"
                      />
                    </div>
                    <div>
                      <label className="shadow-card-label">Manufacturer</label>
                      <select className="card_input w-full">
                        <option>Choose an option</option>
                        <option>ABC Doors</option>
                        <option>ModernCraft</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* main measurement */}
                <div className="grid sm:grid-cols-2 gap-3 shadow-card">
                  <div>
                    <label className="shadow-card-label">
                      Measurement Type
                    </label>
                    <select className="card_input w-full">
                      <option>Choose an option</option>
                      <option>Inches</option>
                      <option>Millimeters</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <label className="shadow-card-label w-20">Width</label>
                      <input className="card_input w-1/2" placeholder="012" />
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="shadow-card-label w-20">Height</label>
                      <input className="card_input w-1/2" placeholder="012" />
                    </div>
                  </div>
                </div>

                {/* side lites block (same card pattern) */}
                <div className="shadow-card">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="shadow-card-label">Side lites</label>
                      <select className="card_input w-full">
                        <option>None</option>
                        <option>Left only</option>
                        <option>Right only</option>
                        <option>Both sides</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="shadow-card-label">
                        Measurement Type
                      </label>
                      <select className="card_input w-full">
                        <option>Choose an option</option>
                        <option>Inches</option>
                        <option>Millimeters</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <label className="shadow-card-label w-20">Width</label>
                        <input className="card_input w-1/2" placeholder="012" />
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="shadow-card-label w-20">Height</label>
                        <input className="card_input w-1/2" placeholder="012" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* options + color – styled like existing form */}
                <div className="shadow-card">
                  <h4 className="shadow-card-label !mb-2">Options</h4>
                  <div className="flex flex-wrap gap-3 text-xs text-primary-text">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white border border-gray-300 hover:border-teal-500 cursor-pointer"
                    >
                      <span className="h-4 w-4 rounded-full border border-emerald-500 flex items-center justify-center text-[10px] text-emerald-600">
                        ✓
                      </span>
                      High Bottom
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white border border-gray-300 hover:border-teal-500 cursor-pointer"
                    >
                      <span className="h-4 w-4 rounded-full border border-gray-300" />
                      Insulated Glass
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white border border-gray-300 hover:border-teal-500 cursor-pointer"
                    >
                      <span className="h-4 w-4 rounded-full border border-gray-300" />
                      ADA Threshold
                    </button>
                  </div>

                  <div className="mt-5">
                    <label className="shadow-card-label mb-2 block">
                      Color
                    </label>
                    <div className="flex gap-4 items-center">
                      {productColor.map(({ name, color }) => (
                        <div key={color} className="text-center">
                          <button
                            type="button"
                            onClick={() => setSelectedColor(color)}
                            className={`size-8 rounded-full border shadow-[0px_4px_4px_-2px_#13192714,_0px_2px_4px_-2px_#1319271F] cursor-pointer ${
                              selectedColor === color
                                ? "ring ring-teal-500 border-teal-500"
                                : "border-gray-300"
                            }`}
                            style={{ backgroundColor: color }}
                          />
                          <p className="text-[13px] text-primary-text mt-1">
                            {name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* buttons – reuse card_btn / card_btn_outline style */}
                <div className="flex justify-end gap-3">
                  <button type="button" className="card_btn_outline px-6">
                    Cancel
                  </button>
                  <button type="button" className="card_btn px-7">
                    Save
                  </button>
                </div>
              </div>
            )}

            {/* ASSIGN ORDER – same visual language as ProductPage cards */}
            {step === "assignOrder" && (
              <div className="space-y-4">
                <div className="shadow-card">
                  <h3 className="shadow-card-label !text-lg !mb-3">
                    Assign to Order
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="shadow-card-label">Manufacturer</label>
                      <select className="card_input w-full">
                        <option>Choose an option</option>
                        <option>ABC Doors</option>
                        <option>ModernCraft</option>
                      </select>
                    </div>
                    <div>
                      <label className="shadow-card-label">Active side</label>
                      <select className="card_input w-full">
                        <option>Choose an option</option>
                        <option>Left</option>
                        <option>Right</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 shadow-card">
                  <div>
                    <label className="shadow-card-label">
                      Measurement Type
                    </label>
                    <select className="card_input w-full">
                      <option>Choose an option</option>
                      <option>Inches</option>
                      <option>Millimeters</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <label className="shadow-card-label w-20">Width</label>
                      <input className="card_input w-1/2" placeholder="012" />
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="shadow-card-label w-20">Height</label>
                      <input className="card_input w-1/2" placeholder="012" />
                    </div>
                  </div>
                </div>

                <div className="shadow-card">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="shadow-card-label">Side lites</label>
                      <select className="card_input w-full">
                        <option>None</option>
                        <option>Left only</option>
                        <option>Right only</option>
                        <option>Both sides</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="shadow-card-label">
                        Measurement Type
                      </label>
                      <select className="card_input w-full">
                        <option>Choose an option</option>
                        <option>Inches</option>
                        <option>Millimeters</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <label className="shadow-card-label w-20">Width</label>
                        <input className="card_input w-1/2" placeholder="012" />
                      </div>
                      <div className="flex items-center gap-2">
                        <label className="shadow-card-label w-20">Height</label>
                        <input className="card_input w-1/2" placeholder="012" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="shadow-card">
                  <h4 className="shadow-card-label !mb-2">Options</h4>
                  <div className="flex flex-wrap gap-3 text-xs text-primary-text">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white border border-gray-300 hover:border-teal-500 cursor-pointer"
                    >
                      <span className="h-4 w-4 rounded-full border border-emerald-500 flex items-center justify-center text-[10px] text-emerald-600">
                        ✓
                      </span>
                      High Bottom
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white border border-gray-300 hover:border-teal-500 cursor-pointer"
                    >
                      <span className="h-4 w-4 rounded-full border border-gray-300" />
                      Insulated Glass
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white border border-gray-300 hover:border-teal-500 cursor-pointer"
                    >
                      <span className="h-4 w-4 rounded-full border border-gray-300" />
                      ADA Threshold
                    </button>
                  </div>

                  <div className="mt-5">
                    <label className="shadow-card-label mb-2 block">
                      Color
                    </label>
                    <div className="flex gap-4 items-center">
                      {productColor.map(({ name, color }) => (
                        <div key={color} className="text-center">
                          <button
                            type="button"
                            onClick={() => setSelectedColor(color)}
                            className={`size-8 rounded-full border shadow-[0px_4px_4px_-2px_#13192714,_0px_2px_4px_-2px_#1319271F] cursor-pointer ${
                              selectedColor === color
                                ? "ring ring-teal-500 border-teal-500"
                                : "border-gray-300"
                            }`}
                            style={{ backgroundColor: color }}
                          />
                          <p className="text-[13px] text-primary-text mt-1">
                            {name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    className="card_btn_outline px-6 rounded-full"
                  >
                    Cancel
                  </button>
                  <button type="button" className="card_btn px-7 rounded-full">
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
