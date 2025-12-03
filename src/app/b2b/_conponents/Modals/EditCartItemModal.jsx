"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../../../Components/Common/Modal";

export default function EditCartItemModal({ open, item, onClose, onSave }) {
  const { register, handleSubmit, setValue, watch, reset } = useForm({
    values: item
      ? {
          id: item.id,
          name: item.name || "",
          po: item.po || "",
          manufacturer: item.manufacturer || "",
          activeSide: item.activeSide || "",
          measureType1: item.measureType1 || "",
          width: item.width || "012",
          height: item.height || "012",
          sideLites: item.sideLites || "",
          measureType2: item.measureType2 || "",
          width2: item.width2 || "012",
          height2: item.height2 || "012",
          highBottom: !!item.highBottom,
          insulatedGlass: !!item.insulatedGlass,
          adaThreshold: !!item.adaThreshold,
          delivery: item.delivery || "",
          notes: item.notes || "",
          color: item.color || "Bronze",
          colorCode: item.colorCode || "#343434",
          couponCode: "",
        }
      : undefined,
  });

  useEffect(() => {
    if (item) {
      reset({
        id: item.id,
        name: item.name || "",
        po: item.po || "",
        manufacturer: item.manufacturer || "",
        activeSide: item.activeSide || "",
        measureType1: item.measureType1 || "",
        width: item.width || "012",
        height: item.height || "012",
        sideLites: item.sideLites || "",
        measureType2: item.measureType2 || "",
        width2: item.width2 || "012",
        height2: item.height2 || "012",
        highBottom: !!item.highBottom,
        insulatedGlass: !!item.insulatedGlass,
        adaThreshold: !!item.adaThreshold,
        delivery: item.delivery || "",
        notes: item.notes || "",
        color: item.color || "Bronze",
        colorCode: item.colorCode || "#343434",
        couponCode: "",
      });
    }
  }, [item, reset]);

  if (!open || !item) return null;

  const color = watch("color");

  const ColorSwatch = ({ label, value, bg }) => {
    const active = value === color;
    return (
      <button
        type="button"
        title={label}
        onClick={() => {
          setValue("color", value, { shouldDirty: true });
          setValue("colorCode", bg, { shouldDirty: true });
        }}
        className={`size-6 rounded-full border shadow-sm cursor-pointer transition ${
          active ? "ring-2 ring-[#21BBA2]" : "hover:ring-2 hover:ring-gray-300"
        }`}
        style={{ backgroundColor: bg }}
      />
    );
  };

  const onSubmit = (data) => {
    console.log("EDIT MODAL SUBMIT:", data);
    if (onSave) onSave({ ...item, ...data });
  };

  return (
    <Modal open={open} onClose={onClose} className="max-w-[800px] ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-3 pb-6 pt-4 max-h-[78vh] overflow-y-auto no-scrollbar"
      >
 
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co.com/Mx95n97C/Rectangle-161124243.png"
              alt="thumb"
              className="size-[180px] rounded-4xl object-cover max-md:h-40 max-md:w-40"
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:items-end gap-4 mt-8">
          <div className="w-full xl:w-auto flex-1">
            <label className="labelCls mb-0.5">Product Name</label>
            <input className="inputCls" {...register("name")} />
          </div>
          <button
            type="button"
            className="rounded-lg bg-[#21BBA2] text-[15px] text-white px-5 py-1.5 hover:bg-[#1aa58e]"
          >
            Change the Product
          </button>
        </div>

        <div className="mt-2 flex items-center gap-5">
          <p className="text-xl font-medium text-gray-900">Color:</p>
          <div className="mt-3 flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <ColorSwatch label="Bronze" value="Bronze" bg="#3f3f3f" />
              <span className="text-[13px] text-gray-600">Bronze</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ColorSwatch label="White" value="White" bg="#F3F4F6" />
              <span className="text-[13px] text-gray-600">White</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ColorSwatch label="Black" value="Black" bg="#111827" />
              <span className="text-[13px] text-gray-600">Black</span>
            </div>
          </div>
        </div>


        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="labelCls mb-0.5">Po</label>
            <input
              className="inputCls"
              placeholder="Po Info"
              {...register("po")}
            />
          </div>
          <div>
            <label className="labelCls mb-0.5">Manufacturer</label>
            <select className="inputCls" {...register("manufacturer")}>
              <option value="">Choose an option</option>
              <option value="KUTDE">KUTDE</option>
              <option value="ACME">ACME</option>
            </select>
          </div>
        </div>

 
        <div className="mt-6 w-full xl:w-[50%]">
          <label className="labelCls mb-0.5">
            Select Active side of the door
          </label>
          <select className="inputCls" {...register("activeSide")}>
            <option value="">Choose an option</option>
            <option value="Left">Left</option>
            <option value="Right">Right</option>
          </select>
        </div>

 
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="labelCls mb-0.5">Select Type of Measurement</label>
            <select className="inputCls" {...register("measureType1")}>
              <option value="">Choose an option</option>
              <option value="DLO">DLO</option>
              <option value="Frame">Frame</option>
            </select>
          </div>
          <div className="flex flex-col w-full xl:w-[60%] gap-y-5">
            <div className="flex justify-center items-center gap-4">
              <label className="labelCls mb-0">Width</label>
              <input className="inputCls ml-2" {...register("width")} />
            </div>
            <div className="flex justify-center items-center gap-4">
              <label className="labelCls mb-0">Height</label>
              <input className="inputCls" {...register("height")} />
            </div>
          </div>
        </div>


        <div className="mt-6 xl:w-[50%] w-full mb-5">
          <div>
            <label className="labelCls mb-0.5">Add Side lites</label>
            <select className="inputCls" {...register("sideLites")}>
              <option value="">Choose an option</option>
              <option value="None">None</option>
              <option value="Left">Left</option>
              <option value="Right">Right</option>
              <option value="Both">Both</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <div>
            <label className="labelCls mb-0.5">Select Type of Measurement</label>
            <select className="inputCls" {...register("measureType2")}>
              <option value="">Choose an option</option>
              <option value="DLO">DLO</option>
              <option value="Frame">Frame</option>
            </select>
          </div>
          <div className="flex flex-col w-full xl:w-[60%] gap-y-5">
            <div className="flex justify-center items-center gap-4">
              <label className="labelCls mb-0">Width</label>
              <input className="inputCls ml-2" {...register("width2")} />
            </div>
            <div className="flex justify-center items-center gap-4">
              <label className="labelCls mb-0">Height</label>
              <input className="inputCls" {...register("height2")} />
            </div>
          </div>
        </div>

        <div className="my-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <label className="inline-flex text-sm items-center gap-2">
            <input
              type="checkbox"
              className="size-5"
              {...register("highBottom")}
            />
            <span>High Bottom</span>
          </label>
          <label className="inline-flex text-sm items-center gap-2">
            <input
              type="checkbox"
              className="size-5"
              {...register("insulatedGlass")}
            />
            <span>Insulated Glass</span>
          </label>
          <label className="inline-flex text-sm items-center gap-2">
            <input
              type="checkbox"
              className="size-5"
              {...register("adaThreshold")}
            />
            <span>ADA Threshold</span>
          </label>
        </div>

        <div className="mt-6">
          <label className="labelCls mb-1">
            How would you like to receive the design.
          </label>
          <select className="inputCls" {...register("delivery")}>
            <option value="">Choose an option</option>
            <option value="Email">Email</option>
            <option value="Download">Download</option>
          </select>
        </div>

        <div className="mt-6">
          <label className="labelCls mb-0.5">Order Notes</label>
          <textarea
            rows={3}
            className={`inputCls resize-y`}
            placeholder="Write note..."
            {...register("notes")}
          />
        </div>


        <div className="my-5 xl:w-[50%] w-full border-2 border-dashed rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-3xl font-semibold">
              4% OFF
            </p>
            <p className="text-gray-600 text-[18px] sm:text-xl">
              Ex: 1/02/2026
            </p>
          </div>

          <div className="w-full md:w-auto text-center md:text-left">
            <p className="text-2xl mb-2">Coupon</p>
            <button
              type="button"
              onClick={() => setValue("couponCode", "SAVE4")}
              className="py-2 px-4 text-sm rounded-lg bg-[#E91E63] text-white hover:opacity-90 w-full md:w-auto mt-2 md:mt-0"
            >
              Add Coupon
            </button>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row w-full xl:w-[80%] gap-3">
          <input
            className="inputCls w-full sm:w-[60%]"
            placeholder="Code"
            {...register("couponCode")}
          />
          <div className="w-full sm:w-[40%]">
            <button
              type="button"
              className="rounded-[8px] bg-[#E91E63] text-white hover:opacity-90 w-full py-2"
              onClick={() => alert(`Applied: ${watch("couponCode") || "N/A"}`)}
            >
              Apply Coupon
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-6 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-2 px-6 rounded-lg bg-[#21BBA2] text-white hover:bg-[#1aa58e]"
          >
            Save the Change
          </button>
        </div>
      </form>
    </Modal>
  );
}
