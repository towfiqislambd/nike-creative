"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiImage } from "react-icons/fi";

const QuoteModal = ({ onClose }) => {
  const { register, handleSubmit, watch } = useForm();
  const [preview, setPreview] = useState(null);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    if (data.attachment?.length) {
      console.log("Attached file:", data.attachment[0]);
    }
    onClose?.();
  };

  return (
    <div className="bg-white rounded-xl p-6 md:p-8">

      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Your Quote is Ready
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Quote <strong>#Q-1005</strong> from <strong>Innovate Inc.</strong>
          </p>
        </div>
        <span className="text-xl font-semibold text-gray-900">$1,850.00</span>
      </div>


      <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-1">Description</h3>
        <p className="text-sm text-gray-600">
          Design and installation of a custom server rack for our main data
          center. Includes cabling and initial setup.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-2">Attachment</h3>

        <input
          type="file"
          id="attachment"
          accept="image/*,application/pdf"
          {...register("attachment")}
          className="hidden"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setPreview(URL.createObjectURL(file));
            } else {
              setPreview(null);
            }
          }}
        />


        <label
          htmlFor="attachment"
          className="cursor-pointer border border-dashed border-gray-300 rounded-lg py-10 grid place-items-center hover:border-teal-500 transition"
        >
          {preview ? (
            <div className="flex flex-col items-center gap-3">
              <img
                src={preview}
                alt="Attachment preview"
                className="w-24 h-24 object-cover rounded-md shadow-sm"
              />
              <span className="text-sm text-gray-600">
                {watch("attachment")?.[0]?.name}
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <FiImage size={48} />
              <span className="text-sm text-gray-500">
                Click to upload file
              </span>
            </div>
          )}
        </label>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <h3 className="font-medium text-gray-800 mb-1">
            How would you like to receive the design?
          </h3>
          <p className="text-sm text-gray-600 mb-3">Pickup at our warehouse</p>

          <label className="block text-sm text-gray-700 mb-1">PO</label>
          <input
            {...register("po")}
            placeholder="PO-46545d"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="flex justify-end gap-3 pt-2">
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

export default QuoteModal;
