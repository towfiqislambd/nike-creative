import Image from "next/image";
import Container from "../../../Components/Common/Container";
import { RightSvg } from "../../../Components/Svg/SvgContainer";
import { MoveRightIcon } from "lucide-react";

const DoorDesignSectionB2c = () => {
  return (
    <section className="pb-16">
      <Container>
        <h3 className="my-5 xl:my-6 text-[#333] font-robotoSerif text-xl md:text-2xl font-medium leading-[150%]">
          Welcome to Nike Creative Studio
        </h3>

        <div className="flex flex-col xl:flex-row gap-5 xl:gap-6">
          {/* Left */}
          <div className="w-full xl:w-3/4 flex flex-col gap-5 xl:gap-8">
            <div className="flex flex-col lg:flex-row items-start gap-10 bg-white rounded-3xl shadow-sm  pl-5 2xl:pl-10 pt-5 2xl:pt-10 pr-5 2xl:pr-10">
              <div className="w-full">
                <p className="text-[#5A5C5F] text-[12px] font-medium leading-[150%] mb-2">
                  Single Door
                </p>

                <h2 className="section_title mb-3 2xl:mb-4 mt-5 2xl:mt-10">
                  Single Door Design <br />
                  KSWH005
                </h2>

                <div className="flex flex-col sm:flex-row items-center gap-6 lg:mt-8">
                  <figure className="w-full">
                    <Image
                      src="https://i.ibb.co.com/ymcPgKnY/Frame-2147227145.png"
                      alt="Single Door"
                      width={500}
                      height={500}
                      unoptimized
                      className="object-cover w-full h-auto"
                    />
                  </figure>

                  <div className="w-full">
                    <h4 className="text-[#333] text-[22px] font-medium leading-[150%] mb-3">
                      Single Door Design
                    </h4>
                    <p className="section_description">
                      Bring your dream door to life – with elegance and strength
                    </p>
                  </div>
                </div>

                <div className="lg:mt-10 mt-5 mb-5">
                  <button
                    className="inline-flex items-center justify-between rounded-[40px] border border-[#1F1F1F] py-1.5 sm:py-2 pr-4 pl-4 sm:pl-7 text-sm text-[#1F1F1F]/80 hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-[#21BBA2]/40 transition"
                    type="button"
                  >
                    <span className="mr-3">View Details</span>
                    <span className="grid place-items-center w-8 h-8 rounded-full bg-[#21BBA2]">
                      <RightSvg />
                    </span>
                  </button>
                </div>
              </div>

              <div className="w-full hidden lg:block">
                <Image
                  src="https://i.ibb.co.com/23t67gbd/Untitled-design-6-2.png"
                  alt="Single Door"
                  width={500}
                  height={500}
                  unoptimized
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-6 2xl:gap-8 w-full">
              <div className="bg-white p-5 rounded-3xl shadow-sm w-full xl:w-1/3">
                <div className="flex items-center justify-between mb-4 text-sub-text">
                  <h4 className="section_subTitle">All Door Design</h4>
                  <MoveRightIcon />
                </div>
                <div className="flex gap-3">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="xl:flex-1 bg-gray-100 rounded-xl overflow-hidden"
                    >
                      <Image
                        src="https://i.ibb.co.com/N684xm5K/Frame-2147227155-1.png"
                        alt="Door Design"
                        width={153}
                        height={250}
                        unoptimized
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl gap-8 pl-5 2xl:pl-8 pt-5 2xl:pt-8 shadow-sm flex flex-col sm:flex-row w-full xl:w-2/3">
                <div className="w-full flex flex-col justify-between">
                  <div>
                    <h3 className="section_subTitle mb-2">
                      Double Door Design
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Open the way to style and durability with our double door
                      designs.
                    </p>
                  </div>
                  <div className="mt-3 sm:mb-8">
                    <button
                      className="inline-flex items-center justify-between rounded-[40px] border border-[#1F1F1F] py-1.5 sm:py-2 pr-4 pl-4 sm:pl-7 text-sm text-[#1F1F1F]/80 hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-[#21BBA2]/40 transition"
                      type="button"
                    >
                      <span className="mr-3">Double Door Design</span>
                      <span className="grid place-items-center w-8 h-8 rounded-full bg-[#21BBA2]">
                        <RightSvg />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="w-full">
                  <Image
                    src="https://i.ibb.co/8gF2tJwc/Untitled-design-7-2.png"
                    alt="Double Door"
                    width={500}
                    height={550}
                    unoptimized
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full xl:w-1/4 flex flex-col gap-4 2xl:gap-6">
            <div className="bg-white p-4 2xl:p-6 rounded-3xl shadow-sm">
              <div className="flex items-center justify-between mb-4 text-sub-text">
                <h4 className="section_subTitle">All Door Design</h4>
                <MoveRightIcon />
              </div>
              <div className="flex gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="xl:flex-1 bg-gray-100 rounded-xl overflow-hidden"
                  >
                    <Image
                      src="https://i.ibb.co.com/N684xm5K/Frame-2147227155-1.png"
                      alt="Door Design"
                      width={150}
                      height={200}
                      unoptimized
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white flex flex-col sm:flex-row pl-4 2xl:pl-4 pt-3 pr-4 2xl:pr-4 rounded-3xl shadow-sm gap-2">
              <div className="w-full xl:w-4/6">
                <h4 className="section_subTitle mb-2">
                  Custom Single Door Design
                </h4>

                <p className="text-gray-600 text-sm mb-4">
                  Design without limits – create the door design you’ve
                  imagined.
                </p>
              </div>

              <div className="w-full xl:w-2/6 overflow-hidden space-y-2 rounded-b-xl">
                <MoveRightIcon className="ml-auto text-sub-text" />
                <div className="w-full h-fit">
                  <Image
                    src="https://i.ibb.co.com/N684xm5K/Frame-2147227155-1.png"
                    alt="Custom Single"
                    width={120}
                    height={0}
                    unoptimized
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white gap-2 pl-4 2xl:pl-4 pt-3 pr-4 2xl:pr-4 rounded-3xl shadow-sm">
              <div className="flex items-center justify-between mb-4 text-sub-text">
                <h4 className="section_subTitle">Custom Double Door Design</h4>
                <MoveRightIcon className="shrink-0"/>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600 text-sm mb-4">
                  Choose your door design from our catalogs.
                </p>
                <div className="w-full flex justify-end">
                  <Image
                    src="https://i.ibb.co.com/mW60jHT/d217ce46811e2f939e63fd3aa02919c876ea92b9.png"
                    alt="Custom Single"
                    width={102}
                    height={127}
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-3 2xl:p-4 rounded-3xl shadow-sm">
              <div className="flex items-center justify-between mb-4 text-sub-text">
                  <h4 className="section_subTitle">See All Catalog</h4>
                  <MoveRightIcon />
                </div>

              <div className="flex flex-col sm:flex-row">
                <p className="text-gray-600 text-sm mb-4">
                  Choose your door design from our catalogs.
                </p>
                <Image
                  src="https://i.ibb.co.com/fd94DCnB/Group-1321314743.png"
                  alt="Catalog"
                  width={102}
                  height={120}
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DoorDesignSectionB2c;
