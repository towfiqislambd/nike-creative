"use client";
import { useState } from "react";
import Image from "next/image";
import {
  HeartIcon,
  OrderNowSvg,
  RightArrow,
} from "../../../Components/Svg/SvgContainer2";

const doors = [
  {
    id: 1,
    code: "KDWH005",
    images: {
      "#D3D3D3": "https://i.ibb.co.com/35TH3Mnx/Rectangle-161124225-1.png",
      "#555555": "https://i.ibb.co.com/KzVYJnHr/Rectangle-161124225.png",
      "#000000": "https://i.ibb.co.com/gLT7K6BC/Rectangle-161124224.png",
    },
  },
  {
    id: 2,
    code: "KDWH003",
    images: {
      "#000000": "https://i.ibb.co.com/35TH3Mnx/Rectangle-161124225-1.png",
      "#D3D3D3": "https://i.ibb.co.com/KzVYJnHr/Rectangle-161124225.png",
      "#777777": "https://i.ibb.co.com/gLT7K6BC/Rectangle-161124224.png",
    },
  },
  {
    id: 3,
    code: "KDWH010",
    images: {
      "#D3D3D3": "https://i.ibb.co.com/35TH3Mnx/Rectangle-161124225-1.png",
      "#FFFFFF": "https://i.ibb.co.com/KzVYJnHr/Rectangle-161124225.png",
      "#000000": "https://i.ibb.co.com/gLT7K6BC/Rectangle-161124224.png",
    },
  },
  {
    id: 4,
    code: "KDWH009",
    images: {
      "#000000": "https://i.ibb.co.com/35TH3Mnx/Rectangle-161124225-1.png",
      "#D3D3D3": "https://i.ibb.co.com/KzVYJnHr/Rectangle-161124225.png",
      "#FFFFFF": "https://i.ibb.co.com/gLT7K6BC/Rectangle-161124224.png",
    },
  },
];

const DoorGallerySectionB2bLatest = () => {
  const [selectedColors, setSelectedColors] = useState(
    doors.reduce((acc, door) => {
      acc[door.id] = Object.keys(door.images)[0];
      return acc;
    }, {})
  );

  const handleColorClick = (doorId, color) => {
    setSelectedColors((prev) => ({ ...prev, [doorId]: color }));
  };

  return (
    <section className="container  px-4 xl:px-0 py-10 xl:pb-25">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="section_title">Our Latest Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doors.map((door) => {
            const currentColor = selectedColors[door.id];
            const currentImage = door.images[currentColor];

            return (
              <div
                key={door.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="w-full h-30 2xl:h-45 overflow-hidden relative">
                  <div>
                    <Image
                      src={currentImage}
                      alt={door.code}
                      fill
                      unoptimized
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-5 right-5 flex items-center gap-2">
                    <div className="flex cursor-pointer size-[28px] items-center justify-center rounded-full bg-white/80 shadow-[0_1.333px_2.667px_-1.333px_rgba(19,25,39,0.12),_0_2.667px_2.667px_-1.333px_rgba(19,25,39,0.08)]">
                      <RightArrow />
                    </div>
                    <div className="flex cursor-pointer size-[28px] items-center justify-center rounded-full bg-white/80 shadow-[0_1.333px_2.667px_-1.333px_rgba(19,25,39,0.12),_0_2.667px_2.667px_-1.333px_rgba(19,25,39,0.08)]">
                      <HeartIcon />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">
                      {door.code}
                    </h3>

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Color:</span>
                      <div className="flex gap-1.5">
                        {Object.keys(door.images).map((color, i) => (
                          <button
                            key={i}
                            onClick={() => handleColorClick(door.id, color)}
                            className={`w-4 h-4 rounded-full border ${
                              selectedColors[door.id] === color
                                ? "ring-2 ring-offset-1 ring-gray-700"
                                : "border-gray-300"
                            }`}
                            style={{ backgroundColor: color }}
                            aria-label={`Select color ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <OrderNowSvg />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*  */}
      <div className="flex w-full justify-center mt-12">
        <button className="px-8 py-[17px] border hover:scale-105 duration-300 border-[#21BBA2] cursor-pointer rounded-[40px] text-[#21BBA2] font-medium transition-all">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default DoorGallerySectionB2bLatest;
