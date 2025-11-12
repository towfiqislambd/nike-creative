"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import DeleteModal from "../../../../../Components/Common/DeleteModal";
import { TrashBin } from "../../../../../Components/Svg/SvgContainer";

const RolesAndPermissionsCard = ({
  title,
  description,
  resetEmployee,
  setEditEmployeeIndex,
  setIsEmployeeModal,
}) => {
  const [entries, setEntries] = useState([
    "Tech Solutions Inc",
    "Tech Solutions Inc",
    "Tech Solutions Inc",
    "Tech Solutions Inc",
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  // const { register, handleSubmit, reset } = useForm();

  // const onSubmit = (data) => {
  //   if (data.employee?.trim()) {
  //     setEntries((prev) => [...prev, data.employee.trim()]);
  //     reset();
  //   }
  // };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    setEntries((prev) => prev.filter((_, i) => i !== deleteIndex));
    setModalOpen(false);
    setDeleteIndex(null);
  };

  return (
    <div className="bg-white rounded-[16px] shadow py-5 px-4 w-full">
      <h2 className="text-xl 2xl:text-2xl mb-1.5">{title}</h2>
      <p className="text-gray-500 text-sm mb-3">{description}</p>

      <div className="grid md:grid-cols-2 gap-2.5 mb-2.5">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="bg-[#EFF3F6] text-[#5A5C5F] text-sm rounded-lg flex justify-between items-center px-3 py-2"
          >
            <span className="truncate">{entry}</span>
            <button
              onClick={() => handleDeleteClick(index)}
              className="size-5 flex items-center justify-center bg-[#F34235] rounded-full shrink-0"
            >
              <TrashBin className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <form>
        <input
          onClick={() => {
            resetEmployee();
            setEditEmployeeIndex(null);
            setIsEmployeeModal(true);
          }}
          placeholder="Add employee or manager..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#21BBA2]"
        />
      </form>

      <DeleteModal
        isOpen={modalOpen}
        type="employee"
        onCancel={() => setModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default RolesAndPermissionsCard;
