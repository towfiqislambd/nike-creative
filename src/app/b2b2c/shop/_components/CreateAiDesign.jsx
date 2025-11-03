import Image from "next/image";
import React, { useState } from "react";
import aiImg from "../../../../Assets/avatar.jpg";
import {
  AiSvg,
  ImgSvg,
  PhotoSvg,
  SendSvg,
} from "../../../../Components/Svg/SvgContainer";
const categories = [
  { id: 1, name: "Single Door Designs" },
  { id: 2, name: "Double Door Designs" },
];

const CreateAiDesign = () => {
  const [activeCategory, setActiveCategory] = useState("Single Door Designs");
  const [activeMode, setActiveMode] = useState("text");

  return (
    <>
      {/* Door Category */}
      <div className="flex gap-5 items-center mb-5">
        {categories.map(category => (
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.name)}
            className={`px-5 py-3 rounded-lg cursor-pointer hover:scale-105 duration-300 transition-all border border-secondary-blue ${
              activeCategory === category?.name
                ? "bg-secondary-blue text-white"
                : "bg-transparent text-secondary-blue"
            }`}
          >
            {category?.name}
          </button>
        ))}
      </div>

      {/* Chat Box */}
      <div className="bg-white shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] p-7 rounded-2xl w-[732px] h-[600px] flex flex-col justify-between relative">
        {/* Top Switcher */}
        <div className="flex absolute right-4 top-4 border-4 border-primary-text rounded-full overflow-hidden">
          <button
            onClick={() => setActiveMode("file")}
            className={`px-4 py-2.5 cursor-pointer ${
              activeMode === "file" && "bg-secondary-blue"
            }`}
          >
            <ImgSvg />
          </button>

          <div className="border-r-2"></div>

          <button
            onClick={() => setActiveMode("text")}
            className={`px-4 py-2.5 cursor-pointer ${
              activeMode === "text" && "bg-secondary-blue"
            }`}
          >
            <AiSvg />
          </button>
        </div>

        <div className="space-y-5">
          <div className="flex gap-3 items-start">
            <figure className="size-12 rounded-full relative shrink-0">
              {/* Left - AI Image */}
              <Image
                src={aiImg}
                fill
                alt="ai"
                unoptimized
                className="size-full rounded-full"
              />
            </figure>

            {/* Right - Prompt */}
            <p className="grow bg-white shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] px-4 py-3 text-[15px] text-primary-text rounded-4xl border border-gray-50 !rounded-tl-md max-w-[453px] leading-[164%]">
              Hi! I’m your virtual design assistant. Tell me what you’re looking
              for, and I’ll show you some options
            </p>
          </div>

          <div className="flex gap-3 items-start justify-end">
            {/* Left - AI Image */}
            <p className="grow bg-white shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] px-4 py-3 text-[15px] text-primary-text rounded-4xl border border-gray-50 !rounded-tr-md max-w-[453px] leading-[164%]">
              Hi! I’m your virtual design assistant. Tell me what you’re looking
              for, and I’ll show you some options
            </p>

            <figure className="size-12 rounded-full relative shrink-0">
              {/* Right - Prompt */}
              <Image
                src={aiImg}
                fill
                alt="ai"
                unoptimized
                className="size-full rounded-full"
              />
            </figure>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div className="w-[496px] rounded-full border border-gray-100 bg-[#fff] shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)]">
            <input
              type="text"
              className="w-full block px-5 py-3.5 outline-none"
              placeholder="Make A Door Like glass"
            />
          </div>

          <label
            htmlFor="file"
            className="w-[70px] py-2.5 rounded-3xl border border-light-green grid place-items-center cursor-pointer"
          >
            <input type="file" className="hidden" id="file" />
            <PhotoSvg />
          </label>

          <button className="w-[70px] py-2.5 rounded-3xl bg-light-green border border-light-green grid place-items-center cursor-pointer">
            <SendSvg />
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateAiDesign;
