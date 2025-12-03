import Image from "next/image";

const DoorDesignSection = () => {
  return (
    <section className="pt-32 pb-16">
      <div className="container flex flex-col xl:flex-row gap-10 max-sm:px-2">
        {/* Left Side */}
        <div className="w-full xl:w-3/4 flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row items-start gap-10 bg-white rounded-3xl shadow-sm pl-6 md:pl-10 pt-6 md:pt-10 pr-6 md:pr-10">
            <div className="w-full">
              <p className="text-[#5A5C5F] text-[12px] font-medium leading-[150%] mb-2">
                Single Door
              </p>
              <h2 className="section_title mb-4">
                Where Design Meets <br /> Durability
              </h2>
              <p className="section_description">
                Kutde is the exclusive B2B partner for crafting exquisite
                architectural designs and decorative elements. We transform
                premium materials into stunning details that elevate your impact
                doors, windows, and structures from functional to exceptional.
              </p>
            </div>

            <div className="w-full">
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

          <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="bg-white p-6 rounded-3xl shadow-sm w-full lg:w-1/3">
              <h4 className="section_subTitle mb-4">All Door Design</h4>
              <div className="flex gap-3 flex-wrap">
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

            <div className="bg-white rounded-3xl gap-8 pl-6 md:pl-8 pt-6 md:pt-8 shadow-sm flex flex-col lg:flex-row w-full lg:w-2/3">
              <div className="w-full">
                <h3 className="section_subTitle mb-2">Double Door Design</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Open the way to style and durability with our double door
                  designs.
                </p>
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

        {/* Right Side */}
        <div className="w-full xl:w-1/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:flex flex-col gap-6 mt-6 xl:mt-0">
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h4 className="section_subTitle mb-4">All Door Design</h4>
            <div className="flex gap-3 flex-wrap">
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

          <div className="bg-white flex flex-col sm:flex-row pl-6 pt-3 pr-6 rounded-3xl shadow-sm gap-4">
            <div className="w-full xl:w-4/6">
              <h4 className="section_subTitle mb-2">
                Custom Single Door Design
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Design without limits – create the door design you’ve imagined.
              </p>
            </div>
            <div className="w-full xl:w-2/6">
              <Image
                src="https://i.ibb.co.com/N684xm5K/Frame-2147227155-1.png"
                alt="Custom Single"
                width={120}
                height={180}
                unoptimized
                className="rounded-xl w-full h-full max-w-[200px] object-cover"
              />
            </div>
          </div>

          <div className="bg-white flex flex-col sm:flex-row pl-6 pt-3 pr-6 rounded-3xl shadow-sm gap-4">
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
                className="rounded-xl w-full h-full max-w-[200px] object-cover"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h4 className="section_subTitle mb-2">See All Catalog</h4>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <p className="text-gray-600 text-xs mb-4 sm:mb-0">
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
    </section>
  );
};

export default DoorDesignSection;
