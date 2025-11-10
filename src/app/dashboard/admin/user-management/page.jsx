"use client";

import React, { useState } from "react";
import {
  BellIconSvg,
  Correct,
  EditPen,
  Eye,
  Plus,
  PlusBlack,
  RightArrow,
  TrashBin,
  Users,
  WrongIconRed,
} from "../../../../Components/Svg/SvgContainer";
import Image from "next/image";
import profilePicture from "../../../../Assets/profile.svg";
import RolesAndPermissionsCard from "../_components/user-management/RolesAndPermissionsCard";
import AddEditEmployeeModal from "../_components/user-management/AddEditEmployeeModal";
import DeleteModal from "../_components/DeleteModal";
import Link from "next/link";
import { useForm } from "react-hook-form";

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
  const [disabledEmployeeId, setDisabledEmployeeId] = useState(["1", "2"]);

  const [userManagementTab, setUserManagementTab] = useState("employee");

  const [isEmployeeModal, setIsEmployeeModal] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const [editEmployeeIndex, setEditEmployeeIndex] = useState(null);

  const [activeEmployee, setActiveEmployee] = useState({
    id: "1",
    company: "Tech Solutions Inc.",
    email: "dfghdkj@gmail.com",
    role: "Administrator",
    permissions: ["All"],
    status: "Active",
  });

  const {
    register: registerEmployee,
    handleSubmit: handleEmployeeSubmit,
    reset: resetEmployee,
    setValue: setEmployeeValue,
  } = useForm();

  const [employee, setEmployee] = useState([
    {
      id: "1",
      company: "Tech Solutions Inc.",
      email: "dfghdkj@gmail.com",
      role: "Administrator",
      permissions: ["All"],
      status: "Active",
    },
    {
      id: "2",
      company: "Tech Solutions Inc.",
      email: "dfghdkj@gmail.com",
      role: "Manager",
      permissions: ["Order Management", "coupons", "Inventory Workstation"],
      status: "Active",
    },
    {
      id: "3",
      company: "Tech Solutions Inc.",
      email: "dfghdkj@gmail.com",
      role: "Employee",
      permissions: ["Order Management", "Inventory Workstation"],
      status: "Pending",
    },
    {
      id: "4",
      company: "Tech Solutions Inc.",
      email: "dfghdkj@gmail.com",
      role: "Employee",
      permissions: ["Order Management", "Driver App", "Order Management"],
      status: "Active",
    },
    {
      id: "5",
      company: "Tech Solutions Inc.",
      email: "dfghdkj@gmail.com",
      role: "Employee",
      permissions: ["Order Management", "Accounting"],
      status: "Active",
    },
    {
      id: "6",
      company: "Tech Solutions Inc.",
      email: "dfghdkj@gmail.com",
      role: "Employee",
      permissions: ["Order Management", "Inventory Workstation"],
      status: "Active",
    },
  ]);

  const handleEditEmployee = (index) => {
    const e = employee[index];
    setEmployeeValue("company", e.company);
    setEmployeeValue("email", e.email);
    setEmployeeValue("role", e.role);
    setEditEmployeeIndex(index);
    setIsEmployeeModal(true);
  };

  const handleDeleteEmployee = () => {
    setEmployee((prev) => prev.filter((_, i) => i !== deleteIndex));
    setIsDeleteModalOpen(false);
    setDeleteIndex(null);
  };

  const onSubmitEmployee = (data) => {
    if (editEmployeeIndex !== null) {
      const updated = [...employee];
      updated[editEmployeeIndex] = data;
      setEmployee(updated);
      setEditEmployeeIndex(null);
    } else {
      setEmployee([...employee, data, (data.status = "Pending")]);
    }
    resetEmployee();
    setIsEmployeeModal(false);
  };

  const disableEmployee = (eId) => {
    setDisabledEmployeeId((prev) =>
      prev.includes(eId) ? prev.filter((id) => id !== eId) : [...prev, eId]
    );
    employee.eId;
  };

  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] text-[#333] px-2 py-3 sm:p-6 rounded-xl sm:rounded-[40px] border-l-2 border-[#bbb] custom-shadow-xl">
        <nav className="flex max-sm:flex-col items-center justify-between gap-4 pb-5 border-[#555]/50 border-b">
          <div className="flex sm:items-center max-sm:flex-col-reverse w-full gap-5">
            <h1 className="text-lg max-sm:hidden md:text-xl xl:text-2xl 2xl:text-3xl font-medium text-[#333]">
              User Management
            </h1>
            <div className="flex max-w-[474px] w-full sm:gap-5 bg-[#D7D6D7] rounded-[40px] my-4  custom-shadow-xl">
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
            <div className="flex sm:ml-auto items-center justify-between">
              <h1 className="text-lg sm:hidden md:text-xl xl:text-2xl 2xl:text-3xl font-medium text-[#333]">
                User Management
              </h1>
              {/* notification & profile */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 sm:gap-5">
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
                      className="rounded-full max-sm:size-8"
                    />
                    <div className="size-4 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center justify-between gap-2 sm:gap-5 mt-3 sm:mt-5">
          <select
            className="max-sm:basis-1/3 border max-w-[207px] w-full rounded-lg px-2 py-2 md:py-3 xl:py-4 text-xs sm:text-sm xl:text-base"
            required
          >
            <option value="">All Filter</option>
            <option value="">employee</option>
            <option value="">manager</option>
          </select>
          {userManagementTab === "employee" && (
            <button
              onClick={() => {
                resetEmployee();
                setEditEmployeeIndex(null);
                setIsEmployeeModal(true);
              }}
              className="max-sm:basis-2/3 max-w-[300px] bg-[#D7D7D7] hover:bg-[#D7D7D7]/80 inline-flex items-center justify-center px-2 sm:px-4 lg:px-8 py-2 sm:py-4 text-sm sm:text-base lg:text-xl text-primary-text gap-2.5 rounded-[10px] border border-[#F5F4F4]/60 shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07)]"
            >
              Add New Employee <PlusBlack />
            </button>
          )}
        </div>
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
                  <tr
                    key={i}
                    className={`border rounded-lg custom-shadow-xl ${
                      disabledEmployeeId.includes(employee.id) && "opacity-50"
                    }`}
                  >
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
                      {employee?.permissions?.map((permission, index) => (
                        <span key={index}>
                          {permission}
                          <span>
                            {employee?.permissions?.length - 1 == index
                              ? ""
                              : ", "}
                          </span>
                        </span>
                      ))}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {disabledEmployeeId.includes(employee.id)
                        ? "Disabled"
                        : employee?.status}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center ">
                      <div className="flex items-center justify-center gap-2.5">
                        {employee.status == "Pending" ? (
                          <button
                            onClick={() => {
                              setDeleteIndex(i), setIsDeleteModalOpen(true);
                            }}
                            className="bg-[#F34235] hover:bg-[#F34235]/80 size-6 rounded-full flex items-center justify-center"
                          >
                            <WrongIconRed />
                          </button>
                        ) : (
                          <>
                            <button onClick={() => handleEditEmployee(i)}>
                              <EditPen />
                            </button>
                            <button
                              onClick={() => {
                                setDeleteIndex(i), setIsDeleteModalOpen(true);
                              }}
                              className="bg-[#F34235] hover:bg-[#F34235]/80 size-6 rounded-full flex items-center justify-center"
                            >
                              <TrashBin />
                            </button>
                            <button
                              onClick={() => disableEmployee(employee.id)}
                              className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-300 focus:outline-none ${
                                disabledEmployeeId.includes(employee.id)
                                  ? "bg-gray-300"
                                  : "bg-blue-600"
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                                  disabledEmployeeId.includes(employee.id)
                                    ? "translate-x-1"
                                    : "translate-x-6"
                                }`}
                              />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-3 py-3 md:py-5 md:px-[30px] text-center">
                      <div className="flex items-center justify-center gap-2.5">
                        {employee?.permissions?.length}
                        <button
                          onClick={() => setActiveEmployee(employee)}
                          className={`size-[30px] flex items-center justify-center p-[6.5px] rounded-full bg-[#D7D7D7] border border-[#b8b6b6] shadow-[0_4.167px_4.167px_0_rgba(0,0,0,0.25)] ${
                            activeEmployee.id == employee.id && "bg-white"
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
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg xl:text-xl font-medium">
                  {activeEmployee?.role}
                </h3>
              </div>

              <div className="bg-[#E4E3E0] rounded-md p-3">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">{activeEmployee?.company}</p>
                    <Link
                      href={`mailto:${activeEmployee?.email}`}
                      className="underline"
                    >
                      {activeEmployee?.email}
                    </Link>
                  </div>
                  <p>{activeEmployee?.status}</p>
                </div>
                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <p>Permissions:</p>
                  {activeEmployee?.permissions.map((permission, idx) => (
                    <div key={idx}>
                      {permission}
                      {activeEmployee?.permissions.length - 1 == idx
                        ? ""
                        : ", "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
                resetEmployee={resetEmployee}
                setEditEmployeeIndex={setEditEmployeeIndex}
                setIsEmployeeModal={setIsEmployeeModal}
              />
            ))}
          </div>
        </div>
      )}

      {/* add & edit employee modal */}
      <AddEditEmployeeModal
        isOpen={isEmployeeModal}
        onClose={() => setIsEmployeeModal(false)}
        onSubmit={handleEmployeeSubmit(onSubmitEmployee)}
        register={registerEmployee}
        editIndex={editEmployeeIndex}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        type="employee"
        onCancel={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteEmployee}
      />
    </section>
  );
};

export default page;
