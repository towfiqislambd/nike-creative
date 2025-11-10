"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function AddEditUserModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      company: "",
      userRole: "Main Account",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    } else {
      reset({
        fullName: "",
        phone: "",
        email: "",
        company: "",
        userRole: "Main Account",
      });
    }
  }, [initialData, reset, onSubmit]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white px-8 py-5 rounded-[20px] w-full max-w-[523px] relative custom-shadow-xl"
      >
        <h2 className="card_title mb-5">
          {initialData ? "Edit User" : "Add User"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="text-md xl:text-base">Full Name</label>
              <input
                {...register("fullName", { required: "Full name is required" })}
                className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-xs"
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="text-md xl:text-base">Phone number</label>
              <input
                {...register("phone", { required: "Phone number is required" })}
                className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-xs"
                placeholder="+123 456 7890"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="text-md xl:text-base">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-xs"
                placeholder="example@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="text-md xl:text-base">User Role</label>
              <select
                {...register("userRole")}
                className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-xs"
              >
                <option>Main Account</option>
                <option>Accounting</option>
                <option>Sales</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4">
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
              {initialData ? "Update User" : "Add User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
