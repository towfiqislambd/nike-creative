"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function B2B2CMobileLogin() {
  const { register, handleSubmit } = useForm();
  const [showPass, setShowPass] = useState(false);

  const onSubmit = (data) => {
    console.log("LOGIN DATA:", data);
  };

  return (
    <div
      className="sm:block md:hidden min-h-screen w-full bg-cover bg-center relative flex items-center justify-center px-5 py-10"
      style={{
        backgroundImage: `url("https://i.ibb.co.com/Z6rhHvLv/bg.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full max-w-sm text-white">
        <h1 className="text-center text-[28px] font-semibold leading-[150%]">
          Welcome <br /> To <br /> Nike Creative Studio
        </h1>

        <h2 className="text-center text-[24px] font-semibold leading-[150%] mt-6 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="text-sm font-medium">Email address</label>
            <input
              type="email"
              {...register("email")}
              placeholder="example@gmail.com"
              className="w-full mt-1 px-4 py-3 bg-transparent border border-white/40 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-teal-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>

            <div className="relative mt-1">
              <input
                type={showPass ? "text" : "password"}
                {...register("password")}
                placeholder="••••••••••••••"
                className="w-full px-4 py-3 bg-transparent border border-white/40 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-teal-400"
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
              >
                {showPass ? (
                  <AiOutlineEyeInvisible size={22} />
                ) : (
                  <AiOutlineEye size={22} />
                )}
              </button>
            </div>

            <p className="text-right text-xs mt-1 text-white/70">
              Forgot password?
            </p>
          </div>
          <div>
            <label className="text-sm font-medium">Guest Code</label>
            <input
              type="text"
              {...register("guest")}
              placeholder="Enter guest code"
              className="w-full mt-1 px-4 py-3 bg-transparent border border-white/40 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-teal-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#21BBA2] mt-3 py-3 rounded-full text-white text-lg font-medium active:scale-[0.97] transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
