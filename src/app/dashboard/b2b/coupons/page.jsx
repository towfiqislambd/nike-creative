"use client";
import React, { useState } from "react";
import { Cart } from '../../../../Components/Svg/SvgContainer';
export default function CouponsPage() {
  const [coupons] = useState([
    { id: "c4", off: 4,   label: "Coupon",   expires: "1/02/2026" },
    { id: "c6", off: 6,   label: "Coupon",   expires: "1/02/2026" },
  ]);

  const handleUse = (c) => {
    console.log("Use coupon:", c);
  };

  return (
    <>
     <div>
      <div className="mb-6">
        <div className="rounded-[28px] bg-[#E0DDD7] px-4 py-4 shadow-sm relative">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6"></div>

            <div className="flex items-center gap-3">
              <ul className="hidden md:flex items-end gap-8 text-[14px] text-gray-800">
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  Home
                </li>
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  Shop
                </li>
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  Category
                </li>
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  About Us
                </li>
              </ul>

              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#21BBA2] text-white">
                <Cart />
              </div>
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10">
                <img
                  alt="avatar"
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=120&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#71F18E] ring-2 ring-white" />
              </div>
            </div>
          </div>

          <div className="mt-3 h-px w-full bg-black/15" />

          <div className="mt-3 flex items-center justify-between">
            <h1 className="text-[22px] font-semibold text-[#333]">
              Available Coupons & Store Credits
            </h1>
          </div>
        </div>
      </div>
    </div>
     <main className="min-h-screen p-4 md:p-6">
      <div className="rounded-2xl bg-[#F5F7FA] p-5 md:p-7 shadow-[0_24px_60px_rgba(19,25,39,0.10)] ring-1 ring-black/5">
        <h1 className="text-[18px] md:text-[20px] font-semibold text-[#333]">
          Available Coupons
        </h1>

        <div className="mt-5 flex flex-wrap gap-5">
          {coupons.map((c) => (
            <div
              key={c.id}
              className="flex flex-col justify-between rounded-xl border-2 border-dashed border-[#C8CDD7] bg-gradient-to-br from-white to-[#ECF2F7] px-6 py-5 md:px-8 md:py-6 shadow-sm"
              style={{ minWidth: 290 }}
            >
              <div className="flex flex-wrap items-baseline gap-4">
                <div className="text-[26px] md:text-[32px] font-extrabold leading-none text-[#333]">
                  {c.off}% <span className="font-black">OFF</span>
                </div>
                <div className="text-[22px] md:text-[26px] font-medium text-[#3C4452]">
                  {c.label}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-[#5A5C5F] text-sm md:text-base">
                  <span className="opacity-70">Ex:</span>{c.expires}
                </p>
                <button
                  onClick={() => handleUse(c)}
                  className="rounded-md bg-[#E61E5B] px-5 py-2 text-white text-sm md:text-base font-semibold shadow-[0_6px_18px_rgba(230,30,91,0.35)] hover:opacity-95 active:scale-[0.99] transition"
                >
                  Use Coupon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
   
  );
}
