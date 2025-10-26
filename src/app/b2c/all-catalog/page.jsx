import React from "react";
import Image from "next/image";
import Container from "../../../Components/Common/Container";
import bgLayer from "../../../Assets/primary_layer.png";
import { catalogueData } from "../../../Components/Data/data";

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
          <div className="flex gap-10 items-center">
            <div className="flex gap-5 items-center">
              <button className="bg-light-green px-5 py-3 rounded-lg text-white cursor-pointer">
                Single Door Designs
              </button>

              <button className="bg-transparent border border-light-green px-5 py-3 rounded-lg text-light-green cursor-pointer">
                Double Door Designs
              </button>
            </div>

            <div className="flex gap-3 items-center">
              <p>Color:</p>
              <div className="flex gap-1 items-center">
                <div className="size-5 rounded-full bg-black cursor-pointer shadow"></div>
                <div className="size-5 rounded-full bg-white cursor-pointer shadow"></div>
                <div className="size-5 rounded-full bg-black cursor-pointer shadow"></div>
              </div>
            </div>
          </div>

          {/* Right */}
          <button className="px-3 py-2 rounded border border-off-white">
            View
          </button>
        </div>

        {/* Lower Part */}
        <div className="grid grid-cols-10 gap-5">
          {catalogueData?.map(item => (
            <div
              key={item?.id}
              className="border border-accent-gray rounded-xl bg-white text-center shadow-lg pb-3"
            >
              {/* Door Image */}
              <figure className="mb-3">
                <Image src={item?.img} />
              </figure>

              {/* Door Name */}
              <p className="text-[#333] font-semibold">{item?.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default page;
