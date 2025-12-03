"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function B2B2CForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Forgot password email:", data);
  };

  return (
    <main
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/fYVRrMc6/B2b2c-Login.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-xl bg-white/90 backdrop-blur-sm p-5 rounded-3xl shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-center text-[#333] not-italic leading-[150%] text-[24px] sm:text-[26px]">
            Forgot Password
          </h2>
          <p className="w-[70%] mx-auto text-sm text-gray-500 mt-2">
            Please provide your registered email address to receive a password
            reset code.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
          {/* Email */}
          <div>
            <label className="lavelStyle">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-16 py-[12px] rounded-[40px] bg-[#21BBA2] text-white cursor-pointer hover:bg-[#1aa58e] transition disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Code"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
