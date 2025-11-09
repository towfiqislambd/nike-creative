"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const AddEditCouponModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      couponCode: "",
      discountPercent: "",
      expiryDate: "",
      allowedUser: "",
      discountType: "Fixed product discount",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset({
        couponCode: "",
        discountPercent: "",
        expiryDate: "",
        allowedUser: "",
        discountType: "Fixed product discount",
      });
    }
  }, [initialData, reset]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white px-8 py-5 rounded-[16px] w-full max-w-[730px] relative shadow-lg">
        <h3 className="card_title">
          {initialData ? "Edit Coupon" : "Add Coupon"}
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="block text-base xl:text-xl">Coupon Code</label>
              <input
                {...register("couponCode", { required: "Required" })}
                className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
                placeholder="Enter code"
              />
              {errors.couponCode && (
                <p className="text-red-500 text-xs">
                  {errors.couponCode.message}
                </p>
              )}
            </div>

            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="block text-base xl:text-xl">Discount %</label>
              <input
                type="number"
                {...register("discountPercent", { required: "Required" })}
                className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
                placeholder="Enter discount %"
              />
            </div>

            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="block text-base xl:text-xl">
                Expiration Date
              </label>
              <input
                type="date"
                {...register("expiryDate", { required: "Required" })}
                className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
              />
            </div>

            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="block text-base xl:text-xl">Allowed User</label>
              <input
                {...register("allowedUser", { required: "Required" })}
                className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-xl"
                placeholder="e.g. Nike shoes"
              />
            </div>
          </div>

          <div className="flex justify-end gap-5 mt-5">
            <button
              type="button"
              onClick={onClose}
              className="bg-white border border-[#21BBA2] text-[#21BBA2] lg:text-lg px-5 py-4 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#21BBA2] border border-[#21BBA2] text-white lg:text-lg px-5 py-4 rounded-lg"
            >
              {initialData ? "Save Changes" : "Add Coupon"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditCouponModal;
