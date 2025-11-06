"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const LabelText = ({ children }) => (
  <span className="block text-[#333] text-[16px] md:text-[18px] font-medium">
    {children} <span className="text-red-500">*</span>
  </span>
);

const Input = ({
  label,
  name,
  register,
  rules,
  error,
  placeholder,
  type = "text",
}) => (
  <label className="block">
    <LabelText>{label}</LabelText>
    <input
      type={type}
      placeholder={placeholder}
      aria-required="true"
      {...register(name, rules)}
      className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-[15px] md:text-[16px] text-[#5A5C5F] outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 ${
        error ? "border-red-400" : "border-[#CFCFCF]"
      }`}
    />
    {error && (
      <span className="mt-1 block text-sm text-red-500">{error.message}</span>
    )}
  </label>
);

const Select = ({ label, name, register, rules, error, children }) => (
  <label className="block">
    <LabelText>{label}</LabelText>
    <select
      aria-required="true"
      {...register(name, rules)}
      className={`mt-2 w-full appearance-none rounded-xl border bg-white px-4 py-3 text-[15px] md:text-[16px] text-[#5A5C5F] outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 ${
        error ? "border-red-400" : "border-[#CFCFCF]"
      }`}
    >
      {children}
    </select>
    {error && (
      <span className="mt-1 block text-sm text-red-500">{error.message}</span>
    )}
  </label>
);

export default function AddUserModal({
  onClose,
  onSave,
  roles = ["Accounting", "Sales", "Admin", "Viewer"],
  initialData,
  title,
}) {
  const defaults = initialData ?? {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    role: "", 
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: defaults,
  });

  useEffect(() => {
    reset(defaults);
  }, [initialData, reset]); 

  const onSubmit = (data) => {
    onSave(data);
    onClose?.();
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 pt-6">
        <h3 className="text-2xl font-semibold text-[#333]">{title}</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="px-6 pb-6 pt-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input
            label="First Name"
            name="firstName"
            placeholder="First name"
            register={register}
            rules={{ required: "First name is required" }}
            error={errors.firstName}
          />

          <Input
            label="Last Name"
            name="lastName"
            placeholder="Last name"
            register={register}
            rules={{ required: "Last name is required" }}
            error={errors.lastName}
          />

          <div className="sm:col-span-2">
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="name@example.com"
              register={register}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              }}
              error={errors.email}
            />
          </div>

          <Input
            label="User Name"
            name="username"
            placeholder="username"
            register={register}
            rules={{
              required: "Username is required",
              minLength: { value: 3, message: "At least 3 characters" },
            }}
            error={errors.username}
          />

          <Select
            label="Choose Role"
            name="role"
            register={register}
            rules={{ required: "Role is required" }}
            error={errors.role}
          >
            <option value="" disabled>
              Select a role…
            </option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </Select>
        </div>
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
            disabled={isSubmitting || !isValid}
            className="rounded-xl bg-teal-500 px-6 py-3 text-white hover:bg-teal-600 disabled:opacity-60"
          >
            {isSubmitting ? "Saving..." : "Done"}
          </button>
        </div>
      </form>
    </>
  );
}
