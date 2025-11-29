"use client"

import Image from "next/image";
import React, { useState } from "react";
import aiImg from "../../../Assets/avatar.jpg";
import doorImg from "../../../Assets/door.png";
import doorPreview from "../../../Assets/door_preview_img.jpg";


import {
  AiSvg,
  ImgSvg,
  OrderSvg,
  PhotoSvg,
  SendSvg,
  TrySvg,
  UploadSvg,
} from "../../../Components/Svg/SvgContainer";


const previewImages = [
  { id: 1, img: doorPreview },
  { id: 2, img: doorPreview },
  { id: 3, img: doorPreview },
];

const Aipage = () => {
  const [activeMode, setActiveMode] = useState("text");
  const [previewImage, setPreviewImage] = useState(null);
  const [notClicked, setNotClicked] = useState(false);
  const [viewPrevious, setViewPrevious] = useState(false);

  return (
    <div className="block md:hidden">
      <div className=" flex flex-col 2xl:flex-row gap-5 pt-5 pb-50 mb-5 mx-3">
        <div>
          <div className="bg-white shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] p-4 xl:p-7 rounded-2xl w-full md:w-[620px] xl:w-[732px] h-[500px] sm:h-[630px] relative mb-6">
            <div className="flex absolute right-3 xl:right-4 top-3 xl:top-4 border-[3px] xl:border-4 border-primary-text rounded-full overflow-hidden bg-white z-10">
              <button
                onClick={() => setActiveMode("file")}
                className={`px-3 xl:px-4 py-2 xl:py-2.5 cursor-pointer ${
                  activeMode === "file" && "bg-secondary-blue"
                }`}
              >
                <ImgSvg />
              </button>

              <div className="border-r-2" />

              <button
                onClick={() => setActiveMode("text")}
                className={`px-3 xl:px-4 py-2 xl:py-2.5 cursor-pointer ${
                  activeMode === "text" && "bg-secondary-blue"
                }`}
              >
                <AiSvg />
              </button>
            </div>
            {activeMode === "text" ? (
              <div className="h-full flex flex-col justify-between">
                <div className="space-y-5 mt-14">
                  <div className="flex gap-3 items-start">
                    <figure className="size-10 sm:size-12 rounded-full relative shrink-0">
                      <Image
                        src={aiImg}
                        fill
                        alt="ai"
                        unoptimized
                        className="size-full rounded-full"
                      />
                    </figure>
                    <p className="grow bg-white shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] text-sm sm:text-[15px] px-3 sm:px-4 py-3 text-primary-text rounded-4xl border border-gray-50 !rounded-tl-md max-w-[453px] leading-[164%]">
                      Hi! I’m your virtual design assistant. Tell me what you’re
                      looking for, and I’ll show you some options
                    </p>
                  </div>

                  <div className="flex gap-3 items-start justify-end">
                    <p className="grow bg-white shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] px-3 sm:px-4 py-3 text-sm sm:text-[15px] text-primary-text rounded-4xl border border-gray-50 !rounded-tr-md max-w-[453px] leading-[164%]">
                      Hi! I’m your virtual design assistant. Tell me what you’re
                      looking for, and I’ll show you some options
                    </p>

                    <figure className="size-10 sm:size-12 rounded-full relative shrink-0">
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

                <div className="flex gap-2 sm:gap-3 items-center">
                  <div className="w-[496px] rounded-full border border-gray-100 bg-[#fff] shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)]">
                    <input
                      type="text"
                      className="w-full block px-3 sm:px-5 py-2 text-sm sm:text-base sm:py-3.5 outline-none"
                      placeholder="Make A Door Like glass"
                    />
                  </div>

                  <label
                    htmlFor="file"
                    className="shrink-0 h-8 sm:h-auto w-8 sm:w-[70px] sm:py-2.5 rounded-3xl border border-light-green grid place-items-center cursor-pointer"
                  >
                    <input type="file" className="hidden" id="file" />
                    <PhotoSvg />
                  </label>

                  <button className="shrink-0 h-8 sm:h-auto w-8 sm:w-[70px] sm:py-2.5 rounded-3xl bg-light-green border border-light-green grid place-items-center cursor-pointer">
                    <SendSvg />
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center">
                <figure className="relative w-full sm:w-[400px] h-[300px] sm:h-[450px] rounded-lg mt-2 sm:mt-14">
                  <Image
                    src={previewImage ? previewImage : doorImg}
                    alt="door_img"
                    fill
                    className="w-full h-full rounded-lg"
                  />
                </figure>

                {previewImage && !notClicked && (
                  <div>
                    <h3 className="max-w-[657px] sm:text-lg md:text-xl font-medium text-primary-text mt-5">
                      We found this product in our catalog. Would you like to
                      proceed with placing the order?
                    </h3>

                    <div className="flex gap-4 md:gap-5 mt-5 sm:mt-7 w-full">
                      <button className="px-5 md:px-7 py-2 md:py-3 text-[17px] bg-light-green text-white cursor-pointer hover:scale-105 duration-300 transition-transform rounded-[6px] border border-light-green">
                        Yes
                      </button>

                      <button
                        onClick={() => setNotClicked(true)}
                        className="px-5 md:px-7 py-2 md:py-3 text-[17px] bg-transparent text-light-green cursor-pointer hover:scale-105 duration-300 transition-transform rounded-[6px] border border-light-green"
                      >
                        Not This
                      </button>
                    </div>
                  </div>
                )}
                {notClicked && (
                  <div className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-between items-center mt-7 w-full">
                    <h3 className="text-primary-text font-medium text-lg xl:text-xl">
                      This is an AI-generated photo.
                    </h3>

                    <div className="flex flex-col items-center sm:items-end gap-5">
                      <button
                        onClick={() => setViewPrevious(true)}
                        className="px-4 py-2 sm:py-2.5 font-medium rounded-full cursor-pointer flex gap-2 items-center bg-[linear-gradient(245deg,_#4BCDE4_1.36%,_#58C5D8_49.38%,_#29717E_186.59%)] text-primary-text duration-300 transition-all hover:scale-105 w-fit"
                      >
                        Generate Design
                      </button>

                      <div className="flex gap-5 items-center">
                        <button className="border rounded-lg border-light-green text-light-green flex gap-2 items-center px-3 xl:px-5 py-2.5 xl:py-3 hover:bg-light-green hover:text-white duration-300 transition-all cursor-pointer">
                          <TrySvg />
                          <span>Try On</span>
                        </button>

                        <button className="cursor-pointer">
                          <OrderSvg />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {activeMode === "file" && (
            <div className="space-y-3">
              <h3 className="text-sm sm:text-xl font-medium text-white">
                Upload your reference image to create your design.
              </h3>

              <div
                onDragOver={e => e.preventDefault()}
                onDrop={e => {
                  e.preventDefault();
                  const droppedFile = e.dataTransfer.files[0];
                  if (droppedFile)
                    setPreviewImage(URL.createObjectURL(droppedFile));
                }}
              >
                <label
                  htmlFor="upload_img"
                  className="shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] rounded-2xl w-full md:w-[620px] xl:w-[732px] px-5 py-7 xl:py-10 relative bg-white cursor-pointer hover:bg-gray-50 transition-all duration-300 border border-dashed border-[#ADADAD] text-center flex flex-col gap-3"
                >
                  <h3 className="text-primary-text text-lg xl:text-xl font-medium mb-1 xl:mb-3">
                    Create Your Design
                  </h3>

                  <p className="mx-auto mb-1 group-hover:scale-105 duration-300 transition-transform size-10 rounded-lg border border-gray-200 shadow grid place-items-center">
                    <UploadSvg />
                  </p>

                  <p className="text-[#5A5C5F] text-sm xl:text-base font-medium">
                    Upload or drag and drop
                  </p>
                </label>
                <input
                  type="file"
                  id="upload_img"
                  className="hidden"
                  accept="image/*"
                  onChange={e => {
                    const file = e.target.files[0];
                    if (file) setPreviewImage(URL.createObjectURL(file));
                  }}
                />
              </div>
            </div>
          )}
        </div>
        {viewPrevious && (
          <div className="py-5 px-4 rounded-lg w-full sm:w-[350px] shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] border border-[#E9E9E9] bg-white shrink-0 space-y-3 sm:space-y-5">
            <h3 className="text-primary-text font-semibold text-xl">
              View Previous
            </h3>

            {previewImages?.map(item => (
              <figure className="w-full h-[250px] sm:h-[300px] relative rounded-2xl">
                <Image
                  src={item?.img}
                  alt="preview_img"
                  fill
                  unoptimized
                  className="rounded-2xl w-full h-full"
                />
              </figure>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Aipage;
