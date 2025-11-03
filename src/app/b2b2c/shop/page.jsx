"use client";
import React, { useState } from "react";
import Container from "../../../Components/Common/Container";
import {
  AirSvg,
  AISvg,
  CameraSvg,
  DesignSvg,
} from "../../../Components/Svg/SvgContainer";
import Favorites from "./_components/Favorites";
import Saved from "./_components/Saved";
import CreateAiDesign from "./_components/CreateAiDesign";
import Image from "next/image";
import doorPreview from "../../../Assets/door_preview_img.jpg";
import { useSearchParams } from "next/navigation";
const colors = [
  { id: 1, code: "#3E3E3E" },
  { id: 2, code: "#fff" },
  { id: 3, code: "#000" },
];

const page = () => {
  const searchParams = useSearchParams();
  const ar = searchParams.get("isAr");
  const preview = searchParams.get("isPreview");
  const [isAr, setAr] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [activeTab, setActiveTab] = useState("favorites");
  const [activeColor, setActiveColor] = useState("#3E3E3E");
  const shadow_box =
    "p-5 border border-[#E9E9E9] bg-white rounded-xl w-[312px] space-y-3 shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)]";

  return (
    <section className="my-10">
      <Container>
        <main className="flex gap-8">
          {/* Sidebar */}
          <aside className="space-y-5 shrink-0">
            {/* Upper Div */}
            <div className={shadow_box}>
              <h3 className="text-[#1F1F1F] text-lg font-medium">My stuff</h3>

              {/* Favorite */}
              <button
                onClick={() => setActiveTab("favorites")}
                className="flex gap-2 items-center"
              >
                <input
                  id="favorites"
                  type="radio"
                  className="size-4"
                  name="filter"
                  checked={activeTab === "favorites"}
                  readOnly
                />
                <label
                  htmlFor="favorites"
                  className="text-sm text-primary-text font-medium"
                >
                  Favorites
                </label>
              </button>

              {/* Saved */}
              <button
                onClick={() => setActiveTab("saved")}
                className="flex gap-2 items-center"
              >
                <input
                  id="saved"
                  type="radio"
                  className="size-4"
                  name="filter"
                  checked={activeTab === "saved"}
                  readOnly
                />
                <label
                  htmlFor="saved"
                  className="text-sm text-primary-text font-medium"
                >
                  Saved
                </label>
              </button>

              <hr className="text-gray-200 my-5" />

              <h3 className="text-[#1F1F1F] text-lg font-medium">
                Filter by product categories
              </h3>

              {/* Category Options */}
              {[
                { id: "custom", label: "Custom Door Designs" },
                { id: "double", label: "Double Door Designs" },
                { id: "single", label: "Single Door Designs" },
              ].map(({ id, label }) => (
                <label
                  key={id}
                  htmlFor={id}
                  onClick={() => setActiveTab(id)}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <input
                    id={id}
                    type="radio"
                    className="size-4"
                    name="filter"
                    checked={activeTab === id}
                    readOnly
                  />
                  <span className="text-sm text-primary-text font-medium">
                    {label}
                  </span>
                </label>
              ))}

              <hr className="text-gray-200 my-5" />

              <h3 className="text-[#1F1F1F] text-lg font-medium">
                Filter by product color
              </h3>

              {/* Color Options */}
              {[
                { id: "bronze", label: "Bronze" },
                { id: "white", label: "White" },
                { id: "black", label: "Black" },
              ].map(({ id, label }) => (
                <label
                  key={id}
                  htmlFor={id}
                  onClick={() => setActiveTab(id)}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <input
                    id={id}
                    type="radio"
                    className="size-4"
                    name="filter"
                    checked={activeTab === id}
                    readOnly
                  />
                  <span className="text-sm text-primary-text font-medium">
                    {label}
                  </span>
                </label>
              ))}

              <hr className="text-gray-200 my-5" />

              {/* Reset */}
              <button
                onClick={() => setActiveTab("favorites")}
                className="block w-full rounded-full border border-light-green text-light-green cursor-pointer hover:bg-light-green hover:text-white duration-300 transition-all py-2.5"
              >
                Reset
              </button>
            </div>

            {/* Middle Div */}
            <div className={shadow_box}>
              <h3 className="text-[#1F1F1F] text-lg font-medium mb-5 flex gap-2 items-center">
                <DesignSvg />
                AI Design
              </h3>

              <button
                onClick={() => {
                  setActiveTab("ai_design");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-4 py-2.5 font-medium rounded-full cursor-pointer flex gap-2 items-center bg-[linear-gradient(245deg,_#4BCDE4_1.36%,_#58C5D8_49.38%,_#29717E_186.59%)] text-primary-text duration-300 transition-all hover:scale-105"
              >
                <AISvg />
                Create AI Design
              </button>
            </div>

            {/* Lower Div */}
            <div className={shadow_box}>
              <h3 className="text-[#1F1F1F] text-lg font-medium mb-5 flex gap-2 items-center">
                <AirSvg />
                AR Viewer
              </h3>

              <label className="relative inline-flex gap-3 items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  onChange={() => {
                    setActiveTab("favorites");
                    setAr(!isAr);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
                <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-all duration-300" />
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5" />

                {/* Labels */}
                <span className="text-primary-text peer-checked:hidden font-semibold">
                  Off
                </span>
                <span className="text-primary-text peer-checked:text-blue-600 hidden peer-checked:inline font-semibold">
                  On
                </span>
              </label>
            </div>
          </aside>

          {/* Outlet */}
          <section className="grow">
            {(isAr || ar) && (
              <div>
                {imageFile || preview ? (
                  <div className="border border-gray-200 rounded-2xl p-5 flex gap-6 mb-8 shadow-[0_0_4px_3px_rgba(0,0,0,0.05)]">
                    {/* Left - Door Preview */}
                    <div className="w-[843px]">
                      <h3 className="text-primary-text font-semibold text-2xl mb-3.5">
                        Bring Your Vision to Life
                      </h3>

                      <figure className="h-[380px] relative rounded-2xl">
                        <Image
                          src={doorPreview}
                          alt="door_preview"
                          fill
                          unoptimized
                          className="rounded-2xl"
                        />
                      </figure>
                    </div>

                    {/* Right - Color Changer */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-primary-text font-semibold text-2xl mb-3.5">
                          Change Color
                        </h3>

                        <div className="flex gap-2.5 items-center">
                          {colors?.map(color => (
                            <button
                              key={color?.id}
                              onClick={() => setActiveColor(color?.code)}
                              style={{ backgroundColor: color?.code }}
                              className={`rounded-full cursor-pointer shadow-lg size-12 ${
                                activeColor === color?.code
                                  ? "border-light-green border-2"
                                  : "border border-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <button className="text-[#000080] font-medium px-7 py-3 rounded-lg cursor-pointer duration-300 transition-all hover:scale-105 border border-[#000080]">
                          Save the Photo
                        </button>

                        <button className="bg-[#000080] text-white font-medium px-7 py-3 rounded-lg cursor-pointer duration-300 transition-all hover:scale-105 border border-[#000080]">
                          Select To Order
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    onDragOver={e => e.preventDefault()}
                    onDrop={e => {
                      e.preventDefault();
                      const droppedFile = e.dataTransfer.files[0];
                      if (droppedFile) setImageFile(droppedFile);
                    }}
                  >
                    <label
                      htmlFor="upload_door"
                      className="w-full py-20 text-center flex flex-col gap-3 mb-8 border border-dashed border-[#ADADAD] rounded-2xl bg-white shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)] cursor-pointer hover:bg-gray-50 transition-all duration-300 group"
                    >
                      <p className="mx-auto mb-2 group-hover:scale-105 duration-300 transition-transform">
                        <CameraSvg />
                      </p>

                      <h3 className="text-primary-text text-2xl font-semibold mb-2">
                        Bring Your Vision to Life
                      </h3>

                      <p className="text-[#ADADAD] text-xl max-w-[750px] mx-auto leading-[164%]">
                        To begin, simply upload or take a photo of your door.
                        For the best results, please ensure it's well-lit and
                        shows the entire doorway clearly.
                      </p>

                      <p className="text-primary-text font-medium">
                        Upload or drag and drop
                      </p>
                    </label>
                    <input
                      type="file"
                      id="upload_door"
                      className="hidden"
                      accept="image/*"
                      onChange={e => {
                        const file = e.target.files[0];
                        if (file) setImageFile(file);
                      }}
                    />
                  </div>
                )}
              </div>
            )}
            {activeTab === "favorites" && (
              <Favorites setAr={setAr} setImageFile={setImageFile} />
            )}
            {activeTab === "saved" && <Saved />}
            {activeTab === "ai_design" && <CreateAiDesign />}
          </section>
        </main>
      </Container>
    </section>
  );
};

export default page;
