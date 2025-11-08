"use client";
import {
  B10Svg,
  B11Svg,
  B12Svg,
  B13Svg,
  B14Svg,
  B15Svg,
  B16Svg,
  B17Svg,
  B18Svg,
  B19Svg,
  B1Svg,
  B20Svg,
  B21Svg,
  B22Svg,
  B2Svg,
  B3Svg,
  B4Svg,
  B5Svg,
  B6Svg,
  B7Svg,
  B8Svg,
  B9Svg,
  BasicLogo,
} from "../../Components/Svg/SvgContainer";
import DashboardSidebar from "../../Shared/DashboardSidebar";

const b2bSidebarLinks = [
  {
    id: 1,
    label: "Dashboard",
    icon: <B1Svg />,
    path: "/dashboard/b2b",
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

const adminSidebarLinks = [
  {
    id: 9,
    label: "Dashboard",
    icon: <B1Svg />,
    path: "/dashboard/admin",
  },
  {
    id: 10,
    label: "Orders Management",
    icon: <B2Svg />,
    path: "/dashboard/admin/orders-management",
  },
  {
    id: 11,
    label: "Dispatcher Dashboard",
    icon: <B10Svg />,
    path: "/dashboard/admin/dispatcher",
  },
  {
    id: 12,
    label: "Inventory",
    icon: <B11Svg />,
    path: "/dashboard/admin/inventory",
  },
  {
    id: 13,
    label: "Settings",
    icon: <B12Svg />,
    path: "/dashboard/admin/settings",
    subItems: [
      {
        id: 14,
        label: "Passwords",
        path: "/dashboard/admin/passwords",
        icon: <B13Svg />,
      },
      {
        id: 15,
        label: "Deductions",
        path: "/dashboard/admin/deductions",
        icon: <B14Svg />,
      },
      {
        id: 16,
        label: "Driver App",
        path: "/dashboard/admin/driver-app",
        icon: <B14Svg />,
      },
    ],
  },
  {
    id: 17,
    label: "Installation Analytics",
    icon: <B10Svg />,
    path: "/dashboard/admin/installation-analytics",
  },
  {
    id: 18,
    label: "Coupons",
    icon: <B15Svg />,
    path: "/dashboard/admin/coupons",
  },
  {
    id: 19,
    label: "User Management",
    icon: <B16Svg />,
    path: "/dashboard/admin/user-management",
  },
  {
    id: 20,
    label: "Quote System",
    icon: <B17Svg />,
    path: "/dashboard/admin/quote-system",
  },
  {
    id: 21,
    label: "Manufacture",
    icon: <B10Svg />,
    path: "/dashboard/admin/manufacture",
  },
  {
    id: 22,
    label: "Product Management",
    icon: <B18Svg />,
    path: "/dashboard/admin/project-management",
  },
  {
    id: 23,
    label: "Business Partners",
    icon: <B19Svg />,
    path: "/dashboard/admin/business-partners",
  },
  {
    id: 24,
    label: "Accounting",
    icon: <B19Svg />,
    path: "/dashboard/admin/accounting",
    subItems: [
      {
        id: 25,
        label: "Accounts Receivable",
        path: "/dashboard/admin/account-receivable",
        icon: <B20Svg />,
      },
      {
        id: 26,
        label: "Accounts Payable",
        path: "/dashboard/admin/account-payable",
        icon: <B20Svg />,
      },
      {
        id: 27,
        label: "Bank Account Integration",
        path: "/dashboard/admin/bank-account-integration",
        icon: <B21Svg />,
      },
      {
        id: 28,
        label: "Business Partners ",
        path: "/dashboard/admin/business-partners",
        icon: <B21Svg />,
      },
      {
        id: 29,
        label: "Tax Exemption",
        path: "/dashboard/admin/tax-exemption",
        icon: <B21Svg />,
      },
    ],
  },
  {
    id: 30,
    label: "Visit Site",
    icon: <B22Svg />,
    path: "/dashboard/admin/visit-site",
  },
];

export default function DashboardLayout({ children }) {
  const user = { role: "admin" };

  
  return (
    <section className="flex min-h-screen max-h-screen">
      {/* Sidebar */}
      <DashboardSidebar
        role={user?.role}
        dashboardNavLinks={
          user?.role === "b2b" ? b2bSidebarLinks : adminSidebarLinks
        }
      />

      {/* Outlet */}
      <main className="grow bg-[#EFF3F6] overflow-y-auto p-5">{children}</main>
    </section>
  );
}
