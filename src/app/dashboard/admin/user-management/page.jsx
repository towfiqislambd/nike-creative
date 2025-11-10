"use client";

import React, { useState } from "react";
import {
  BellIconSvg,
  Correct,
  EditPen,
  Eye,
  Plus,
  RightArrow,
  TrashBin,
  Users,
  WrongIconRed,
} from "../../../../Components/Svg/SvgContainer";
import Image from "next/image";
import profilePicture from "../../../../Assets/profile.svg";
import RolesAndPermissionsCard from "../_components/RolesAndPermissionsCard";
import Link from "next/link";
import DeleteModal from "../_components/DeleteModal";

const RolesAndPermissions = [
  {
    title: "Order Management",
    description: "Access to view and manage customer orders.",
  },
  {
    title: "Inventory Workstation",
    description: "Access to the inventory and workstation module.",
  },
  {
    title: "Accounting",
    description: "Access to financial reports and invoicing.",
  },
  {
    title: "Coupons",
    description: "Access to create and manage discount codes.",
  },
  {
    title: "Driver App",
    description: "Access to the driver app and delivery management.",
  },
];

const page = () => {
  const [userManagementTab, setUserManagementTab] = useState("employee");

  const [activeButtonId, setActiveButtonId] = useState(1);

  const [employee, setEmployee] = useState([
    {
      company: "Tech Solutions Inc.",
      email: "dfghdkj@gmail.com",
      role: "Administrator",
      permissions: ["All"],
      status: "Active",
    },
    {
      company: "Tech Solutions Inc.",
      email: "dfghdkj@gmail.com",
      role: "Manager",
      permissions: ["Order Management", "coupons"],
      status: "Disabled",
    },
    {
      company: "Tech Solutions Inc.",
      email: "dfghdkj@gmail.com",
      role: "Employee",
      permissions: ["Order Management"],
      status: "Active",
    },
    {
      company: "Tech Solutions Inc.",
      email: "dfghdkj@gmail.com",
      role: "Employee",
      permissions: ["Order Management"],
      status: "Active",
    },
    {
      company: "Tech Solutions Inc.",
      email: "dfghdkj@gmail.com",
      role: "Employee",
      permissions: ["Order Management"],
      status: "Active",
    },
    {
      company: "Tech Solutions Inc.",
      email: "dfghdkj@gmail.com",
      role: "Employee",
      permissions: ["Order Management"],
      status: "Active",
    },
  ]);
  const [users, setUsers] = useState([
    {
      fullName: "Tech Solutions Inc.",
      phone: "+1 123 147 2589",
      email: "fhsahfs@gmail.com",
      userRole: "Main Account",
    },
    {
      fullName: "Johnathan",
      phone: "+1 123 147 2589",
      email: "fhsahfs@gmail.com",
      userRole: "Accounting",
    },
    {
      fullName: "Johnathan",
      phone: "+1 123 147 2589",
      email: "fhsahfs@gmail.com",
      userRole: "Sales",
    },
  ]);

  // const handleEditEmployee = (employee, index) => {
  //   setSelectedClient(client);
  //   setEditClientIndex(index);
  //   setIsEditClientModalOpen(true);
  // };

  const handleDeleteEmployee = (index) => {
    setEmployee((prev) => prev.filter((_, i) => i !== index));
  };

  const grouped = users.reduce((acc, user) => {
    acc[user.userRole] = acc[user.userRole] || [];
    acc[user.userRole].push(user);
    return acc;
  }, {});

  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] text-[#333] p-6 rounded-[40px] border-l-2 border-[#bbb] custom-shadow-xl">
        <nav className="flex items-center justify-between gap-4 pb-5 border-[#555]/50 border-b">
          <div className="flex items-center w-full gap-5">
            <h1 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium text-[#333]">
              User Management
            </h1>
            <div className="flex max-w-[474px] w-full gap-5 bg-[#D7D6D7] rounded-[40px] my-4  custom-shadow-xl">
              <button
                onClick={() => setUserManagementTab("employee")}
                className={`flex-1 py-3 md:py-4 lg:py-6 rounded-[40px] text-[13px] md:text-sm xl:text-xl transition ${
                  userManagementTab === "employee"
                    ? "bg-[#21BBA2] text-white border border-[#EAEAEA] custom-shadow-xl"
                    : "hover:bg-gray-200"
                }`}
              >
                Employee
              </button>
              <button
                onClick={() => setUserManagementTab("rolesAndPermissions")}
                className={`flex-1 py-3 md:py-4 lg:py-6 rounded-[40px] text-[13px] md:text-sm xl:text-xl transition ${
                  userManagementTab === "rolesAndPermissions"
                    ? "bg-[#21BBA2] text-white border border-[#EAEAEA] custom-shadow-xl"
                    : "hover:bg-gray-200"
                }`}
              >
                Roles & Permissions
              </button>
            </div>
          </div>
          {/* notification & profile */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-5">
              <button className="relative">
                <BellIconSvg className="text-[#F34235]" />
                <div className="size-5 text-white bg-[#F34235] rounded-full flex items-center justify-center text-xs absolute -top-1.5 -right-1.5 border-2 border-[#e4e3e0]">
                  2
                </div>
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
      </header>
      {userManagementTab === "employee" && (
        <div className="flex gap-5 mt-[18px]">
          <div className="max-w-[1058px] w-full overflow-x-auto px-2">
            <table className="w-full text-[#333] border-spacing-y-3 border-separate">
              <thead className="rounded-lg font-normal text-sm border custom-shadow-xl">
                <tr className="rounded-lg border">
                  <th className="px-3 py-3 md:py-5">Company & Email</th>
                  <th className="px-3 py-3 md:py-5">Role</th>
                  <th className="px-3 py-3 md:py-5">Permissions</th>
                  <th className="px-3 py-3 md:py-5">Status</th>
                  <th className="px-3 py-3 md:py-5">Actions</th>
                  <th className="px-3 py-3 md:py-5 flex items-center justify-center">
                    <Users />
                  </th>
                </tr>
              </thead>
              <tbody>
                {employee.map((employee, i) => (
                  <tr key={i} className="border rounded-lg custom-shadow-xl">
                    <td className="px-3 py-3 md:py-5 text-center">
                      <div>
                        <p>{employee.company}</p>
                        <p>{employee.email}</p>
                      </div>
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {employee.role}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {employee.permissions.map((permission, index) => (
                        <span key={index}>
                          {permission}
                          <span>
                            {employee.permissions.length - 1 == index
                              ? ""
                              : ", "}
                          </span>
                        </span>
                      ))}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {employee.status}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center flex items-center justify-center gap-2.5">
                      <button onClick={() => handleEditEmployee(employee, i)}>
                        <EditPen />
                      </button>
                      <button
                        onClick={() => handleDeleteEmployee(i)}
                        className="bg-[#F34235] hover:bg-[#F34235]/80 size-7 rounded-full flex items-center justify-center"
                      >
                        <TrashBin />
                      </button>
                    </td>
                    <td className="px-3 py-3 md:py-5 md:px-[30px] text-center">
                      <div className="flex items-center justify-center gap-2.5">
                        {employee.permissions.length}
                        <button
                          onClick={() => (
                            setClientsDetails(employee),
                            setActiveButtonId(employee.id)
                          )}
                          className={`size-[30px] flex items-center justify-center p-[6.5px] rounded-full bg-[#D7D7D7] border border-[#b8b6b6] shadow-[0_4.167px_4.167px_0_rgba(0,0,0,0.25)] ${
                            activeButtonId == employee.id && "bg-white"
                          }`}
                        >
                          <RightArrow />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {employee.length === 0 && (
                  <tr>
                    <td colSpan="8" className="text-center text-gray-400 py-6">
                      No employee yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div
            className={`bg-white custom-shadow-xl rounded-lg p-5 transition ease-in-out duration-500 delay-300 space-y-5 w-full max-w-md mt-3`}
          >
            {Object.entries(grouped).map(([role, group], idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg xl:text-xl font-medium">{role}</h3>
                </div>

                <div className="space-y-3">
                  {group.map((user, i) => (
                    <div key={i} className="bg-[#E4E3E0] rounded-md p-3">
                      <div className="flex items-center justify-between mb-2.5">
                        <p className="font-medium">{user.fullName}</p>
                        <Link href={`tell:${user.phone}`} className="underline">
                          {user.phone}
                        </Link>
                      </div>
                      <div className="flex items-center justify-between">
                        <Link
                          href={`mailto:${user.mail}`}
                          className="underline"
                        >
                          {user.email}
                        </Link>
                        <button
                          onClick={() => handleEdit(user)}
                          className="text-gray-600 hover:text-teal-600"
                        >
                          <EditPen />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {userManagementTab === "rolesAndPermissions" && (
        <div className="w-full px-2 mt-5">
          <h2 className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-medium text-[#333]">
            Manage Page Access for Employees & Managers
          </h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3">
            {RolesAndPermissions.map(({ title, description }) => (
              <RolesAndPermissionsCard
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      )}

      {/* add & edit employee modal */}
      {/* add and edit component */}
      

      {/* <DeleteModal
        isOpen={modalOpen}
        type="employee"
        onCancel={() => setModalOpen(false)}
        onConfirm={confirmDelete}
      /> */}
    </section>
  );
};

export default page;
