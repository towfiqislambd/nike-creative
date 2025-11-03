import Image from "next/image";

const DoorDesignSectionB2c = () => {
  return (
    <section className=" pb-16">
      <div className="">
        <h3 className="container !my-10 text-[#333] font-robotoSerif text-[36px] font-medium leading-[150%]">
          Welcome to Nike Creative Studio
        </h3>
        <div className="container flex gap-10">
          <div className="w-3/4 flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row items-start gap-10 bg-white rounded-3xl shadow-sm  pl-10 pt-10 pr-10">
              <div className="w-full">
                <p className="text-[#5A5C5F] text-[12px] font-medium leading-[150%]mb-2">
                  Single Door
                </p>
                <h2 className="section_title mb-4 mt-10">
                  Single Door Design <br />
                  KSWH005
                </h2>

                <div className="flex w-[80%] items-center gap-6 mt-8">
                  <div className="w-full">
                    <Image
                      src="https://i.ibb.co.com/ymcPgKnY/Frame-2147227145.png"
                      alt="Single Door"
                      width={500}
                      height={500}
                      unoptimized
                      className=" object-cover w-full h-auto"
                    />
                  </div>
                  <div className="w-full">
                    <h4 className="text-[#333] text-[22px] font-medium leading-[150%] mb-3">
                      Single Door Design
                    </h4>
                    <p className="section_description">
                      Bring your dream door to life – with elegance and strength
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    className="inline-flex items-center justify-between rounded-[40px] border border-[#1F1F1F] py-2 pr-4 pl-7 text-sm text-[#1F1F1F]/80 hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-[#21BBA2]/40 transition"
                    type="button"
                  >
                    <span className="mr-3">View Details</span>

                    {/* Right circular arrow */}
                    <span className="grid place-items-center w-8 h-8 rounded-full bg-[#21BBA2]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <div className=" w-full  ">
                <Image
                  src="https://i.ibb.co.com/23t67gbd/Untitled-design-6-2.png"
                  alt="Single Door"
                  width={500}
                  height={500}
                  unoptimized
                  className=" object-cover w-full h-auto"
                />
              </div>
            </div>

            <div className="flex gap-8 w-full">
              <div className="bg-white p-10 rounded-3xl shadow-sm w-1/3">
                <h4 className="section_subTitle mb-4">All Door Design</h4>
                <div className="flex gap-3">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gray-100 rounded-xl overflow-hidden"
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

              <div className="bg-white rounded-3xl gap-8 pl-8 pt-8 shadow-sm flex  w-2/3">
                <div className="w-full flex flex-col justify-between">
                  <div className="">
                    <h3 className="section_subTitle mb-2">
                      Double Door Design
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Open the way to style and durability with our double door
                      designs.
                    </p>
                  </div>
                  <div className="mb-8">
                    <button
                      className="inline-flex items-center justify-between rounded-[40px] border border-[#1F1F1F] py-2 pr-4 pl-7 text-sm text-[#1F1F1F]/80 hover:bg-black/[0.02] focus:outline-none focus:ring-2 focus:ring-[#21BBA2]/40 transition"
                      type="button"
                    >
                      <span className="mr-3">Double Door Design</span>

                      {/* Right circular arrow */}
                      <span className="grid place-items-center w-8 h-8 rounded-full bg-[#21BBA2]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
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

          <div className="w-1/4 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <h4 className="section_subTitle mb-4 ">All Door Design</h4>
              <div className="flex gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gray-100 rounded-xl overflow-hidden"
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

            <div className="bg-white flex pl-6 pt-3 pr-6 rounded-3xl shadow-sm">
              <div className="w-full xl:w-4/6">
                <h4 className="section_subTitle mb-2">
                  Custom Single Door Design
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Design without limits – create the door design you’ve
                  imagined.
                </p>
              </div>
              <div className="w-full xl:w-2/6">
                <Image
                  src="https://i.ibb.co.com/23t67gbd/Untitled-design-6-2.png"
                  alt="Custom Single"
                  width={120}
                  height={180}
                  unoptimized
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-white flex pl-6 pt-3 pr-6 rounded-3xl shadow-sm">
              <div className="w-full xl:w-4/6">
                <h4 className="section_subTitle mb-2">See All Catalog</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Choose your door design from our catalogs.
                </p>
              </div>
              <div className="w-full xl:w-2/6">
                <Image
                  src="https://i.ibb.co.com/23t67gbd/Untitled-design-6-2.png"
                  alt="Custom Single"
                  width={120}
                  height={180}
                  unoptimized
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm">
              <h4 className="section_subTitle mb-2">See All Catalog</h4>

              <div className="flex">
                <p className="text-gray-600 text-sm mb-4">
                  Choose your door design from our catalogs.
                </p>
                <Image
                  src="https://i.ibb.co.com/fd94DCnB/Group-1321314743.png"
                  alt="Catalog"
                  width={160}
                  height={120}
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </section>
  );
};

export default DoorDesignSectionB2c;
