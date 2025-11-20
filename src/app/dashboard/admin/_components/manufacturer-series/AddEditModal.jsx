"use client";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import Modal from "../../../../../Components/Common/Modal";

const AddEditModal = ({ isOpen, onClose, onSave, defaultValue, type }) => {
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: { name: defaultValue || "" },
  });

  useEffect(() => {
    if (defaultValue) {
      setValue("name", defaultValue);
    } else {
      reset({ name: "" });
    }
  }, [defaultValue, setValue, reset]);

  const handleSave = (data) => {
    onSave(data.name);
    reset();
    onClose();
  };

  const modalTitle =
    type === "manufacturer"
      ? defaultValue
        ? "Edit Manufacturer"
        : "Add Manufacturer"
      : defaultValue
      ? "Edit Series"
      : "Add Series";

  return (
    <Modal open={isOpen} onClose={onClose} className={'max-w-[384px]'}>
        <div className="bg-white w-full max-w-[400px] relative">
        <h2 className="card_title">{modalTitle}</h2>
        <form
          onSubmit={handleSubmit(handleSave)}
          className="flex flex-col gap-1"
        >
            <label>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
          <input
            {...register("name", { required: true })}
            placeholder={
              type === "manufacturer" ? "Manufacturer Name" : "Series Name"
            }
            className="card_input"
          />
          <div className="flex justify-end gap-3 mt-2">
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
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddEditModal;
