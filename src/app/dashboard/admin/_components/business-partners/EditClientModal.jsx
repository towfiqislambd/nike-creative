"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { Plus } from "../../../../../Components/Svg/SvgContainer";

const EditClientModal = ({ isOpen, onClose, onSave, client }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      company: "",
      username: "",
      address: "",
      phone: "",
      email: "",
    },
  });

  const [manufacturerTab, setManufacturerTab] = useState("selected");
  const [manufacturers, setManufacturers] = useState([
    "Windows",
    "Garage Doors",
  ]);
  const [showAddManufacturerModal, setShowAddManufacturerModal] =
    useState(false);

  useEffect(() => {
    if (client) {
      reset({
        company: client.company || "",
        username: client.username || "",
        address: client.address || "",
        phone: client.phoneNumber || "",
        email: client.email || "",
      });
    }
  }, [client, reset]);

  const handleAddManufacturer = (newItem) => {
    if (newItem && !manufacturers.includes(newItem)) {
      setManufacturers((prev) => [...prev, newItem]);
    }
    setShowAddManufacturerModal(false);
  };

  const handleRemoveManufacturer = (name) => {
    setManufacturers((prev) => prev.filter((m) => m !== name));
  };

  const onSubmit = (data) => {
    const updatedClient = {
      ...client,
      company: data.company,
      username: data.username,
      address: data.address,
      phoneNumber: data.phone,
      email: data.email,
      manufacturers: manufacturerTab === "selected" ? manufacturers : [],
    };
    onSave(updatedClient);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999] px-2"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white px-4 py-3 rounded-lg w-full max-w-[500px] relative custom-shadow-xl"
      >
        <h2 className="card_title mb-4">Edit Clients Information</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col col-span-2 md:col-span-1 gap-1.5">
              <label className="text-md xl:text-base">Company Name</label>
              <input
                {...register("company")}
                placeholder="Company Name"
                className="card_input !text-sm"
              />
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1 gap-1.5">
              <label className="text-md xl:text-base">User Name</label>
              <input
                {...register("username")}
                placeholder="User Name"
                className="card_input !text-sm"
              />
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1 gap-1.5">
              <label className="text-md xl:text-base">Full Address</label>
              <input
                {...register("address")}
                placeholder="Full Address"
                className="card_input !text-sm"
              />
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1 gap-1.5">
              <label className="text-md xl:text-base">Phone number</label>
              <input
                {...register("phone")}
                placeholder="Phone Number"
                className="card_input !text-sm"
              />
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1 gap-1.5">
              <label className="text-md xl:text-base">Email Address</label>
              <input
                {...register("email")}
                placeholder="Email Address"
                className="card_input !text-sm"
              />
            </div>
          </div>
          {/* manufacturer tabs */}

          <h2 className="mt-5 text-center">
            Manufacturer Visibility For (Company name)
          </h2>
          <div className="flex w-full gap-2 bg-[#D7D6D7] rounded-[40px] my-2 custom-shadow-xl">
            <button
              type="button"
              onClick={() => setManufacturerTab("all")}
              className={`flex-1 py-3 rounded-[40px] text-sm transition ${
                manufacturerTab === "all"
                  ? "bg-[#21BBA2] text-white border border-[#EAEAEA] custom-shadow-xl"
                  : "hover:bg-gray-200"
              }`}
            >
              All Manufacturer
            </button>
            <button
              type="button"
              onClick={() => setManufacturerTab("selected")}
              className={`flex-1 py-3 rounded-[40px] text-sm transition ${
                manufacturerTab === "selected"
                  ? "bg-[#21BBA2] text-white border border-[#EAEAEA] custom-shadow-xl"
                  : "hover:bg-gray-200"
              }`}
            >
              Selected Manufacturer
            </button>
          </div>
          {manufacturerTab === "selected" && (
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label>Manufacturer</label>
                <button
                  type="button"
                  onClick={() => setShowAddManufacturerModal(true)}
                  className="size-7 bg-light-green rounded-full flex items-center justify-center cursor-pointer"
                >
                  <Plus className="text-white size-6" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                {manufacturers.map((manuf, i) => (
                  <span
                    key={i}
                    className="bg-[#F5F5F5] inline-flex items-center px-2.5 py-1.5 rounded-lg gap-1.5 text-xs text-primary-text custom-shadow-xl"
                  >
                    {manuf}
                    <button
                      type="button"
                      onClick={() => handleRemoveManufacturer(manuf)}
                    >
                      <FiX className="size-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="flex justify-end gap-2 mt-5">
            <button
              type="button"
              onClick={onClose}
              className="card_btn_outline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="card_btn"
            >
              Save Change
            </button>
          </div>
        </form>
      </div>

      {/* add manufacturer modal */}
      {showAddManufacturerModal && (
        <AddManufacturerModal
          onAdd={handleAddManufacturer}
          onClose={() => setShowAddManufacturerModal(false)}
        />
      )}
    </div>
  );
};

export default EditClientModal;

// add manufacturer modal
const AddManufacturerModal = ({ onAdd, onClose }) => {
  const [value, setValue] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-[999] px-2">
      <div className="bg-white px-4 py-3 rounded-lg w-full max-w-[384px] relative custom-shadow-xl">
        <h2 className="card_title">Add Manufacturer</h2>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Manufacturer Name"
          className="card_input w-full mb-3 xl:mb-5"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-3 bg-gray-400 hover:bg-gray-400/90 text-white rounded-lg text-sm md:text-base"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onAdd(value);
              setValue("");
            }}
            className="px-4 py-3 bg-[#21BBA2] hover:bg-[#21BBA2]/80 text-white rounded-lg text-sm md:text-base"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
