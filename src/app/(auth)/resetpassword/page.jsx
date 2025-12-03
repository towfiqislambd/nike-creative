"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function ResetPasswordPage() {
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
    console.log("reset password", data);
  };

  return (
    <main className="w-full min-h-screen flex justify-center bg-white">
      {/*  */}
      <div className="py-10 container">
        <div className="grid lg:grid-cols-2 xl:gap-38 items-center">
          <div className="xl:p-0 p-5">
            <div className="mb-8">
              <div className="flex flex-col items-center gap-3 text-center">
                <img
                  src="https://i.ibb.co.com/fYWCxw2Y/logo.png"
                  alt="logo"
                  className="h-10 w-auto"
                />
                <h4 className="section_title">Reset Your Password</h4>
                <p className="text-sm text-gray-500">
                  Enter a new password to continue using your account.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="lavelStyle">Enter New Password</label>
                <div className="relative">
                  <input
                    type={showNew ? "text" : "password"}
                    placeholder="••••••••"
                    className="input pr-10"
                    {...register("password", {
                      required: "New password is required",
                      minLength: {
                        value: 8,
                        message: "At least 8 characters",
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-500 hover:text-gray-700"
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
                      validate: (v) =>
                        v === newPassword || "Passwords must match",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-500 hover:text-gray-700"
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
                  className="w-full py-[15px] rounded-[40px] bg-[#21BBA2] text-white cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? "Resetting..." : "Rest Password"}
                </button>
              </div>
            </form>
          </div>

          <div className="p-5 lg:p-0">
            <img
              src="https://i.ibb.co.com/QjF2Wqvz/20824341-6368590-2.png"
              alt="Reset password illustration"
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
      {/*  */}
    </main>
  );
}
