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
        className={`h-12 w-12 rounded-full border shadow-sm cursor-pointer transition ${
          active ? "ring-2 ring-[#21BBA2]" : "hover:ring-2 hover:ring-gray-300"
        }`}
        style={{ backgroundColor: bg }}
      />
    );
  };

  const onSubmit = (data) => onSave({ ...item, ...data });

  return (
    <Modal open={open} onClose={onClose} className="max-w-[900px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-5 md:px-8 pb-6 pt-4 max-h-[78vh] overflow-y-auto"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co.com/Mx95n97C/Rectangle-161124243.png"
              alt="thumb"
              className="h-[218px] w-[236px] rounded-xl object-cover"
            />
          </div>

        </div>
                  <div className="flex items-end gap-4 mt-8">
            <div className="">
              <label className="labelCls">Product Name</label>
              <input className="inputCls" {...register("name")} />
            </div>
            <button
              type="button"
              className="rounded-xl bg-[#21BBA2] text-white py-[11px] px-5 text-xl hover:bg-[#1aa58e]"
            >
              Change the Product
            </button>
          </div>

        <div className="mt-6">
          <p className="text-2xl font-semibold text-gray-900">Color:</p>
          <div className="mt-3 flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <ColorSwatch label="Bronze" value="Bronze" bg="#3f3f3f" />
              <span className="text-sm text-gray-600">Bronze</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ColorSwatch label="White" value="White" bg="#F3F4F6" />
              <span className="text-sm text-gray-600">White</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ColorSwatch label="Black" value="Black" bg="#111827" />
              <span className="text-sm text-gray-600">Black</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="labelCls">Po</label>
            <input
              className="inputCls"
              placeholder="Po Info"
              {...register("po")}
            />
          </div>
          <div>
            <label className="labelCls">Manufacturer</label>
            <select className="inputCls" {...register("manufacturer")}>
              <option value="">Choose an option</option>
              <option value="KUTDE">KUTDE</option>
              <option value="ACME">ACME</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="labelCls">Select Active side of the door</label>
          <select className="inputCls" {...register("activeSide")}>
            <option value="">Choose an option</option>
            <option value="Left">Left</option>
            <option value="Right">Right</option>
          </select>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="labelCls mb-5">Select Type of Measurement</label>
            <select className="inputCls" {...register("measureType1")}>
              <option value="">Choose an option</option>
              <option value="DLO">DLO</option>
              <option value="Frame">Frame</option>
            </select>
          </div>
          <div className="flex flex-col w-[60%] gap-y-5">
            <div className="flex itmes-center gap-4">
              <label className="labelCls mb-0">Width</label>
              <input className="inputCls" {...register("width")} />
            </div>
            <div className="flex itmes-center gap-4">
              <label className="labelCls mb-0">Height</label>
              <input className="inputCls" {...register("height")} />
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="labelCls">Add Side lites</label>
            <select className="inputCls" {...register("sideLites")}>
              <option value="">Choose an option</option>
              <option value="None">None</option>
              <option value="Left">Left</option>
              <option value="Right">Right</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="labelCls">Select Type of Measurement</label>
              <select className="inputCls" {...register("measureType2")}>
                <option value="">Choose an option</option>
                <option value="DLO">DLO</option>
                <option value="Frame">Frame</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="labelCls">Width</label>
                <input className="inputCls" {...register("width2")} />
              </div>
              <div>
                <label className="labelCls">Height</label>
                <input className="inputCls" {...register("height2")} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" {...register("highBottom")} />
            <span>High Bottom</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" {...register("insulatedGlass")} />
            <span>Insulated Glass</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" {...register("adaThreshold")} />
            <span>ADA Threshold</span>
          </label>
        </div>

        <div className="mt-6">
          <label className="labelCls">
            How would you like to receive the design.
          </label>
          <select className="inputCls" {...register("delivery")}>
            <option value="">Choose an option</option>
            <option value="Email">Email</option>
            <option value="Download">Download</option>
          </select>
        </div>

        <div className="mt-6">
          <label className="labelCls">Order Notes</label>
          <textarea
            rows={5}
            className={`$"inputCls" resize-y`}
            placeholder="Write note..."
            {...register("notes")}
          />
        </div>

        <div className="mt-6 border-2 border-dashed rounded-2xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-2xl font-bold">
              4% OFF <span className="font-medium">Coupon</span>
            </p>
            <p className="text-gray-600">Ex: 1/02/2026</p>
          </div>
          <button
            type="button"
            onClick={() => setValue("couponCode", "SAVE4")}
            className="h-11 px-4 rounded-xl bg-[#E91E63] text-white hover:opacity-90"
          >
            Add Coupon
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            className="inputCls"
            placeholder="Code"
            {...register("couponCode")}
          />
          <button
            type="button"
            className="h-11 rounded-xl bg-[#E91E63] text-white hover:opacity-90"
            onClick={() => alert(`Applied: ${watch("couponCode") || "N/A"}`)}
          >
            Apply Coupon
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="h-12 px-6 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="h-12 px-6 rounded-xl bg-[#21BBA2] text-white hover:bg-[#1aa58e]"
          >
            Save the Change
          </button>
        </div>
      </form>
    </Modal>
  );
}
