"use client";

import React, { useState } from "react";
import { BellIconSvg } from "../../../../Components/Svg/SvgContainer";

const PRODUCTS = [
  {
    id: 1,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 2,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 25,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 3,
    name: "Wood Screws",
    desc: "#8 x 1-1/4in, box of 500",
    stock: 112,
    unitLabel: "Box(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 4,
    name: "Toilet Paper",
    desc: "12-roll pack",
    stock: 120,
    unitLabel: "pack(s) In Stock",
    category: "Office Supplies",
  },
  // second row
  {
    id: 5,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 6,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 45,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 7,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 8,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 45,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 9,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 10,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 45,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 11,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 12,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 25,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 13,
    name: "Wood Screws",
    desc: "#8 x 1-1/4in, box of 500",
    stock: 112,
    unitLabel: "Box(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 14,
    name: "Toilet Paper",
    desc: "12-roll pack",
    stock: 120,
    unitLabel: "pack(s) In Stock",
    category: "Office Supplies",
  },
  // second row
  {
    id: 15,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 16,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 45,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 17,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 17,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 45,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 18,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 19,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 45,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 20,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 21,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 25,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 22,
    name: "Wood Screws",
    desc: "#8 x 1-1/4in, box of 500",
    stock: 112,
    unitLabel: "Box(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 23,
    name: "Toilet Paper",
    desc: "12-roll pack",
    stock: 120,
    unitLabel: "pack(s) In Stock",
    category: "Office Supplies",
  },
  // second row
  {
    id: 24,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 25,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 45,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 26,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 27,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 45,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 28,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 29,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 45,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 30,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 31,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 45,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 32,
    name: "Aluminum Sheet",
    desc: "4ft x 8ft, 1/16in thickness",
    stock: 50,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
  {
    id: 33,
    name: "White Paint",
    desc: "Brand X, 1 Gallon",
    stock: 45,
    unitLabel: "Unit(s) In Stock",
    category: "Office Supplies",
  },
];

const page = () => {
  const [showAll, setShowAll] = useState(false);

  // quantity state for each card (default 1)
  const [quantities, setQuantities] = useState(
    PRODUCTS.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const visibleProducts = showAll ? PRODUCTS : PRODUCTS.slice(0, 16);

  const changeQty = (id, delta) => {
    setQuantities((prev) => {
      const next = { ...prev };
      const newVal = (next[id] || 1) + delta;
      next[id] = newVal < 1 ? 1 : newVal;
      return next;
    });
  };

  return (
    <>
      <div className="mb-3">
        <div className="relative rounded-xl md:rounded-[20px] bg-[#E0DDD7] px-4 py-2.5 border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <h1 className="dashboard_title">Account Details</h1>

            <div className="flex items-center gap-4">
              <div className="">
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
        </div>
      </div>

      <main className=" bg-[#EDF3F7] flex flex-col items-center pt-8 pb-12">
        <div className="w-full flex flex-wrap gap-6 justify-center">
          {visibleProducts.map((item) => {
            const isSelected = item.id === 2;

            return (
              <div
                key={item.id}
                className={`w-[290px] rounded-2xl shadow-md bg-white px-6 pt-6 pb-5 flex flex-col justify-between border transition
              ${
                isSelected
                  ? "border-[#FF6B6B] bg-[#FDF5F5]"
                  : "border-transparent"
              }`}
              >
                {/* header */}
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-left">
                      <h2 className="text-lg font-semibold text-[#222]">
                        {item.name}
                      </h2>
                    </div>
                    <div className="justify-end">
                      <button className="inline-flex items-center rounded-full bg-[#D9F5D4] px-2.5 py-1 text-[12px] text-[#2E7D32]">
                        {item.category}
                      </button>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-[#777]">{item.desc}</p>
                </div>

                {/* stock */}
                <div className="mt-6 flex flex-col items-center">
                  <span className="text-3xl font-semibold text-[#00C389]">
                    {item.stock}
                  </span>
                  <span className="mt-1 text-xs text-[#777]">
                    {item.unitLabel}
                  </span>
                </div>

                {/* quantity controls */}
                <div className="mt-6 flex items-center justify-center gap-4">
                  {/* minus */}
                  <button
                    type="button"
                    onClick={() => changeQty(item.id, -1)}
                    className="h-10 w-10 rounded-full bg-[#FF4D4D] text-white text-xl flex items-center justify-center shadow-sm"
                  >
                    –
                  </button>

                  {/* quantity display */}
                  <div className="h-10 min-w-[56px] flex items-center justify-center rounded-md border border-gray-300 bg-white text-sm">
                    {quantities[item.id] ?? 1}
                  </div>

                  {/* plus */}
                  <button
                    type="button"
                    onClick={() => changeQty(item.id, 1)}
                    className="h-10 w-10 rounded-full bg-[#1BC943] text-white text-xl flex items-center justify-center shadow-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* See More button */}
        {!showAll && (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="mt-10 rounded-full bg-[#00B894] px-10 py-3 text-white text-base font-semibold shadow-md hover:bg-[#00a27f] transition"
          >
            See More
          </button>
        )}
      </main>
    </>
  );
};

export default page;
