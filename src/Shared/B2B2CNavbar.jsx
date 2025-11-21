"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Container from "../Components/Common/Container";
import { UserSvg } from "../Components/Svg/SvgContainer";
import b2b2cLogo from "../Assets/b2b2c_logo.png";

const B2B2CNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { id: 1, label: "Home", href: "/b2b2c" },
    { id: 2, label: "Shop", href: "/b2b2c/shop" },
    { id: 3, label: "Category", href: "/" },
  ];

  return (
    <div className="sticky top-4 xl:top-6 mt-4 xl:mt-6 left-0 w-full z-50">
      <Container>
        <nav className="flex items-center justify-between bg-white px-4 sm:px-6 lg:px-10 py-1 xl:py-2.5 border border-gray-200 rounded-full shadow-sm">
          {/* Left */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/" className="flex items-center size-14 sm:size-16 relative">
              <Image
                src={b2b2cLogo}
                alt="Logo"
                fill
                unoptimized
                className="size-full cursor-pointer"
              />
            </Link>

            {/* Nav links */}
            <ul className="hidden xl:flex items-center gap-8">
              {navLinks?.map(link => {
                const isActive = pathname === link?.href;

                return (
                  <Link
                    key={link?.id}
                    href={link?.href}
                    className={`relative px-3 cursor-pointer transition-colors text-gray-700 font-medium ${
                      isActive &&
                      "text-teal-600 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-teal-500 after:rounded-full"
                    }`}
                  >
                    {link?.label}
                  </Link>
                );
              })}
            </ul>
          </div>

          {/* Right */}
          <div className="hidden xl:flex gap-4 items-center">
            <div className="w-[400px] px-6 py-3.5 border border-gray-100 rounded-full shadow-md  shadow-black/70">
              <input
                type="text"
                className="block w-full border border-none outline-none"
                placeholder="Search product here...."
              />
            </div>

            <button className="cursor-pointer">
              <UserSvg />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 rounded-md hover:bg-gray-50"
            onClick={() => setIsOpen(s => !s)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <IoMdClose className="text-3xl text-teal-600" />
            ) : (
              <IoMdMenu className="text-3xl text-teal-600" />
            )}
          </button>
        </nav>

        {/* Mobile drawer */}
        <div
          className={`xl:hidden fixed top-0 left-0 h-full w-[78%] max-w-xs bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-5 py-4 flex items-center justify-between border-b">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img
                src="https://i.ibb.co.com/XZ21JXnM/logo.png"
                alt="Logo"
                className="w-[72px] h-auto"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
              className="p-2 rounded-md hover:bg-gray-50"
            >
              <IoMdClose className="text-2xl text-teal-600" />
            </button>
          </div>

          <ul className="p-5 flex flex-col gap-2">
            {navLinks.map(link => {
              const isActive = pathname === link?.href;

              return (
                <Link
                  key={link?.id}
                  href={link?.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-2 py-2.5 rounded-md ${
                    isActive && "text-teal-600"
                  }`}
                >
                  {link?.label}
                </Link>
              );
            })}

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block mt-2 text-center px-4 py-2 rounded-md border border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white transition-colors"
            >
              Sign In
            </Link>
          </ul>
        </div>

        {/* Backdrop */}
        {isOpen && (
          <button
            className="fixed inset-0 bg-black/20 xl:hidden"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu Backdrop"
          />
        )}
      </Container>
    </div>
  );
};

export default B2B2CNavbar;
