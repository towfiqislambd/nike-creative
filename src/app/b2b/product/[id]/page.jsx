"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { FiUploadCloud, FiX } from "react-icons/fi";
import { Heart, Plus } from "lucide-react";
import Link from "next/link";
import dangerI from '../../../../Assets/danger.svg'
// product color
const productColor = [
  {
    name: "Bronze",
    color: "#3E3E3E"
  },
  {
    name: "White",
    color: "#ffffff"
  },
  {
    name: "Black",
    color: "#000000"
  },
]

// Product Page Component

const ProductPage = ({ params }) => {
  const { register, watch, handleSubmit, setValue } = useForm();
  const [preview, setPreview] = useState(null);
  const [selectedColor, setSelectedColor] = useState("white");
  const [addPhoneNumber, setAddPhoneNumber] = useState([])

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };
  const addPhoneNumberHandler = () => {
    const phoneNumber = watch('phone-number');
    setValue('phone-number', '')

    setAddPhoneNumber((prev) => [...prev, phoneNumber]);
  };

  const removePhoneNumberHandler = ()=>{
    // remove from addPhoneNumber array
  }

  return (
    <section className="container relative min-h-screen py-10 px-4">
      <Image
        src="https://i.ibb.co.com/7t9dK57n/Group-1321314677.png"
        alt="Background"
        fill
        unoptimized
        className="object-cover object-center -z-10 absolute top-60"
      />
      <div className=" grid md:grid-cols-2 gap-10">
        {/* left side */}
        <div>
          {/* product image */}
          <div className="relative rounded-[40px] overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="https://i.ibb.co.com/k60zt8Lj/product-image-Custom-Double-Door.png"
              alt="Product door"
              width={600}
              height={500}
              className="object-cover w-full"
            />
            <Link href={''} className="absolute top-5 right-5 size-12 rounded-full flex items-center justify-center shadow-[0px_8px_8px_-4px_#13192714,_0px_4px_8px_-4px_#1319271F] bg-[linear-gradient(253.61deg,_rgba(227,242,253,0.5)_-2.44%,_rgba(249,252,255,0.4)_110.21%)]">
              <Heart size={32} />
            </Link>
          </div>

          {/* reference image card*/}

          <div className="shadow-card">
            <label className="block font-medium text-primary-text text-2xl leading-[150%] mb-4">
              You can add your reference
            </label>
            <input
              type="file"
              id="reference"
              className="hidden"
              onChange={handleFileChange}
              {...register("reference")}
            />
            <label
              htmlFor="reference"
              className="flex flex-col items-center justify-center border border-dashed bg-gradient-to-r from-[#F9FCFF] to-[#E3F2FD]/40 border-gray-300 rounded-[20px] py-10 cursor-pointer bg-gray-50 hover:border-teal-500 transition"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              ) : (
                <>
                  <div className="bg-white border border-[#EAECF0] w-10 h-10 rounded-[10px] flex items-center justify-center mb-3">
                    <FiUploadCloud className="text-[#6B7280] text-xl" />
                  </div>
                  <p className="text-lg text-sub-text">
                    Click to upload or drag and drop
                  </p>
                </>
              )}
            </label>
          </div>
        </div>
        {/* right side */}
        <div
          className=""//bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6
          onSubmit={handleSubmit(onSubmit)}
        >
          <form className="space-y-6">
            <div>
              <h2 className="text-2xl text-sub-text">
                Custom Double Door Design – White
              </h2>
              <h3 className="text-4xl text-primary-text mt-4">
                Product name: <span className="font-medium">KDWH010</span>
              </h3>
              <p className="text-4xl text-primary-text mt-4">
                Price: <span className="font-medium">$350</span>
              </p>
            </div>
            <div>
              <label className="text-primary-text text-4xl mb-2">
                Color:
              </label>
              <div className="inline-block ml-4">
                <div className="flex gap-4 items-center">
                  {productColor.map(({ name, color }) => (
                    <div key={color}>
                      <button
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`size-12 rounded-full border shadow-[0px_4px_4px_-2px_#13192714,_0px_2px_4px_-2px_#1319271F]  cursor-pointer ${selectedColor === color
                          ? "ring ring-"
                          : "border-gray-300"
                          }`}
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-center text-sm text-primary-text">{name}</p>
                    </div>

                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 shadow-card">
              <div>
                <label className="shadow-card-label">
                  Po
                </label>
                <input
                  {...register("po")}
                  placeholder="PO Number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="shadow-card-label">
                  Manufacturer
                </label>
                <select
                  {...register("manufacturer")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                >
                  <option>Choose an option</option>
                  <option>ABC Doors</option>
                  <option>ModernCraft</option>
                </select>
              </div>
              <div>
                <label className="shadow-card-label">
                  Select Active side of the door
                </label>
                <select
                  {...register("activeSide")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                >
                  <option>Choose an option</option>
                  <option>Left</option>
                  <option>Right</option>
                </select>
              </div>
            </div>


            <div className="grid grid-cols-2 gap-4 shadow-card">
              <div>
                <label className="shadow-card-label">
                  Measurement Type
                </label>
                <select
                  {...register("measurementType")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                >
                  <option>Choose an option</option>
                  <option>Outer frame</option>
                  <option>Door slab only</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <label className="shadow-card-label">
                    Width
                  </label>
                  <input
                    {...register("width")}
                    placeholder="Width"
                    className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <label className="shadow-card-label">
                    Height
                  </label>
                  <input
                    {...register("height")}
                    placeholder="Height"
                    className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>


            <div className="shadow-card">
              <label className="shadow-card-label">
                How would you like to receive the design?
              </label>
              <select
                {...register("delivery")}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
              >
                <option>Choose an option</option>
                <option>Installation at job site</option>
                <option>Pickup at warehouse</option>
                <option>Courier Delivery</option>
                <option>Email</option>
              </select>
              {watch('delivery') !== "Installation at job site" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="shadow-card-label">
                      Full Name
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Charli Curs"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="shadow-card-label">
                      Jobsite options
                    </label>
                    <select
                      {...register("asdf")}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                    >
                      <option>Choose an option</option>
                      <option>Palm Beach (+15000)</option>
                    </select>
                  </div>
                  <div className="shadow-card">
                    <div className="flex items-center justify-between">

                      <label className="shadow-card-label">
                        Phone Number
                      </label>
                      <div onClick={addPhoneNumberHandler} className="size-8 bg-light-green rounded-full flex items-center justify-center cursor-pointer"><Plus className="text-white size-5" /></div>
                    </div>
                    <input
                    type="text"
                      {...register("phone-number")}
                      placeholder="+1 236 123 1233"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                    />
                    <div className="my-4 flex gap-2 flex-wrap">
                      {addPhoneNumber.map((number) => (
                        <div onClick={removePhoneNumberHandler} className="bg-[#F5F5F5] inline-flex items-center px-2.5 py-1.5 rounded-lg gap-1.5 text-xs text-primary-text shadow-[0px_0.9px_3.6px_0.9px_#0000001F,_0px_2.7px_2.92px_-1.35px_#00000040,_0px_0px_0.22px_0px_#0000000D,_0px_0px_0.22px_0.22px_#00000012,_0px_5px_8px_1px_#00000033]">
                          <div>{number}</div>
                          <FiX className="size-4" />
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 my-3">
                      <input
                        type="radio"
                        value="receive-order-update"
                        {...register('receive-order-update')}
                      />
                      <div className="text-sm leading-[20px] text-sub-text">Click here to receive order updates on the numbers you add: a day-before reminder, alerts when we’re on the way, and notifications if there are delays.</div>
                    </div>
                  </div>
                </div>
              )
              }
            </div>

            <div className="shadow-card">
              <label className="shadow-card-label">
                Order Notes
              </label>
              <textarea
                {...register("notes")}
                placeholder="Add any special instructions..."
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="shadow-card">
              <h4 className="shadow-card-label">Coupon</h4>
              <div className="flex gap-2">
                <input
                  {...register("coupon")}
                  placeholder="Enter code"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                />
                <button
                  type="button"
                  className="bg-teal-500 text-white px-4 rounded-md hover:bg-teal-600 transition"
                >
                  Apply
                </button>
              </div>
              <div className="text-sm mt-3 space-y-1">
                <p>
                  Product Total: <span className="font-medium">$350.00</span>
                </p>
                <p>
                  Options Total: <span className="font-medium">$155.00</span>
                </p>
                <p>
                  Coupon: <span className="text-teal-600">- $20.00</span>
                </p>
                <p className="font-semibold text-gray-900">
                  Grand Total: $450.00
                </p>
              </div>
            </div>
            <div className="shadow-card">
              <h2 className="text-4xl font-medium text-primary-text">Priority</h2>
              <p className="text-2xl text-primary-text mt-4 ml-6">Urgent Priority (Rush Order)</p>
              <div className="mt-4">
                <div className="text-sm text-primary-text font-medium inline-flex p-1 rounded items-center gap-2 bg-[#FF4C4C1A]">
                  <Image src={dangerI} width={24} height={24} alt="" />
                  <p>
                    You still have 2 free Rush Orders available
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h4 className="shadow-card-label">
                Product Availability
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                Let us know if the door/window is on-site and ready for us.
              </p>
              <div className="flex gap-3 mb-3">
                <button
                  type="button"
                  className="px-4 py-2 rounded-md border text-sm text-white bg-teal-500"
                >
                  Available
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-md border text-sm text-gray-700 border-gray-300"
                >
                  Not Available Yet
                </button>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">
                  Estimated Date
                </p>
                <input
                  type="date"
                  {...register("estimatedDate")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 pt-4">
              <button
                type="button"
                className="flex-1 border border-gray-300 rounded-md py-2 font-medium hover:bg-gray-100 transition"
              >
                Add To Cart
              </button>
              <button
                type="submit"
                className="flex-1 bg-teal-500 text-white rounded-md py-2 font-medium hover:bg-teal-600 transition"
              >
                Order Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
