import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Circle,
  CustomCheckBoxIcon,
  Eye,
} from "../../../../../Components/Svg/SvgContainer";
import Modal from "../../../../../Components/Common/Modal";

const AddEditFields = ({ open, onClose, fields }) => {
  const { register, handleSubmit, watch, reset } = useForm();
  const [toggles, setToggles] = useState({
    highBottom: false,
    insulatedGlass: false,
    adaThreshold: false,
  });

  const onSubmit = (data) => {
    const fullData = { ...data, ...toggles };
    console.log("Submitted Data:", fullData);
    reset();
    setToggles({
      highBottom: false,
      insulatedGlass: false,
      adaThreshold: false,
    });
  };

  const toggleSwitch = (field) => {
    setToggles((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="bg-white rounded-md sm:p-3 w-full max-w-[885px]">
        <h2 className="card_title">Add Field</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-2">
          <div>
            <label className="text-base xl:text-xl mr-2">Field</label>
            <select
              {...register("category")}
              className="border border-[#CFCFCF] rounded-lg px-2 md:px-3 py-2 md:py-3 text-sm"
              required
            >
              <option value="">Select Category</option>
              {fields.map((field, i) => (
                <option key={i} value={field.name}>
                  {field.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="text-base xl:text-xl flex items-center justify-between">
                <p>Po</p>
                <Eye />
              </label>
              <input
                {...register("po")}
                type="text"
                placeholder="Enter Po"
                className="card_input"
              />
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="text-base xl:text-xl flex items-center justify-between">
                Manufacturer
                <Eye />
              </label>
              <select {...register("manufacturer")} className="card_input">
                <option value="">Choose an option</option>
                <option>Brand A</option>
                <option>Brand B</option>
                <option>Brand C</option>
              </select>
            </div>
          </div>

          <div className="space-y-2.5 md:max-w-1/2 w-full md:pr-2.5">
            <label className="text-base xl:text-xl flex items-center justify-between">
              Select Active side of the door
              <Eye />
            </label>
            <select {...register("activeSide")} className="card_input w-full">
              <option value="">Choose an option</option>
              <option>Left</option>
              <option>Right</option>
            </select>
          </div>

          <div className="grid items-center grid-cols-2 gap-5">
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="text-base xl:text-xl flex items-center justify-between">
                Select Type of Measurement
                <Eye />
              </label>
              <select {...register("measurementType1")} className="card_input">
                <option value="">Choose an option</option>
                <option>Rough Opening</option>
                <option>Frame to Frame</option>
                <option>Custom</option>
              </select>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center col-span-2 md:col-span-1 gap-2.5">
                <label className="text-base xl:text-xl w-[55px] xl:w-[70px] shrink-0">Width</label>
                <input
                  {...register("width1")}
                  type="number"
                  placeholder="Width"
                  className="card_input sm:w-1/2"
                />
                <button className="ml-1.5">
                  <Eye />
                </button>
              </div>
              <div className="flex items-center col-span-2 md:col-span-1 gap-2.5">
                <label className="text-base xl:text-xl w-[55px] xl:w-[70px] shrink-0">Height</label>
                <input
                  {...register("height1")}
                  type="number"
                  placeholder="Height"
                  className="card_input sm:w-1/2"
                />
                <button className="ml-1.5">
                  <Eye />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 md:max-w-1/2 w-full md:pr-2.5">
            <label className="text-base xl:text-xl flex items-center justify-between">
              Add Side lites
              <Eye />
            </label>
            <select {...register("sideLites")} className="card_input w-full">
              <option value="">Choose an option</option>
              <option>Left Side</option>
              <option>Right Side</option>
              <option>Both Sides</option>
            </select>
          </div>

          <div className="grid items-center grid-cols-2 gap-5">
            <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
              <label className="text-base xl:text-xl flex items-center justify-between">
                Select Type of Measurement
                <Eye />
              </label>
              <select {...register("measurementType1")} className="card_input">
                <option value="">Choose an option</option>
                <option>Rough Opening</option>
                <option>Frame to Frame</option>
                <option>Custom</option>
              </select>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center col-span-2 md:col-span-1 gap-2.5">
                <label className="text-base xl:text-xl w-[55px] xl:w-[70px] shrink-0">Width</label>
                <input
                  {...register("width1")}
                  type="number"
                  placeholder="Width"
                  className="card_input sm:w-1/2"
                />
                <button className="ml-1.5">
                  <Eye />
                </button>
              </div>
              <div className="flex items-center col-span-2 md:col-span-1 gap-2.5">
                <label className="text-base xl:text-xl w-[55px] xl:w-[70px] shrink-0">Height</label>
                <input
                  {...register("height1")}
                  type="number"
                  placeholder="Height"
                  className="card_input sm:w-1/2"
                />
                <button className="ml-1.5">
                  <Eye />
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            {[
              { key: "highBottom", label: "High Bottom" },
              { key: "insulatedGlass", label: "Insulated Glass" },
              { key: "adaThreshold", label: "ADA Threshold" },
            ].map((opt) => (
              <div>
                <label className="text-sm sm:text-base xl:text-xl flex items-center gap-2.5 mb-2.5">
                  {opt.label}
                  <Eye />
                </label>
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => toggleSwitch(opt.key)}
                  className=""
                >
                  <div>
                    {toggles[opt.key] ? <CustomCheckBoxIcon /> : <Circle />}
                  </div>
                </button>
              </div>
            ))}
          </div>

          <div>
            <label className="text-base xl:text-xl flex items-center gap-5 mb-2.5">
              How would you like to receive the design?
              <Eye />
            </label>
            <select
              {...register("designReceive")}
              className="card_input max-w-1/2 w-full"
            >
              <option value="">Choose an option</option>
              <option>Email</option>
              <option>Download Link</option>
              <option>Printed Copy</option>
            </select>
          </div>

          <div>
            <label className="text-base xl:text-xl flex items-center justify-between mb-2.5">
              Order Notes
              <Eye />
            </label>
            <textarea
              {...register("orderNotes")}
              rows={4}
              placeholder="Write your notes here..."
              className="card_input w-full !text-base"
            ></textarea>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-white border border-[#21BBA2] text-[#21BBA2] px-8 py-4 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#21BBA2] border border-[#21BBA2] text-white px-8 py-4 rounded-lg"
            >
              Add Fields
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddEditFields;
