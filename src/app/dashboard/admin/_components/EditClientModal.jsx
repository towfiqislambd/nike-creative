"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { Plus } from "../../../../Components/Svg/SvgContainer";

export default function EditClientModal({ isOpen, onClose, onSave, client }) {
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
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white px-8 py-5 rounded-[16px] w-full max-w-[730px] relative shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
        <h2 className="card_title">Edit Clients Information</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="text-base lg:text-xl">Current Stock</label>
            <input
              {...register("company")}
              placeholder="Company Name"
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="text-base lg:text-xl">Current Stock</label>
            <input
              {...register("username")}
              placeholder="User Name"
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="text-base lg:text-xl">Current Stock</label>
            <input
              {...register("address")}
              placeholder="Full Address"
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="text-base lg:text-xl">Current Stock</label>
            <input
              {...register("phone")}
              placeholder="Phone Number"
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
            />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1 gap-2.5">
            <label className="text-base lg:text-xl">Current Stock</label>
            <input
              {...register("email")}
              placeholder="Email Address"
              className="border border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
            />
          </div>

          {/* manufacturer tabs */}
          <div className="flex w-full gap-5 bg-[#D7D6D7] rounded-[40px] my-4  shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
            <button
              type="button"
              onClick={() => setManufacturerTab("all")}
              className={`flex-1 py-3 md:py-4 lg:py-6 rounded-[40px] text-xs transition ${
                manufacturerTab === "all"
                  ? "bg-[#21BBA2] text-white border border-[#EAEAEA] shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                  : "hover:bg-gray-200"
              }`}
            >
              All Manufacturer
            </button>
            <button
              type="button"
              onClick={() => setManufacturerTab("selected")}
              className={`flex-1 py-3 md:py-4 lg:py-6 rounded-[40px] text-xs transition ${
                manufacturerTab === "selected"
                  ? "bg-[#21BBA2] text-white border border-[#EAEAEA] shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]"
                  : "hover:bg-gray-200"
              }`}
            >
              Selected Manufacturer
            </button>
          </div>

          {manufacturerTab === "selected" && (
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xl">Manufacturer</label>
                <button
                  type="button"
                  onClick={() => setShowAddManufacturerModal(true)}
                  className="size-8 bg-light-green rounded-full flex items-center justify-center cursor-pointer"
                >
                  <Plus className="text-white size-5" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                {manufacturers.map((manuf, i) => (
                  <span
                    key={i}
                    className="bg-[#F5F5F5] inline-flex items-center px-2.5 py-1.5 rounded-lg gap-1.5 text-xs text-primary-text shadow-[0px_0.9px_3.6px_0.9px_#0000001F,_0px_2.7px_2.92px_-1.35px_#00000040,_0px_0px_0.22px_0px_#0000000D,_0px_0px_0.22px_0.22px_#00000012,_0px_5px_8px_1px_#00000033]"
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
              className="bg-white border border-[#21BBA2] text-[#21BBA2] lg:text-lg px-5 py-4 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#21BBA2] border border-[#21BBA2] text-white lg:text-lg px-5 py-4 rounded-lg"
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
}

// add manufacturer modal
const AddManufacturerModal = ({ onAdd, onClose }) => {
  const [value, setValue] = useState("");

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white px-8 py-5 rounded-[16px] w-full max-w-[384px] relative shadow-[0_5px_8px_1px_rgba(0,0,0,0.20),_0_0_0.225px_0.225px_rgba(0,0,0,0.07),_0_0_0.225px_0_rgba(0,0,0,0.05),_0_2.698px_2.923px_-1.349px_rgba(0,0,0,0.25),_0_0.899px_3.598px_0.899px_rgba(0,0,0,0.12)]">
        <h2 className="card_title">Add Manufacturer</h2>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Manufacturer Name"
          className="border w-full mb-3 border-[#CFCFCF] rounded-lg px-2 py-2 md:py-3 xl:py-4 text-base xl:text-lg 2xl:text-xl"
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
