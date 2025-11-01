"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

const QuoteReadyModal = ({ onClose }) => {
  const { register, handleSubmit } = useForm();
  const [attachment] = useState("/images/sample-door.jpg");

  const onSubmit = (data) => {
    console.log("Form data:", data);
    onClose?.();
  };

  return (
    <div className="bg-white rounded-xl p-4 w-full ">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        Your Quote is Ready
      </h2>
      <p className="text-sm text-gray-600 mb-5">
        Quote <strong>#Q-1005</strong> from <strong>Innovate Inc.</strong>
      </p>

      <hr className="border-gray-200 mb-5" />

      <div className="mb-5">
        <h3 className="font-medium text-gray-800 mb-1">Description</h3>
        <p className="text-sm text-gray-600">
          Design and installation of a custom server rack for our main data
          center. Includes cabling and initial setup.
        </p>
      </div>

      <div className="mb-5">
        <h3 className="font-medium text-gray-800 mb-2">Attachment</h3>
        <div className="rounded-lg overflow-hidden border border-gray-200 w-full">
          <Image
            src={attachment}
            alt="Attachment"
            width={400}
            height={200}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>

      <div className="mb-5">
        <h3 className="font-medium text-gray-800 mb-1">
          How would you like to receive the design?
        </h3>
        <p className="text-sm text-gray-600">Pickup at our warehouse</p>
      </div>

      <div className="mb-4">
        <h3 className="font-medium text-gray-800 mb-1">Total Price</h3>
        <p className="text-gray-900 font-semibold">$1,850.00</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm text-gray-700 mb-1">PO</label>
          <input
            {...register("po")}
            placeholder="PO-46545d"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition"
          >
            Accept and Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteReadyModal;
