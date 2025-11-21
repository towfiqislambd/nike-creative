"use client";
import React, { useMemo, useState } from "react";
import AddUserModal from "../_components/modals/AddUserModal";
import { IoSearch } from "react-icons/io5";
import Modal from "../../../../Components/Common/Modal";

export default function UserManagementPage() {
  const ROLES = ["All", "Accounting", "Sales", "Admin", "Viewer"];

  const [users, setUsers] = useState([
    {
      id: "u_1",
      firstName: "Mr.",
      lastName: "Charli Cure",
      email: "gskgfilsadgh@gmail.com",
      username: "charli.cure",
      role: "Accounting",
    },
    {
      id: "u_2",
      firstName: "Mr.",
      lastName: "Charli Cure",
      email: "gskgfilsadgh@gmail.com",
      username: "charli.cure2",
      role: "Sales",
    },
  ]);

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const filtered = useMemo(() => {
    let list = users;
    const q = search.trim().toLowerCase();
    if (q)
      list = list.filter((u) =>
        `${u.firstName} ${u.lastName}`.toLowerCase().includes(q)
      );
    if (roleFilter !== "All") list = list.filter((u) => u.role === roleFilter);
    return list;
  }, [users, search, roleFilter]);

  const openAdd = () => {
    setEditing(null);
    setOpen(true);
  };
  const openEdit = (u) => {
    setEditing(u);
    setOpen(true);
  };
  const removeUser = (id) =>
    setUsers((prev) => prev.filter((u) => u.id !== id));
  const saveUser = (data) => {
    if (editing) {
      setUsers((prev) =>
        prev.map((u) => (u.id === editing.id ? { ...u, ...data } : u))
      );
    } else {
      setUsers((prev) => [...prev, { id: "u_" + Date.now(), ...data }]);
    }
    setOpen(false);
  };

  return (
    <main className="">
      <div className="mb-6">
        <div className="rounded-[20px] xl:rounded-[28px] bg-[#E0DDD7] px-3 py-3 xl:px-4 xl:py-4 shadow-sm relative">
          {/* top row */}
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between xl:gap-4">
            {/* left: search + filter */}
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:gap-6">
              {/* search */}
              <div className="flex items-center rounded-full border border-gray-300 bg-[#E0DDD7] px-3 py-2 xl:px-4 shadow-sm w-full xl:w-auto">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name"
                  className="w-full xl:w-64 bg-transparent text-sm outline-none"
                />
                <span className="ml-2 text-teal-600">
                  <IoSearch />
                </span>
              </div>

              {/* filter */}
              <div className="flex items-center gap-2 text-gray-800 relative">
                <span className="text-[14px] xl:text-[16px]">Filter</span>
                <span
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  🧾
                </span>

                {showDropdown && (
                  <div className="absolute top-8 left-0 xl:top-10 xl:left-16 z-10 bg-white border border-gray-200 rounded-lg shadow-md p-2 w-[180px] xl:w-[160px]">
                    <ul className="flex flex-col gap-1">
                      {ROLES.map((r) => (
                        <li
                          key={r}
                          onClick={() => {
                            setRoleFilter(r);
                            setShowDropdown(false);
                          }}
                          className={`cursor-pointer rounded-md px-4 py-2 text-sm transition ${
                            roleFilter === r
                              ? "bg-gray-200 text-gray-900 font-medium"
                              : "bg-white hover:bg-gray-100 text-gray-700"
                          }`}
                        >
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* right: nav + icons */}
            <div className="flex items-center gap-2 xl:gap-3">
              {/* nav becomes scrollable row under xl */}
              <ul className="hidden md:flex items-center gap-4 xl:gap-8 text-[14px] xl:text-[16px] text-gray-800 overflow-x-auto md:overflow-visible whitespace-nowrap">
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  Home
                </li>
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  Shop
                </li>
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  Category
                </li>
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  About Us
                </li>
              </ul>

              <div className="grid h-9 w-9 xl:h-10 xl:w-10 place-items-center rounded-full bg-[#21BBA2] text-white">
                🛒
              </div>
              <div className="relative h-9 w-9 xl:h-10 xl:w-10 overflow-hidden rounded-full ring-1 ring-black/10">
                <img
                  alt="avatar"
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=120&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0 right-0 h-2 w-2 xl:h-2.5 xl:w-2.5 rounded-full bg-[#71F18E] ring-2 ring-white" />
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="mt-3 h-px w-full bg-black/15" />

          {/* title row */}
          <div className="mt-3 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
            <h1 className="text-[18px] xl:text-[22px] font-semibold text-[#333]">
              User Management
            </h1>

            <button
              onClick={openAdd}
              className="self-start xl:self-auto group flex flex-col items-center"
            >
              <span className="grid h-4 w-4 xl:h-6 xl:w-6 place-items-center rounded-full border border-gray-600 text-gray-800 group-hover:bg-gray-800 group-hover:text-white transition">
                +
              </span>
              <span className="text-[13px] xl:text-[14px] text-gray-700 mt-1">
                Add User
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <section className="pb-16 w-[1400px] 3xl:overflow-x-auto">
          <div className="grid grid-cols-12 mb-2 sm:mb-4 rounded-xl bg-white px-4 py-4 text-sm font-medium text-primary-black">
            <div className="col-span-4 text-center">Name</div>
            <div className="col-span-4 text-center">Email</div>
            <div className="col-span-2 text-center">Role</div>
            <div className="col-span-2 text-center">Action Button</div>
          </div>

          <div className="overflow-hidden  ring-black/10">
            {filtered.map((u) => (
              <div
                key={u.id}
                className="grid grid-cols-12 items-center gap-4 mb-1 sm:mb-4"
              >
                <div className="col-span-4 px-5 py-4.5 bg-white text-sm shadow-lg rounded-l-[8px] truncate">
                  {u.firstName} {u.lastName}
                </div>
                <div className="col-span-4  px-5 py-4.5 bg-white text-sm shadow-lg  truncate">
                  {u.email}
                </div>
                <div className="col-span-2">
                  <span
                    className={`inline-block  px-5 py-4.5 text-center w-full h-full ${
                      u.role === "Accounting"
                        ? "bg-gray-200"
                        : u.role === "Sales"
                        ? "bg-[#DDEAEC]"
                        : "bg-gray-100"
                    }`}
                  >
                    {u.role}
                  </span>
                </div>
                <div className="col-span-2 flex items-center  px-3 py-2 rounded-r-[8px] bg-white justify-center gap-2">
                  <button
                    onClick={() => openEdit(u)}
                    className="rounded-md bg-[#DDEAEC] px-3 py-2 text-gray-800 hover:opacity-90"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeUser(u.id)}
                    className="rounded-md bg-[#DDEAEC] px-3 py-2 text-gray-800 hover:opacity-90"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="bg-white px-4 py-8 text-center text-sm text-gray-500">
                No users found.
              </div>
            )}
          </div>
        </section>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} className="p-0">
        <AddUserModal
          onClose={() => setOpen(false)}
          onSave={saveUser}
          roles={ROLES.filter((r) => r !== "All")}
          title={editing ? "Edit User" : "Add User"}
          initialData={
            editing || {
              firstName: "",
              lastName: "",
              email: "",
              username: "",
              role: "Accounting",
            }
          }
        />
      </Modal>
    </main>
  );
}
