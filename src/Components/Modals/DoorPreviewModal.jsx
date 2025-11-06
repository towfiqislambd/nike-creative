import Image from "next/image";
import React from "react";
import previewDoor from "../../Assets/preview_door.jpg";
import { LoveSvg, OrderSvg, ShareSvg, TrySvg } from "../Svg/SvgContainer";

const DoorPreviewModal = ({ onTryOn, onOrder }) => {
  return (
    <div className="flex flex-col sm:flex-row md:gap-7">
      {/* Left - Door Image */}
      <figure className="w-full sm:w-[280px] md:w-[348px] h-[250px] sm:h-[280px] md:h-[320px] mx-auto relative rounded">
        <Image
          src={previewDoor}
          alt="preview_door"
          fill
          className="w-full h-full object-cover rounded"
        />

        <div className="absolute right-3 top-3 flex gap-2 items-center">
          <button className="size-7 rounded-full cursor-pointer grid place-items-center bg-[linear-gradient(254deg,_#E3F2FD_-2.44%,_rgba(249,252,255,0.80)_110.21%)] shadow-2xl border border-gray-100 hover:bg-light-green duration-300 transition-all hover:scale-105">
            <ShareSvg />
          </button>

          <button className="size-7 rounded-full cursor-pointer grid place-items-center bg-[linear-gradient(254deg,_#E3F2FD_-2.44%,_rgba(249,252,255,0.80)_110.21%)] shadow-2xl border border-gray-100 hover:bg-light-green duration-300 transition-all hover:scale-105">
            <LoveSvg />
          </button>
        </div>
      </figure>

      {/* Right */}
      <div className="pt-4 pb-7 flex flex-col justify-between">
        <div className="mb-3">
          <h3 className="text-black font-semibold mb-3">
            Product Name: KDWH010
          </h3>

          <div className="flex gap-3 items-center">
            <p className="text-black font-semibold">Color:</p>
            <div className="flex gap-2 items-center">
              <div className="size-5 rounded-full bg-black border border-gray-200" />
              <div className="size-5 rounded-full bg-white border border-gray-200" />
              <div className="size-5 rounded-full bg-black border border-gray-200" />
            </div>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <button onClick={onOrder} className="cursor-pointer">
            <OrderSvg />
          </button>

          <button
            onClick={onTryOn}
            className="border rounded-lg border-light-green text-light-green flex gap-2 items-center px-4 py-2 md:py-3 hover:bg-light-green hover:text-white duration-300 transition-all cursor-pointer"
          >
            <TrySvg />
            <span>Try On</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoorPreviewModal;
