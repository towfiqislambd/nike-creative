import React, { useState } from "react";
import Modal from "../../../../../Components/Common/Modal";
import { useForm } from "react-hook-form";
import { FiUploadCloud } from "react-icons/fi";
import { X } from "lucide-react";

const AddNewExpense = ({ open, onClose, onSubmit, categories, suppliers }) => {
  const [imagePreview, setImagePreview] = useState("");
  const { register, handleSubmit, reset } = useForm();

  const onFormSubmit = (data) => {
    // console.log(data);
    reset();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };
  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="card_title">Add New Expense</h2>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="grid grid-cols-2 gap-5"
      >
        <div className="flex flex-col gap-2.5 col-span-2 md:col-span-1">
          <label className="card_label">Expense Description</label>
          <input
            type="text"
            {...register("description")}
            placeholder="Expense Description"
            className="card_input"
          />
        </div>
        <div className="flex flex-col gap-2.5 col-span-2 md:col-span-1">
          <label className="card_label">Amount ($)</label>
          <input
            type="text"
            {...register("amount")}
            placeholder="123.23"
            className="card_input"
          />
        </div>
        <div className="flex flex-col gap-2.5 col-span-2 md:col-span-1">
          <label className="card_label">Date</label>
          <input type="date" {...register("date")} className="card_input" />
        </div>
        <div className="flex flex-col gap-2.5 col-span-2 md:col-span-1">
          <label className="card_label">Category</label>
          <select {...register("category")} className="card_input">
            <option>Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2.5 col-span-2 md:col-span-1">
          <label className="card_label">Provider/Company</label>
          <select {...register("provider")} className="card_input">
            <option>Select Provider</option>
            {suppliers.map((sup) => (
              <option key={sup} value={sup}>
                {sup}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2.5 col-span-2">
          <label className="card_label">Note</label>
          <textarea
            rows="3"
            {...register("note")}
            className="card_input !py-1 !text-base"
            placeholder="Note..."
          ></textarea>
        </div>
        <div className="flex flex-col gap-2.5 col-span-2">
          <label className="card_label">Upload Receipt</label>
          <label
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => setImagePreview(reader.result);
                reader.readAsDataURL(file);
              }
            }}
            htmlFor="imageUpload"
            className="border-2 border-dashed bg-gradient-to-r from-[#F9FCFF] to-[#E3F2FD]/40 border-gray-300 rounded-[20px] flex flex-col items-center justify-center h-40 cursor-pointer"
          >
            {imagePreview ? (
              <div className="relative w-full h-full flex justify-center items-center">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => setImagePreview("")}
                  className="absolute top-2 right-2 bg-white rounded-full shadow-md p-1 text-red-500 hover:text-red-700"
                  title="Remove image"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white border border-[#EAECF0] w-10 h-10 rounded-[10px] flex items-center justify-center mb-3">
                  <FiUploadCloud className="text-[#6B7280] text-xl" />
                </div>
                <p className="sm:text-lg text-sub-text">
                  Click to upload or drag and drop
                </p>
              </div>
            )}
            <input
              id="imageUpload"
              type="file"
              {...register("receiptFile")}
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="flex justify-end gap-3 mt-4 col-span-2">
          <button type="button" onClick={onClose} className="card_btn_outline">
            Cancel
          </button>
          <button type="submit" className="card_btn">
            Add Expense
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddNewExpense;
