"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";

export default function B2BNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { label: "Home", href: "/b2b" },
    { label: "Shop", href: "/shop" },
    { label: "Category", href: "/category" },
    { label: "Contact Us", href: "/contact" },
    { label: "About Us", href: "/about" },
  ];

  const base =
    "relative cursor-pointer transition-colors text-gray-800 font-medium";
  const active =
    "text-teal-500 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-teal-500 after:rounded-full";
  const hover = "hover:text-teal-500";
  const isActive = (href) => (pathname === href ? active : hover);

  return (
    <header className="sticky top-5 mt-6 left-0 w-full z-50">
      <nav className="container flex items-center justify-between bg-white px-4 sm:px-6 lg:px-10 py-2.5 border border-gray-200 rounded-full shadow-sm">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-8">
          <div className="">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="https://i.ibb.co.com/kgbHnySB/kutde-logo-1.png"
                alt="Logo"
                className="w-[80px] h-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Center Section: Links */}
          <ul className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`${base} ${isActive(l.href)}`}
                  aria-current={pathname === l.href ? "page" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Right Section: Search + Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center bg-gray-50 border border-gray-300 rounded-full px-3 py-2 w-[260px]">
            <input
              type="text"
              placeholder="Search product here..."
              className="bg-transparent outline-none w-full text-gray-700 text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m2.6-6.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <button className="p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition">
            <FaShoppingCart size={16} />
          </button>

          <button className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
            <FaRegLightbulb size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoMdClose className="text-2xl text-teal-600" />
          ) : (
            <IoMdMenu className="text-2xl text-teal-600" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-[75%] bg-white z-40 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <img
            src="https://i.ibb.co.com/kgbHnySB/kutde-logo-1.png"
            alt="Logo"
            className="w-[70px]"
          />
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose className="text-2xl text-teal-600" />
          </button>
        </div>

        <ul className="p-5 flex flex-col gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-gray-700 ${
                  pathname === l.href ? "text-teal-600 font-semibold" : ""
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
