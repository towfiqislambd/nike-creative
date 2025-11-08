"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../../../Components/Common/Modal";

const Input = ({ label, name, register, rules, error, ...rest }) => (
  <label className="block">
    <span className="block text-[#333] text-[16px] md:text-[18px] font-medium">{label}</span>
    <input
      {...register(name, rules)}
      {...rest}
      className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-[15px] md:text-[16px] text-[#5A5C5F] outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 ${error ? "border-red-400" : "border-[#CFCFCF]"}`}
    />
    {error && <span className="mt-1 block text-sm text-red-500">{error.message}</span>}
  </label>
);

const Select = ({ label, name, register, rules, error, children }) => (
  <label className="block">
    <span className="block text-[#333] text-[16px] md:text-[18px] font-medium">{label}</span>
    <select
      {...register(name, rules)}
      className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-[15px] md:text-[16px] text-[#5A5C5F] outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 ${error ? "border-red-400" : "border-[#CFCFCF]"}`}
    >
      {children}
    </select>
    {error && <span className="mt-1 block text-sm text-red-500">{error.message}</span>}
  </label>
);

export default function AddEditQuoteModal ({
  open,
  onClose,
  onSubmitQuote,    
  mode = "add",    
  initialData = {}, 
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      quoteBy: "",
      company: "",
      description: "",
      date: "",
      price: "",
      status: "Pending",
      attach: false,
      ...initialData,
    },
  });


  useEffect(() => {
    if (open) {
      reset({
        quoteBy: "",
        company: "",
        description: "",
        date: "",
        price: "",
        status: "Pending",
        attach: true,
        ...initialData,
      });
    }
  }, [open, initialData, reset]);

  const onSubmit = (data) => {
    onSubmitQuote?.(data);
    onClose?.();
  };

  return (
    <Modal open={open} onClose={onClose} className="p-0">

      <div className="flex items-center justify-between px-6 pt-6">
        <h3 className="text-2xl font-semibold text-[#333]">
          {mode === "edit" ? "Edit Quote" : "Add Quote"}
        </h3>
      </div>


      <form onSubmit={handleSubmit(onSubmit)} className="px-6 pb-6 pt-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input
            label="Quote# (By)"
            name="quoteBy"
            placeholder="Jacky"
            register={register}
            rules={{ required: "Required" }}
            error={errors.quoteBy}
          />
          <Input
            label="Company"
            name="company"
            placeholder="Nexus Enterprises"
            register={register}
            rules={{ required: "Required" }}
            error={errors.company}
          />
          <div className="sm:col-span-2">
            <Input
              label="Description"
              name="description"
              placeholder="Custom CRM software build request.."
              register={register}
              rules={{ required: "Required" }}
              error={errors.description}
            />
          </div>
          <Input
            label="Date"
            name="date"
            type="date"
            register={register}
            rules={{ required: "Required" }}
            error={errors.date}
          />
          <Input
            label="Price"
            name="price"
            placeholder="$561.00 or Pending"
            register={register}
            rules={{ required: "Required" }}
            error={errors.price}
          />
          <Select
            label="Status"
            name="status"
            register={register}
            rules={{ required: "Required" }}
            error={errors.status}
          >
            <option value="Pending">Pending</option>
            <option value="Received">Received</option>
            <option value="Sent">Sent</option>
            <option value="Accepted">Accepted</option>
            <option value="Order Placed">Order Placed</option>
          </Select>


          <label className="flex items-center gap-3 sm:col-span-2">
            <input type="checkbox" {...register("attach")} className="h-5 w-5" />
            <span className="text-[16px] text-[#333]">Has Attachment</span>
          </label>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-teal-500 px-6 py-3 text-white hover:bg-teal-600 disabled:opacity-60"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
