"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import bgLayer from "../../../Assets/Home-No-Login.png";
import { catalogueData } from "../../../Components/Data/data";
import Container from "../../../Components/Common/Container";
import {
  DownSvg,
  LoveSvg,
  ShareSvg,
  SuccessSvg,
  ViewSvg,
} from "../../../Components/Svg/SvgContainer";
import Modal from "../../../Components/Common/Modal";
import DoorPreviewModal from "../../../Components/Modals/DoorPreviewModal";

const colors = [
  { id: 1, code: "#3E3E3E" },
  { id: 2, code: "#fff" },
  { id: 3, code: "#000" },
];

const categories = [
  { id: 1, name: "Single Door Designs" },
  { id: 2, name: "Double Door Designs" },
];

const Page = () => {
  const router = useRouter();
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [openTryOnModal, setOpenTryOnModal] = useState(false);
  const [openOrderConfirmModal, setOpenOrderConfirmModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Single Door Designs");
  const [activeColor, setActiveColor] = useState("#3E3E3E");

  return (
    <section className="my-10">
      <Container>
        {/* Upper Part */}
        <div className="mb-10 flex justify-between items-center">
          {/* Left */}
          <div className="flex gap-12 items-center">
            {/* Category */}
            <div className="flex gap-5 items-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-5 py-3 rounded-lg cursor-pointer hover:scale-105 duration-300 transition-all border border-light-green ${
                    activeCategory === category.name
                      ? "bg-light-green text-white"
                      : "bg-transparent text-light-green"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Colors */}
            <div className="flex gap-3 items-center">
              <p className="text-[#333] text-xl font-medium">Color:</p>
              <div className="flex gap-2 items-center">
                {colors.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setActiveColor(color.code)}
                    style={{ backgroundColor: color.code }}
                    className={`rounded-full cursor-pointer shadow-lg ${
                      activeColor === color.code
                        ? "border-light-green border-2 size-6"
                        : "size-5 border border-gray-100"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <button className="p-3 rounded-lg cursor-pointer text-primary-text font-medium border border-off-white bg-[#F5F7F9] flex gap-2 items-center">
            <ViewSvg />
            <span>View</span>
            <DownSvg />
          </button>
        </div>

        {/* Lower Part */}
        <div className="grid grid-cols-10 gap-5">
          {catalogueData.map(item => (
            <div
              key={item.id}
              onClick={() => setOpenPreviewModal(true)}
              className="border border-accent-gray rounded-xl bg-white text-center shadow-lg py-4 relative duration-300 transition-all cursor-pointer hover:scale-105 hover:shadow-xl hover:border-light-green"
            >
              <figure className="mb-3 w-[110px] h-[150px] mx-auto rounded relative">
                <Image
                  src={item.img}
                  alt="door"
                  className="w-full h-full object-cover rounded"
                  fill
                />
              </figure>

              <p className="text-[#333] font-semibold">{item?.name}</p>

              <div className="absolute right-2 top-2 flex gap-2 items-center">
                <button className="size-7 rounded-full cursor-pointer grid place-items-center bg-[linear-gradient(254deg,_#E3F2FD_-2.44%,_rgba(249,252,255,0.80)_110.21%)] shadow-2xl border border-gray-100 hover:bg-light-green duration-300 transition-all hover:scale-105">
                  <ShareSvg />
                </button>

                <button className="size-7 rounded-full cursor-pointer grid place-items-center bg-[linear-gradient(254deg,_#E3F2FD_-2.44%,_rgba(249,252,255,0.80)_110.21%)] shadow-2xl border border-gray-100 hover:bg-light-green duration-300 transition-all hover:scale-105">
                  <LoveSvg />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Preview Modal */}
      <Modal open={openPreviewModal} onClose={() => setOpenPreviewModal(false)}>
        <DoorPreviewModal
          onClose={() => setOpenPreviewModal(false)}
          onTryOn={() => {
            setOpenPreviewModal(false);
            setOpenTryOnModal(true);
          }}
          onOrder={() => {
            setOpenPreviewModal(false);
            setOpenOrderConfirmModal(true);
          }}
        />
      </Modal>

      {/* Try On Modal */}
      <Modal open={openTryOnModal} onClose={() => setOpenTryOnModal(false)}>
        <div className="text-center py-7">
          <h3 className="text-xl font-medium mb-4 text-primary-text">
            Would you like to continue to the try-on page?
          </h3>
          <div className="flex gap-8 justify-center items-center mt-7">
            <button
              onClick={() => setOpenTryOnModal(false)}
              className="px-7 py-2.5 rounded-lg border border-light-green text-light-green hover:scale-105 transition-transform cursor-pointer"
            >
              No
            </button>
            <button
              onClick={() => {
                router.push(`/b2b2c/shop?isAr=true&isPreview=true`);
                setOpenTryOnModal(false);
              }}
              className="px-7 py-2.5 rounded-lg bg-light-green text-white hover:scale-105 transition-transform cursor-pointer"
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>

      {/* Order Confirmation Modal */}
      <Modal
        open={openOrderConfirmModal}
        onClose={() => setOpenOrderConfirmModal(false)}
      >
        <div className="text-center py-7">
          <h3 className="text-xl font-medium mb-4 text-primary-text">
            Are you sure you would like to place the order?
          </h3>
          <div className="flex gap-8 justify-center items-center mt-7">
            <button
              onClick={() => setOpenOrderConfirmModal(false)}
              className="px-7 py-2.5 rounded-lg border border-light-green text-light-green hover:scale-105 transition-transform cursor-pointer"
            >
              No
            </button>
            <button
              onClick={() => {
                setOpenOrderConfirmModal(false);
                setOpenSuccessModal(true);
              }}
              className="px-7 py-2.5 rounded-lg bg-light-green text-white hover:scale-105 transition-transform cursor-pointer"
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal open={openSuccessModal} onClose={() => setOpenSuccessModal(false)}>
        <div className="flex flex-col justify-center items-center text-center py-7">
          <SuccessSvg />

          <h3 className="text-xl font-medium text-primary-text mt-7">
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
    </section>
  );
};

export default Page;
