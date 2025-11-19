"use client";
import Image from "next/image";
import React, { useState } from "react";
import profilePicture from "../../../../Assets/profile.svg";
import Link from "next/link";
import {
  Cart,
  EditPen,
  TrashBin,
} from "../../../../Components/Svg/SvgContainer";
import { PlusSignCircle } from "../../../../Components/Svg/SvgContainer2";
import DeleteModal from "../../../../Components/Common/DeleteModal";
import RecipientModal from "../_components/notification-system/RecipientModal";

const navItems = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "Shop",
    link: "#",
  },
  {
    label: "Category",
    link: "#",
  },
  {
    label: "Contact Us",
    link: "#",
  },
  {
    label: "About US",
    link: "#",
  },
];

const page = () => {
  const [recipients, setRecipients] = useState([
    {
      name: "Charli Cures",
      email: "sfglsdlzx@gmail.com",
      enabled: false,
    },
    {
      name: "Charli Cures",
      email: "sfglsdlzx@gmail.com",
      enabled: true,
    },
    {
      name: "Charli Cures",
      email: "sfglsdlzx@gmail.com",
      enabled: true,
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    setEditIndex(null);
    setModalOpen(true);
  };

  const handleSave = (data) => {
    if (editIndex !== null) {
      const updated = [...recipients];
      updated[editIndex] = { ...updated[editIndex], ...data };
      setRecipients(updated);
    } else {
      setRecipients([...recipients, { ...data, enabled: true }]);
    }
  };

  // toggle enable/disable
  const handleToggle = (index) => {
    const updated = [...recipients];
    updated[index].enabled = !updated[index].enabled;
    setRecipients(updated);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setModalOpen(true);
  };

  const handleDelete = (index) => {
    setEditIndex(index);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setRecipients(recipients.filter((_, i) => i !== editIndex));
    setDeleteModalOpen(false);
  };

  return (
    <section className="text-primary-text w-full relative">
      {/* header */}
      <header className="bg-[#E4E3E0] p-2 md:p-3 rounded-2xl md:rounded-[20px] border-l-2 border-[#bbb] custom-shadow-xl">
        <nav className="flex max-[425px]:flex-col items-center justify-end gap-4 pb-2 border-[#555]/50 border-b">
          <div className="flex items-center gap-5 w-full justify-end">
            <div className="flex justify-center gap-3 md:gap-5">
              {navItems?.map(({ label, link }, idx) => (
                <Link
                  key={idx}
                  href={link}
                  className="text-sm md:text-base text-[#333] hover:text-[#21BBA2] transition"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <button className="bg-[#21BBA2] hover:bg-[#21BBA2]/80 shrink-0 rounded-full size-9 p-2 flex items-center justify-center cursor-pointer">
                <Cart />
              </button>
              <div className="relative shrink-0 cursor-pointer">
                <Image
                  src={profilePicture}
                  width={42}
                  height={42}
                  alt=""
                  className="rounded-full"
                />
                <div className="size-3.5 rounded-full border-[3px] border-white bg-green-500 absolute -bottom-0.5 -right-0.5" />
              </div>
            </div>
          </div>
        </nav>

        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-lg md:text-xl xl:text-2xl font-medium">
            Notification system
          </h2>
          <button
            onClick={handleAdd}
            className="flex flex-col items-center hover:text-primary-text/80"
          >
            <PlusSignCircle />
            <p className="max-sm:text-sm">Add Recipient</p>
          </button>
        </div>
      </header>
      <div className="p-4 md:px-5 ounded-xl md:rounded-[20px] bg-white max-w-fit mt-5 pb-5 md:pb-10 shadow-[0_30px_65px_6px_rgba(19,25,39,0.11)]">
          <h3 className="card_title">Manage Notification Recipients</h3>
          <p className="text-sub-text xl:text-lg 2xl:text-xl">
            Add or edit recipients to control who receives notifications.
          </p>
          <hr className="my-5 text-[#55555580]" />
          <div className="w-full overflow-x-auto px-1">
            <table className="border-spacing-y-1.5 sm:border-spacing-y-2.5 border-separate w-[820px]">
              <thead className="rounded-lg custom-shadow-xl">
                <tr className="rounded-lg border bg-white border-[#E6E8E5]">
                  <th className="px-3 py-3 md:py-5 font-medium rounded-tl-lg">
                    Enable
                  </th>
                  <th className="px-3 py-3 md:py-5 font-medium">Name</th>
                  <th className="px-3 py-3 md:py-5 font-medium">Email</th>
                  <th className="px-3 py-3 md:py-5 font-medium rounded-tr-lg">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {recipients.map((r, i) => (
                  <tr
                    key={i}
                    className="border border-[#E6E8E5] custom-shadow-xl bg-white xl:text-lg 2xl:text-xl"
                  >
                    <td className="px-3 py-3 md:py-5 text-center">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={r.enabled}
                          onChange={() => handleToggle(i)}
                          className="hidden"
                        />
                        <div
                          className={`w-11 h-6 rounded-full relative transition-colors ${
                            r.enabled ? "bg-blue-600" : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-full transition-transform ${
                              r.enabled ? "translate-x-5" : ""
                            }`}
                          ></div>
                        </div>
                      </label>
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      {r.name || "-"}
                    </td>
                    <td className="px-3 py-3 md:py-5 text-center">{r.email}</td>
                    <td className="px-3 py-3 md:py-5 text-center">
                      <div className="flex items-center justify-center gap-2.5">
                        <button onClick={() => handleEdit(i)}>
                          <EditPen />
                        </button>
                        <button
                          onClick={() => handleDelete(i)}
                          className="bg-[#F34235] hover:bg-[#F34235]/80 size-7 rounded-full flex items-center justify-center"
                        >
                          <TrashBin />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {recipients.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center py-6 text-gray-400">
                      No recipients added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        <RecipientModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          initialData={editIndex !== null ? recipients[editIndex] : null}
        />

        <DeleteModal
          isOpen={deleteModalOpen}
          type="recipient"
          onCancel={() => setDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      </div>
    </section>
  );
};

export default page;
