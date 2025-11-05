import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { B9Svg, BasicLogo } from "../Components/Svg/SvgContainer";

const DashboardSidebar = ({ dashboardNavLinks, role }) => {
  const pathname = usePathname();

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
            <Link
              key={link?.path}
              href={link?.path}
              className={`flex gap-2 items-center px-3.5 py-3.5 rounded-lg hover:scale-105 duration-500 transition-transform ${
                isActive
                  ? `text-white shadow-[1px_20px_65px_6px_rgba(19,25,39,0.20)] ${
                      role === "b2b" ? "bg-secondary-blue" : "bg-light-green"
                    }`
                  : "text-primary-text bg-transparent"
              }`}
            >
              {link?.icon}
              {link?.label}
            </Link>
          );
        })}

        <button className="flex gap-2 items-center px-4 py-3.5 rounded-lg hover:scale-105 duration-500 transition-transform text-primary-text bg-transparent cursor-pointer">
          <B9Svg />
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
