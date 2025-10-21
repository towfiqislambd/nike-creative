"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Container from "../../_components/common/Container";

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Forgot password email:", data);
  };

  return (
    <main>
      <Container>
        <div className="py-10">
          <div className="grid lg:grid-cols-2 xl:gap-38 items-center">
            {/* Left: Form */}
            <div className="xl:p-0 p-5">
              {/* Header */}
              <div className="mb-8">
                <div className="flex flex-col items-center gap-3">
                  <img
                    src="https://i.ibb.co.com/fYWCxw2Y/logo.png"
                    alt="logo"
                    className="h-10 w-auto"
                  />
                  <h4 className="section_title">Forgot Password</h4>
                  <p className="text-sm text-gray-500 text-center max-w-sm">
                    Please provide your registered email address to receive a
                    password reset code.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <Field label="Email Address" error={errors.email?.message}>
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
                </Field>

                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-[15px] rounded-[40px] bg-[#21BBA2] text-white cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Code"}
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Illustration */}
            <div className="p-5 lg:p-0">
              <img
                src="https://i.ibb.co.com/Zztxf4wX/13124789-5156365-1.png"
                alt="Forgot password illustration"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="lavelStyle">{label}</label>}
      {children}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
