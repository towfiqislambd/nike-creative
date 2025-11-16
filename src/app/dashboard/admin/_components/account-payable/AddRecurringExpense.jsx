import React from "react";
import Modal from "../../../../../Components/Common/Modal";
import { useForm } from "react-hook-form";

const AddRecurringExpense = ({ open, onClose, categories, suppliers }) => {
  const { register, handleSubmit, reset } = useForm();

  const onFormSubmit = (data) => {
    // console.log(data);
    reset();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="card_title">Add Recurring Expense</h2>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="grid grid-cols-2 gap-5"
      >
        <div className="flex flex-col gap-2.5 col-span-2 md:col-span-1">
          <label className="card_label">Expense Name</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Expense Name"
            className="card_input"
          />
        </div>
        <div className="flex flex-col gap-2.5 col-span-2 md:col-span-1">
          <label className="card_label">Due Day of Month</label>
          <input type="date" {...register("date")} className="card_input" />
        </div>
        <div className="flex flex-col gap-2.5 col-span-2 md:col-span-1">
          <label className="card_label">Amount (if fixed)</label>
          <input
            type="text"
            {...register("amount")}
            placeholder="123.23"
            className="card_input"
          />
        </div>
        <div className="flex flex-col gap-2.5 col-span-2 md:col-span-1">
          <label className="card_label">Expense Type</label>

          <div className="flex items-center gap-6 mt-1 text-base md:text-xl">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="Fixed"
                {...register("paymentMethod", { required: true })}
                className="size-4 md:size-7 cursor-pointer"
              />
              <span>Fixed</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="Variable"
                {...register("paymentMethod", { required: true })}
                className="size-4 md:size-7 cursor-pointer"
              />
              <span>Variable</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 col-span-2 md:col-span-1">
          <label className="card_label">Payment Method</label>

          <div className="flex items-center gap-6 mt-1 text-base md:text-xl">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="Manual"
                {...register("paymentMethod", { required: true })}
                className="size-4 md:size-7 cursor-pointer"
              />
              <span>Manual</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="Automatic"
                {...register("paymentMethod", { required: true })}
                className="size-4 md:size-7 cursor-pointer"
              />
              <span>Automatic</span>
            </label>
          </div>
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
          <label className="card_label">Supplier/Vendor</label>
          <select {...register("supplier")} className="card_input">
            <option>Select Supplier</option>
            {suppliers.map((sup) => (
              <option key={sup} value={sup}>
                {sup}
              </option>
            ))}
          </select>
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

export default AddRecurringExpense;
