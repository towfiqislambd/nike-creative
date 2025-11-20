"use client";
import React, { useState } from "react";

export default function PasswordsPage() {
  const [form, setForm] = useState({
    installNoteDelete: "4566",
    rescheduleNoteDelete: "4566",
    cancelOrder: "4566",
    editOrder: "4566",
    addOrder: "4566",
    inventoryDelete: "4566",
  });

  const onChange = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Password keys saved:", form);
    alert("Saved (check console)");
  };

  const Label = ({ children }) => (
    <span className="block text-[#5A5C5F] text-[15px] mb-2">{children}</span>
  );
  const Input = (props) => (
    <input
      {...props}
      className="w-full rounded-lg border border-[#E5E5E5] bg-white p-3 text-[#333] outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
    />
  );

  return (
<>
      <div className="mb-3">
        <div className="relative rounded-xl md:rounded-[20px] bg-[#E0DDD7] px-4 py-2.5 border-l-2 border-[#bbb] shadow-[0_2px_0_0_rgba(0,_0,_0,_0.25)]">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <h1 className="dashboard_title">
              Account Details
            </h1>

            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10">
                <img
                  alt="avatar"
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=120&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#21BBA2] ring-2 ring-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
          <section className="px-4 md:px-6 lg:px-8">
      <h1 className="dashboard_title">
        Passwords
      </h1>
      <div className="mt-3 h-[2px] w-full bg-black/10" />
      <form
        onSubmit={onSubmit}
        className="mt-5 rounded-2xl border border-black/10 bg-white p-4 md:p-6 lg:p-7 shadow-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          <div>
            <Label>Installation Note Delete Key</Label>
            <Input
              value={form.installNoteDelete}
              onChange={onChange("installNoteDelete")}
              placeholder="Enter key"
            />
          </div>

          <div>
            <Label>Re-Scheduled Note Delete Key</Label>
            <Input
              value={form.rescheduleNoteDelete}
              onChange={onChange("rescheduleNoteDelete")}
              placeholder="Enter key"
            />
          </div>

          <div>
            <Label>Cancel Order password Key</Label>
            <Input
              value={form.cancelOrder}
              onChange={onChange("cancelOrder")}
              placeholder="Enter key"
            />
          </div>

          <div>
            <Label>Edit Order password Key</Label>
            <Input
              value={form.editOrder}
              onChange={onChange("editOrder")}
              placeholder="Enter key"
            />
          </div>

          <div>
            <Label>Add Order password Key</Label>
            <Input
              value={form.addOrder}
              onChange={onChange("addOrder")}
              placeholder="Enter key"
            />
          </div>

          <div>
            <Label>Inventory Delete Key</Label>
            <Input
              value={form.inventoryDelete}
              onChange={onChange("inventoryDelete")}
              placeholder="Enter key"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              setForm({
                installNoteDelete: "",
                rescheduleNoteDelete: "",
                cancelOrder: "",
                editOrder: "",
                addOrder: "",
                inventoryDelete: "",
              })
            }
            className="rounded-xl border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50"
          >
            Clear
          </button>
          <button
            type="submit"
            className="rounded-xl bg-[#21BBA2] px-6 py-3 text-white hover:bg-[#1aa58e]"
          >
            Save
          </button>
        </div>
      </form>
    </section>
</>
  );
}
