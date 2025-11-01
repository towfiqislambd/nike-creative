"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FiUploadCloud } from "react-icons/fi";

const RequestQuoteModal = ({ onClose }) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState(null);
  const inputRef = useRef(null);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    onClose?.();
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setValue("attachment", file);
      setFileName(file.name);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("attachment", file);
      setFileName(file.name);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 md:p-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Request New Quote
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Product or Service Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Detailed description..."
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div
          onDrop={handleFileDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          className={`border border-dashed rounded-lg py-10 grid place-items-center transition 
          ${isDragging ? "border-teal-500 bg-teal-50" : "border-gray-300 bg-gray-50/50"}`}
        >
          <input
            type="file"
            ref={inputRef}
            {...register("attachment")}
            onChange={handleFileChange}
            className="hidden"
          />

          {!fileName ? (
            <label
              htmlFor="attachment"
              className="flex flex-col items-center text-gray-500 cursor-pointer"
              onClick={() => inputRef.current?.click()}
            >
              <FiUploadCloud size={36} className="text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">
                or drag and drop
              </span>
            </label>
          ) : (
            <p className="text-sm text-gray-700">{fileName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-2">
            How would you like to receive the design?
          </label>
          <select
            {...register("delivery")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option>Pickup at our warehouse</option>
            <option>Email delivery</option>
            <option>Courier shipping</option>
          </select>
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
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestQuoteModal;
