"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function B2B2CLoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = (data) => {
    console.log("login data", data);
  };

  return (
    <main
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/fYVRrMc6/B2b2c-Login.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full max-w-3xl bg-white/90 backdrop-blur-sm p-7 rounded-3xl shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-center text-[#333] not-italic font-normal leading-[150%] text-[24px] sm:text-[28px]">
            Welcome to Nike Creative Studio
          </h2>
          <h3 className="text-lg md:text-2xl xl:text-3xl text-gray-700 font-semibold mt-2">Login</h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="lavelStyle">Username or email address</label>
            <input
              type="text"
              placeholder="Enter your username or email"
              className="input"
              {...register("identifier", {
                required: "Username or email is required",
              })}
            />
            {errors.identifier && (
              <p className="text-red-500 text-sm mt-1">
                {errors.identifier.message}
              </p>
            )}
          </div>

          <div>
            <label className="lavelStyle">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="input pr-10"
                {...register("password", { required: "Password is required" })}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
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
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-[#21BBA2] hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <label className="lavelStyle">Guest Code</label>
            <input
              type="text"
              placeholder="Enter guest code"
              className="input"
              {...register("guestCode", { required: "Guest code is required" })}
            />
            {errors.guestCode && (
              <p className="text-red-500 text-sm mt-1">
                {errors.guestCode.message}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-25 py-[15px] rounded-[40px] bg-[#21BBA2] text-white font-medium hover:bg-[#1aa58e] transition disabled:opacity-70"
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
