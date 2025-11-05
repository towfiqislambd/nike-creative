"use client";

import { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white border border-neutral-200 rounded-lg p-5 md:p-6 ${className}`}
  >
    {children}
  </div>
);

const Label = ({ children, htmlFor, className = "" }) => (
  <label htmlFor={htmlFor} className={`labelCls mb-1 ${className}`}>
    {children}
  </label>
);

const Input = (props) => (
  <input {...props} className={`inputCls ${props.className || ""}`} />
);

const Toggle = ({ checked, onChange }) => (
  <button
    type="button"
    aria-pressed={checked}
    onClick={() => onChange(!checked)}
    className={`h-6 w-10 rounded-full transition-colors ${
      checked ? "bg-emerald-500" : "bg-neutral-300"
    } relative`}
  >
    <span
      className={`absolute top-0.5 left-0 h-5 w-5 rounded-full bg-white transition-transform ${
        checked ? "translate-x-5" : "translate-x-0.5"
      }`}
    />
  </button>
);

const FileDrop = ({ onFiles, files }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    onFiles(Array.from(e.dataTransfer.files || []));
  };
  const handlePick = (e) => onFiles(Array.from(e.target.files || []));
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="rounded-lg border border-dashed border-neutral-300 bg-gradient-to-b from-white to-neutral-50/60 p-6 text-center"
    >
      <div className="mx-auto mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 bg-white">
        <IoCloudUploadOutline className="text-xl text-neutral-600" />
      </div>
      <p className="text-sm text-neutral-700">
        Click to upload or drag and drop
      </p>
      <input
        type="file"
        multiple
        className="hidden"
        id="fileInput"
        onChange={handlePick}
      />
      <div className="mt-3">
        <label
          htmlFor="fileInput"
          className="inline-block cursor-pointer rounded-md border border-neutral-300 px-3 py-1.5 text-xs hover:bg-neutral-50"
        >
          Browse files
        </label>
      </div>
      {files?.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-neutral-700">
          {files.map((f, i) => (
            <li key={i} className="truncate">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 mr-2 align-middle" />
              {f.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function AccountPage() {
  const [docs, setDocs] = useState([
    {
      name: "tax exception cdoc.pdf",
      expirationDate: "09/25/2025",
      updateDate: "09/25/2025",
    },
  ]);
  const fileInputRef = useRef(null);

  function getTodayMMDDYYYY() {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  }
  function buildDocFromFile(file) {
    const today = getTodayMMDDYYYY();
    return { name: file.name, expirationDate: today, updateDate: today };
  }
  function openPicker() {
    fileInputRef.current?.click();
  }
  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setDocs((prev) => [...prev, buildDocFromFile(file)]);
    e.target.value = "";
  }
  function formatMMDDYYYY(date) {
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${mm}/${dd}/${yyyy}`;
  }

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      displayName: "",
      email: "",
      accountingEmail: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      companyType: "Dealer",
      dealerCompany: "",
      orderBy: "",
      phone: "",
      country: "",
      street: "",
      city: "",
      zip: "",
      taxExemptEnabled: false,
      taxFiles: [],
      notif_newInvoices: false,
      notif_readyForPayment: false,
      notif_paymentCompleted: false,
      notif_pendingStatements: false,
      notif_productAvailability: true,
      notif_channel: "",
    },
  });

  const taxEnabled = watch("taxExemptEnabled");
  const taxFiles = watch("taxFiles");
  const addTaxFiles = (files) => {
    const merged = [...(taxFiles || []), ...files];
    setValue("taxFiles", merged, { shouldValidate: true });
  };

  const onSubmit = (values) => {
    console.log("SUBMIT PAYLOAD", values);
  };

  const enabled = watch("taxExemptEnabled");
  const files = watch("taxFiles") || [];
  const availEnabled = !!watch("notif_productAvailability");
  const chWhatsApp = !!watch("notif_channel_whatsapp");
  const chPhone = !!watch("notif_channel_phone");
  const updateDisabled = availEnabled && !chWhatsApp && !chPhone;

  return (
    <div className="min-h-screen bg-neutral-50 py-8 px-4 md:px-6">
      <div className="mb-6">
        <div className="rounded-[28px] bg-[#E0DDD7] px-4 py-4 shadow-sm relative">
          <div className="flex flex-col gap-4 md:flex-row md:items-end justify-end">
          
            <div className="flex items-center gap-5">
              <ul className="hidden md:flex items-end gap-8 text-[16px] text-gray-800">
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  Home
                </li>
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  Shop
                </li>
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  Category
                </li>
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:text-teal-600 transition-colors">
                  About Us
                </li>
              </ul>

              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#21BBA2] text-white">
                🛒
              </div>
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10">
                <img
                  alt="avatar"
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=120&auto=format&fit=crop"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#71F18E] ring-2 ring-white" />
              </div>
            </div>
          </div>

          <div className="mt-3 h-px w-full bg-black/15" />

          <div className="mt-3 flex items-center justify-between">
            <h1 className="text-[28px] font-semibold text-[#333]">
               Account Details
            </h1>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Personal Info
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  {...register("displayName", {
                    required: "Display name is required",
                  })}
                />
                {errors.displayName && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.displayName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  {...register("currentPassword", {
                    required: "Current password is required",
                  })}
                />
                {errors.currentPassword && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.currentPassword.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  {...register("newPassword", {
                    required: "New password is required",
                  })}
                />
                {errors.newPassword && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (v) =>
                      v === watch("newPassword") || "Passwords must match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="accountingEmail">Email for accounting</Label>
                <Input
                  id="accountingEmail"
                  type="email"
                  {...register("accountingEmail", {
                    required: "Accounting email is required",
                    pattern: {
                      value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.accountingEmail && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.accountingEmail.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="companyType">Company Type</Label>
                <select
                  id="companyType"
                  {...register("companyType", {
                    required: "Company type is required",
                  })}
                  className="inputCls"
                >
                  <option value="">Select type</option>
                  <option>Dealer</option>
                  <option>Retailer</option>
                  <option>Distributor</option>
                </select>
                {errors.companyType && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.companyType.message}
                  </p>
                )}
              </div>
                          <div>
              <Label htmlFor="dealerCompany">Dealer Company</Label>
              <Input
                id="dealerCompany"
                {...register("dealerCompany", {
                  required: "Dealer company is required",
                })}
                placeholder="Company name"
              />
              {errors.dealerCompany && (
                <p className="text-xs text-red-600 mt-1">
                  {errors.dealerCompany.message}
                </p>
              )}
            </div>
            </div>



            <div className="rounded-2xl bg-white shadow-xl ring-1 my-6 ring-black/5 p-6">
              <div className="space-y-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4"
                    {...register("notif_newInvoices")}
                  />
                  <div>
                    <p className="text-sm font-medium">New Invoices</p>
                    <p className="text-xs text-neutral-500">
                      Receive an email when a new invoice is generated after
                      placing an order.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4"
                    {...register("notif_readyForPayment")}
                  />
                  <div>
                    <p className="text-sm font-medium">
                      Product Ready for Payment
                    </p>
                    <p className="text-xs text-neutral-500">
                      Get notified when your product has been
                      installed/delivered and is ready for payment.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4"
                    {...register("notif_paymentCompleted")}
                  />
                  <div>
                    <p className="text-sm font-medium">Payment Completed</p>
                    <p className="text-xs text-neutral-500">
                      Receive an invoice confirming your payment has been
                      processed.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4"
                    {...register("notif_pendingStatements")}
                  />
                  <div>
                    <p className="text-sm font-medium">
                      Pending Payment Statements
                    </p>
                    <p className="text-xs text-neutral-500">
                      Receive account statements for outstanding items.
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4"
                    {...register("notif_productAvailability")}
                  />
                  <div>
                    <p className="text-sm font-medium">Product availability</p>
                    <p className="text-xs text-neutral-500">
                      Click here if you’d like us to follow up while the product
                      for your design is not yet available, so we can notify you
                      and schedule the installation once it’s ready.
                    </p>
                  </div>
                </label>


                <div
                  aria-hidden={!availEnabled}
                  className={`pl-8 transition-all duration-300 ease-out ${
                    availEnabled ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="flex items-center gap-6 pt-2">
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        {...register("notif_channel_whatsapp", {
                          validate: (v) =>
                            !availEnabled ||
                            v ||
                            watch("notif_channel_phone") ||
                            "Select at least one channel",
                        })}
                      />
                      <span className="text-sm">WhatsApp</span>
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        {...register("notif_channel_phone", {
                          validate: (v) =>
                            !availEnabled ||
                            v ||
                            watch("notif_channel_whatsapp") ||
                            "Select at least one channel",
                        })}
                      />
                      <span className="text-sm">Phone</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    className="rounded-md border border-neutral-300 px-4 py-2 text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-emerald-500 px-4 py-2 text-white text-sm hover:bg-emerald-600 disabled:opacity-50"
                    disabled={updateDisabled}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </Card>


          <Card>
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              Company Address
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="orderBy">Order By</Label>
                <Input
                  id="orderBy"
                  {...register("orderBy", { required: "Order by is required" })}
                />
                {errors.orderBy && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.orderBy.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  {...register("phone", { required: "Phone is required" })}
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  {...register("country", { required: "Country is required" })}
                />
                {errors.country && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="street">Street Address</Label>
                <Input
                  id="street"
                  {...register("street", { required: "Street is required" })}
                />
                {errors.street && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.street.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="city">Town/City</Label>
                <Input
                  id="city"
                  {...register("city", { required: "City is required" })}
                />
                {errors.city && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="zip">Postcode/Zip</Label>
                <Input
                  id="zip"
                  {...register("zip", { required: "Zip is required" })}
                />
                {errors.zip && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.zip.message}
                  </p>
                )}
              </div>
            </div>

   
            <div className="rounded-2xl my-6 bg-white shadow-xl ring-1 ring-black/5 p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Got a tax exemption? Upload it here to skip taxes on your orders!
              </h3>
              <div className="mb-3">
                <Controller
                  name="taxExemptEnabled"
                  control={control}
                  render={({ field }) => (
                    <Toggle checked={field.value} onChange={field.onChange} />
                  )}
                />
              </div>
              <div
                aria-hidden={!enabled}
                className={`transition-all duration-300 ease-out ${
                  enabled ? "opacity-100 max-h-[520px]" : "opacity-0 max-h-0"
                } overflow-hidden`}
              >
                <div className="rounded-xl border border-dashed border-neutral-300 p-6 bg-gradient-to-b from-neutral-50 to-white">
                  <Controller
                    name="taxFiles"
                    control={control}
                    rules={{
                      validate: (v) =>
                        !enabled ||
                        (v && v.length > 0) ||
                        "Please upload at least one file",
                    }}
                    render={({ field }) => (
                      <FileDrop
                        onFiles={(fs) => {
                          const merged = [...(field.value || []), ...fs];
                          field.onChange(merged);
                        }}
                        files={files}
                      />
                    )}
                  />
                  {errors.taxFiles && (
                    <p className="text-xs text-red-600 mt-2">
                      {errors.taxFiles.message}
                    </p>
                  )}
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="rounded-md bg-emerald-500 px-4 py-2 text-white text-sm hover:bg-emerald-600 disabled:opacity-50"
                    disabled={!enabled || files.length === 0}
                  >
                    Submit for Verification
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 my-6">
              <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
                <div className="flex items-start justify-between px-6 pt-6">
                  <h4 className="text-2xl font-semibold tracking-tight">
                    Tax Exemption update
                  </h4>
                  <button className="text-neutral-400 hover:text-neutral-600">
                    ✕
                  </button>
                </div>
                <div className="mt-4 h-px w-full bg-neutral-200" />
                <div className="px-6 py-5 space-y-3">
                  {docs.map((d, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-12 items-center gap-4 rounded-xl border border-neutral-200/80 p-4"
                    >
                      <div className="col-span-12 md:col-span-6">
                        <p className="text-xs uppercase text-neutral-500 mb-1">
                          Tax Exemption Document
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-neutral-800">
                          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                          {d.name}
                        </div>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <p className="text-xs uppercase text-neutral-500 mb-1">
                          Expiration Date
                        </p>
                        <p className="text-sm font-medium text-neutral-800">
                          {d.expirationDate}
                        </p>
                      </div>
                      <div className="col-span-6 md:col-span-3">
                        <p className="text-xs uppercase text-neutral-500 mb-1">
                          Update Date
                        </p>
                        <p className="text-sm font-medium text-neutral-800">
                          {d.updateDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <button
                      type="button"
                      onClick={openPicker}
                      className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-white text-sm hover:bg-emerald-600"
                    >
                      Upload new Doc
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-emerald-500 px-5 py-2.5 text-white text-sm hover:bg-emerald-600 disabled:opacity-60"
          >
            {isSubmitting ? "Saving…" : "Save Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}
