"use client";
import { usePathname } from "next/navigation";
import {
  B1Svg,
  B2Svg,
  B3Svg,
  B4Svg,
  B5Svg,
  B6Svg,
  B7Svg,
  B8Svg,
  B9Svg,
  BasicLogo,
} from "../../../Components/Svg/SvgContainer";
import Link from "next/link";

const b2bSidebarLinks = [
  {
    id: 1,
    label: "Dashboard",
    icon: <B1Svg />,
    path: "/dashboard/b2b/home",
  },
  {
    id: 2,
    label: "Orders",
    icon: <B2Svg />,
    path: "/dashboard/b2b/orders",
  },
  {
    id: 3,
    label: "Catalog",
    icon: <B3Svg />,
    path: "/dashboard/b2b/catalog",
  },
  {
    id: 4,
    label: "Coupons",
    icon: <B4Svg />,
    path: "/dashboard/b2b/coupons",
  },
  {
    id: 5,
    label: "Account Details",
    icon: <B5Svg />,
    path: "/dashboard/b2b/account-details",
  },
  {
    id: 6,
    label: "User Management",
    icon: <B6Svg />,
    path: "/dashboard/b2b/user-management",
  },
  {
    id: 7,
    label: "Guest Code",
    icon: <B7Svg />,
    path: "/dashboard/b2b/guest-code",
  },
  {
    id: 8,
    label: "Notification system",
    icon: <B8Svg />,
    path: "/dashboard/b2b/notification-system",
  },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const user = null;

  return (
    <section className="flex min-h-screen max-h-screen">
      {/* Sidebar */}
      <aside className="shadow-[-12px_37px_65px_6px_rgba(19,25,39,0.20)] bg-white border border-[#F2F2F2] px-5 py-6 w-[290px] shrink-0">
        {/* Logo */}
        <figure className="w-fit mx-auto mb-10">
          <BasicLogo />
        </figure>

        {/* Nav Links */}
        <div className="space-y-5">
          {b2bSidebarLinks?.map(link => {
            const isActive = pathname === link?.path;

            return (
              <Link
                key={link?.path}
                href={link?.path}
                className={`flex gap-2 items-center px-4 py-3.5 rounded-lg hover:scale-105 duration-500 transition-transform ${isActive
                    ? "text-white bg-secondary-blue shadow-[1px_20px_65px_6px_rgba(19,25,39,0.20)]"
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

      {/* Outlet */}
      <main className="grow bg-[#EFF3F6] overflow-y-auto p-5">{children}</main>
    </section>
  );
}
