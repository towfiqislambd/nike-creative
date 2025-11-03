import Image from "next/image";
import React, { useState } from "react";
import { LoveSvg, ShareSvg, SmallOrderSvg, TrySvg } from "../Svg/SvgContainer";
import Modal from "./Modal";
import previewDoor from "../../Assets/preview_door.jpg";

const colors = [
  { id: 1, code: "#3E3E3E" },
  { id: 2, code: "#fff" },
  { id: 3, code: "#000" },
];

const SingleDoor = ({ item }) => {
  const [activeColor, setActiveColor] = useState("#3E3E3E");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="rounded-xl bg-white border border-gray-100 shadow-lg duration-400 transition-all hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
      >
        <figure className="h-[200px] w-full relative">
          <Image
            src={item?.img}
            alt="door"
            className="rounded-t-xl w-full h-full"
          />

          <div className="absolute right-2.5 top-2 flex gap-2 items-center">
            <button className="size-7 rounded-full cursor-pointer grid place-items-center bg-[linear-gradient(254deg,_#E3F2FD_-2.44%,_rgba(249,252,255,0.80)_110.21%)] shadow-2xl border border-gray-100 hover:bg-light-green duration-300 transition-all hover:scale-105">
              <ShareSvg />
            </button>

            <button className="size-7 rounded-full cursor-pointer grid place-items-center bg-[linear-gradient(254deg,_#E3F2FD_-2.44%,_rgba(249,252,255,0.80)_110.21%)] shadow-2xl border border-gray-100 hover:bg-light-green duration-300 transition-all hover:scale-105">
              <LoveSvg />
            </button>
          </div>

          <button className="absolute top-2 left-2.5 cursor-pointer">
            <TrySvg />
          </button>
        </figure>

        <div className="p-3 flex gap-6 items-center">
          <div>
            <h3 className="text-primary-text font-semibold">{item?.name}</h3>
            <div className="flex gap-3 items-center">
              <p className="text-[#333] font-medium text-sm">Color:</p>

              <div className="flex gap-1 items-center">
                {colors?.map(color => (
                  <button
                    key={color?.id}
                    onClick={() => setActiveColor(color?.code)}
                    style={{ backgroundColor: color?.code }}
                    className={`rounded-full cursor-pointer shadow-lg size-4 ${
                      activeColor === color?.code
                        ? "border-light-green border-2"
                        : "border border-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button className="cursor-pointer">
            <SmallOrderSvg />
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className="!max-w-[348px] h-[320px]"
      >
        <figure className="w-full h-full relative rounded">
          <Image
            src={previewDoor}
            alt="preview_door"
            fill
            className="w-full h-full object-cover rounded"
          />
        </figure>
      </Modal>
    </>
  );
};

export default SingleDoor;
