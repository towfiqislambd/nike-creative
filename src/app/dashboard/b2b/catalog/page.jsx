import Image from "next/image";
import React from "react";
import profilePicture from "../../../../Assets/profile.svg";
import Link from "next/link";
import { Cart } from "../../../../Components/Svg/SvgContainer";

const navItems = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "Shop",
    link: "#",
  },
  {
    label: "Category",
    link: "#",
  },
  {
    label: "Contact Us",
    link: "#",
  },
  {
    label: "About US",
    link: "#",
  },
];

const page = () => {
  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] p-2 md:p-6 rounded-2xl md:rounded-[40px] border-l-2 border-[#bbb] custom-shadow-xl">
        <nav className="flex max-[425px]:flex-col items-center justify-end gap-4 mb-5 pb-5 border-[#555]/50 border-b">
          <div className="flex items-center gap-5 w-full justify-end">
            <div className="flex justify-center gap-3 md:gap-5 xl:gap-7">
              {navItems?.map(({ label, link }, idx) => (
                <Link
                  key={idx}
                  href={link}
                  className="text-sm md:text-base 2xl:text-xl text-[#333] hover:text-[#21BBA2] transition"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <button className="bg-[#21BBA2] hover:bg-[#21BBA2]/80 shrink-0 rounded-full size-11 flex items-center justify-center cursor-pointer">
                <Cart />
              </button>
              <div className="relative shrink-0 cursor-pointer">
                <Image
                  src={profilePicture}
                  width={48}
                  height={48}
                  alt=""
                  className="rounded-full"
                />
                <div className="size-4 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
              </div>
            </div>
          </div>
        </nav>

        <div className="mt-5">
          <h2 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium">
            Catalog
          </h2>
        </div>
      </header>
    </section>
  );
};

export default page;
