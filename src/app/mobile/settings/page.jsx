"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoMoon, IoSunny, IoChevronForward } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const  SettingsPage = () =>  {
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-hidden md:hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://i.ibb.co.com/Z6rhHvLv/B2b2c-bg-1.png"
          alt="background"
          fill
          unoptimized
          className="object-cover"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT */}
      <section className="pt-10 pb-28 px-4 flex flex-col items-center">
        <div className="w-full max-w-xs">
          {/* THEME MAIN ROW */}
          <button
            type="button"
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            className="w-full flex items-center justify-between rounded-2xl bg-white/95 shadow-[0_8px_20px_rgba(0,0,0,0.45)] px-4 py-4 mb-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-black/5 text-lg">
                <IoMoon />
              </span>
              <span className="text-[15px] text-[#333] font-medium">
                Theme
              </span>
            </div>

            <IoChevronForward className="text-[#999] text-xl" />
          </button>

          {/* THEME DROPDOWN */}
          {isThemeOpen && (
            <div className="w-full rounded-2xl bg-white/95 shadow-[0_8px_20px_rgba(0,0,0,0.45)] px-4 py-3 mb-4 space-y-3">
              {/* Dark Mode */}
              <div className="w-full flex items-center justify-between rounded-xl px-3 py-3 bg-transparent">
                <div className="flex items-center gap-3">
                  <span className="h-7 w-7 flex items-center justify-center rounded-full bg-black/5 text-base">
                    <IoMoon />
                  </span>
                  <span className="text-sm text-[#333]">Dark Mode</span>
                </div>
              </div>

              {/* Light Mode */}
              <div className="w-full flex items-center justify-between rounded-xl px-3 py-3 bg-transparent">
                <div className="flex items-center gap-3">
                  <span className="h-7 w-7 flex items-center justify-center rounded-full bg-black/5 text-base">
                    <IoSunny />
                  </span>
                  <span className="text-sm text-[#333]">Light Mode</span>
                </div>
              </div>
            </div>
          )}

          {/* LOG OUT ROW */}
          <button
            type="button"
            className="w-full flex items-center justify-between rounded-2xl bg-white/95 shadow-[0_8px_20px_rgba(0,0,0,0.45)] px-4 py-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center h-8 w-8 rounded-full bg-black/5 text-lg">
                <FiLogOut />
              </span>
              <span className="text-[15px] text-[#333] font-medium">
                Log Out
              </span>
            </div>
          </button>
        </div>
      </section>
    </main>
  );
}


export default SettingsPage;