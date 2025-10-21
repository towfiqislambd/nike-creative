"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function B2B2CResetPasswordPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showNew, setShowNew] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const newPassword = watch("password");

  const onSubmit = (data) => {
    console.log("Reset password data:", data);
  };

  return (
    <main
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/fYVRrMc6/B2b2c-Login.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-3xl bg-white/90 backdrop-blur-sm px-16 py-12 rounded-3xl shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-center text-[#333] not-italic font-normal leading-[150%] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]">
            Reset Your Password
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Enter a new password to continue using your account.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="lavelStyle">Enter New Password</label>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                placeholder="••••••••"
                className="input pr-10"
                {...register("password", {
                  required: "New password is required",
                  minLength: { value: 8, message: "At least 8 characters" },
                })}
              />
              <button
                type="button"
                onClick={() => setShowNew((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label={showNew ? "Hide password" : "Show password"}
              >
                {showNew ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="lavelStyle">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                className="input pr-10"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (v) => v === newPassword || "Passwords must match",
                })}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label={showConfirm ? "Hide password" : "Show password"}
              >
                {showConfirm ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-[100px] py-[18px] rounded-[40px] bg-[#21BBA2] text-white cursor-pointer hover:bg-[#1aa58e] transition disabled:opacity-70"
            >
              {isSubmitting ? "Resetting..." : "Rest Password"}
            </button>
          </div>
        </form>
      </div>

    </main>
  );
}
