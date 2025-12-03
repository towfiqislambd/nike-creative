"use client";
import React, { useState } from "react";
import doorImg from "../../../../Assets/d1.jpg";
import SingleDoor from "../../../../Components/Common/SingleDoor";
import { DownSvg, ViewSvg } from "../../../../Components/Svg/SvgContainer";

const data = [
  { id: 1, img: doorImg, name: "KDWH010" },
  { id: 2, img: doorImg, name: "KDWH010" },
  { id: 3, img: doorImg, name: "KDWH010" },
  { id: 4, img: doorImg, name: "KDWH010" },
  { id: 5, img: doorImg, name: "KDWH010" },
  { id: 6, img: doorImg, name: "KDWH010" },
  { id: 7, img: doorImg, name: "KDWH010" },
  { id: 8, img: doorImg, name: "KDWH010" },
  { id: 9, img: doorImg, name: "KDWH010" },
  { id: 10, img: doorImg, name: "KDWH010" },
];

const Favorites = ({ setAr, setImageFile }) => {
  return (
    <div>
      <button className="p-2 xl:p-3 ml-auto mb-5 rounded-lg cursor-pointer text-primary-text font-medium border border-off-white bg-[#F5F7F9] flex gap-2 items-center">
        <ViewSvg />
        <span>View</span>
        <DownSvg />
      </button>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {data?.map((item) => (
          <SingleDoor
            key={item?.id}
            item={item}
            setAr={setAr}
            setImageFile={setImageFile}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
