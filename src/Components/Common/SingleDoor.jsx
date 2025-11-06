import Image from "next/image";
import React, { useState } from "react";
import {
  LoveSvg,
  ShareSvg,
  SmallOrderSvg,
  SuccessSvg,
  TrySvg,
} from "../Svg/SvgContainer";
import Modal from "./Modal";
import previewDoor from "../../Assets/preview_door.jpg";
import { useRouter } from "next/navigation";

const colors = [
  { id: 1, code: "#3E3E3E" },
  { id: 2, code: "#fff" },
  { id: 3, code: "#000" },
];

const SingleDoor = ({ item, setAr, setImageFile }) => {
  const router = useRouter();
  const [activeColor, setActiveColor] = useState("#3E3E3E");
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenPreviewModal(true)}
        className="rounded-xl bg-white border border-gray-100 shadow-lg duration-400 transition-all hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
      >
        <figure className="h-[200px] w-full relative">
          <Image
            src={item?.img}
            alt="door"
            className="rounded-t-xl w-full h-full"
          />

          <div className="absolute right-2.5 top-2 flex gap-2 items-center">
            <button
              onClick={e => e.stopPropagation()}
              className="size-7 rounded-full cursor-pointer grid place-items-center bg-[linear-gradient(254deg,_#E3F2FD_-2.44%,_rgba(249,252,255,0.80)_110.21%)] shadow-2xl border border-gray-100 hover:bg-light-green duration-300 transition-all hover:scale-105"
            >
              <ShareSvg />
            </button>

            <button
              onClick={e => e.stopPropagation()}
              className="size-7 rounded-full cursor-pointer grid place-items-center bg-[linear-gradient(254deg,_#E3F2FD_-2.44%,_rgba(249,252,255,0.80)_110.21%)] shadow-2xl border border-gray-100 hover:bg-light-green duration-300 transition-all hover:scale-105"
            >
              <LoveSvg />
            </button>
          </div>

          <button
            onClick={e => {
              e.stopPropagation();
              setAr(true);
              setImageFile(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="absolute top-2 left-2.5 cursor-pointer"
          >
            <TrySvg />
          </button>
        </figure>

        <div className="p-2.5 flex gap-3 items-center justify-between">
          <div>
            <h3 className="text-primary-text font-semibold">{item?.name}</h3>
            <div className="flex gap-3 items-center">
              <p className="text-[#333] font-medium text-sm">Color:</p>

              <div className="flex gap-1 items-center">
                {colors?.map(color => (
                  <button
                    key={color?.id}
                    onClick={e => {
                      e.stopPropagation();
                      setActiveColor(color?.code);
                    }}
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

          <button
            onClick={e => {
              e.stopPropagation();
              setOpenConfirmationModal(true);
            }}
            className="cursor-pointer"
          >
            <SmallOrderSvg />
          </button>
        </div>
      </div>

      {/* Preview Modal */}
      <Modal
        open={openPreviewModal}
        onClose={() => setOpenPreviewModal(false)}
        className="!max-w-[348px] h-[300px] md:h-[320px]"
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

      {/* Confirmation Modal */}
      <Modal
        open={openConfirmationModal}
        onClose={() => setOpenConfirmationModal(false)}
        className="max-w-xl"
      >
        <div className="text-center py-7">
          <h3 className="text-lg md:text-xl font-medium mb-4 text-primary-text">
            Are you sure you would like to place the order?
          </h3>

          <div className="flex gap-4 md:gap-8 justify-center items-center mt-4 md:mt-7">
            <button
              onClick={() => setOpenConfirmationModal(false)}
              className="px-5 md:px-7 py-2 md:py-2.5 rounded-lg bg-transparent text-light-green cursor-pointer duration-300 hover:scale-105 transition-transform border border-light-green"
            >
              No
            </button>

            <button
              onClick={() => {
                setOpenConfirmationModal(false);
                setOpenSuccessModal(true);
              }}
              className="px-5 md:px-7 py-2 md:py-2.5 rounded-lg bg-light-green text-white cursor-pointer duration-300 hover:scale-105 transition-transform border border-light-green"
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal
        open={openSuccessModal}
        onClose={() => setOpenSuccessModal(false)}
        className="max-w-xl"
      >
        <div className="flex flex-col justify-center items-center text-center py-7">
          <SuccessSvg />

          <h3 className="text-lg md:text-xl font-medium text-primary-text mt-7">
            Your order has been successfully placed
          </h3>

          <p className="py-5 text-sm text-primary-text">
            The person assisting you will be notified.
          </p>

          <button
            onClick={() => router.push(`/b2b2c`)}
            className="px-7 py-2.5 rounded-lg bg-light-green text-white cursor-pointer duration-300 hover:scale-105 transition-transform border border-light-green"
          >
            Home page
          </button>
        </div>
      </Modal>
    </>
  );
};

export default SingleDoor;
