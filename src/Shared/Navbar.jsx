"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
// import Container from "@/Components/Common/Container";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const base =
    "relative cursor-pointer transition-colors text-gray-700 font-medium";
  const active =
    "text-teal-600 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-teal-500 after:rounded-full";
  const hover = "hover:text-teal-600";
  const isActive = href => (pathname === href ? active : hover);

  const links = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      {/* <Container> */}
      <nav className="container flex items-center justify-between w-full bg-white mt-6 px-4 sm:px-6 lg:px-10 py-2.5 border border-gray-200 rounded-full shadow-sm">
        <div className="flex items-center gap-10">
          {/* Left: logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://i.ibb.co.com/XZ21JXnM/logo.png"
              alt="Logo"
              className="w-[90px] h-auto cursor-pointer"
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden xl:flex items-center gap-8">
            {links.map(l => (
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

        {/* Desktop Sign in */}
        <div className="hidden xl:block">
          <Link
            href="/login"
            className="border border-teal-500 text-teal-600 px-6 py-2.5 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
          >
            Sign In
          </Link>
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
      {/* </Container> */}

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
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setIsOpen(false)}
                className={`block px-2 py-2.5 rounded-md ${
                  pathname === l.href ? "text-teal-600" : "text-gray-700"
                }`}
                aria-current={pathname === l.href ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}

          <li className="mt-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block text-center px-4 py-2 rounded-md border border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white transition-colors"
            >
              Sign In
            </Link>
          </li>
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
    </div>
  );
}
