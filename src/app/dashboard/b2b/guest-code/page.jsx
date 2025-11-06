"use client";
import React, { useMemo, useState } from "react";
import AddGuestModal from "../_components/modals/AddGuestModal";
import { IoSearch } from "react-icons/io5";
import Modal from "../../../../Components/Common/Modal";

export default function GuestCode() {
  const STATUS = [
    "All",
    "Ready To Order",
    "Awaiting Design",
    "Ready to Paint",
    "Received",
    "Delivered",
  ];

  const bgcolors = ["#E8F1F8", "#E6F4EF", "#B0D7E9"];

  const [users, setUsers] = useState([
    {
      id: 1,
      customerName: "MR. Charli Cure",
      product: {
        name: "DSFGSD2",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        poNumber: "DSFGSD2",
        orderNumber: "DSFGSD2",
        color: { span: "Black", hex: "#1F1F1F" },
      },
      status: "Ready To Order",
      expiresInDays: "Expires in 25 days",
      actions: ["Place Order", "Edit", "Delete"],
    },
    {
      id: 2,
      customerName: "MS. Amina Patel",
      product: {
        name: "TR-Window Pro 36",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        poNumber: "TRW-00981",
        orderNumber: "ORD-55231",
        color: { span: "White", hex: "#FFFFFF" },
      },
      status: "Received",
      expiresInDays: "Indefinite",
      actions: ["Place Order", "Edit", "Delete"],
    },
    {
      id: 3,
      customerName: "Mr. Lucas Andrade",
      product: {
        name: "ClearView Panel L",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        poNumber: "CVP-20344",
        orderNumber: "ORD-20344",
        color: { span: "Graphite", hex: "#3A3A3A" },
      },
      status: "Awaiting Design",
      expiresInDays: "Expires in 25 days",
      actions: ["Place Order", "Edit", "Delete"],
    },
    {
      id: 4,
      customerName: "Mrs. Naomi Chen",
      product: {
        name: "EcoFrame Slim",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        poNumber: "EFS-77120",
        orderNumber: "ORD-77120",
        color: { span: "Aluminum", hex: "#A9A9A9" },
      },
      status: "Ready to Paint",
      expiresInDays: "Expires in 25 days",
      actions: ["Place Order", "Edit", "Delete"],
    },
    {
      id: 5,
      customerName: "MR. Diego Romero",
      product: {
        name: "FrostLite Door S",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        poNumber: "FLD-11872",
        orderNumber: "ORD-11872",
        color: { span: "Charcoal", hex: "#2B2B2B" },
      },
      status: "Delivered",
      expiresInDays: "Expires in 25 days",
      actions: ["Place Order", "Edit", "Delete"],
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const filtered = useMemo(() => {
    let list = users;
    const q = search.trim().toLowerCase();
    if (q)
      list = list.filter((u) => `${u.customerName}`.toLowerCase().includes(q));
    if (statusFilter !== "All")
      list = list.filter((u) => u.status === statusFilter);
    return list;
  }, [users, search, statusFilter]);

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

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <main className="min-h-screen">
      <div className="mb-6">
        <div className="rounded-[28px] bg-[#E0DDD7] px-4 py-4 shadow-sm relative">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name"
                  className="w-64 bg-transparent text-sm outline-none"
                />
                <span className="ml-2 text-teal-600">
                  <IoSearch />
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-800 relative">
                <span className="text-[16px]">Filter</span>
                <span
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  🧾
                </span>

                {showDropdown && (
                  <div className="absolute top-10 left-16 z-10 bg-white border border-gray-200 rounded-lg shadow-md p-2 w-[200px]">
                    <ul className="flex flex-col gap-1">
                      {STATUS.map((r) => (
                        <li
                          key={r}
                          onClick={() => {
                            setStatusFilter(r);
                            setShowDropdown(false);
                          }}
                          className={`cursor-pointer rounded-md px-4 py-2 text-sm transition ${
                            statusFilter === r
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

            <div className="flex items-center gap-5">
              <ul className="hidden md:flex items-end gap-8 text-[16px] text-gray-800">
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

              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#21BBA2] text-white">
                🛒
              </div>
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10">
                <img
                  alt="avatar"
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=120&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#71F18E] ring-2 ring-white" />
              </div>
            </div>
          </div>

          <div className="mt-3 h-px w-full bg-black/15" />

          <div className="mt-3 flex items-center justify-between">
            <h1 className="text-[28px] font-semibold text-[#333]">
              Guest Access Management
            </h1>

            <button
              onClick={openAdd}
              className="group flex flex-col items-center"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gray-600 text-gray-800 group-hover:bg-gray-800 group-hover:text-white transition">
                +
              </span>
              <span className="text-[14px] text-gray-700 mt-1">Add Guest</span>
            </button>
          </div>
        </div>
      </div>
      <section className="pb-16">
        <div className="grid grid-cols-12 mb-4 rounded-xl bg-white px-4 py-4 text-sm font-medium text-primary-black">
          <div className="col-span-2 text-center">Name</div>
          <div className="col-span-3 text-center">Product</div>
          <div className="col-span-2 text-center">Status</div>
          <div className="col-span-2 text-center">Activation</div>
          <div className="col-span-3 text-center">Action Button</div>
        </div>

        <div className="overflow-hidden  ring-black/10">
          {filtered.map((u, index) => (
            <div
              key={u.id}
              className="grid grid-cols-12 items-stretch gap-4 mb-4"
            >
              <div className="col-span-2">
                <div className="h-full justify-center px-5 py-4.5 bg-white text-sm shadow-lg rounded-l-[8px] truncate flex items-center">
                  {u.customerName}
                </div>
              </div>
              <div className="col-span-3">
                <div className="h-full bg-white shadow-lg ">
                  <div className="h-full flex items-center gap-4 p-4.5">
                    <img
                      src={u.product.image}
                      alt={u.product.name}
                      className="h-20 w-20 rounded-xl object-cover ring-1 ring-black/10"
                    />
                    <div className="flex-1 space-y-1.5 min-w-0">
                      <div className="flex text-sm items-center gap-2">
                        <span>Product Name:</span>
                        <span>{u.product.name}</span>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="flex text-sm items-center gap-2">
                          <span>PO:</span>
                          <span>{u.product.poNumber}</span>
                        </div>
                        <div className="flex text-sm items-center gap-2">
                          <span>Order:</span>
                          <span>{u.product.orderNumber}</span>
                        </div>
                      </div>

                      <div className="flex text-sm items-center gap-2">
                        <span>Color:</span>
                        <div className="flex items-center gap-2">
                          <span
                            className="inline-block h-3.5 w-3.5 rounded-full ring-1 ring-black/10"
                            style={{ backgroundColor: u.product.color.hex }}
                            aria-label={u.product.color.label}
                            title={u.product.color.label}
                          />
                          <span>{u.product.color.label}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div
                  className="h-full px-5 py-4.5 text-sm shadow-lg truncate flex items-center justify-center"
                  style={{ backgroundColor: bgcolors[index % bgcolors.length] }}
                >
                  {u.status}
                </div>
              </div>
              <div className="col-span-2">
                <div className="h-full px-5 py-4.5 bg-white text-sm shadow-lg truncate flex items-center justify-center">
                  {u.expiresInDays}
                </div>
              </div>
              <div className="col-span-3">
                <div className="h-full flex items-center px-3 py-2 rounded-r-[8px] bg-white justify-center gap-2 shadow-lg">
                  <button
                    className="rounded-md bg-[#DDEAEC] px-3 py-2 text-gray-800 hover:opacity-90"
                    onClick={() => {
                      setSelectedItem(u);
                      setConfirmOpen(true);
                    }}
                  >
                    Place Order
                  </button>
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
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="bg-white px-4 py-8 text-center text-sm text-gray-500">
              No users found.
            </div>
          )}
        </div>
      </section>
      <Modal open={open} onClose={() => setOpen(false)} className="p-0">
        <AddGuestModal
          open={open}
          onClose={() => setOpen(false)}
          onSave={(data) => {
            console.log("Guest saved:", data);
          }}
        />
      </Modal>

      <Modal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        className="p-0"
      >
        <div className="px-6 pb-2 pt-4 text-center text-gray-700">
          {selectedItem ? (
            <p>
              Are you sure you want to place the order for{" "}
              <span className="font-medium">{selectedItem.product?.name}</span>?
            </p>
          ) : (
            <p>Are you sure you want to place the order?</p>
          )}
        </div>
        <div className="flex items-center justify-center mt-5 gap-3 px-6 pb-6 pt-2">
          <button
            onClick={() => setConfirmOpen(false)}
            className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            No
          </button>
          <button
            onClick={() => {
              console.log("YES — will navigate next", selectedItem);
              setConfirmOpen(false);
            }}
            className="rounded-xl bg-[#21BBA2] px-6 py-3 text-white hover:bg-[#1aa58e]"
          >
            Yes
          </button>
        </div>
      </Modal>
    </main>
  );
}
