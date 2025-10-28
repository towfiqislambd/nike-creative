import React from "react";
import Image from "next/image";
import bgLayer from "../../../Assets/primary_layer.png";
import { catalogueData } from "../../../Components/Data/data";
import Container from "../../../Components/Common/Container";
import {
  DownSvg,
  LoveSvg,
  ShareSvg,
  ViewSvg,
} from "../../../Components/Svg/SvgContainer";

const page = () => {
  return (
    <section
      className="my-10 bg-primary-bg bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bgLayer})` }}
    >
      <Container>
        {/* Upper Part */}
        <div className="mb-10 flex justify-between items-center">
          {/* Left */}
          <div className="flex gap-12 items-center">
            <div className="flex gap-5 items-center">
              <button className="bg-light-green px-5 py-3 rounded-lg text-white cursor-pointer hover:scale-105 duration-300 transition-all">
                Single Door Designs
              </button>

              <button className="bg-transparent border border-light-green px-5 py-3 rounded-lg text-light-green cursor-pointer hover:scale-105 duration-300 transition-all">
                Double Door Designs
              </button>
            </div>

            <div className="flex gap-3 items-center">
              <p className="text-[#333] text-xl">Color:</p>

              <div className="flex gap-2 items-center">
                <div className="size-5 rounded-full bg-black cursor-pointer shadow-lg" />
                <div className="size-5 rounded-full bg-white cursor-pointer shadow-lg" />
                <div className="size-5 rounded-full bg-black cursor-pointer shadow-lg" />
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
          {catalogueData?.map(item => (
            <div
              key={item?.id}
              className="border border-accent-gray rounded-xl bg-white text-center shadow-lg py-4 relative"
            >
              {/* Catalogue Image */}
              <figure className="mb-3 w-[110px] h-[150px] mx-auto rounded relative">
                <Image
                  src={item?.img}
                  alt="door"
                  className="w-full h-full object-cover rounded"
                  fill
                />
              </figure>

              {/* Catalogue Name */}
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
    </section>
  );
};

export default page;
