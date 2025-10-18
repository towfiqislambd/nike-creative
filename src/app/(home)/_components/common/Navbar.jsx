"use client";
import Container from "../../../_components/common/Container";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <Container>
        <nav className=" flex items-center justify-between w-full bg-white mt-6 px-10 py-2.5 border border-gray-200 rounded-full shadow-sm">
          <div className="flex items-center gap-10">
            <div className="">
              <Link href="/" className="flex items-center">
                <img
                  src="https://i.ibb.co.com/XZ21JXnM/logo.png"
                  alt="Logo"
                  className="w-25 h-17.5 cursor-pointer"
                />
              </Link>
            </div>
            <div className="flex items-center gap-8 text-gray-700 font-medium">
              <Link
                href="#"
                className="relative text-teal-600 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-teal-500 after:rounded-full cursor-pointer"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="hover:text-teal-600 transition-colors cursor-pointer"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="hover:text-teal-600 transition-colors cursor-pointer"
              >
                About Us
              </Link>
            </div>
          </div>

          <div>
            <Link
              href="#"
              className="border border-teal-500 cursor-pointer text-teal-600 px-8 py-2.5 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  );
}
