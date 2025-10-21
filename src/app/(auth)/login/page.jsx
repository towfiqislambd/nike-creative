"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Container from "../../_components/common/Container";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = (data) => {
    console.log("login submit", data);
  };

  return (
    <main>
      <Container>
        <div className="py-10">
          <div className="grid lg:grid-cols-2 xl:gap-38 items-center">
            <div className="xl:p-0 p-5">
              <div className="mb-8">
                <div className="flex flex-col items-center gap-3">
                  <img
                    src="https://i.ibb.co.com/fYWCxw2Y/logo.png"
                    alt="logo"
                    className="h-10 w-auto"
                  />
                  <h4 className="section_title">Login</h4>
                  <p className="text-sm text-gray-500">
                    Don’t have a account,{" "}
                    <a className="text-[#21BBA2] underline" href="#">
                      Sign up
                    </a>
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <Field
                  label="Username or email address"
                  error={errors.identifier?.message}
                >
                  <input
                    type="text"
                    placeholder="username or email"
                    className="input"
                    {...register("identifier", {
                      required: "Username or email is required",
                    })}
                  />
                </Field>

                <Field label="Password" error={errors.password?.message}>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="input pr-10"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-500 hover:text-gray-700"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </Field>

                <div className="flex items-center justify-between pt-1 pb-2 text-sm">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                      {...register("remember")}
                    />
                    <span className="text-primary-text">Remember me</span>
                  </label>
                  <a href="#" className="text-primary-text hover:underline">
                    Forgot password ?
                  </a>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-[15px] rounded-[40px] bg-[#21BBA2] text-white cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? "Logging in..." : "Log In"}
                  </button>
                </div>

                <p className="text-center text-sm text-primary-text mt-8">
                  Don’t have a account,{" "}
                  <a href="#" className="font-medium text-[#21BBA2] underline">
                    Sign up
                  </a>
                </p>
              </form>
            </div>

            <div className="p-5 lg:p-0">
              <img
                src="https://i.ibb.co.com/SwRHqffX/20824342-6343839-2.png"
                alt="Login illustration"
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
