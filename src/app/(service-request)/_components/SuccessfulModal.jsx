"use client";

import Link from "next/link";
import { CrossCircle } from "../../../Components/Svg/SvgContainer";

const SuccessfulModal = () => {
  return (
    <div className="bg-white text-center p-3 sm:p-5 rounded-lg sm:rounded-[16px] w-full max-w-[585px] relative shadow-lg">
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="md:text-xl">
          Your Service Request was Submitted Successfully
        </h2>

        <Link href={"/"} className="max-sm:hidden">
          <CrossCircle />
        </Link>
      </div>
      <p className="text-xs md:text-sm">Here is your service request number :f42555</p>
      <p className="text-xs md:text-sm">You may now close this page</p>
      <div className="mt-3 md:mt-5">
        <Link
          href={"/"}
          className="bg-[#21BBA2] hover:bg-[#21BBA2]/80 text-white px-6 sm:px-8 py-2 rounded-lg xl:text-lg"
        >
          Exit
        </Link>
      </div>
    </div>
  );
};
export default SuccessfulModal;
