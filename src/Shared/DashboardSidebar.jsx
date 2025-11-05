"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { B9Svg, BasicLogo } from "../Components/Svg/SvgContainer";

const DashboardSidebar = ({ dashboardNavLinks, role }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = id => {
    setOpenDropdown(prev => (prev === id ? null : id));
  };

  return (
    <aside
      className={`border border-gray-200 px-5 py-6 w-[290px] shrink-0 overflow-y-auto side-scrollbar m-3.5 rounded-xl shadow-xl ${
        role === "b2b" ? "bg-white" : "bg-accent-off-white"
      }`}
    >
      {/* Logo */}
      <figure className="w-fit mx-auto mb-10">
        <BasicLogo />
      </figure>

      {/* Nav Links */}
      <div className="space-y-5">
        {dashboardNavLinks?.map(link => {
          const isActive = pathname === link?.path;

          return (
            <div key={link?.id}>
              <button
                onClick={() =>
                  link?.subItems ? toggleDropdown(link.id) : null
                }
                className={`w-full flex items-center justify-between px-3.5 py-3.5 rounded-lg hover:scale-105 duration-500 transition-transform cursor-pointer ${
                  isActive
                    ? `${
                        role === "b2b"
                          ? "bg-secondary-blue text-white shadow-[1px_20px_65px_6px_rgba(19,25,39,0.20)]"
                          : "bg-accent-off-white [box-shadow:0_5px_8px_1px_rgba(0,0,0,0.20),0_0_0.225px_0.225px_rgba(0,0,0,0.07),0_0_0.225px_0_rgba(0,0,0,0.05),0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                      }`
                    : "text-primary-text bg-transparent"
                }`}
              >
                <span className="flex items-center gap-2">
                  {link?.icon}
                  {!link?.subItems ? (
                    <Link href={link.path} className="w-full text-left block">
                      {link?.label}
                    </Link>
                  ) : (
                    link?.label
                  )}
                </span>

                {link?.subItems && (
                  <span className="text-xs">
                    {openDropdown === link.id ? "▲" : "▼"}
                  </span>
                )}
              </button>

              {/* Sub Items */}
              {link?.subItems && openDropdown === link.id && (
                <div className="ml-8 mt-1 space-y-2">
                  {link.subItems.map(sub => {
                    const isSubActive = pathname === sub.path;

                    return (
                      <Link
                        key={sub.id}
                        href={sub.path}
                        className={`flex gap-2 items-center px-2 py-2 text-sm rounded-md hover:scale-105 transition-transform ${
                          isSubActive
                            ? role === "b2b"
                              ? "bg-secondary-blue text-white"
                              : "bg-accent-off-white [box-shadow:0_5px_8px_1px_rgba(0,0,0,0.20),0_0_0.225px_0.225px_rgba(0,0,0,0.07),0_0_0.225px_0_rgba(0,0,0,0.05),0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                            : "text-primary-text"
                        }`}
                      >
                        {sub.icon}
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        {/* Logout */}
        <button className="flex gap-2 items-center px-4 py-3.5 rounded-lg hover:scale-105 duration-500 transition-transform text-primary-text bg-transparent cursor-pointer">
          <B9Svg />
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
