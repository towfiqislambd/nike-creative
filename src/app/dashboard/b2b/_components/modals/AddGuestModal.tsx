"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Modal from "../../../../../Components/Common/Modal";

const Label = ({ children }) => (
  <span className="block text-[#333] text-[16px] md:text-[18px] font-medium">
    {children}
  </span>
);



export default function AddGuestModal({ open, onClose, onSave }) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      activation: "Indefinite", 
      duration: "7 Days", 
    },
  });


  React.useEffect(() => {
    if (open) {
      reset({
        firstName: "",
        lastName: "",
        address: "",
        activation: "Indefinite",
        duration: "7 Days",
      });
    }
  }, [open, reset]);

  const activation = watch("activation");
  const isTemporary = activation === "Temporary";

  const onSubmit = (data) => {
    // If activation is Indefinite, ignore duration value
    const payload =
      data.activation === "Temporary"
        ? data
        : { ...data, duration: undefined };

    onSave?.(payload);
    onClose?.();
  };

  if (!open) return null;

  return (
    <Modal open={open} onClose={onClose} className="p-0">
      {/* Header */}
      <div className="px-6 pt-6">
        <h3 className="text-2xl font-semibold text-[#333]">Add Guest</h3>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="px-6 pb-6 pt-4">
        {/* First / Last Name */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <Label>First Name</Label>
            <input
              className={`inputCls ${errors.firstName ? "border-red-400" : ""}`}
              placeholder="First name"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <span className="mt-1 block text-sm text-red-500">
                {errors.firstName.message}
              </span>
            )}
          </label>

          <label className="block">
            <Label>Last Name</Label>
            <input
              className={`inputCls ${errors.lastName ? "border-red-400" : ""}`}
              placeholder="Last name"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <span className="mt-1 block text-sm text-red-500">
                {errors.lastName.message}
              </span>
            )}
          </label>
        </div>

        {/* Address */}
        <div className="mt-5">
          <label className="block">
            <Label>Address</Label>
            <input
              className={`inputCls ${errors.address ? "border-red-400" : ""}`}
              placeholder="Street, City, State"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <span className="mt-1 block text-sm text-red-500">
                {errors.address.message}
              </span>
            )}
          </label>
        </div>

        {/* Activation + Duration (conditional) */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <Label>Activation Setting</Label>
            <Controller
              name="activation"
              control={control}
              rules={{ required: "Activation setting is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className={`inputCls appearance-none ${
                    errors.activation ? "border-red-400" : ""
                  }`}
                >
                  <option value="Indefinite">Indefinite</option>
                  <option value="Temporary">Temporary</option>
                </select>
              )}
            />
            {errors.activation && (
              <span className="mt-1 block text-sm text-red-500">
                {errors.activation.message}
              </span>
            )}
          </label>

          {/* Show only when Temporary */}
          {isTemporary ? (
            <label className="block">
              <Label>Duration</Label>
              <select
                className={`inputCls appearance-none ${
                  errors.duration ? "border-red-400" : ""
                }`}
                {...register("duration", {
                  required: isTemporary ? "Duration is required" : false,
                })}
              >
                <option>1 Day</option>
                <option>3 Days</option>
                <option>7 Days</option>
                <option>14 Days</option>
                <option>30 Days</option>
              </select>
              {errors.duration && (
                <span className="mt-1 block text-sm text-red-500">
                  {errors.duration.message}
                </span>
              )}
            </label>
          ) : (
            // Keep grid alignment when Indefinite
            <div className="hidden sm:block" />
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-teal-500 px-6 py-3 text-teal-600 hover:bg-teal-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-teal-500 px-6 py-3 text-white hover:bg-teal-600 disabled:opacity-60"
          >
            {isSubmitting ? "Saving..." : "Done"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
