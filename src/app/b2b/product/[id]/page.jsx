"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { FiUploadCloud } from "react-icons/fi";

// Product Page Component

const ProductPage = ({ params }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [preview, setPreview] = useState(null);
  const [selectedColor, setSelectedColor] = useState("white");

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <section  className="container  min-h-screen py-10 px-4">
      <div className=" grid md:grid-cols-2 gap-10">
        <div>
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <Image
              src="/images/door-sample.jpg"
              alt="Product door"
              width={600}
              height={500}
              className="object-cover w-full"
            />
          </div>

          <div className="mt-5">
            <label className="block font-medium text-gray-800 mb-2">
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
              className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg py-10 cursor-pointer bg-gray-50 hover:border-teal-500 transition"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              ) : (
                <>
                  <FiUploadCloud className="text-gray-400 text-3xl mb-2" />
                  <p className="text-sm text-gray-600">
                    Click to upload or drag and drop
                  </p>
                </>
              )}
            </label>
          </div>
        </div>
        <div
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <form className="space-y-6">
            <div>
              <h2 className="text-sm text-gray-500">
                Custom Double Door Design – White
              </h2>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">
                Product name: <span className="text-black">KDWH010</span>
              </h3>
              <p className="text-sm mt-1">
                Price: <span className="font-semibold text-teal-600">$350</span>
              </p>
            </div>
            <div>
              <label className="block font-medium text-gray-800 mb-2">
                Color:
              </label>
              <div className="flex gap-3 items-center">
                {["#b08d57", "#ffffff", "#000000"].map((color) => (
                  <button
                    type="button"
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full border ${
                      selectedColor === color
                        ? "ring-2 ring-teal-500"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PO
                </label>
                <input
                  {...register("po")}
                  placeholder="PO Number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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

  
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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
              <div className="flex gap-2">
                <input
                  {...register("width")}
                  placeholder="Width"
                  className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                />
                <input
                  {...register("height")}
                  placeholder="Height"
                  className="w-1/2 border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How would you like to receive the design?
              </label>
              <select
                {...register("delivery")}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-teal-500"
              >
                <option>Choose an option</option>
                <option>Pickup at warehouse</option>
                <option>Courier Delivery</option>
                <option>Email</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Order Notes
              </label>
              <textarea
                {...register("notes")}
                placeholder="Add any special instructions..."
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-2">
              <h4 className="font-medium text-gray-800">Coupon</h4>
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
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">
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
