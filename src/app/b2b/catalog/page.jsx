"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import doorImg1 from "../../../Assets/m1.png";
import doorImg2 from "../../../Assets/m2.jpg";
import doorImg3 from "../../../Assets/door_preview_img.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
const pages = [doorImg1, doorImg2, doorImg3, doorImg1];

const page = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-full min-h-screen bg-[#eef3f7] flex flex-col lg:flex-row gap-4 p-4">
      {/* Left - Sidebar */}
      <div className="w-full lg:w-[180px] bg-white rounded-xl p-4 shadow-md flex flex-col">
        <h3 className="text-center text-sm font-semibold mb-4">Pages</h3>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-1 gap-4 overflow-y-auto">
          {pages.map((page, index) => (
            <div
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`cursor-pointer rounded-lg overflow-hidden border transition ${
                index === currentPage
                  ? "border-blue-500 shadow-md"
                  : "border-gray-200"
              }`}
            >
              <Image
                src={page}
                width={200}
                height={120}
                alt={`Page ${index + 1}`}
                className="object-cover w-[200px] h-[120px]"
              />
              <p className="text-center text-xs py-1">Page {index + 1}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main - Preview */}
      <div className="flex-1 bg-white rounded-xl shadow-md relative flex flex-col">
        {/* Download Button */}
        <button className="absolute top-4 right-4 bg-light-green text-white p-3 text-lg rounded-full shadow-md z-10">
          <IoMdDownload />
        </button>

        {/* IMAGE VIEWER */}
        <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[75vh] rounded-xl overflow-hidden">
          <Image
            src={pages[currentPage]}
            fill
            alt="Catalog Page"
            className="object-cover"
          />
        </div>

        {/* PAGE NAVIGATION */}
        <div className="flex items-center justify-center gap-6 py-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="text-xl p-3 rounded-full border border-gray-200 disabled:opacity-40 bg-white shadow-lg text-gray-700"
          >
            <FaArrowLeftLong />
          </button>

          <span className="text-sm font-medium">
            {currentPage + 1}/{pages.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === pages.length - 1}
            className="text-xl p-3 rounded-full border border-gray-200 disabled:opacity-40 bg-white shadow-lg text-gray-700"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
