import Image from "next/image";
import React, { useState } from "react";
import aiImg from "../../../../Assets/avatar.jpg";
import doorImg from "../../../../Assets/door.png";
import doorPreview from "../../../../Assets/door_preview_img.jpg";

import {
  AiSvg,
  ImgSvg,
  OrderSvg,
  PhotoSvg,
  SendSvg,
  TrySvg,
  UploadSvg,
} from "../../../../Components/Svg/SvgContainer";
const categories = [
  { id: 1, name: "Single Door Designs" },
  { id: 2, name: "Double Door Designs" },
];

const previewImages = [
  { id: 1, img: doorPreview },
  { id: 2, img: doorPreview },
  { id: 3, img: doorPreview },
];

const CreateAiDesign = () => {
  const [activeCategory, setActiveCategory] = useState("Single Door Designs");
  const [activeMode, setActiveMode] = useState("text");
  const [previewImage, setPreviewImage] = useState(null);
  const [notClicked, setNotClicked] = useState(false);
  const [viewPrevious, setViewPrevious] = useState(false);

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

      <div className="flex gap-5">
        {/* Left - Chat Box */}
        <div>
          <div className="bg-white shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] p-7 rounded-2xl w-[732px] h-[600px] relative mb-6">
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

            {/* Mode */}
            {activeMode === "text" ? (
              <div className="h-full flex flex-col justify-between">
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
                      Hi! I’m your virtual design assistant. Tell me what you’re
                      looking for, and I’ll show you some options
                    </p>
                  </div>

                  <div className="flex gap-3 items-start justify-end">
                    {/* Left - AI Image */}
                    <p className="grow bg-white shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] px-4 py-3 text-[15px] text-primary-text rounded-4xl border border-gray-50 !rounded-tr-md max-w-[453px] leading-[164%]">
                      Hi! I’m your virtual design assistant. Tell me what you’re
                      looking for, and I’ll show you some options
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
            ) : (
              <div className="h-full flex flex-col items-center justify-center">
                <figure className="relative w-[400px] h-[450px] rounded-lg">
                  <Image
                    src={previewImage ? previewImage : doorImg}
                    alt="door_img"
                    fill
                    className="w-full h-full rounded-lg"
                  />
                </figure>

                {previewImage && !notClicked && (
                  <div>
                    <h3 className="max-w-[657px] text-xl font-medium text-primary-text mt-5">
                      We found this product in our catalog. Would you like to
                      proceed with placing the order?
                    </h3>

                    <div className="flex gap-5 mt-7 w-full">
                      <button className="px-7 py-3 text-[17px] bg-light-green text-white cursor-pointer hover:scale-105 duration-300 transition-transform rounded-[6px] border border-light-green">
                        Yes
                      </button>

                      <button
                        onClick={() => setNotClicked(true)}
                        className="px-7 py-3 text-[17px] bg-transparent text-light-green cursor-pointer hover:scale-105 duration-300 transition-transform rounded-[6px] border border-light-green"
                      >
                        Not This
                      </button>
                    </div>
                  </div>
                )}
                {notClicked && (
                  <div className="flex gap-5 justify-between items-center mt-7 w-full">
                    <h3 className="text-primary-text font-medium text-xl">
                      This is an AI-generated photo.
                    </h3>

                    <div className="flex flex-col items-end gap-5">
                      <button
                        onClick={() => setViewPrevious(true)}
                        className="px-4 py-2.5 font-medium rounded-full cursor-pointer flex gap-2 items-center bg-[linear-gradient(245deg,_#4BCDE4_1.36%,_#58C5D8_49.38%,_#29717E_186.59%)] text-primary-text duration-300 transition-all hover:scale-105 w-fit"
                      >
                        Generate Design
                      </button>

                      <div className="flex gap-5 items-center">
                        <button className="border rounded-lg border-light-green text-light-green flex gap-2 items-center px-5 py-3 hover:bg-light-green hover:text-white duration-300 transition-all cursor-pointer">
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

          {/* Upload Image Box */}
          {activeMode === "file" && (
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-primary-text">
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
                  className="shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] rounded-2xl w-[732px] py-10 relative bg-white cursor-pointer hover:bg-gray-50 transition-all duration-300 border border-dashed border-[#ADADAD] text-center flex flex-col gap-3"
                >
                  <h3 className="text-primary-text text-xl font-medium mb-3">
                    Create Your Design
                  </h3>

                  <p className="mx-auto mb-1 group-hover:scale-105 duration-300 transition-transform size-10 rounded-lg border border-gray-200 shadow grid place-items-center">
                    <UploadSvg />
                  </p>

                  <p className="text-[#5A5C5F] font-medium">
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

        {/* Right - Preview Images */}
        {viewPrevious && (
          <div className="py-5 px-4 rounded-lg w-[350px] shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] border border-[#E9E9E9] bg-white shrink-0 space-y-5">
            <h3 className="text-primary-text font-semibold text-xl">
              View Previous
            </h3>

            {previewImages?.map(item => (
              <figure className="w-full h-[300px] relative rounded-2xl">
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
    </>
  );
};

export default CreateAiDesign;
