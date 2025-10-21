"use client";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import Container from "../../_components/common/Container";


export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  const onSubmit =  (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <main className="">
      <Container>
        <div className="py-10">
          <div className="grid xl:gap-38 lg:grid-cols-2">
            <div className="xl:p-0 p-5">
              <div className="mb-8">
                <div className="flex flex-col items-center gap-2 text-2xl font-semibold">
                  <img
                    src="https://i.ibb.co.com/fYWCxw2Y/logo.png"
                    alt="logo"
                    className=""
                  />
                  <h4 className="section_title">Sign Up</h4>
                  <p className="mt-2 text-sm text-gray-500">
                    Lets have these fields
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                {/* Company Name */}
                <Field
                  label="Company Name"
                  className="placeholder"
                  error={errors.companyName?.message}
                >
                  <input
                    type="text"
                    placeholder="Enter.."
                    className="input"
                    {...register("companyName", {
                      required: "Company name is required",
                    })}
                  />
                </Field>

                {/* Address Row */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Field label="Street Address" error={errors.street?.message}>
                    <input
                      type="text"
                      placeholder="Enter.."
                      className="input"
                      {...register("street", {
                        required: "Street address is required",
                      })}
                    />
                  </Field>
                  <Field label="Town/City" error={errors.city?.message}>
                    <input
                      type="text"
                      placeholder="Enter.."
                      className="input"
                      {...register("city", { required: "City is required" })}
                    />
                  </Field>
                  <Field label="Postcode/Zip" error={errors.postcode?.message}>
                    <input
                      type="text"
                      placeholder="Enter.."
                      className="input"
                      {...register("postcode", {
                        required: "Postcode is required",
                      })}
                    />
                  </Field>
                </div>

                {/* Phone */}
                <Field label="Phone number" error={errors.phone?.message}>
                  <div className="flex gap-2">
                    <select
                      className=" px-1 py-[11px] rounded-lg border border-[#CFCFCF] w-24"
                      {...register("countryCode")}
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                      <option value="+880">+880</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="123 456 7890"
                      className="input "
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                  </div>
                </Field>

                {/* Email */}
                <Field label="Email Address" error={errors.email?.message}>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="input"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                </Field>

                {/* Username */}
                <Field label="User Name" error={errors.username?.message}>
                  <input
                    type="text"
                    placeholder="username"
                    className="input"
                    {...register("username", {
                      required: "Username is required",
                      minLength: { value: 3, message: "Min 3 characters" },
                    })}
                  />
                </Field>

                {/* Passwords Row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Password" error={errors.password?.message}>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="input pr-10"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "At least 8 characters",
                          },
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
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    </div>
                  </Field>

                  <Field
                    label="Confirm Password"
                    error={errors.confirmPassword?.message}
                  >
                    <div className="relative">
                      <input
                        type={showConfirm ? "text" : "password"}
                        placeholder="••••••••"
                        className="input pr-10"
                        {...register("confirmPassword", {
                          required: "Confirm your password",
                          validate: (v) =>
                            v === password || "Passwords must match",
                        })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm((s) => !s)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-500 hover:text-gray-700"
                        aria-label={
                          showConfirm ? "Hide password" : "Show password"
                        }
                      >
                        {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    </div>
                  </Field>
                </div>

                {/* Optional accounting email */}
                <Field
                  label="Email for accounting (optional)"
                  error={errors.accountingEmail?.message}
                >
                  <input
                    type="email"
                    placeholder="accounting@example.com"
                    className="input"
                    {...register("accountingEmail")}
                  />
                </Field>

                {/* Consent */}
                <div className="flex items-start gap-3 text-sm">
                  <input
                    id="consent"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-900"
                    {...register("consent", {
                      required: "You must accept to continue",
                    })}
                  />
                  <label htmlFor="consent" className="text-gray-600">
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our{" "}
                    <a href="#" className="text-[#4BCDE4] underline">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-sm text-red-600">
                    {String(errors.consent.message)}
                  </p>
                )}

                {/* Submit */}
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-[100px] py-[18px] rounded-[40px] bg-[#21BBA2] text-white cursor-pointer"
                  >
                    {isSubmitting ? "Registering..." : "REGISTER"}
                  </button>
                </div>

                <p className="text-center text-sm text-primary-text mt-10">
                  Already have an account?{" "}
                  <a href="#" className="font-medium text-[#21BBA2] underline">
                    Log in
                  </a>
                </p>
              </form>
            </div>

            <div className="">
              <div className="">
                <img
                  src="https://i.ibb.co.com/rKmNHn3X/Frame-1707481283.png"
                  alt="Sign up illustration"
                  className=" w-full object-contain"
                />
              </div>
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


